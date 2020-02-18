import React from 'react';
import './about.css';
class About extends React.Component {
    resumeLink={
        color:"blue"
    }
    render() {
        


        return (
            <div>
                <h1 className="resumeHead">
                    Resume
                </h1>
                <p className="resumeP">
                <a href="./files/Resume Programming (Jan 2020).pdf" style={this.resumeLink} download="resumeDamianChavira">Download Resume</a>

                </p>
                <div id="resumeTable"><table>
                    <tr>
                        <th className="label">Technologies</th>
                        <th>Web Development</th>
                        <th>Software Development</th>
                        <th>Game Development</th>
                    </tr>
                    <tr>
                        <td></td>
                        <td>React JS</td>
                        <td>Python</td>
                        <td>C# Unity Scripting</td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>HTML5/CSS3/JS (ES6)</td>
                        <td>Java</td>
                        <td>C++/Blueprint UE4 Scripting</td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>Adobe Photoshop/XD</td>
                        <td>React Native (Expo)</td>
                        <td>Blender3d</td>
                    </tr>
                    <tr>
                        <th className="label">Experience</th>
                        <th>Freelance</th>
                    </tr>
                    <tr>
                        <td></td>
                        <td>May 2019-Present</td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>
                            <ul className="work">
                                <li className="experience">Create custom websites for graduating college musicians</li>
                                <li className="experience">Created  Jazz Education Mobile Application w/React Native</li>
                                <li className="experience">Developed a Virtual Reality game (BalanceVR) using Unreal Engine 4</li>
                            </ul>
                        </td>
                        
                    </tr>
                    <tr>
                        <th className="label">Education</th>
                        <th>University of Arizona</th>
                    </tr>
                    <tr>
                        <td></td>
                        <td>B.S. Information Science and Technology</td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>Minor in Computer Science </td>
                        <td>Minor in Music</td>
                    </tr>
                    
                </table>
                </div>

            </div>
        );


    }
}
export default About;