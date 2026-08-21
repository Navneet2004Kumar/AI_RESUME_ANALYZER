from services.resume_parser import extract_text_from_pdf

pdf_path = "uploads/myresume.pdf"   # Change to your uploaded file name

text = extract_text_from_pdf(pdf_path)

print(text)