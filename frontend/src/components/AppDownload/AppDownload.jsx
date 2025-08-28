import React from 'react';
import './AppDownload.css';
import { assets } from '../../assets/assets'; 

const AppDownload = () => {
    return (
        <div className='app-download' id='app-download'>
            <div className="app-download-content">
                <div className="app-download-left" alt="Large Image">
                    <img src={assets.phone_app} />
                </div>
                <div className="app-download-right">
                    <p>For Better Experience Download "Eats Express" App Now..</p>
                    <div className="app-download-platforms">
                        <a href="https://play.google.com/store/apps?hl=en_IN&pli=1"><img src={assets.play_store} alt="Play Store Link" /> </a>
                        <a href="https://www.apple.com/in/app-store/"><img src={assets.app_store} alt="App Store Link" /></a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AppDownload;
