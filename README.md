# Health & Wellness Symptom Checker

A project for HackVortex's Codestorm 5 by Srinith Nangunoori.

## Project Description

This tool is a health and wellness application designed to help users better understand their physical symptoms. Instead of searching with confusing medical jargon, users are guided through an intuitive, multi-step "symptom funnel." They can select a body part, narrow it down to a specific area, and choose a symptom, adding multiple issues to a list. This compiled list is then sent to a secure backend that uses the Google Gemini API to provide a concise, structured, and preliminary analysis of potential causes and recommended next steps.

The project's design philosophy is heavily inspired by Apple's clean, elegant, and user-centric aesthetic, ensuring a calming and trustworthy user experience.

**Innovation**: The key innovation is the guided selection process, which translates a user's physical discomfort into a structured data format that an AI can analyze effectively. This, combined with advanced prompt engineering, removes the barrier of medical vocabulary and delivers clear, actionable information.

## Technology Stack

*   **Frontend**: React.js 
    
*   **Backend**: Node.js with Express
    
*   **AI Service**: Google Gemini API
    
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