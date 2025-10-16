# Health & Wellness Symptom Checker

A project for HackVortex's Codestorm 5 by Srinith Nangunoori.

## Project Description

This tool is a health and wellness application designed to help users better understand their physical symptoms. Instead of relying on ambiguous search queries, users are guided through an intuitive, multi-step "symptom funnel" to pinpoint their specific issues. This structured data is then sent to a secure backend powered by the Google Gemini API, which provides a concise, structured, and preliminary analysis.

The project's design philosophy prioritizes a clean, minimalist, and user-centric aesthetic. Generous spacing, a calming color palette, and clear typography are used intentionally to create a trustworthy and non-intimidating user experience, which is crucial when dealing with health-related concerns.

**INNOVATION**: The key innovation is the guided selection process, which translates a user's physical discomfort into a structured data format that an AI can analyze effectively. This, combined with advanced prompt engineering and a resilient multi-model backend, removes the barrier of medical vocabulary and delivers clear, actionable, and reliable information. The addition of a symptom search bar, definition tooltips, and a "copy results" feature further enhances the user's comfort and the tool's utility.

## Technology Stack

*   **Frontend**: React.js 
    
*   **Backend**: Node.js with Express
    
*   **AI Service**:Google Gemini API (with a multi-model fallback system)
    
*   **Version Control**: Git & GitHub
    

## Accessible Link to the Project

**GitHub Repository**: \https://github.com/srinith-nangunoori/health-checker.git
Note: As this project includes a backend with secure API keys, a live deployed version is not available. Please follow the installation instructions below to run the full application on your local machine.

## Installation & How to Use

To run this project, you will need to have Node.js and npm installed.

### 1\. Backend Setup

First, set up and run the backend server.

codeBash

    # Clone the repository
    git clone https://github.com/srinith-nangunoori/health-checker.git
    cd health-checker
    
    # Navigate to the backend folder
    cd backend
    
    # Install dependencies
    npm install
    
    # Create an environment file
    # Create a new file named .env in the /backend folder and add your Google AI API key:
    # GOOGLE_API_KEY=YourGoogleAIAPIKeyGoesHere
    
    # Start the server
    npm run dev

The backend server will now be running on [http://localhost:3001](https://www.google.com/url?sa=E&q=http%3A%2F%2Flocalhost%3A3001).

### 2\. Frontend Setup

Open a new terminal window and follow these steps.

codeBash

    # From the root health-checker directory, navigate to the frontend folder
    cd frontend
    
    # Install dependencies
    npm install
    
    # Start the React application
    npm start

A new browser tab will automatically open with the application running at [http://localhost:3000](https://www.google.com/url?sa=E&q=http%3A%2F%2Flocalhost%3A3000). You can now use the symptom checker!

## Developer Information

*   **Srinith Nangunoori**: I am a passionate second-year CSE student at SVNIT. As the sole developer for this project, I was responsible for the entire creation process: designing and building the React frontend, developing the Node.js backend server, integrating the Google Gemini API, and performing advanced prompt engineering to ensure a high-quality user experience.