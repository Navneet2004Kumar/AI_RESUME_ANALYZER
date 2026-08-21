import os
from flask import Blueprint, request, jsonify

from services.resume_parser import extract_text_from_pdf
from services.gemini_service import analyze_resume_with_gemini

upload_bp = Blueprint("upload_bp", __name__)

UPLOAD_FOLDER = os.path.join(os.path.dirname(os.path.dirname(__file__)), "uploads")
os.makedirs(UPLOAD_FOLDER, exist_ok=True)


@upload_bp.route("/analyze", methods=["POST"])
def analyze():

    if "resume" not in request.files:
        return jsonify({"error": "No resume file uploaded"}), 400

    resume_file = request.files["resume"]
    job_description = request.form.get("job_description", "")

    if resume_file.filename == "":
        return jsonify({"error": "No resume file selected"}), 400

    if not job_description.strip():
        return jsonify({"error": "Job description is required"}), 400

    if not resume_file.filename.lower().endswith(".pdf"):
        return jsonify({"error": "Only PDF files are supported right now"}), 400

    save_path = os.path.join(UPLOAD_FOLDER, resume_file.filename)
    resume_file.save(save_path)

    try:
        resume_text = extract_text_from_pdf(save_path)
    except Exception as e:
        return jsonify({"error": f"Failed to read PDF: {str(e)}"}), 500

    if not resume_text.strip():
        return jsonify({"error": "Could not extract any text from the PDF"}), 400

    result = analyze_resume_with_gemini(resume_text, job_description)

    return jsonify(result)