import { useState } from 'react';
import '../styles/animations.css';

const projectsData = [
  {
    id: 1,
    title: 'E-commerce Platform',
    description: 'A full-stack e-commerce solution with React, tailwind,.',
    tags: ['React',  'talwind','node.js' ],
    image: '/ecommerce.png',
    links: {
      
      code: '#'
    }
  },
  
  {
    id: 2,
    title: 'Resturant App',
    description: 'A productivity application for distribution of food',
    tags: ['React', 'tailwind', 'Material ', ],
    image: '/resturant.png',
    links: {
      
      code: 'https://react-main-rust.vercel.app/'
    }
  },
  {
    id: 3,
    title: 'AI translator',
    description: 'AI translator application for mastering your language.',
    tags: [' Tailwhind', ' JavaScript', 'CSS3'],
    image: '/master lanquage.png',
    links: {
      
      code: 'https://patrickgowon.github.io/ailearningweb/'
    }
  },
  {
    id: 4,
    description: 'A responsive portfolio website to showcase creative work and skills.',
    tags: ['HTML5', 'CSS3', 'JavaScript', ],
    image: 'portfolio.png',
    links: {
     
      code: 'https://portfolioo-azure-one.vercel.app/'
    }
  },
  {
    id: 5,
    title: 'weather app ',
    description: 'Weather app solution with React, tailwind,.',
    tags: ['React',  'html','css' ],
    image: '/weather.png',
    links: {
      
      code: 'https://weather-87r8.vercel.app/'
    }
  },
];




const Projects = () => {
  const [filter, setFilter] = useState('All');

  const filters = ['All', 'React', 'JavaScript', 'Node.js', 'API'];

  const filteredProjects = filter === 'All' 
    ? projectsData 
    : projectsData.filter(project => project.tags.includes(filter));

  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title slide-in">My Projects</h2>
          <p className="section-subtitle fade-in">Some of my recent work</p>
        </div>
        
        <div className="projects-filters fade-in">
          {filters.map((item) => (
            <button
              key={item}
              className={`filter-btn ${filter === item ? 'active' : ''}` }
              onClick={() => setFilter(item)}
            >
              {item}
            </button>
          ))}
        </div>
        
        <div className="projects-grid">
          {filteredProjects.map((project, index) => (
            <div 
              key={project.id} 
              className="project-card card fade-in"
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              <div className="project-image">
              
                <img src={project.image} alt={project.title} />
              

                <div className="placeholder-image"></div>
              </div>
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-tags">
                  {project.tags.map(tag => (
                    <span key={tag} className="tag">{tag}</span>
                  ))}
                </div>
                <div className="project-links">
                  
                  <a href={project.links.code} className="btn">View site</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;