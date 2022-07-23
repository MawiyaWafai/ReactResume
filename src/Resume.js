import React from 'react';
import './Resume.css';
import { GiEarthAsiaOceania } from "react-icons/gi";
import { BiPhone } from "react-icons/bi";
import { MdOutlineEmail } from "react-icons/md";
import { AiOutlineLinkedin } from "react-icons/ai";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { TbLanguage } from "react-icons/tb";
import { SiJavascript } from "react-icons/si";
import { SiPhp } from "react-icons/si";
import { FaPython } from  "react-icons/fa";
import { FaJava } from  "react-icons/fa";
import { DiCss3 } from "react-icons/di";
import { GrMysql } from "react-icons/gr";
import {AiFillHtml5} from "react-icons/ai";
import { ProgressBar } from 'react-bootstrap';
import pdf from "./pdf/Mawiya Al Wafai.pdf";


const Resume = () => {
    return ( 
        <main className='resume' style={{overflowX: 'hidden'}}>
            <div className='col'>
                <div className='row'>
                    <div className='res'>
                        <h1>Software Engineer - Cybersecurity</h1>
                        <div className='icons1'>
                            <div className='row'>
                                <div className='col'>
                                    <HiOutlineLocationMarker size={20}/><span className='info'>Riyadh, Saudi Arabia </span> 
                                    <br/>
                                    <BiPhone size={20}/><span className='info'>+966 56 4387 743</span>
                                    <br/>
                                    <GiEarthAsiaOceania size={20}/><span className='info'>Syrian-Turkish</span>
                                </div>
                                <div className='col-8'>
                                    <AiOutlineLinkedin size={20}/><span className='info'>/in/mawiya-al-wafai-034b78206/</span>
                                    <br/>
                                    <MdOutlineEmail size={20}/><span className='info'>mawiyawafaie@gmail.com</span>
                                    <br/>
                                    <TbLanguage size={20}/><span className='info'>Arabic - English - Turkish(Beginner)</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='row-2'>
                <a className='btn bt' href={pdf} download="Mawiya Al Wafai.pdf" style={{backgroundColor: '#B0DFE5'}}>Download Résumé</a>
                </div>
                <div className='row'>
                    <div className='col stre'>
                        <div className="str">
                            <h4>Strength</h4>
                            <div className="preview" >
                                <h3>Multitasking</h3>
                                <br/><p>Working on multiple tasks</p>
                                <br/>
                                <h3>Teamwork</h3>
                                <br/><p>Collaborated with team members</p>
                                <br/>
                                <h3>Result Driven</h3>
                                <br/><p>Meet daily tasks</p>
                                <br/>
                                <h3>Versatility</h3>
                                <br/><p>Open to learning new technology</p>
                                <br/>
                                <h3>Customer Service</h3>
                                <br/><p>Attentive to customers</p>
                                <br/>
                                <h3>Active Listening</h3>
                                <br/><p>Take careful notes in meetings</p>
                            </div>
                        </div>
                    </div>
                    <div className='col experience'>
                        <div className="exp">
                            <h4>Experience</h4>
                            <div className="ex">
                                <br/>
                                <p style={{fontSize:"100%", fontWeight:"bold"}}>Coop Trainee</p>
                                <br/>
                                <p style={{fontWeight:"bold"}}>CyberME</p>
                                <br/>
                                <p style={{fontSize:"75%", fontWeight:"lighter"}}>Jan 2022 - Present</p>
                                <br/>
                                <p style={{fontSize:"70%"}}>Product Research</p>
                                <br/>
                                <p style={{fontSize:"70%"}}>UI/UX Designer</p>
                                <br/>
                                <p style={{fontSize:"70%"}}>Tech Writer</p>
                                <br/>
                                <p style={{fontSize:"70%"}}>Quality Assurance</p>
                                <br/>
                                <p style={{fontSize:"70%"}}>Frontend Development</p>
                                <br/>
                                <p style={{fontSize:"70%"}}>Project Management</p>
                                <br/>
                                <br/>
                                <p style={{fontSize:"100%", fontWeight:"bold"}}>Freelance</p>
                                <br/>
                                <p style={{fontWeight:"bold"}}>Cozy Night</p>
                                <br/>
                                <p style={{fontSize:"75%", fontWeight:"lighter"}}>Mar 2022 - Present</p>
                                <br/>
                                <p style={{fontSize:"70%"}}>Content Writer</p>
                                <br/>
                                <p style={{fontSize:"70%"}}>A+ Content Creater</p>
                                <br/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='row'>
                    <div className='col skills'>
                        <div className="skl">
                            <h4>Skills</h4>
                            <div className="sk">
                                <ul>
                                    <li>Figma</li>
                                    <li>Adobe XD</li>
                                    <li>Tech Writing</li>
                                    <li>Content Writing</li>
                                    <li>Research Skills</li>
                                </ul>
                            </div>
                    </div>
                    </div>
                    <div className='col educate'>
                        <div className="edu">
                            <h4>Education</h4>
                            <div className="ed">
                                <br/>
                                <p style={{fontSize:"100%", fontWeight:"bold"}}>Bachelor in Software Engineering / Cybersecurity</p>
                                <br/>
                                <p style={{fontWeight:"bold"}}>Prince Sultan University</p>
                                <br/>
                                <p style={{fontSize:"75%", fontWeight:"lighter"}}>2017 - 2022</p>
                                <br/>
                                <p style={{fontSize:"70%"}}>3.85/4</p>
                                <br/>
                                <br/>
                                <p style={{fontSize:"100%", fontWeight:"bold"}}>High School</p>
                                <br/>
                                <p style={{fontWeight:"bold"}}>AlGhad National School</p>
                                <br/>
                                <p style={{fontSize:"75%", fontWeight:"lighter"}}>2004 - 2017</p>
                                <br/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='row award'>
                <h4>Awards</h4>
                <p><span className="web">Web Development - 2019 </span><br/> Prince Sultan Univerity</p>
                </div>
                <div className='row'>
                    <div className='col cert'>
                        <div className="cert">
                            <h4>Certifications</h4>
                            <div className="cer">
                                <h3>React JS - Jun 2022</h3>
                                <br/><p>Udemy</p>
                                <br/>
                                <h3>SQL Immersive Training - Mar 2022</h3>
                                <br/><p>Udemy</p>
                                <br/>
                                <h3>Python - Mar 2022</h3>
                                <br/><p>Udemy</p>
                                <br/>
                                <h3>Java - Jun 2021</h3>
                                <br/><p>Sololearn</p>
                                <br/>
                                <h3>Web Page Design Using HTML5 & CSS3 - Jun 2020</h3>
                                <br/><p>Alison</p>
                                <br/>
                                <h3>Web Page Development - May 2020</h3>
                                <br/><p>Alison</p>
                                <br/>
                                <h3>ToastMasters - 2019</h3>
                                <br/><p>ToastMasters International</p>
                            </div>
                        </div>
                    </div>
                    <div className='col lang'>
                        <h4>Languages</h4>
                        <span className='bar'>
                            <AiFillHtml5 size={20}/>HTML<ProgressBar now={80} label="80%"/>
                            <br/>
                            <SiJavascript /> JavaScript<ProgressBar now={60} label="60%"/>
                            <br/>
                            <DiCss3 size={20}/>CSS<ProgressBar now={80} label="80%"/>
                            <br/>
                            <FaJava size={20}/> Java<ProgressBar now={40} label="40%"/>
                            <br/>
                            <GrMysql size={20}/> MySQL<ProgressBar now={60} label="60%"/>
                            <br/>
                            <SiPhp size={20}/> PHP<ProgressBar now={25} label="25%"/>
                            <br/>
                            <FaPython size={20}/> Python<ProgressBar now={40} label="40%"/>
                        </span>
                    </div>
                </div>
            </div>
            <br/>
            <br/>
        </main>
     );
}
 
export default Resume;