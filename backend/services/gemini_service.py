import os
import json
import re
import google.generativeai as genai
from dotenv import load_dotenv

# Load .env file
load_dotenv()

# Configure Gemini API
genai.configure(
    api_key=os.getenv("GEMINI_API_KEY")
)

# Load Gemini Model
model = genai.GenerativeModel("gemini-3.5-flash")


def analyze_resume_with_gemini(resume_text, job_description):

    prompt = f"""
You are an expert ATS Resume Analyzer.

Compare the Resume with the Job Description.

Return ONLY valid JSON.

Do NOT return markdown.
Do NOT return explanation.
Do NOT use ```.

Return exactly this JSON format:

{{
    "ats_score": 0,
    "resume_summary": "",
    "matched_skills": [],
    "missing_skills": [],
    "strengths": [],
    "improvements": [],
    "interview_questions": []
}}

Resume:
{resume_text}

Job Description:
{job_description}
"""

    try:

        response = model.generate_content(prompt)

        text = response.text.strip()

        print("\n========== GEMINI RESPONSE ==========\n")
        print(text)

        # Extract JSON if Gemini wraps it in extra text
        match = re.search(r"\{.*\}", text, re.DOTALL)

        if not match:
            return {
                "error": "Gemini did not return valid JSON",
                "raw_response": text
            }

        json_text = match.group()

        return json.loads(json_text)

    except json.JSONDecodeError as e:

        return {
            "error": "Invalid JSON returned by Gemini",
            "details": str(e),
            "raw_response": text
        }

    except Exception as e:

        return {
            "error": str(e)
        }