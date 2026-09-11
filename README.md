 AI Resume Analyzer

An AI-powered web application that analyzes a resume against a job description and provides an ATS score, matched skills, missing skills, strengths, improvement suggestions, and interview questions.

 🚀 Features

* Upload a resume in PDF format
* Paste a job description
* AI-powered resume analysis using Google Gemini
* ATS compatibility score
* Matched and missing skills
* Resume strengths and improvement suggestions
* AI-generated interview questions
* React frontend with Flask backend
* REST API communication

 🛠️ Tech Stack

Frontend

* React.js
* JavaScript
* Axios
* Chart.js
* React Icons

Backend

* Python
* Flask
* Flask-CORS
* PyMuPDF
* Google Gemini API
* python-dotenv

 📁 Folder Structure


AI_RESUME_ANALYZER/
│
├── backend/
│   ├── routes/
│   │   └── upload.py
│   │
│   ├── services/
│   │   ├── gemini_service.py
│   │   └── resume_parser.py
│   │
│   ├── app.py
│   ├── config.py
│   ├── requirements.txt
│   └── test_parser.py
│
├── frontend/
│   ├── public/
│   │
│   ├── src/
│   │   ├── components/
│   │   │   ├── AnalyzeButton.js
│   │   │   ├── Footer.js
│   │   │   ├── Hero.js
│   │   │   ├── JobDescription.js
│   │   │   ├── Navbar.js
│   │   │   └── UploadResume.js
│   │   │
│   │   ├── pages/
│   │   │   └── Home.js
│   │   │
│   │   ├── services/
│   │   │   └── api.js
│   │   │
│   │   ├── App.js
│   │   └── index.js
│   │
│   ├── package.json
│   └── package-lock.json
│
└── README.md

⚙️ How It Works


Resume PDF + Job Description
            ↓
       React Frontend
            ↓
       Flask REST API
            ↓
     Extract PDF Text
       using PyMuPDF
            ↓
      Google Gemini AI
            ↓
      Resume Analysis
            ↓
       JSON Response
            ↓
      Results on UI






 🔮 Future Improvements

* DOC/DOCX resume support
* Resume history
* User authentication
* Resume keyword highlighting
* Detailed section-wise scoring
* Downloadable analysis reports
* Production deployment

 
