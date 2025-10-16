
require('dotenv').config();

// 1. Import necessary packages
const express = require('express');
const cors = require('cors');
// Google Generative AI package
const { GoogleGenerativeAI } = require('@google/generative-ai');

//Initialize the Google client with our API key
const genAI = new GoogleGenerativeAI(process.env.GOOGLE_API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-2.5-pro" });

// 2. Create an Express application
const app = express();
const PORT = 3001;

// 3. Set up middleware
app.use(cors());
app.use(express.json());

// 4. Define a basic test route
app.get('/', (req, res) => {
  res.send('Hello from the Symptom Checker Backend!');
});

// 5. THIS IS THE MOST IMPORTANT PART: AI-Powered API Endpoint
app.post('/api/analyze', async (req, res) => {
  try {
    const { symptoms } = req.body;
    console.log('Received symptoms on the backend:', symptoms);

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

    ### Recommended Next Steps
    - **General Care:** [List 2-3 safe, one-line actions like "Monitor symptoms", "Ensure proper rest", "Stay hydrated".]
    - **Professional Consultation:** When to see a doctor. List specific "red flag" symptoms.
        - See a doctor if: [Red flag symptom 1].
        - See a doctor if: [Red flag symptom 2].
        - See a doctor if: [Red flag symptom 3].

    ---
    **Disclaimer:** This is an AI-generated analysis for informational purposes and is not a substitute for professional medical advice. Consult a healthcare professional for any health concerns.

    ---
    **Symptoms Provided:**
    ${symptoms.map(s => `- **${s.symptom}** (*${s.part} -> ${s.subPart}*): "${s.description || 'N/A'}"`).join('\n')}
    `;

    // Call the Google Gemini API
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const analysisResult = response.text();

    // Send the AI's response back to the frontend
    res.json({ analysis: analysisResult });

  } catch (error) {
    console.error('Error calling Google AI API:', error);
    res.status(500).json({ error: 'Failed to analyze symptoms. Please try again later.' });
  }
});

// 6. Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});