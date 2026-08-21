import "./JobDescription.css";

function JobDescription({ jobDescription, setJobDescription }) {

    return (

        <div className="job-container">

            <h2>📝 Job Description</h2>

            <textarea
                rows="10"
                cols="70"
                placeholder="Paste Job Description Here..."
                value={jobDescription}
                onChange={(e) => setJobDescription(e.target.value)}
            />

        </div>

    );
}

export default JobDescription;