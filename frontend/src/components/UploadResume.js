import { useState } from "react";
import "./UploadResume.css";

function UploadResume({ setSelectedFile }) {

    const [fileName, setFileName] = useState("");

    const handleFileChange = (event) => {

        const file = event.target.files[0];

        if (file) {
            setSelectedFile(file);
            setFileName(file.name);
        }
    };

    return (

        <div className="upload-container">

            <div className="upload-box">

                <h2>📄 Upload Your Resume</h2>

                <p>Upload your Resume in PDF or DOCX format</p>

                <input
                    type="file"
                    accept=".pdf,.doc,.docx"
                    onChange={handleFileChange}
                />

                {fileName && (
                    <div className="file-details">
                        <p>✅ {fileName}</p>
                    </div>
                )}

            </div>

        </div>

    );
}

export default UploadResume;