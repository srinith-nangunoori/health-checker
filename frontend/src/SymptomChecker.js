import React, { useState, useMemo } from 'react';
import ReactMarkdown from 'react-markdown';
import symptomTree from './data.js'; 
import './SymptomChecker.css';


// Tooltip Component
function Tooltip({ text, visible, position }) {
  if (!visible || !text) return null;
  
  return (
    <div 
      className="sc-tooltip"
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`
      }}
    >
      {text}
    </div>
  );
}

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
  const [searchTerm, setSearchTerm] = useState('');
  const [tooltip, setTooltip] = useState({ visible: false, text: '', position: { x: 0, y: 0 } });
  const [copyStatus, setCopyStatus] = useState(false);

  // Filter logic based on search term
  const filteredData = useMemo(() => {
    if (!searchTerm.trim()) {
      return { parts: Object.keys(symptomTree), tree: symptomTree };
    }

    const search = searchTerm.toLowerCase();
    const filtered = {};

    Object.keys(symptomTree).forEach(part => {
      const partData = {};
      let hasMatch = false;

      Object.keys(symptomTree[part]).forEach(subPart => {
        const matchingSymptoms = symptomTree[part][subPart].symptoms.filter(sym =>
          sym.name.toLowerCase().includes(search)
        );

        if (matchingSymptoms.length > 0) {
          partData[subPart] = { symptoms: matchingSymptoms };
          hasMatch = true;
        }
      });

      if (hasMatch) {
        filtered[part] = partData;
      }
    });

    return { parts: Object.keys(filtered), tree: filtered };
  }, [searchTerm]);

  const parts = filteredData.parts;
  const subParts = currentPath.part && filteredData.tree[currentPath.part] 
    ? Object.keys(filteredData.tree[currentPath.part]) 
    : [];
  const symptoms = currentPath.part && currentPath.subPart && filteredData.tree[currentPath.part]?.[currentPath.subPart]
    ? filteredData.tree[currentPath.part][currentPath.subPart].symptoms
    : [];

  const handleSelectPart = (part) => {
    setCurrentPath({ part, subPart: null, symptom: null });
    setDescription('');
  };

  const handleSelectSubPart = (subPart) => {
    setCurrentPath(prev => ({ ...prev, subPart, symptom: null }));
    setDescription('');
  };

  const handleSelectSymptom = (symptomName) => {
    setCurrentPath(prev => ({ ...prev, symptom: symptomName }));
  };

  const handleAddSymptom = () => {
    if (currentPath.part && currentPath.subPart && currentPath.symptom) {
      const fullSymptom = symptomTree[currentPath.part][currentPath.subPart].symptoms.find(
        s => s.name === currentPath.symptom
      );

      const newSymptom = {
        id: Date.now(),
        part: currentPath.part,
        subPart: currentPath.subPart,
        symptom: fullSymptom.name,
        description,
        definition: fullSymptom.definition
      };

      setAddedSymptoms([...addedSymptoms, newSymptom]);
      setCurrentPath({ part: null, subPart: null, symptom: null });
      setDescription('');
      setSearchTerm(''); // Clear search after adding
    }
  };

  const handleRemoveSymptom = (id) => {
    setAddedSymptoms(addedSymptoms.filter(s => s.id !== id));
  };

  const handleMouseEnter = (e, definition) => {
    const rect = e.target.getBoundingClientRect();
    setTooltip({
      visible: true,
      text: definition,
      position: {
        x: rect.left + rect.width / 2,
        y: rect.top - 10
      }
    });
  };

  const handleMouseLeave = () => {
    setTooltip({ visible: false, text: '', position: { x: 0, y: 0 } });
  };

  const handleCopyResults = async () => {
    try {
      await navigator.clipboard.writeText(results);
      setCopyStatus(true);
      setTimeout(() => setCopyStatus(false), 2500);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  const handleAnalyze = async () => {
    setIsLoading(true);
    setResults(null);

    try {
      const response = await fetch('http://localhost:3001/api/analyze', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ symptoms: addedSymptoms }),
      });

      if (!response.ok) {
        throw new Error('Something went wrong with the analysis.');
      }

      const data = await response.json();
      setResults(data.analysis);
    } catch (error) {
      console.error('Failed to fetch analysis:', error);
      setResults('Sorry, we were unable to process your request at this time. Please try again later.');
    } finally {
      setIsLoading(false);
    }
  };

  const canAddSymptom = currentPath.part && currentPath.subPart && currentPath.symptom && description.trim();

  return (
    <div className="sc-container">
      <div className="sc-header">
        <h1>Synapse Health</h1>
        <p className="sc-subtitle">Describe your symptoms to get started</p>
      </div>

      {!results ? (
        <div className="sc-content">
          {/* Search Bar */}
          {!isLoading && (
            <div className="sc-search-container">
              <input
                type="text"
                className="sc-search-input"
                placeholder="Search for a symptom..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              {searchTerm && (
                <button
                  className="sc-search-clear"
                  onClick={() => setSearchTerm('')}
                  aria-label="Clear search"
                >
                  ×
                </button>
              )}
            </div>
          )}

          {/* Funnel Steps */}
          {!isLoading && (
            <div className="sc-funnel">
              {/* Step 1: Select Body Part */}
              <div className="sc-step">
                <h2 className="sc-step-title">Where is your symptom?</h2>
                {parts.length > 0 ? (
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
                ) : (
                  <p className="sc-no-results">No symptoms match your search</p>
                )}
              </div>

              {/* Step 2: Select Sub-Part */}
              {currentPath.part && subParts.length > 0 && (
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

              {/* Step 3: Select Symptom with Tooltips */}
              {currentPath.subPart && symptoms.length > 0 && (
                <div className="sc-step sc-step-enter">
                  <h2 className="sc-step-title">What is the main sensation or issue?</h2>
                  <div className="sc-button-group">
                    {symptoms.map(symptomObj => (
                      <button
                        key={symptomObj.name}
                        className={`sc-option-btn ${currentPath.symptom === symptomObj.name ? 'active' : ''}`}
                        onClick={() => handleSelectSymptom(symptomObj.name)}
                        onMouseEnter={(e) => handleMouseEnter(e, symptomObj.definition)}
                        onMouseLeave={handleMouseLeave}
                      >
                        {symptomObj.name}
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
            <div className="sc-results-text">
              <ReactMarkdown>{results}</ReactMarkdown>
            </div>
            <div className="sc-results-actions">
              <button
                className="sc-btn sc-btn-secondary"
                onClick={handleCopyResults}
              >
                {copyStatus ? 'Copied!' : 'Copy Results'}
              </button>
              <button
                className="sc-btn sc-btn-primary"
                onClick={() => {
                  setResults(null);
                  setAddedSymptoms([]);
                  setCurrentPath({ part: null, subPart: null, symptom: null });
                  setDescription('');
                  setSearchTerm('');
                }}
              >
                Start Over
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Tooltip */}
      <Tooltip 
        text={tooltip.text} 
        visible={tooltip.visible} 
        position={tooltip.position} 
      />
    </div>
  );
}