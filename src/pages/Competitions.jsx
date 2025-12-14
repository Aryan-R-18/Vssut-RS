import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Competitions.css';


const roboconEvents = [
  {
    id: 101, 
    name: 'Robocon 2015',
    year: '2015',
    achievement: 'AIR-27',
    image: '/roboconimages/robocon15.jpg',
    description: "Project:Robominton - A badminton-playing robot designed to compete in the Robocon 2015 competition. The robot was engineered to autonomously play badminton, showcasing advanced robotics and AI capabilities.",
  },
  {
    id: 102, 
    name: 'Robocon 2016',
    year: '2016',
    achievement: 'AIR-20',
    image: '/roboconimages/robocon16.jpg', 
    description: "Project:Hybrid Pole Climbing Bot - A versatile robot designed for the Robocon 2016 competition, capable of climbing poles and navigating complex terrains. It demonstrated innovative engineering and control systems.",
  },
  {
    id: 103, 
    name: 'Robocon 2017',
    year: '2017',
    achievement: 'AIR-6',
    image: '/roboconimages/robocon17.jpg',
    description: "Project: Aerodisc – A disc-launching robot designed for the Robocon 2017 competition. Engineered with holonomic motion and real-time sensing capabilities, it featured pneumatic launchers, aluminium chassis, and autonomous navigation using Kinect, IMU, and color sensors."
  },
  // {
  //   id: 104,
  //   name: 'Robocon 2014',
  //   year: '2014',
  //   achievement: '',
  //   image: '/roboconimages/robocon14.jpg',
  //   description: "."
  // }
];

const competitions = [
   {
    id: 1,
    name: 'RosCon India',
    year: '2024',
    achievement: '',
    image: '/compimages/roscon.jpg',
    description: "ROSCon In'24 Bengaluru"
  },

  {
    id: 7,
    name: 'India Mobile Congress',
    year: '2025',
    achievement: '',
    image: '/compimages/IMC2.jpg',
    description: "Asia's largest techfest"
  },


  {
    id: 4,
    name: 'MIO Conclave',
    year: '2023',
    achievement: '',
    image: '/compimages/mio2.jpg',
    description: "VSSUT Robotics Society has participated in Make in Odisha Conclave - Utkarsh 2025. "
  },

  {
    id: 3,
    name: 'Smart India Hackathon',
    year: '2024',
    achievement: '',
    image: '/compimages/sih1.jpg',
    description: 'National level hackathon focused on solving real-world problems using technology.'
  },

  {
    id: 8,
    name: 'Innovision at NIT Rourkela',
    year: '2025',
    achievement: '',
    image: '/compimages/inno2025-1.jpg',
    description: 'Technical fest competition showcasing innovative robotics projects.'
  },

  {
    id: 2,
    name: 'Innovision at NIT Rourkela',
    year: '2024',
    achievement: '',
    image: '/compimages/inno7.jpg',
    description: 'Technical fest competition showcasing innovative robotics projects.'
  },
  
 
  // {
  //   id: 5,
  //   name: 'Innovision 2023 NIT-R',
  //   year: '2024',
  //   achievement: '',
  //   image: '/compimages/inno23.1.png',
  //   description: 'Combat robotics competition featuring custom-built fighting robots.'
  // },

  {
    id: 6,
    name: 'E-yantra',
    year: '2024',
    achievement: '',
    image: '/compimages/eyrc5.jpg',
    description: "E-yantra is a robotics competition that aims to promote innovation and creativity in robotics. The competition features a variety of robotic challenges, including designing and building a robot that can navigate through a maze, designing a robot that can climb stairs, and designing a robot that can play a game of soccer. The competition also includes a team-building activity where teams are required to work together to solve a problem."
  }
];

const Competitions = () => {
  return (
    <> 
      <div className="competitions-page robocon-section">
        <div className="container">
          <h1 className="page-title">Robocon</h1>
          <div className="competitions-grid">
            {roboconEvents.map(event => (
              <Link to={`/robocon/${event.id}`} key={event.id} className="competition-card-link">
                <div className="competition-card">
                  <div className="competition-image-container">
                    <img 
                      src={event.image} 
                      alt={event.name} 
                      className="competition-image"
                    />
                    <div className="competition-year">{event.year}</div>
                  </div>
                  <div className="competition-info">
                    <h3>{event.name}</h3>
                    <p className="achievement">{event.achievement}</p>
                    <p className="description">{event.description}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      <div className="competitions-page">
        <div className="container">
          <h1 className="page-title">Competitions/Events Particpated</h1>
          <div className="competitions-grid">
            {competitions.map(competition => (
              <Link to={`/competitions/${competition.id}`} key={competition.id} className="competition-card-link">
                <div className="competition-card">
                  <div className="competition-image-container">
                    <img 
                      src={competition.image} 
                      alt={competition.name} 
                      className="competition-image"
                    />
                    <div className="competition-year">{competition.year}</div>
                  </div>
                  <div className="competition-info">
                    <h3>{competition.name}</h3>
                    <p className="achievement">{competition.achievement}</p>
                    <p className="description">{competition.description}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Competitions;