# SYNAPSE HEALTH

  

## LIVE APPLICATION LINK

  

SYNAPSE HEALTH: https://health-checker-opal.vercel.app/

  

## PROJECT DESCRIPTION

  

Synapse Health is an educational wellness tool designed to promote health literacy and reduce anxiety around physical symptoms. In a world of confusing and often stressful online health searches, this application provides a calm, guided, and interactive journey.

  

Users are guided through an intuitive "symptom funnel" to pinpoint their specific issues, demystifying medical vocabulary with on-hover definitions. This structured data is then sent to a secure, resilient AI backend, which provides a preliminary analysis and generates personalized, clarifying follow-up questions. Based on the user's answers, the system performs a final, more refined analysis. This interactive dialogue mimics the process of a real medical consultation, providing a deeper and more personalized level of insight.

  

INNOVATION: The key innovation is the interactive, two-stage analysis where the AI generates clarifying questions based on the user's initial input, creating a personalized and dynamic user journey. This is supported by a resilient, multi-model backend that ensures high availability. The addition of a symptom search bar, definition tooltips, and a "copy results" feature further enhances the user's comfort and the tool's utility, making it a truly comprehensive and user-centric platform.

  

## TECHNOLOGY STACK

  

* FRONTEND: React.js (deployed on Vercel)

* BACKEND: Node.js with Express (deployed on Render)

* AI SERVICE: Google Gemini API (with a multi-model fallback system)

* VERSION CONTROL: Git & GitHub

  

## ACCESSIBLE LINK TO THE PROJECT

  

GITHUB REPOSITORY: https://github.com/srinith-nangunoori/health-checker

  

"Note: The application is live and can be tested at the primary link above. The instructions below are for developers wishing to run the project locally."

  

## INSTALLATION & HOW TO USE (FOR LOCAL DEVELOPMENT)

  

To run this project, you will need to have Node.js and npm installed.

  

  

### 1. Backend Setup

  

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

  

### 2. Frontend Setup

  

Open a new terminal window and follow these steps.

codeBash

	# From the root health-checker directory, navigate to the frontend folder
	cd frontend
	
	# Install dependencies
	npm install

	# Start the React application
	npm start

A new browser tab will automatically open with the application running at [http://localhost:3000](https://www.google.com/url?sa=E&q=http%3A%2F%2Flocalhost%3A3000). You can now use the symptom checker!

  

## DEVELOPER INFORMATION

  

-  **SRINITH NANGUNOORI: B.Tech Student, Computer Science Engineering | Expected Graduation: 2028**

	Sardar Vallabhbhai National Institute of Technology (SVNIT), an Institution of National Importance in India.

	As the sole architect and developer for this project, my responsibilities included:

	- Architecting the full-stack application with a React frontend and Node.js backend.
	- Designing a clean, intuitive, and user-centric interface.
	- Engineering a resilient, multi-model AI backend using the Google Gemini API.
	- Developing the project's core innovation: a complex, two-stage interactive AI consultation flow.
	- Deploying the application to live production environments (Vercel and Render).