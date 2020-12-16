import React from 'react';
import './Projects.css';
import foxticket from '../../assets/foxticket.jpg';
import noimage from '../../assets/no-image-available.png';
import { motion } from 'framer-motion';

const transition = {
  duration: .7, 
  ease: [0.43, 0.13, 0.23, 0.96]
};

function Projects() {
  return (
    <motion.div 
    initial={{ opacity: 0 }} 
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={transition} 
    class="Projects"
    >
      <h2 id="projects-title">My Projects</h2>
      <div id="projects">
        <img src={foxticket} alt="" />
        <img src={noimage} alt="" />
        <div class="project">
          <h3>Foxticket app</h3>
          <p>An app that manages public transport tickets, it takes orders and giving back QR codes via email or in app</p>
          <ul>
            <li>Frontend: ES6, React, Redux, HTML, CSS</li>
            <li>Backend: Node.js, Express.js</li>
            <li>Database: MySQL</li>
            <li>Others: Jest, JWT</li>
          </ul>
        </div>
        <div class="project">
          <h3>Budget tracker</h3>
          <p>Work In Progress</p>
        </div>
      </div>
    </motion.div>
  )
}

export default Projects;