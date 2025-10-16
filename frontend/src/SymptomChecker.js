import React, { useState } from 'react';
import symptomTree from './data.js'; 
import './SymptomChecker.css';
import ReactMarkdown from 'react-markdown';

// Mock API function
const analyzeSymptoms = async (symptoms) => {
  await new Promise(resolve => setTimeout(resolve, 2000));
  return `Based on your reported symptoms of ${symptoms.map(s => s.symptom).join(', ')}, this analysis suggests you may benefit from consulting a healthcare professional. Please note this is not a medical diagnosis—always seek professional medical advice for proper evaluation and treatment.`;
};

// Main Component
export default function SymptomChecker() {
  const [currentPath, setCurrentPath] = useState({ part: null, subPart: null, symptom: null });
  const [description, setDescription] = useState('');
  const [addedSymptoms, setAddedSymptoms] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [results, setResults] = useState(null);

  const parts = Object.keys(symptomTree);
  const subParts = currentPath.part ? Object.keys(symptomTree[currentPath.part]) : [];
  const symptoms = currentPath.part && currentPath.subPart
    ? symptomTree[currentPath.part][currentPath.subPart].symptoms
    : [];

  const handleSelectPart = (part) => {
    setCurrentPath({ part, subPart: null, symptom: null });
    setDescription('');
  };

  const handleSelectSubPart = (subPart) => {
    setCurrentPath(prev => ({ ...prev, subPart, symptom: null }));
    setDescription('');
  };

  const handleSelectSymptom = (symptom) => {
    setCurrentPath(prev => ({ ...prev, symptom }));
    setDescription('');
  };

  const handleAddSymptom = () => {
    if (currentPath.part && currentPath.subPart && currentPath.symptom) {
      const newSymptom = {
        id: Date.now(),
        part: currentPath.part,
        subPart: currentPath.subPart,
        symptom: currentPath.symptom,
        description
      };
      setAddedSymptoms([...addedSymptoms, newSymptom]);
      setCurrentPath({ part: null, subPart: null, symptom: null });
      setDescription('');
    }
  };

  const handleRemoveSymptom = (id) => {
    setAddedSymptoms(addedSymptoms.filter(s => s.id !== id));
  };


const handleAnalyze = async () => {
  setIsLoading(true);
  setResults(null); 

  try {
    // Send the symptom data to our backend server
    const response = await fetch('http://localhost:3001/api/analyze', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ symptoms: addedSymptoms }),
    });

    // Check if the server responded correctly
    if (!response.ok) {
      throw new Error('Something went wrong with the analysis.');
    }

    const data = await response.json();
    // Set the results state with the AI's analysis from the backend
    setResults(data.analysis);

  } catch (error) {
    console.error('Failed to fetch analysis:', error);
    // Display an error message
    setResults('Sorry, we were unable to process your request at this time. Please try again later.');
  } finally {
    // This will run whether the request succeeded or failed
    setIsLoading(false);
  }
};

  const canAddSymptom = currentPath.part && currentPath.subPart && currentPath.symptom && description.trim();

  return (
    <div className="sc-container">
      <div className="sc-header">
        <h1>Symptom Checker</h1>
        <p className="sc-subtitle">Describe your symptoms to get started</p>
      </div>

      {!results ? (
        <div className="sc-content">
          {/* Funnel Steps */}
          {!isLoading && (
            <div className="sc-funnel">
              {/* Step 1: Select Body Part */}
              <div className="sc-step">
                <h2 className="sc-step-title">Where is your symptom?</h2>
                <div className="sc-button-group">
                  {parts.map(part => (
                    <button
                      key={part}
                      className={`sc-option-btn ${currentPath.part === part ? 'active' : ''}`}
                      onClick={() => handleSelectPart(part)}
                    >
                      {part}
                    </button>
                  ))}
                </div>
              </div>

              {/* Step 2: Select Sub-Part */}
              {currentPath.part && (
                <div className="sc-step sc-step-enter">
                  <h2 className="sc-step-title">Which area?</h2>
                  <div className="sc-button-group">
                    {subParts.map(subPart => (
                      <button
                        key={subPart}
                        className={`sc-option-btn ${currentPath.subPart === subPart ? 'active' : ''}`}
                        onClick={() => handleSelectSubPart(subPart)}
                      >
                        {subPart}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Step 3: Select Symptom */}
              {currentPath.subPart && (
                <div className="sc-step sc-step-enter">
                  <h2 className="sc-step-title">What symptom?</h2>
                  <div className="sc-button-group">
                    {symptoms.map(symptom => (
                      <button
                        key={symptom}
                        className={`sc-option-btn ${currentPath.symptom === symptom ? 'active' : ''}`}
                        onClick={() => handleSelectSymptom(symptom)}
                      >
                        {symptom}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Step 4: Add Description */}
              {currentPath.symptom && (
                <div className="sc-step sc-step-enter">
                  <h2 className="sc-step-title">Describe your symptom</h2>
                  <textarea
                    className="sc-textarea"
                    placeholder="How long have you had this? When does it occur? Any other details?"
                    value={description}
                    onChange={e => setDescription(e.target.value)}
                  />
                  <button
                    className={`sc-btn sc-btn-primary ${canAddSymptom ? '' : 'disabled'}`}
                    onClick={handleAddSymptom}
                    disabled={!canAddSymptom}
                  >
                    Add Symptom to List
                  </button>
                </div>
              )}
            </div>
          )}

          {/* Added Symptoms List */}
          {addedSymptoms.length > 0 && (
            <div className="sc-symptoms-list">
              <h3>Your Symptoms ({addedSymptoms.length})</h3>
              <div className="sc-symptoms-container">
                {addedSymptoms.map(sym => (
                  <div key={sym.id} className="sc-symptom-card">
                    <div className="sc-symptom-header">
                      <div>
                        <div className="sc-symptom-name">{sym.symptom}</div>
                        <div className="sc-symptom-location">{sym.part} → {sym.subPart}</div>
                      </div>
                      <button
                        className="sc-remove-btn"
                        onClick={() => handleRemoveSymptom(sym.id)}
                      >
                        ×
                      </button>
                    </div>
                    {sym.description && (
                      <div className="sc-symptom-description">{sym.description}</div>
                    )}
                  </div>
                ))}
              </div>
              <button
                className={`sc-btn sc-btn-primary sc-btn-analyze ${addedSymptoms.length === 0 ? 'disabled' : ''}`}
                onClick={handleAnalyze}
                disabled={addedSymptoms.length === 0 || isLoading}
              >
                Analyze My Symptoms
              </button>
            </div>
          )}

          {/* Loading State */}
          {isLoading && (
            <div className="sc-loading">
              <div className="sc-spinner"></div>
              <p>Analyzing your symptoms...</p>
            </div>
          )}
        </div>
      ) : (
        /* Results */
        <div className="sc-results">
          <div className="sc-results-card">
            <h2>Analysis Results</h2>
            <p className="sc-results-text">
                <ReactMarkdown>{results}</ReactMarkdown>
            </p>
            <button
              className="sc-btn sc-btn-primary"
              onClick={() => {
                setResults(null);
                setAddedSymptoms([]);
                setCurrentPath({ part: null, subPart: null, symptom: null });
                setDescription('');
              }}
            >
              Start Over
            </button>
          </div>
        </div>
      )}
    </div>
  );
}




