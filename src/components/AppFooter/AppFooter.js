import "./AppFooterStyles.css";
import React from "react";

const repo = "https://github.com/dan-koller/React-Minesweeper";
const githubUrl = "https://github.com/dan-koller";

function AppFooter(props) {
    return (
        <footer className='App-footer'>
            <div>
                Built by SHIVANSH
            </div>
            <br />
            <div>
                Check the source code on <a href={repo}>GitHub</a>
            </div>
        </footer>
    );
}

export default AppFooter;
