import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faLaptopCode, faCogs } from '@fortawesome/free-solid-svg-icons';
import './style.css'; // Relative path


const Skills = () => {
    return (
        <section id="skills" className="container">
            <h2 className="section-title">
                <FontAwesomeIcon icon={faCogs} className="fa-icon" />
                Skills
            </h2>
            <ul className="skills-list">
                <li>
                    <FontAwesomeIcon icon={faCode} className="fa-icon" />
                    HTML
                </li>
                <li>
                    <FontAwesomeIcon icon={faCode} className="fa-icon" />
                    CSS
                </li>
                <li>
                    <FontAwesomeIcon icon={faCode} className="fa-icon" />
                    JavaScript
                </li>
                <li>
                    <FontAwesomeIcon icon={faLaptopCode} className="fa-icon" />
                    React
                </li>
                <li>
                    <FontAwesomeIcon icon={faLaptopCode} className="fa-icon" />
                    Bootstrap
                </li>
                <li>
                    <FontAwesomeIcon icon={faLaptopCode} className="fa-icon" />
                    DSA
                </li>
                <li>
                    <FontAwesomeIcon icon={faLaptopCode} className="fa-icon" />
                    Node.js
                </li>
                <li>
                    <FontAwesomeIcon icon={faLaptopCode} className="fa-icon" />
                    Python
                </li>
                <li>
                    <FontAwesomeIcon icon={faLaptopCode} className="fa-icon" />
                    Java
                </li>
            </ul>
        </section>
    );
};

export default Skills;
