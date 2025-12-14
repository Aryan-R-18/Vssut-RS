import React from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '../components/Navbar';
import '../styles/CompetitionDetail.css';

// Existing Competitions data
const competitions = [

  {
    id: 1,
    name: 'RosCon India',
    year: '2024',
    achievement: '',
    image: '/compimages/roscon3.jpg',
    description: "ROSCon In'24 Bengaluru",
    content: "The members of the Robotics Society of VSSUT, Burla, participated in the distinguished ROSCon India 2024, held at the Indian Institute of Science (IISc) Bengaluru, where they had the honor of listening to the distinguished speeches by Geoffrey Biggs, CTO of Open Robotics, and Angelo Corsaro, CEO of ZettaScale Technology.The 2-day exhibition highlighted lots of opportunities for meaningful networking as well as workshops featuring NVIDIA, along with 15+ companies, displaying all the newest innovations made in the field of Robotics and Technology.",
    gallery: [
      '/compimages/roscon.jpg',
      '/compimages/roscon2.jpg',
      '/compimages/roscon3.jpg',
      '/compimages/roscon4.jpg',
      '/compimages/roscon5.jpg',
       '/compimages/roscon6.jpg',
        '/compimages/roscon7.jpg'
    ]
  },

  {
    id: 7,
    name: 'India Mobile Congress',
    year: '2025',
    achievement: '',
    image: '/compimages/IMC2.jpg',
    description: 'Technical fest competition showcasing innovative robotics projects.',
    content: ['2025',
      "Asia's largest digital technology event, organized by India's Department of Telecommunications & COAI, bringing together leaders from industry, government, academia, and startups to showcase next-gen tech like 5G/6G, AI, IoT, Quantum, and Cybersecurity, fostering collaboration, driving innovation, and shaping India's digital future through exhibitions, conferences, and demos",

    ],
    gallery: [
      '/compimages/IMC3.jpg',
      '/compimages/IMC1.jpg',
      '/compimages/IMC2.jpg',
      '/compimages/IMC4.jpg',
      '/compimages/IMC6.jpg',
      '/compimages/IMC7.jpg',
    ]
  },

  {
    id: 4,
    name: 'MIO Conclave',
    year: '2023',
    achievement: '',
    image: '/compimages/mio2.jpg',
    description: "VSSUT Robotics Society has participated in Make in Odisha Conclave - Utkarsh 2025.",
    content: "The Robotics Society of VSSUT, Burla, participated in Make in Odisha Conclave – Utkarsh 2025, showcasing three cutting-edge projects: an Autonomous Mobile Robot with excellent navigation, a Surface Level Vehicle designed for diverse terrains, and a Hexacopter with precise aerial capabilities. The event highlighted the society's commitment to innovation and technological excellence, fostering connections with industry leaders and reinforcing VSSUT's dedication to robotics and automation.",
    gallery: [
      '/compimages/mio.jpg',
      '/compimages/mio2.jpg',
      '/compimages/mio3.jpg',
      '/compimages/mio4.jpg',
      '/compimages/mio5.jpg',
      '/compimages/mio6.jpg',
    ]
  },
  

  {
    id: 3,
    name: 'Smart India Hackathon',
    year: '2024',
    achievement: '',
    image: '/compimages/sih.jpg',
    description: 'National level hackathon focused on solving real-world problems using technology.',
    content: ["Smart India Hackathon (SIH) is a prestigious nationwide innovation challenge initiated by the Government of India. It invites students from across the country to develop solutions for real-world problems posed by various ministries, industries, and government bodies. SIH encourages technological innovation, teamwork, and problem-solving under time-bound conditions.",
      "Team 'Anusandhan' of the Robotics Society, VSSUT, Burla, successfully reached the grand finale of the Smart India Hackathon 2024, with their innovative project, 'Student Innovation', showcasing India's rich cultural heritage and traditions.",
      
      "SIH 2024 – Grand Finalists",
          "• Sustained our national-level presence, reaffirming our commitment to excellence and problem-solving.",

      "SIH 2023 – Grand Finalists",
          "• Continued our legacy of innovation with impactful solutions to real-world problems.",
      
      "SIH 2022 – Grand Finalists",
          "• Demonstrated consistent performance by securing a position among the top teams in the country.",

       "SIH 2020 – Winners",
          "• Marking a significant milestone, our team emerged as winners at the national level, showcasing innovative thinking and technical excellence.",

       ],
    gallery: [
       '/compimages/sih1.jpg',
      '/compimages/sih2.jpg',
      '/compimages/sih3.jpg',
      '/compimages/sih4.jpg',
      '/compimages/sih5.jpg',
      '/compimages/sih6.jpg',
      '/compimages/sih7.jpg',
      '/compimages/sih8.jpg',
      '/compimages/sih9.jpg',
      '/compimages/sih10.jpg',
      '/compimages/sih11.jpg',
      '/compimages/sih12.jpg',
      '/compimages/sih13.jpg'
    ]
  },

  {
    id: 2,
    name: 'Innovision at NIT Rourkela',
    year: '2024',
    achievement: '',
    image: '/compimages/inno7.jpg',
    description: 'Technical fest competition showcasing innovative robotics projects.',
    content: ['2024',
      'Runners-Up – INNOVISION',


      '2018',
      '• 1st prize in Line following event',
      '• 1st prize in Hoverpod',
      '• 1st prize in Balance Bot event',
      '• 1st prize in Image Processing event',
      '• 2nd prize again in the Image Processing event.',

      '2015',
      '• 1st Prize – TRED-O-QUEST (INNOVISION, NIT Rourkela)',
      '• 2nd Prize – INNOVISION (NIT Rourkela)',
      '• 3rd Prize – ROBOVENTURE (INNOVISION, NIT Rourkela)',

      '2014',
      '• 1st Prize – TRED-O-QUEST (INNOVISION, NIT Rourkela)',
      '• 2nd Prize – INNOVISION (NIT Rourkela)',
      '• 3rd Prize – ROBOVENTURE (INNOVISION, NIT Rourkela)',

      '2013',
      '• 2nd Prize – INNOVISION (NIT Rourkela)',
      '• 3rd Prize – INNOVISION (NIT Rourkela)',

      '2012',
      '• 1st Prize – INNOVISION (NIT Rourkela)',



    ],
    gallery: [
      '/compimages/inno1.jpg',
      '/compimages/inno2.jpg',
      '/compimages/inno3.jpg',
      '/compimages/inno4.jpg',
      '/compimages/inno5.jpg',
      '/compimages/inno6.jpg',
      '/compimages/inno7.jpg',
      '/compimages/inno8.jpg',
      
    ]
  },
  
  
  // {
  //   id: 5,
  //   name: 'Innovision 2K23',
  //   year: '2023',
  //   achievement: '',
  //   image: '/compimages/inno23.1.png',
  //   description: 'Combat robotics competition featuring custom-built fighting robots.',
  //   content: 'Our combat robot showcased exceptional design and engineering in the RoboWars competition, reaching the quarter-finals.',
  //   gallery: [
  //     '/compimages/inno23.2.jpg',
  //    '/compimages/inno23.3.jpg',
  //    '/compimages/inno23.4.jpg',
  //    '/compimages/inno23.5.jpg',
  //    '/compimages/inno23.6.jpg',
  //    '/compimages/inno23.7.png'
  //   ]
  // },

  {
    id: 8,
    name: 'Innovision at NIT Rourkela',
    year: '2025',
    achievement: '',
    image: '/compimages/inno2025-1.jpg',
    description: 'Technical fest competition showcasing innovative robotics projects.',
    content: ['2025',
      'Runners-Up – INNOVISION',

    ],
    gallery: [
      '/compimages/inno2025-1.jpg',
      '/compimages/inno2025-2.jpg',
      '/compimages/inno2025-3.jpg',
      '/compimages/inno2025-4.jpg',
    ]
  },

  {
    id: 6,
    name: 'E-Yantra',
    year: '2024',
    achievement: '',
    image: '/compimages/eyrc5.jpg',
    description: 'National level hackathon focused on solving real-world problems using technology.',
    content: ["e-Yantra, an initiative by IIT Bombay under the Ministry of Education, is a national-level robotics competition that fosters innovation in embedded systems and real-world problem solving. It provides a project-based learning platform, guiding students through complex challenges in automation, robotics, and AI.",
      
      
      "eYRC 2024 – AIR 7 (IIT Bombay & MHRD Funded)",
          "• Achieved All India Rank 7 in the 2024 edition, reflecting advanced technical proficiency and innovative problem-solving in robotics.",

      "eYRC 2023 – National Finalists",
          "• Successfully qualified for the national finals, showcasing excellence in robotic systems design and task automation.",
      
      "eYRC 2022 – Theme Track Completers",
          "• Accomplished complete execution of the assigned theme track, reflecting strong problem-solving skills and project implementation capabilities.",

       "Top Performers in Embedded Systems Innovation",
          "• Recognized among the top-performing institutions for outstanding contributions in embedded systems and robotics-based innovation challenges.",

        "eYRC 2019 – Stage 2 Qualifiers",
        "• 7 teams from the Robotics Society, VSSUT Burla, successfully qualified for the second stage of E-Yantra 2023, showcasing strong teamwork and technical excellence.",

        "eYRC 2018 – AIR 2 (IIT Bombay & MHRD Funded)",
        "• Secured All India Rank 2 in the E-Yantra Robotics Competition 2023, exhibiting exceptional skills in robotic systems design, embedded systems, and automation.",

        "eYRC 2017 – AIR 2 (IIT Bombay)",
        "• Achieved All India Rank 2 in the 2017 edition of the E-Yantra Robotics Competition, showcasing innovative problem-solving and technical proficiency in robotics.",

        "eYRC 2016 – Team Shortlisting (MHRD Funded)",
        "• 3 teams shortlisted in the MHRD-funded E-Yantra 2022 competition, recognizing impactful contributions and commitment to robotics innovation.",

        "eYRC 2015 – AIR 7 (MHRD Funded)",
        "• Achieved All India Rank 7 in the MHRD-funded E-Yantra Robotics Competition 2015, highlighting innovation and strong technical capabilities in embedded systems and robotics.",



       ],
    gallery: [
       '/compimages/eyantra 1.jpg',
       '/compimages/eyantra.jpg',
       '/compimages/eyrc1.jpg',
       '/compimages/eyrc2.jpg',
       '/compimages/eyrc3.jpg',
       '/compimages/eyrc4.jpg',
       '/compimages/eyrc5.jpg',
    ]
  },
];

const roboconEvents = [
  {
    id: 101, 
    name: 'Robocon 2015',
    year: '2015',
    achievement: 'AIR-27',
    image: '/roboconimages/robocon15.jpg',
    description: "Project:Robominton - An autonomous badminton-playing robot.",
    content: "Robominton is an autonomous badminton-playing robot developed for Robocon 2015 by the VSSUT Robotics Society. Featuring a pneumatic mobility system and precise control algorithms, it showcased advanced motion control and game logic. Built for speed and accuracy, it secured AIR 27 and Rank 1 in Odisha, marking a major achievement for the team.",
    gallery: []
  },
  {
    id: 102, 
    name: 'Robocon 2016',
    year: '2016',
    achievement: 'AIR-20',
    image: '/roboconimages/robocon16.jpg',
    description: "Project:Hybrid Pole Climbing Bot - A versatile robot designed for the Robocon 2016 competition, capable of climbing poles and navigating complex terrains.",
    content: "The Hybrid Pole Climbing Bot, developed for Robocon 2016 by the VSSUT Robotics Society, is a vertical mobility robot using pneumatic actuation to climb poles without external support. Designed for industrial tasks like wind turbine and pipeline inspection, it showcased strong engineering in gravity-defying environments. The bot earned an impressive AIR 20 at the Robocon Nationals, cementing the team’s reputation in robotics innovation.",
    gallery: []
  },
  {
    id: 103, 
    name: 'Robocon 2017',
    year: '2017',
    achievement: 'AIR-6',
    image: '/roboconimages/robocon17.jpg',
    description: "Project: Aerodisc – A disc-launching robot designed for the Robocon 2017 competition.",
    content: "For Robocon 2017, the VSSUT Robotics Society developed a lightweight, holonomic-motion robot with advanced disc-launching capabilities and precise navigation. Built with aluminium channels and powered by planetary motors, pneumatics, and a 32-bit microcontroller, it featured real-time sensing through Kinect, IMU, and color sensors. The bot’s high performance earned it an impressive AIR 6 at the Robocon Nationals.",
    gallery: ['/compimages/robocon8.jpg']
  },
  // {
  //   id: 104,
  //   name: 'Robocon 2014',
  //   year: '2014',
  //   achievement: '',
  //   image: '/roboconimages/robocon14.jpg',
  //   description: "",
  //   content: "",
  //   gallery: []
  // }
];


const CompetitionDetail = () => {
  const { id } = useParams();
  const allEvents = [...competitions, ...roboconEvents];
  const competition = allEvents.find(c => c.id === parseInt(id));

  if (!competition) {
    return (
      <>
        <Navbar />
        <div className="container"><h2>Competition Not Found</h2></div>
      </>
    );
  }

  return (
    <>
      <Navbar />
      <div className="competition-detail">
        <div className="container">
          <h1>{competition.name}</h1>
          <span className="year">{competition.year}</span>
          {competition.achievement && <p className="achievement">{competition.achievement}</p>}
          <p className="description">{competition.description}</p>
          
          <div className="main-image-container">
            <img 
              src={competition.image} 
              alt={competition.name} 
              className="main-image"
            />
          </div>
          
          <div className="content">
            {Array.isArray(competition.content) ? (
              competition.content.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))
            ) : (
              <p>{competition.content}</p>
            )}
          </div>


          {competition.gallery && competition.gallery.length > 0 && (
            <>
              <h2 className="section-header">Gallery</h2>
              <div className="image-gallery">
                {competition.gallery.map((image, index) => (
                  <img 
                    key={index}
                    src={image} 
                    alt={`${competition.name} - Image ${index + 1}`}
                    className="gallery-image"
                  />
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default CompetitionDetail;