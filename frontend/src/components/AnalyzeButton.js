import "./AnalyzeButton.css";

function AnalyzeButton({ onAnalyze }) {

    return (

        <div className="button">

            <button onClick={onAnalyze}>
                Analyze Resume
            </button>

        </div>

    );
}

export default AnalyzeButton;