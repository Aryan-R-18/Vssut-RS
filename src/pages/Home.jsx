import React, { useCallback, useState } from 'react';
import { Link } from 'react-router-dom';
import ProjectCard from '../components/ProjectCard';
import MemberCard from '../components/MemberCard';
import CompetitionCard from '../components/CompetitionCard';
import TypeWriter from '../components/TypeWriter';
import '../styles/Home.css';
import '../styles/FacultySection.css';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";

const Home = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [showAllProjects, setShowAllProjects] = useState(false);

  const facultyList = [
    { 
      name: 'SUDHANSU RANJAN DAS', 
      designation: 'Professor of Computer Science', 
      email: 'srdas_pe@vssut.ac.in',
      image: '/faculties/srdas.jpg'
    },
    { 
      name: 'Dr. Bob Johnson', 
      designation: 'Asso. Professor of Electrical Engineering', 
      email: 'bob.johnson@example.com',
      image: '/faculty/placeholder.jpg'
    },
    { 
      name: 'Dr. Carol White', 
      designation: 'Asst. of Mechanical Engineering', 
      email: 'carol.white@example.com',
      image: '/faculty/placeholder.jpg'
    },
  ];

  const latestProjects = [
    {
      id: 1,
      title: 'AMR',
      description: 'Developing a Mars rover prototype with autonomous navigation capabilities.',
      image: '/projects/amr.jpg',
    },
    {
      id: 2,
      title: 'UAV',
      description: '6-axis robotic arm with computer vision for object manipulation.',
      image: '/projects/uav.jpg',
    },
    {
      id: 3,
      title: 'SLV',
      description: 'An autonomous water-surface vehicle designed for efficient seafloor mapping and remote operations using GPS and magnetometer guidance.',
      image: '/projects/slv.jpg',
    }
  ];

  const workshops = [
    {
      id: 1,
      title: 'Robotics Bootcamp',
      date: '17 March 2025',
      description: 'Hands-on Bootcamp on different domains of Robotics for the purpose of Induction.',
      image: '/eventimages/bootcover.jpg',
      content: 'A comprehensive bootcamp covering various aspects of robotics including mechanical design, electronics, and programming. Participants learned about different types of robots, their applications, and got hands-on experience with building basic robots.',
      gallery: [
        '/images/w1.jpg',
        '/images/w2.jpg',
        '/images/w3.jpg'
      ]
    },
    {
      id: 2,
      title: 'RoboXplore',
      date: '8 April 2025',
      description: 'Exploring Robotics Made Fun: Roboxplore 2025 - from basics to battle bots',
      image: '/eventimages/xplorecover.jpg',
      content: 'An intensive workshop focused on line follower robots and Arduino programming. Participants built their own line follower robots and learned about sensor integration, motor control, and basic programming concepts.',
      gallery: [
        '/images/w2.jpg',
        '/images/w1.jpg',
        '/images/w3.jpg'
      ]
    },
    {
      id: 3,
      title: 'Robo Sumo',
      date: '20 & 21 Feb 2025',
      description: 'Pushing the Limits: Robo Sumo 2025',
      image: '/eventimages/sumo3.jpg',
      content: 'A specialized workshop introducing participants to ROS (Robot Operating System). Covered topics included ROS architecture, nodes, topics, services, and practical implementation of basic robotics applications.',
      gallery: [
        '/eventimages/sumo1.jpg',
        '/eventimages/w1.jpg',
        '/eventimages/w2.jpg'
      ]
    },
    {
      id: 4,
      title: 'Death Race',
      date: '22 June 2025',
      description: 'Speed meets skill: Death Race Ignites Samavesh 2025',
      image: '/eventimages/racecover.jpg',
      content: 'Comprehensive workshop on drone technology covering assembly, programming, and flight control systems. Participants learned about drone components, flight dynamics, and basic programming for autonomous flight.',
      gallery: [
        '/images/w1.jpg',
        '/images/w2.jpg',
        '/images/w3.jpg'
      ]
    },
    {
      id: 5,
      title: 'Drone Dynamics',
      date: '7 October 2023',
      description: 'Drone Dynamics by VSSUT Robotics Society',
      image: '/eventimages/Drone1.png',
      content: 'Workshop focused on computer vision applications in robotics. Topics included image processing, object detection, and integration with robotic systems using OpenCV and Python.',
      gallery: [
        '/eventimages/Drone2.jpg',
        '/eventimages/Drone3.jpg',
        '/eventimages/Drone4.jpg'
      ]
    }
  ];

  const competitions = [
    {
      id: 3,
      name: 'Smart India Hackathon',
      year: '2024',
      achievement: 'Finalists',
      image:  '/compimages/sih3.jpg'
    },
    {
      id: 2,
      name: 'Innovision at NIT Rourkela',
      year: '2024',
      achievement: 'Winner',
      image: '/images/comp1.jpg'
    },
    {
      id: 1,
      name: 'RosCon India',
      year: '2024',
      achievement: '',
      image: '/compimages/roscon3.jpg'
    },
    {
      id: 4,
      name: 'MIO Conclave',
      year: '2023',
      achievement: '',
      image: '/compimages/mio.jpg'
    }
  ];

  const achievements = [
    {
      id: 1,
      title: "E-Yantra Robotics Competition",
      year: "2024",
      description: "Finalist – E-Yantra Robotics Competition (IIT Bombay).",
      category: "Competition"
    },
    {
      id: 2,
      title: "National Science Day",
      year: "2025",
      description: "Winner – Science Exhibition, National Science Day, BRIC",
      category: "Competition"
    },
    {
      id: 3,
      title: "Patent for the Base Frame of our Autonomous Mobile Robot",
      year: "2025",
      description: " this patented base frame serves as a foundational platform — ideal for understanding the core working of autonomous mobile robots and their wide range of applications.",
      category: "Research"
    }
  ];

  const handleProjectClick = (project) => {
    setSelectedProject(project);
  };

  const handleClosePopup = () => {
    setSelectedProject(null);
  };

  const toggleShowAllProjects = () => {
    setShowAllProjects(!showAllProjects);
  };

  // Initialize particles
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <div className="home">
      <section className="hero">
        <Particles
          id="tsparticles"
          init={particlesInit}
          className="hero-particles"
          options={{
            fullScreen: { enable: false },
            background: { 
              color: {
                value: "transparent"
              }
            },
            fpsLimit: 60,
            particles: {
              number: { 
                value: 55,
                density: {
                  enable: true,
                  value_area: 800
                }
              },
              color: { value: ["#00ffcc", "#00ecfa", "#00cef1"] },
              shape: { 
                type: ["circle", "triangle", "square"],
                stroke: { width: 1, color: "#00ecfa" }
              },
              opacity: {
                value: 0.5,
                random: true,
                animation: {
                  enable: true,
                  speed: 0.5,
                  minimumValue: 0.1,
                  sync: false
                }
              },
              size: {
                value: 4,
                random: true,
                animation: {
                  enable: true,
                  speed: 1,
                  minimumValue: 1,
                  sync: false
                }
              },
              links: {
                enable: true,
                distance: 100,
                color: "#00ecfa",
                opacity: 0.2,
                width: 1,
                triangles: {
                  enable: true,
                  opacity: 0.05
                }
              },
              move: {
                enable: true,
                speed: 1,
                direction: "none",
                outModes: {
                  default: "bounce",
                },
                attract: {
                  enable: true,
                  rotateX: 600,
                  rotateY: 1200
                }
              },
            },
            interactivity: {
              events: {
                onHover: {
                  enable: true,
                  mode: ["grab"],
                },
                onClick: {
                  enable: false
                }
              },
              modes: {
                grab: {
                  distance: 180,
                  links: {
                    opacity: 0.4
                  }
                }
              }
            },
            detectRetina: true
          }}
        />
        <div className="container hero-content">
          <h1>
            <TypeWriter 
              text="Where Imagination meets Innovation" 
              speed={150}
              hideCursor={true}
            />
          </h1>
          <p>Join us in building cutting-edge robotic solutions to real-world problems.</p>
          <Link to="/about" className="btn">
            Learn More
          </Link>
        </div>
      </section>
      
    <section className="faculty-section">
      <div className="container">
        <h2 className="section-title">Meet Our Faculty</h2>
        <div className="faculty-carousel-container">
          <Carousel
            showArrows={true}
            autoPlay
            infiniteLoop
            showThumbs={false}
            className="faculty-carousel"
            centerMode={true}
            centerSlidePercentage={80}
            emulateTouch={true}
            swipeable={true}
            dynamicHeight={true}
            renderIndicator={(onClickHandler, isSelected, index, label) => {
              return (
                <li
                  className={`dot ${isSelected ? 'selected' : ''}`}
                  onClick={onClickHandler}
                  onKeyDown={onClickHandler}
                  value={index}
                  key={index}
                  role="button"
                  tabIndex={0}
                  aria-label={`${label} ${index + 1}`}
                />
              );
            }}
          >
            {facultyList.map((faculty, index) => (
              <div key={index} className="faculty-slide">
                <div className="faculty-card">
                  <div className="faculty-image">
                    <img src={faculty.image} alt={faculty.name} />
                  </div>
                  <div className="faculty-info">
                    <h3>{faculty.name}</h3>
                    <p>{faculty.designation}</p>
                    <a href={`mailto:${faculty.email}`}>{faculty.email}</a>
                  </div>
                </div>
              </div>
            ))}
          </Carousel>
        </div>
      </div>
    </section>


      <section className="latest-projects">
        <div className="container">
          <h2 className="section-title">Latest Projects</h2>
          <div className="projects-grid">
            {latestProjects.map(project => (
              <ProjectCard project={project} displayLearnMore = {false}/>
            ))}
          </div>
          <div className="view-all-container">
            <Link to="/projects" className="btn btn-primary">View All Projects</Link>
          </div>
        </div>
      </section>

      <section className="workshops">
        <div className="container">
          <h2 className="section-title">Events Conducted</h2>
          <Carousel
            showArrows={true}
            autoPlay
            infiniteLoop
            showThumbs={false}
            className="workshop-carousel"
          >
            {workshops.map(workshop => (
              <div key={workshop.id}>
                <Link to={`/workshops/${workshop.id}`}>
                  <img src={workshop.image} alt={workshop.title} />
                  <div className="legend">
                    <h3>{workshop.title}</h3>
                    <p>{workshop.description}</p>
                    <small>{workshop.date}</small>
                  </div>
                </Link>
              </div>
            ))}
          </Carousel>
          <div className="view-all-container">
            <Link to="/workshops" className="btn btn-primary">View All Events</Link>
          </div>
        </div>
      </section>

      <section className="competitions">
        <div className="container">
          <h2 className="section-title">Competitions/ Events Participated</h2>
          <Carousel
            showArrows={true}
            autoPlay
            infiniteLoop
            showThumbs={false}
            className="competition-carousel"
          >
            {competitions.map(competition => (
              <div key={competition.id}>
                <Link to={`/competitions/${competition.id}`}>
                  <img src={competition.image} alt={competition.name} />
                  <div className="legend">
                    <h3>{competition.name}</h3>
                    <p>{competition.achievement}</p>
                    <small>{competition.year}</small>
                  </div>
                </Link>
              </div>
            ))}
          </Carousel>
          <div className="view-all-container">
            <Link to="/competitions" className="btn btn-primary">View All Competitions</Link>
          </div>
        </div>
      </section>

      <section className="achievements">
        <div className="container">
          <h2 className="section-title">Our Achievements</h2>
          <Carousel
            showArrows={true}
            autoPlay
            infiniteLoop
            showThumbs={false}
            className="achievement-carousel"
          >
            {achievements.map((achievement) => (
              <div key={achievement.id}>
                <div className="achievement-content">
                  <h3>{achievement.title}</h3>
                  <p>{achievement.description}</p>
                  <div className="achievement-meta">
                    <span className="achievement-year">{achievement.year}</span>
                    <span className="achievement-category">{achievement.category}</span>
                  </div>
                </div>
              </div>
            ))}
          </Carousel>
          <div className="view-all-container">
            <Link to="/achievements" className="btn btn-primary">View All Achievements</Link>
          </div>
        </div>
      </section>

      {selectedProject && (
        <ProjectPopup project={selectedProject} onClose={handleClosePopup} />
      )}
    </div>
  );
};

export default Home;
