import { Link } from 'react-router-dom';
import { useState, useMemo } from 'react';
import Navigation from '../components/Navigation';
import { projects } from '../data/projects';

function TechnicalWork() {
  const [selectedTags, setSelectedTags] = useState([]);

  // filter projects to only include tagged "Technical Work"
  const technicalProjects = projects.filter(project => 
    project.tags.includes("Technical Work")
  );

  // get all unique tags from projects (excluding "Technical Work" itself)
  const availableTags = useMemo(() => {
    const tagSet = new Set();
    technicalProjects.forEach(project => {
      project.tags.forEach(tag => {
        if (tag !== "Technical Work") {
          tagSet.add(tag);
        }
      });
    });
    return Array.from(tagSet).sort();
  }, [technicalProjects]);

  // filter based on selected tags
  const filteredProjects = useMemo(() => {
    if (selectedTags.length === 0) {
      return technicalProjects;
    }
    return technicalProjects.filter(project => 
      selectedTags.every(tag => project.tags.includes(tag))
    );
  }, [selectedTags, technicalProjects]);

  const toggleTag = (tag) => {
    setSelectedTags(prev => 
      prev.includes(tag) 
        ? prev.filter(t => t !== tag)
        : [...prev, tag]
    );
  };

  return (
    <>
      <style>
        {`
          @keyframes spin {
            from {
              transform: rotate(0deg);
            }
            to {
              transform: rotate(360deg);
            }
          }
          .sparkle-spin {
            animation: spin 8s linear infinite;
          }
          
          /* Project cards: stack vertically on small screens while maintaining 2-column grid */
          @media (max-width: 960px) {
            .project-card-content {
              flex-direction: column !important;
            }
            
            .project-card-image {
              width: 100% !important;
              height: 200px !important;
            }
            
            .projects-grid {
              grid-template-columns: repeat(2, 1fr) !important;
            }
          }
        `}
      </style>
      <div className="min-h-screen bg-black">
        {/* nav */}
        <Navigation isHomePage={false} />

        {/* hero */}
        <section className="relative px-6 md:px-12 lg:px-24 xl:px-40 pt-32 pb-4">
          <div className="absolute inset-0" style={{background: 'linear-gradient(to bottom right, rgba(134, 65, 152, 0.3), black, rgba(137, 197, 65, 0.3)'}}></div>
          
          {/* rotating sparkle */}
          <div className="absolute sparkle-spin left-12 lg:left-24 xl:left-55" style={{top: '130px', zIndex: 0, opacity: 0.3}}>
            <svg width="100" height="100" viewBox="0 0 200 200" fill="none">
              <path d="M100 0L110 90L200 100L110 110L100 200L90 110L0 100L90 90L100 0Z" fill="#864198" />
            </svg>
          </div>
          
          <div className="relative max-w-5xl mx-auto text-right">
            <h1 className="text-5xl md:text-6xl mb-4" style={{fontFamily: "'Limelight', sans-serif", color: '#89C541', letterSpacing: '0em'}}>
              Technical Work
            </h1>
            <p className="text-sm mb-8" style={{fontFamily: "'Lora', serif", color: '#fff', maxWidth: '600px', marginLeft: 'auto'}}>
              A collection of my technical projects, including web development, software engineering, and miscellaneous programming.
            </p>
          </div>
        </section>

        {/* filters */}
        <section className="pt-6 pb-0 px-6 bg-black">
          <div className="max-w-5xl mx-auto">
            <div className="mb-6">
              <h3 className="text-lg mb-3" style={{fontFamily: "'Limelight', sans-serif", color: '#864198'}}>
                Filter by Tags
              </h3>
              <div className="flex flex-wrap gap-2">
                {availableTags.map((tag) => (
                  <button
                    key={tag}
                    onClick={() => toggleTag(tag)}
                    className="px-3.5 py-1.5 rounded-full text-xs transition cursor-pointer"
                    style={{
                      backgroundColor: selectedTags.includes(tag) ? 'rgba(134, 65, 152, 0.3)' : 'rgba(137, 197, 65, 0.1)',
                      color: selectedTags.includes(tag) ? '#864198' : '#89C541',
                      border: `1px solid ${selectedTags.includes(tag) ? '#864198' : 'rgba(137, 197, 65, 0.3)'}`,
                      fontFamily: "'Lora', serif"
                    }}
                    onMouseEnter={(e) => {
                      if (!selectedTags.includes(tag)) {
                        e.currentTarget.style.backgroundColor = 'rgba(137, 197, 65, 0.2)';
                        e.currentTarget.style.borderColor = '#89C541';
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (!selectedTags.includes(tag)) {
                        e.currentTarget.style.backgroundColor = 'rgba(137, 197, 65, 0.1)';
                        e.currentTarget.style.borderColor = 'rgba(137, 197, 65, 0.3)';
                      }
                    }}
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* projects */}
        <section className="py-6 px-6 bg-black">
          <div className="max-w-5xl mx-auto">
            {filteredProjects.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-sm" style={{fontFamily: "'Lora', serif", color: '#ccc'}}>
                  No projects match the selected filters.
                </p>
              </div>
            ) : (
              <div className="projects-grid grid md:grid-cols-2 gap-5">
                {filteredProjects.map((project) => (
                  <Link
                    key={project.id}
                    to={project.link}
                    className="rounded-3xl overflow-hidden transition duration-300 group block"
                    style={{
                      backgroundColor: 'rgba(255, 255, 255, 0.03)',
                      border: '1px solid rgba(134, 65, 152, 0.2)',
                      boxShadow: '0 2px 8px rgba(134, 65, 152, 0.1)'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = '#864198';
                      e.currentTarget.style.transform = 'translateY(-3px)';
                      e.currentTarget.style.boxShadow = '0 6px 19px rgba(134, 65, 152, 0.15)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = 'rgba(134, 65, 152, 0.2)';
                      e.currentTarget.style.transform = 'translateY(0)';
                      e.currentTarget.style.boxShadow = '0 2px 8px rgba(0,0,0,0.05)';
                    }}
                  >
                    <div className="project-card-content flex">
                      {/* preview img on left */}
                      <div className="project-card-image w-1/3 flex-shrink-0" style={{backgroundColor: 'rgba(134, 65, 152, 0.1)'}}>
                        <img 
                          src={project.image} 
                          alt={project.title} 
                          className="w-full h-full object-cover"
                        />
                      </div>
                      
                      {/* text content on right */}
                      <div className="flex-1 p-6">
                        <div className="flex justify-between items-start mb-2">
                          <h3 className="text-2xl group-hover:text-[#89C541] transition" style={{fontFamily: "'Limelight', sans-serif", color: '#89C541', letterSpacing: '0em'}}>
                            {project.title}
                          </h3>
                          <svg className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{color: '#864198'}}>
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg>
                        </div>
                        <p className="text-xs mb-4" style={{fontFamily: "'Lora', serif", color: '#ccc'}}>
                          {project.description}
                        </p>
                        <div className="flex flex-wrap gap-2 mb-4">
                          {project.tags.map((tag, index) => (
                            <span 
                              key={index}
                              className="px-3.5 py-1 rounded-full text-xs"
                              style={{
                                backgroundColor: 'rgba(137, 197, 65, 0.1)',
                                color: '#89C541',
                                border: '1px solid rgba(137, 197, 65, 0.3)',
                                fontFamily: "'Lora', serif"
                              }}
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                        <span 
                          className="inline-flex items-center font-semibold transition text-sm"
                          style={{fontFamily: "'Lora', serif", color: '#864198'}}
                        >
                          Learn More
                          <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                          </svg>
                        </span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* foot */}
        <footer className="py-6 px-6 bg-black" style={{borderTop: '1px solid rgba(134, 65, 152, 0.2)'}}>
          <div className="max-w-7xl mx-auto text-center" style={{fontFamily: "'Lora', serif", color: '#ccc'}}>
            <p>&copy; 2026 Kara Welch. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </>
  );
}

export default TechnicalWork;
