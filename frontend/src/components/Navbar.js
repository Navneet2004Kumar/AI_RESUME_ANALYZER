function Navbar() {
    return (
        <nav
            style={{
                display: "flex",
                justifyContent: "space-between",
                padding: "20px",
                backgroundColor: "#111827",
                color: "white"
            }}
        >
            <h2>AI Resume Analyzer</h2>

            <div>
                Home | Dashboard
            </div>
        </nav>
    );
}

export default Navbar;