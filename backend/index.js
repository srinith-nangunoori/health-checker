// backend/index.js

require('dotenv').config();
const express = require('express');
const cors = require('cors');
const { GoogleGenerativeAI } = require('@google/generative-ai');

// Initialize the Google client with our API key
const genAI = new GoogleGenerativeAI(process.env.GOOGLE_API_KEY);

// NEW: Define our model names in variables for easy access
const PRO_MODEL_NAME = "gemini-2.5-pro";
const FLASH_MODEL_NAME = "gemini-2.5-flash";

const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());

// NEW: Create a reusable function to call the AI model
const callGenerativeModel = async (modelName, prompt) => {
  const model = genAI.getGenerativeModel({ model: modelName });
  const result = await model.generateContent(prompt);
  const response = await result.response;
  return response.text();
};

app.post('/api/analyze', async (req, res) => {
  try {
    const { symptoms } = req.body;

    if (!symptoms || symptoms.length === 0) {
      return res.status(400).json({ error: 'No symptoms provided.' });
    }

    const prompt = `
    Act as a direct and concise health information tool. Your entire response MUST be in Markdown and use ONLY headings and bullet points. Do NOT use any conversational paragraphs or introductory sentences. The disclaimer is the only exception.

    Follow this template exactly:

    ### Possible Causes
    - **[Potential Cause 1]:** [Short, direct explanation using minimal words.]
    - **[Potential Cause 2]:** [Short, direct explanation using minimal words.]
    - **[Potential Cause 3]:** [Short, direct explanation using minimal words.]

    ### Safe Comfort Measures
    *Important: These are for temporary relief and are not a substitute for medical treatment. Follow these suggestions only if they feel appropriate for your situation.*
    - **[Suggestion 1]:** [Provide a safe, universally applicable comfort measure. For a headache, this could be "Apply a cool, damp cloth to your forehead for 15 minutes." For a stomach ache, "Try sipping clear fluids like water or broth." Be very specific and safe.]
    - **[Suggestion 2]:** [Provide another safe comfort measure with instructions.]

    ### Recommended Next Steps
    - **General Monitoring:** [List 2 safe, one-line actions like "Keep a log of your symptoms", "Ensure you are getting adequate rest", "Stay hydrated".]
    - **Professional Consultation:** When to see a doctor. List specific "red flag" symptoms.
      - See a doctor immediately if: [Critical red flag symptom 1].
      - See a doctor if: [Serious red flag symptom 2].
      - See a doctor if: [Worsening red flag symptom 3].

    **Disclaimer:** This is an AI-generated analysis for informational purposes and is not a substitute for professional medical advice. Consult a qualified healthcare professional for any health concerns.

    **Symptoms Provided:**
    ${symptoms.map(s => `- **${s.symptom}** (*${s.part} -> ${s.subPart}*): "${s.description || 'N/A'}"`).join('\n')}

    Begin the response now with the 'Possible Causes' heading.
  `;

    // NEW: Multi-model fallback logic
    let analysisResult;
    try {
      console.log(`Attempting to call primary model: ${PRO_MODEL_NAME}`);
      analysisResult = await callGenerativeModel(PRO_MODEL_NAME, prompt);
    } catch (primaryError) {
      console.warn(`Primary model (${PRO_MODEL_NAME}) failed. Error:`, primaryError.message);
      console.log(`Falling back to secondary model: ${FLASH_MODEL_NAME}`);
      
      // If the primary model fails, try the fallback model
      try {
        analysisResult = await callGenerativeModel(FLASH_MODEL_NAME, prompt);
      } catch (fallbackError) {
        console.error(`Fallback model (${FLASH_MODEL_NAME}) also failed. Error:`, fallbackError.message);
        // If both models fail, throw an error to be caught by the outer block
        throw new Error('Both AI models failed to respond.');
      }
    }
    
    res.json({ analysis: analysisResult });

  } catch (error) {
    // This outer catch block now handles the final failure state
    console.error('Error during analysis process:', error);
    res.status(500).json({ error: 'Failed to analyze symptoms. Please try again later.' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});