import { useState } from "react";

import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import UploadResume from "../components/UploadResume";
import JobDescription from "../components/JobDescription";
import AnalyzeButton from "../components/AnalyzeButton";

import { analyzeResume } from "../services/api";

function Home() {

    const [selectedFile, setSelectedFile] = useState(null);
    const [jobDescription, setJobDescription] = useState("");
    const [analysis, setAnalysis] = useState(null);

    const handleAnalyze = async () => {

        if (!selectedFile) {
            alert("Please upload your resume.");
            return;
        }

        if (!jobDescription.trim()) {
            alert("Please paste the Job Description.");
            return;
        }

        const formData = new FormData();

        formData.append("resume", selectedFile);
        formData.append("job_description", jobDescription);

        try {

            const response = await analyzeResume(formData);

            console.log(response.data);

            setAnalysis(response.data);

        }

        catch (error) {

            console.error(error);

            alert("Analysis Failed");

        }

    };

    return (

        <>
            <Navbar />

            <Hero />

            <UploadResume
                setSelectedFile={setSelectedFile}
            />

            <JobDescription
                jobDescription={jobDescription}
                setJobDescription={setJobDescription}
            />

            <AnalyzeButton
                onAnalyze={handleAnalyze}
            />

            {analysis && (

                <div
                    style={{
                        width: "90%",
                        maxWidth: "1000px",
                        margin: "40px auto",
                        background: "#12151C",
                        border: "1px solid rgba(124, 108, 246, 0.25)",
                        padding: "35px",
                        borderRadius: "16px",
                        boxShadow: "0 20px 40px rgba(0,0,0,0.4), 0 0 30px rgba(124, 108, 246, 0.08)",
                        color: "#E7E9EE",
                        fontFamily: "'Inter', sans-serif"
                    }}
                >

                    <h2 style={{ fontFamily: "'Space Grotesk', sans-serif" }}>📊 AI Resume Analysis</h2>

                    {analysis.error ? (

                        <>
                            <h3 style={{ color: "#F87171" }}>❌ Error</h3>

                            <pre
                                style={{
                                    whiteSpace: "pre-wrap",
                                    background: "#1C2029",
                                    color: "#C9CDD6",
                                    padding: "15px",
                                    borderRadius: "10px",
                                    border: "1px solid rgba(248, 113, 113, 0.2)"
                                }}
                            >
                                {analysis.error}

                                {"\n\n"}

                                {analysis.raw_response}
                            </pre>
                        </>

                    ) : (

                        <>

                            <h3 style={{ color: "#9AA1AC", fontWeight: 500, marginTop: "20px" }}>🎯 ATS Score</h3>

                            <h1
                                style={{
                                    fontFamily: "'Space Grotesk', sans-serif",
                                    background: "linear-gradient(100deg, #7C6CF6, #38BDF8)",
                                    WebkitBackgroundClip: "text",
                                    WebkitTextFillColor: "transparent",
                                    backgroundClip: "text",
                                    fontSize: "48px"
                                }}
                            >
                                {analysis.ats_score}%
                            </h1>

                            <hr style={{ border: "none", borderTop: "1px solid rgba(255,255,255,0.08)", margin: "20px 0" }} />

                            <h3 style={{ color: "#E7E9EE" }}>📄 Resume Summary</h3>

                            <p style={{ color: "#9AA1AC", lineHeight: 1.6, marginTop: "8px" }}>{analysis.resume_summary}</p>

                            <hr style={{ border: "none", borderTop: "1px solid rgba(255,255,255,0.08)", margin: "20px 0" }} />

                            <h3 style={{ color: "#4ADE80" }}>✅ Matched Skills</h3>

                            <ul style={{ color: "#C9CDD6", marginTop: "8px", paddingLeft: "20px" }}>
                                {analysis.matched_skills?.map((skill, index) => (
                                    <li key={index} style={{ marginBottom: "4px" }}>{skill}</li>
                                ))}
                            </ul>

                            <hr style={{ border: "none", borderTop: "1px solid rgba(255,255,255,0.08)", margin: "20px 0" }} />

                            <h3 style={{ color: "#F87171" }}>❌ Missing Skills</h3>

                            <ul style={{ color: "#C9CDD6", marginTop: "8px", paddingLeft: "20px" }}>
                                {analysis.missing_skills?.map((skill, index) => (
                                    <li key={index} style={{ marginBottom: "4px" }}>{skill}</li>
                                ))}
                            </ul>

                            <hr style={{ border: "none", borderTop: "1px solid rgba(255,255,255,0.08)", margin: "20px 0" }} />

                            <h3 style={{ color: "#7C6CF6" }}>💪 Strengths</h3>

                            <ul style={{ color: "#C9CDD6", marginTop: "8px", paddingLeft: "20px" }}>
                                {analysis.strengths?.map((item, index) => (
                                    <li key={index} style={{ marginBottom: "4px" }}>{item}</li>
                                ))}
                            </ul>

                            <hr style={{ border: "none", borderTop: "1px solid rgba(255,255,255,0.08)", margin: "20px 0" }} />

                            <h3 style={{ color: "#38BDF8" }}>💡 Improvements</h3>

                            <ul style={{ color: "#C9CDD6", marginTop: "8px", paddingLeft: "20px" }}>
                                {analysis.improvements?.map((item, index) => (
                                    <li key={index} style={{ marginBottom: "4px" }}>{item}</li>
                                ))}
                            </ul>

                            <hr style={{ border: "none", borderTop: "1px solid rgba(255,255,255,0.08)", margin: "20px 0" }} />

                            <h3 style={{ color: "#E7E9EE" }}>🎤 Interview Questions</h3>

                            <ol style={{ color: "#C9CDD6", marginTop: "8px", paddingLeft: "20px" }}>
                                {analysis.interview_questions?.map((question, index) => (
                                    <li key={index} style={{ marginBottom: "6px" }}>{question}</li>
                                ))}
                            </ol>

                        </>

                    )}

                </div>

            )}

        </>

    );

}

export default Home;