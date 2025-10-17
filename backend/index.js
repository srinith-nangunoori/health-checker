// backend/index.js (FINAL VERSION)

require('dotenv').config();
const express = require('express');
const cors = require('cors');
const { GoogleGenerativeAI } = require('@google/generative-ai');

const genAI = new GoogleGenerativeAI(process.env.GOOGLE_API_KEY);
const PRO_MODEL_NAME = "gemini-2.5-pro";
const FLASH_MODEL_NAME = "gemini-2.5-flash";

const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());

const callGenerativeModel = async (modelName, prompt) => {
  const model = genAI.getGenerativeModel({ model: modelName });
  const result = await model.generateContent(prompt);
  const response = await result.response;
  return response.text();
};

// Endpoint for the FIRST analysis (returns JSON with questions)
app.post('/api/analyze', async (req, res) => {
  try {
    const { symptoms, healthInfo } = req.body;
    if (!symptoms || symptoms.length === 0) {
      return res.status(400).json({ error: 'No symptoms provided.' });
    }
    const prompt = `
      You are a sophisticated medical analysis AI. Your task is to perform two actions based on the user's symptoms and health profile:
      1. Generate a preliminary analysis in Markdown.
      2. Generate a list of 3-4 relevant follow-up questions to gather more specific information.
      You MUST return your entire response as a single, valid JSON object.
      The JSON object must have this exact structure: { "initialAnalysis": "...", "followUpQuestions": [ { "question": "...", "type": "..." } ] }
      - For "initialAnalysis", use the Markdown template provided below.
      - For "followUpQuestions", the "type" can be one of three strings: "yes_no", "scale_1_10", or "text".
      ---
      MARKDOWN TEMPLATE FOR "initialAnalysis":
      ### Possible Causes
      - **[Cause 1]:** [Brief explanation]
      ### Safe Comfort Measures
      - **[Suggestion 1]:** [Specific, safe instruction]
      ### Recommended Next Steps
      - **General Monitoring:**
        - [One-line monitoring action]
      - **Professional Consultation:**
        - See a doctor immediately if: [Critical symptom]
      **Disclaimer:** This is an AI-generated analysis...
      ---
      USER DATA:
      Symptoms:
      ${symptoms.map(s => `- ${s.symptom} (${s.part} -> ${s.subPart}): "${s.description || 'N/A'}"`).join('\n')}
      Health Profile:
      - Age: ${healthInfo.age || 'Not provided'}
      - Biological Sex: ${healthInfo.sex || 'Not provided'}
      - Known Conditions: ${healthInfo.conditions || 'None'}
      Begin generating the JSON object now.
    `;
    let rawResponse = await callGenerativeModel(PRO_MODEL_NAME, prompt).catch(err => {
        console.warn(`Primary model failed. Falling back to secondary model.`);
        return callGenerativeModel(FLASH_MODEL_NAME, prompt);
    });
    const cleanedResponse = rawResponse.replace(/```json/g, '').replace(/```/g, '').trim();
    const responseObject = JSON.parse(cleanedResponse);
    res.json(responseObject);
  } catch (error) {
    console.error('Error during initial analysis:', error);
    res.status(500).json({ error: 'Failed to analyze symptoms.' });
  }
});

//  Endpoint for the FINAL analysis (receives answers, returns final Markdown)
app.post('/api/final-analysis', async (req, res) => {
  try {
    const { symptoms, healthInfo, answers } = req.body;

    // Convert the answers object into a readable string
    const answersString = Object.entries(answers)
      .map(([question, answer]) => `- Q: ${question}\n  - A: ${answer}`)
      .join('\n');

    const finalPrompt = `
      You are a medical analysis AI. You have already provided a preliminary analysis and asked the user follow-up questions. They have now responded.
      Your task is to provide a single, final, more detailed and refined analysis by synthesizing ALL available information.

      You MUST follow the Markdown template below exactly. Your analysis should be more refined and specific based on the user's answers.

      ---
      MARKDOWN TEMPLATE FOR FINAL ANALYSIS:

      ### Possible Causes
      - **[Cause 1]:** [Provide a more refined or confirmed brief explanation based on the new answers.]
      - **[Cause 2]:** [Provide another refined explanation.]
      - **[Cause 3]:** [Provide a third refined explanation.]

      ### Safe Comfort Measures
      - **[Suggestion 1]:** [Specific, safe instruction.]
      - **[Suggestion 2]:** [Specific, safe instruction.]

      ### Recommended Next Steps
      - **General Monitoring:**
        - [A refined one-line monitoring action.]
      - **Professional Consultation:**
        - See a doctor immediately if: [Critical symptom.]
        - See a doctor if: [Serious symptom.]

      **Disclaimer:** This is an AI-generated analysis for informational purposes and is not a substitute for professional medical advice. Consult a qualified healthcare professional for any health concerns.
      ---

      ALL USER DATA FOR FINAL ANALYSIS:
      
      Original Symptoms:
      ${symptoms.map(s => `- ${s.symptom} (${s.part} -> ${s.subPart}): "${s.description || 'N/A'}"`).join('\n')}

      Health Profile:
      - Age: ${healthInfo.age || 'Not provided'}
      - Biological Sex: ${healthInfo.sex || 'Not provided'}
      - Known Conditions: ${healthInfo.conditions || 'None'}

      User's Answers to Your Follow-up Questions:
      ${answersString}

      Begin the final, refined Markdown analysis now, following the template exactly.
    `;

    let finalAnalysis;
    try {
      console.log(`Attempting FINAL analysis with primary model: ${PRO_MODEL_NAME}`);
      finalAnalysis = await callGenerativeModel(PRO_MODEL_NAME, finalPrompt);
    } catch (primaryError) {
      console.warn(`Primary model failed for final analysis. Falling back to secondary model.`);
      finalAnalysis = await callGenerativeModel(FLASH_MODEL_NAME, finalPrompt);
    }

    res.json({ finalAnalysis: finalAnalysis });

  } catch (error) {
    console.error('Error during final analysis process:', error);
    res.status(500).json({ error: 'Failed to generate final analysis.' });
  }
});


app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});