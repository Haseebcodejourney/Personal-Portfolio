import React, { useState } from 'react';

function ThemeMode() {
    const [isDarkMode, setIsDarkMode] = useState(false);

    const toggleDarkMode = () => {
        setIsDarkMode(!isDarkMode);
        const darkModeLink = document.getElementById('dark-mode-link');
        if (!darkModeLink && !isDarkMode) {
            const link = document.createElement('link');
            link.id = 'dark-mode-link';
            link.rel = 'stylesheet';
            link.href = './style/darktheme.css'; // Replace this with your dark mode CSS file path
            document.head.appendChild(link);
        } else if (darkModeLink && isDarkMode) {
            darkModeLink.remove();
        }
    };

    return (
        <>
            {/* For Dark and Light Mode */}
            <div className={`mode-transition ${isDarkMode ? 'dark-mode' : 'light-mode'}`} onClick={toggleDarkMode}>
                {isDarkMode ? (
                    <svg width="30px" height="30px" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg">
                        <path d="M623.709091 46.545455C826.181818 97.745455 977.454545 283.927273 977.454545 505.018182 977.454545 765.672727 768 977.454545 512 977.454545 267.636364 977.454545 67.490909 786.618182 48.872727 542.254545c-2.327273-2.327273-2.327273-4.654545-2.327272-9.30909 0-16.290909 11.636364-27.927273 27.927272-27.927273 13.963636 0 23.272727 9.309091 27.927273 20.945454 51.2 123.345455 172.218182 209.454545 311.854545 209.454546 186.181818 0 337.454545-153.6 337.454546-344.436364 0-121.018182-60.509091-225.745455-153.6-288.581818-9.309091-4.654545-16.290909-16.290909-16.290909-25.6 0-16.290909 13.963636-30.254545 27.927273-30.254545h13.963636z" />
                    </svg>
                ) : (
                    <svg width="30px" height="30px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clipPath="url(#a)" stroke="#000000" stroke-width="1.5" stroke-miterlimit="10">
                            <path d="M5 12H1M23 12h-4M7.05 7.05 4.222 4.222M19.778 19.778 16.95 16.95M7.05 16.95l-2.828 2.828M19.778 4.222 16.95 7.05" stroke-linecap="round" />
                            <path d="M12 16a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z" fill="#000000" fill-opacity=".16" />
                            <path d="M12 19v4M12 1v4" stroke-linecap="round" />
                        </g>
                        <defs>
                            <clipPath id="a">
                                <path fill="#ffffff" d="M0 0h24v24H0z" />
                            </clipPath>
                        </defs>
                    </svg>
                )}
            </div>
        </>
    );
}

export default ThemeMode;
