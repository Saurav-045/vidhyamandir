import React from "react";
import SchoolRoundedIcon from '@mui/icons-material/SchoolRounded';
import DvrRoundedIcon from '@mui/icons-material/DvrRounded';
import WifiProtectedSetupRoundedIcon from '@mui/icons-material/WifiProtectedSetupRounded';
import HandshakeRoundedIcon from '@mui/icons-material/HandshakeRounded';
import Graduationhat from './Graduationhat.svg';
import handshake from './handshake.svg';
import gears from './gears.svg';
import desktop from './desktop.svg';
import cssstyle from './index.css';

const Impact = () => {
    return (
        <>
            <div className="impact-style">
                <div className="title_style">
                    <h1>IMPACT MODE</h1>
                </div>
                <div className="row">
                    <div className="col-lg-3 col-md-3 col-sm-3 impact_style">
                        <img className="font_awesome" src={Graduationhat} />
                        <h5>50,000+</h5>
                        <h5>Stem-C Education</h5>
                    </div>
                    <div className="col-lg-3 col-md-3 col-sm-3 impact_style">
                        <img className="font_awesome" src={desktop} />
                        <h5>12,000+</h5>
                        <h5>Tech-based Learing</h5>
                    </div>
                    <div className="col-lg-3 col-md-3 col-sm-3 impact_style">
                        <img className="font_awesome" src={gears} />
                        <h5>1500+</h5>
                        <h5>Skill Counselling</h5>
                    </div>
                    <div className="col-lg-3 col-md-3 col-sm-3 impact_style">
                        <img className="font_awesome" src={handshake} />
                        <h5>200+</h5>
                        <h5>Supporting Youth Employment</h5>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Impact;