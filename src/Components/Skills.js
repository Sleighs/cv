import React, { Component } from 'react';
import AppManager from '../AppManager';

class Skills extends Component {


    render (){
        let containerStyle = {
            margin: 'auto'
        }
        let doStyle = {
            textAlign: 'center'
        }

        return (
            <div className="skills-container" style={containerStyle}>
                <section id="do" style={doStyle}>
					<div className="header-box">
						<h3>What Do I Do?</h3>
					</div>
					<p>Work at AweSumo Education creating software</p>
					<p>Create fun projects in my spare time</p>
					<p>Write quality code</p>
					<p>Keep my functions small, focused, and easy to understand</p>
					<p>Leave comments as I create and maintain code</p>
					<p>Make tests for the code I write</p>
					<p>Document every feature</p>
					<p>Keep track of every bug</p>
					<p>Strictly follow security best practices</p>
					<p>Never stop learning</p>
				</section>
                <section id="know">
					<div class="header-box">
						<h3>What Do I Know?</h3>
					</div>
					<ul>
						<li>Javascript, PHP, C#, Python and several other programming languages</li>
						<li>How to design user friendly UX with React, SASS, HTML5 Canvas, and other front end technologies</li>
						<li>How to write efficient queries in both MySQL and MSSQL</li>
						<li>How to use a feature/dev/master branch workflow in Git</li>
						<li>How to configure Apache, setup CRONs, manage packages, exit VIM, and other Linux Sys Admin tasks</li>
						<li>How to query and interpret data to make meaningful insights</li>
						<li>How to ask a great question on <a target="_blank" href="https://stackoverflow.com/">Stack Overflow</a></li>
					</ul>
				</section>
            </div>
        )
    }
}

export default Skills;