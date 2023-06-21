import React, { useContext, useEffect, useRef } from 'react';

import mintPic from '../../Resources/Images/portfolio-mint2048.png';
import cashflowPic from '../../Resources/Images/portfolio-cashflowjs.png';
import heromatchupsPic from '../../Resources/Images/portfolio-heromatchups.png';
import realityCalcPic from '../../Resources/Images/portfolio-realitycalc03.png';
import chatplusPic from '../../Resources/Images/logo-600x400.png';

import './style.css'

import { DataContext } from '../../Context/DataContext'

const Projects = (props) => {
    const { setPageLocation, projectsToDisplay } = useContext(DataContext)

    const hiddenRef = useRef();

    useEffect(() => {
        window.addEventListener('scroll', scrollHandler);
        return () => window.removeEventListener('scroll', scrollHandler);
    }, []);
    
    const scrollHandler = () => {
        if(window.pageYOffset + window.innerHeight >= hiddenRef.current.offsetTop + 125) {
            setPageLocation('projects')
        }
    }

    return (
        <div id="projects-container" ref={hiddenRef}>
            <div className="row project-chatplus" id="project5" title="ChatPlus for Rumble">
                <div className="col-md-7 project-description">
                    <h3 className="projects-row-title"><strong>ChatPlus</strong></h3>
                    <p>ChatPlus is a Google Chrome extension for Rumble that improves livestream chat user experience, enhances chat functionality and adds options to make Rumble more user-friendly. </p>
                    <>Features include:</>
                    <ul>
                        <li>User mention highlighting</li>
                        <li>Easy user tagging</li>
                        <li>Full size chat</li>
                        <li>Username color schemes</li>
                    </ul>
                    <p>
                    <a target="_blank" href="https://github.com/sleighs/chat-plus" rel="noreferrer">Find out more</a>
                    <br/>
                    <br/>

                    <a target="_blank" href="https://chrome.google.com/webstore/detail/chatplus-for-rumble/odlcomopigapcpmlpmmmhlhegajembio?hl=en&authuser=0" rel="noreferrer">Chrome Web Store</a>
                    
                    </p>
                </div>
                <div className="col-md-5 project-pic-content chatplus-pic-container">
                    <a className="projects-pic-container-chatplus" target="_blank" href="https://github.com/sleighs/chat-plus"rel="noreferrer" title="Check it out">
                    <img className="img-responsive rounded projects-pic mx-auto d-block" alt="ChatPlus" src={chatplusPic}/>
                    </a>
                </div>
            </div>

            <hr/>

            <div className="row project-realitycalc" id="project1" 
                style={{display: projectsToDisplay.includes('realitycalc') ? 'flex' : 'none'}}
            >
                <div className="col-md-7 project-description">
                    <h3 className="projects-row-title"><strong>RealityCalc.com</strong></h3>
                    <p>Lead developer for RealityCalc.com, home to the popular online dating tool The Male Reality Calculator hosted at RealityCalc.com. Built with React and Redux, the calculator uses U.S. Census Bureau statistics to calculate the user's odds of meeting their dream woman.</p>
                    <p>
                    <a target="_blank" href="https://realitycalc.com/" rel="noreferrer">Check it out</a>
                    </p>
                </div>
                <div className="col-md-5 project-pic-content">
                    <a className="projects-pic-container-realitycalc" target="_blank" href="https://realitycalc.com"rel="noreferrer" title="Check it out">
                    <img className="img-responsive rounded projects-pic mx-auto d-block" alt="RealityCalc.com" src={realityCalcPic}/>
                    </a>
                </div>
            </div>

            <hr style={{display: projectsToDisplay.includes('realitycalc') ? 'flex' : 'none'}}
/>

            <div className="row project-heromatchups" id="project3">
                <div className="col-md-7 project-description">
                    <h3  className="projects-row-title"><strong>Hero Matchups API</strong></h3>
                    <p>The <a target="_blank" href="https://github.com/Sleighs/hero-matchups-api/" rel="noreferrer">Hero Matchups API</a> is a character matchup and counter resource created for e-sports training and practice applications. Check out a live demo using resources for Blizzard's team-based first person shooter Overwatch 2 <a target="_blank" href="https://hero-pick-app.web.app/" rel="noreferrer">here</a>.</p>                    
                    <p><a target="_blank" href="https://github.com/Sleighs/hero-matchups-api/" rel="noreferrer">Visit the repository</a></p>
                </div>
                <div className="col-md-5 project-pic-content">
                    <a className="projects-pic-container-heromatchups" target="_blank" href="https://github.com/sleighs/heromatchups" rel="noreferrer" title="Visit">
                        <img className="img-responsive rounded projects-pic d-block mx-auto" alt="HeroMatchups" src={heromatchupsPic}/>
                    </a>
                </div>
            </div>

            <hr/>

            <div className="row project-mint"  id="project4">
                <div className="col-md-7 project-description">
                    <h3 className="projects-row-title"><strong>Mint 2048</strong></h3>
                    <p><a target="_blank" href="https://plus-7ed02.web.app/" rel="noreferrer">Mint</a> is a sliding tile puzzle game based on 2048 by Gabriele Cirulli where players combine tiles, perform combos and use special abilities to create the 2048 tile.</p>
                    <p>
                        <a target="_blank" href="https://github.com/Sleighs/Mint-2048" rel="noreferrer">Check out Mint 2048 </a>    
                    </p>
                </div>
                <div className="col-md-5 project-pic-content">
                    <a className="projects-pic-container-mint" target="_blank" href="https://github.com/sleighs/mint-2048" rel="noreferrer" title="Play">
                        <img className="img-responsive rounded projects-pic d-block mx-auto" alt="Mint 2048" src={mintPic}/>
                    </a>
                </div>
            </div>

            <hr/>
            
            <div className="row project-cashflow" id="project2">
                <div className="col-md-7 project-description">
                    <h3  className="projects-row-title"><strong>CashFlow JS</strong></h3>
                    <p><a target="_blank" href="https://sleighs.github.io/CashFlowJs/" rel="noreferrer">CashFlow JS</a> is an adaptation of the CashFlow 101 board game with additional gameplay options and rule customization that allows for many unique ways to play.</p>
                    <p>
                        <a target="_blank" href="https://github.com/Sleighs/CashFlowJs/" rel="noreferrer">Check out CashFlowJs</a>  
                    </p>
                </div>
                <div className="col-md-5 project-pic-content">
                    <a className="projects-pic-container-cashflow" target="_blank" href="https://github.com/Sleighs/CashFlowJs"rel="noreferrer" title="Play">
                        <img className="img-responsive rounded projects-pic mx-auto d-block" alt="CashFlow JS" src={cashflowPic}/>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Projects;