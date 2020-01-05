import React from 'react';
import './projects.css';
import { Link } from 'react-router-dom';
class Projects extends React.Component {
    
    linkStyle = {
        color: "blue",
        font: "Bold calc(2vh + 1.5vw)/104px Myriad Arabic",
    }


    render() {
        const li = [
            {
                link: "/jazzChords",
                text: "Jazz Chords (Mobile App)"
            },
            {
                link: "/balanceVR",
                text: "BalanceVR (Unreal Engine 4)"
            },
            {
                link: "/personal",
                text: "Personal Website (React JS)"
            },
            {
                link: "/art",
                text: "3D Art"
            }
        ]
        return (
            <div>
                <h1 className='projectsHead'>Projects </h1>
                <p className="info">
                    <br />
                    I like to do lots of projects so I can learn a specific skill whether it be for a new programming language, a game, or a Mobile App.
                    Click on one of the links below to see a project.
                </p>
                <ul  className="projList">
                    {
                        li.map((objLink, i) => {
                            return (
                            <li key={i} className="projLink">
                                <Link to={objLink.link} style={this.linkStyle}>
                                    {objLink.text}
                                </Link>
                            </li>)
                        })
                    }
                </ul>
            </div>
        );


    }
}
export default Projects;