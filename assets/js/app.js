import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/custom.css'; 
import RoomList from './components/RoomList';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';

const App = () => {
    const [darkMode, setDarkMode] = useState(false);

    useEffect(() => {
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme === 'dark') {
            setDarkMode(true);
            document.body.setAttribute('data-theme', 'dark');
        }
    }, []);

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
        if (!darkMode) {
            document.body.setAttribute('data-theme', 'dark');
            localStorage.setItem('theme', 'dark');
        } else {
            document.body.removeAttribute('data-theme');
            localStorage.setItem('theme', 'light');
        }
    };

    return (
        <div className="container">
            <button className="btn btn-outline-secondary theme-toggle" onClick={toggleDarkMode}>
                <FontAwesomeIcon icon={darkMode ? faSun : faMoon} />
            </button>
            <div className="column" style={{ width: '30%' }}>
                <RoomList />
            </div>
            <div className="column" style={{ width: '70%' }}>
                <div id="todo-list-container"></div>
            </div>
        </div>
    );
};

ReactDOM.render(<App />, document.getElementById('root'));
