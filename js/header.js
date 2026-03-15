// js/header.js

function Header() {
    return (
        <div className="menu">
            <div className="titles">
                <h1>
                    <div className="homepage">
                        <a href="https://sheasyve.dev"><b>Shea Syverson</b></a> | 
                    </div>
                    <a href="https://github.com/sheasyve/sheasyve.dev"><b> Developer Portfolio</b></a>
                </h1>
                <div className="repo">
                    <h2>Bachelor of Computer Science - <a href="https://www.uvic.ca/" target="_blank">University of Victoria</a></h2>
                </div>
            </div>
            <div className="links">
                <a href="https://github.com/sheasyve" target="_blank">
                    <h2>
                        <img src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" alt="GitHub Logo" />
                        GitHub
                    </h2>
                </a>
                <a href="https://www.linkedin.com/in/sheasyve/" target="_blank">
                    <h2>
                        <img src="https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png" alt="Linkedin Profile" /> 
                        Linkedin
                    </h2>
                </a>
                <a href="https://leetcode.com/u/sheasyve" target="_blank">
                    <h2>
                        <img src="https://upload.wikimedia.org/wikipedia/commons/1/19/LeetCode_logo_black.png" alt="LeetCode Profile" /> 
                        LeetCode
                    </h2>
                </a>
                <a href="https://www.codingame.com/profile/bcb5a473e16c66721d9a257097face784882305" target="_blank">
                    <h2>
                        <img src="https://sheasyve.dev/media/cg_logo.png" alt="CodinGame Profile" /> 
                        CodinGame
                    </h2>
                </a>
                <a href="https://www.hackerrank.com/profile/syversonshea" target="_blank">
                    <h2>
                        <img src="https://upload.wikimedia.org/wikipedia/commons/4/40/HackerRank_Icon-1000px.png" alt="HackerRank Profile" /> 
                        HackerRank
                    </h2>
                </a>
            </div>
        </div>
    );
}

const headerDiv = document.getElementById('header');
if (headerDiv) {
    const headerRoot = ReactDOM.createRoot(headerDiv);
    headerRoot.render(<Header />);
}