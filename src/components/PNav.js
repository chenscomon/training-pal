import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { LangContext } from '../context/LangContext';

const PNav = () => {
    const { changeLang, heb } = useContext(LangContext);
    const page = heb ? (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <Link className="navbar-brand" to="/"><i class="fas fa-user-ninja"></i>&nbsp;TrainingPal</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                        <Link className="nav-link" to="/about">אודות</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/activities">פעילויות</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/">טיפים לבריאות</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/contact">צרו קשר</Link>
                    </li>
                    <li className="nav-item">
                        <button className="btn btn-sm btn-primary" onClick={changeLang}>English</button>
                    </li>
                </ul>
            </div>
        </nav>
    ) : (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <Link className="navbar-brand" to="/"><i class="fas fa-user-ninja"></i>&nbsp;TrainingPal</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                        <Link className="nav-link" to="/about">About</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/activities">Activities</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/">Healthy Tips</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/contact">Contact</Link>
                    </li>
                    <li className="nav-item">
                        <button className="btn btn-sm btn-primary" onClick={changeLang}>עברית</button>
                    </li>
                </ul>
            </div>
        </nav>
    );
    return (
        <div>{page}</div>
    )
}

export default PNav;

