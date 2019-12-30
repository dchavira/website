import React from 'react';
import './about.css';
class About extends React.Component {

    render() {
        const web = [{
            tech: "HTML5/CSS3",
            length: "1 year"
        },
        {
            tech: "React JS",
            length: "1 year"
        },
        {
            tech: "Adobe XD/Photoshop",
            length: "1 year" 
        }
        ]
        const games = [{
            tech: "C# (Unity Scripting)",
            length: "1 year"
        },
        {
            tech: "C++ (Unreal Engine 4 Scripting",
            length: "1 year"
        },
        {
            tech: "Unreal Engine 4 Blueprint Scripting",
            length: "1 year"
        }
        ]
        const software = [{
            tech: "Python",
            length: "3 years"
        },
        {
            tech: "Java",
            length: "2 years"
        }
        ]


        return (
            <div>
                <h1 className="resumeHead">
                    Resume
                </h1>
                <p className="resumeP">
                    Download Resume
                </p>
                <div id="techStack">
                    
                </div>

            </div>
        );


    }
}
export default About;