
function LanguagesSection() {
    const languages = [
        { icon: <i className="devicon-python-plain"></i>, name: " Python" },
        { icon: <i className="devicon-cplusplus-plain"></i>, name: " C++" },
        { icon: <img src="media/cuda.png" alt="CUDA" style={{ width: "15px" }} />, name: " CUDA" },
        { icon: <i className="devicon-javascript-plain"></i>, name: " JavaScript" },
        { icon: <i className="devicon-react-plain"></i>, name: " React" },
        { icon: <i className="devicon-postgresql-plain"></i>, name: " SQL" },
        { icon: <i className="devicon-java-plain"></i>, name: " Java" },
        { icon: <i className="devicon-html5-plain"></i>, name: " HTML" },
        { icon: <i className="devicon-css3-plain"></i>, name: " CSS" },
        { icon: <i className="devicon-r-plain"></i>, name: " R" }
    ];

    return (
        <div className="languages">
            <h3>Programming Languages</h3>
            <ol className="numlist">
                {languages.map((lang, index) => (
                    <li key={index}>
                        {lang.icon}
                        {lang.name}
                    </li>
                ))}
            </ol>
        </div>
    );
}
