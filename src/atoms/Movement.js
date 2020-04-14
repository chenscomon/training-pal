import React from 'react';
import moveVideo from '../images/bacalar2.mp4';

const Movement = () => {
    return (
        <div className="movement-page">
            <h1>Movement</h1>
            <div className="videoP">
                    <video src={moveVideo} autoplay="true" className="openV" muted controls></video>
                </div>
        </div>
    );
}

export default Movement;