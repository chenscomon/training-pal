import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { LangContext } from '../context/LangContext';
import OpeningVideo from '../images/opening.mp4';
import videoPoster from '../images/vp2.JPG';

const Home = () => {
    const { heb } = useContext(LangContext);
    const page = heb ? (
        <div className="home">
            <header>
                <div className="head-content">
                    <h2>בואו להגשים את עצמכם</h2>
                    <Link className="btn-header" to="/contact">הצטרפו עכשיו</Link>
                </div>
            </header>

            <div className="home-body">
                <div className="videoP">
                    <video src={OpeningVideo} autoplay="true" className="openV" muted controls poster={videoPoster}></video>
                </div>
                <div className="opening">
                    <h1>Training-Pal</h1>
                    <p>Want to stay in shape?</p>
                    <p>Looking for someone professional to learn how to defend yourself?</p>
                    <p>Here you can have all of it and even more!. Martial-Arts, Calishentics, Personal Training, Remote Training and more.</p>
                    <Link to="/activities" className="btn btn-success">צפו בפעילויות</Link>
                </div>
                <section className="site-content">
                    <div className="people-tell">
                        <h3>People Tell</h3>
                        <p><i>"I looked a long time for someone who can empower my abilities and increase my skiils.<br></br>After the first meeting with Palchik, he built a whole plan for me that took me to better places."</i></p>
                        <br></br>
                        <p><i>"I looked a long time for someone who can empower my abilities and increase my skiils.<br></br>After the first meeting with Palchik, he built a whole plan for me that took me to better places."</i></p>
                        <br></br>
                        <p><i>"I looked a long time for someone who can empower my abilities and increase my skiils.<br></br>After the first meeting with Palchik, he built a whole plan for me that took me to better places."</i></p>
                    </div>
                </section>
            </div>
        </div>
    ) : ( 
        <div className="home">
            <header>
                <div className="head-content">
                    <h2>Reach Your Full Potential</h2>
                    <Link className="btn-header" to="/contact">Join Now</Link>
                </div>
            </header>

            <div className="home-body">
            <div className="videoP">
                    <video src={OpeningVideo} autoplay="true" className="openV" muted controls poster={videoPoster}></video>
                </div>
                <div className="opening">
                    <h1>Training-Pal</h1>
                    <p>Want to stay in shape?</p>
                    <p>Looking for someone professional to learn how to defend yourself?</p>
                    <p>Here you can have all of it and even more!. Martial-Arts, Calishentics, Personal Training, Remote Training and more.</p>
                    <Link to="/activities" className="btn btn-success">View Our Activities</Link>
                </div>
                <section className="site-content">
                    <div className="people-tell">
                        <h3>People Tell</h3>
                        <p>"I looked a long time for someone who can empower my abilities and increase my skiils.<br></br>After the first meeting with Palchik, he built a whole plan for me that took me to better places."</p>
                        <br></br>
                        <p>"I looked a long time for someone who can empower my abilities and increase my skiils.<br></br>After the first meeting with Palchik, he built a whole plan for me that took me to better places."</p>
                        <br></br>
                        <p>"I looked a long time for someone who can empower my abilities and increase my skiils.<br></br>After the first meeting with Palchik, he built a whole plan for me that took me to better places."</p>
                    </div>
                </section>
            </div>
        </div>
    )
    return (
        <div>{page}</div>
    );
}

export default Home;