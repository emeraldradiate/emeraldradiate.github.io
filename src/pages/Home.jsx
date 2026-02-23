import { Link } from 'react-router-dom';
import Navigation from '../components/Navigation';
import { projects } from '../data/projects';

function Home() {
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
          
          /* Hide hero photo on small screens */
          @media (max-width: 960px) {
            .hero-photo {
              display: none;
            }
            
            /* Switch to single column layout at same breakpoint */
            .hero-grid {
              grid-template-columns: 1fr !important;
            }
            
            /* Make text section fill more space when photo is hidden */
            .hero-text-content {
              max-width: 100% !important;
              margin-left: 0 !important;
              padding-left: 1rem;
              padding-right: 1rem;
            }
            
            .hero-text-content p {
              max-width: 100% !important;
            }
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
        {/* Navigation */}
        <Navigation isHomePage={true} />

        {/* hero section */}
        <section className="relative flex items-center px-6 md:px-12 lg:px-24 xl:px-40 pt-32 pb-12 overflow-hidden">
        {/* gradient bg */}
        <div className="absolute inset-0" style={{background: 'linear-gradient(to bottom right, rgba(134, 65, 152, 0.3), black, rgba(137, 197, 65, 0.3)'}}></div>
        
        <div className="relative max-w-7xl mx-auto w-full hero-grid grid md:grid-cols-2 gap-12 items-center">
          {/* text content, left */}
          <div className="hero-text-content space-y-6" style={{marginLeft: 'clamp(1rem, 5vw, 5rem)'}}>
            <div className="relative">
              {/* rotating sparkle :) */}
              <div className="absolute top-0 sparkle-spin" style={{opacity: 0.3, left: '-52px'}}>
                <svg width="160" height="160" viewBox="0 0 200 200" fill="none">
                  <path d="M100 0L110 90L200 100L110 110L100 200L90 110L0 100L90 90L100 0Z" fill="#864198" />
                </svg>
              </div>
              
              <h2 className="relative text-6xl md:text-7xl leading-tight mb-2" style={{fontFamily: "'Limelight', sans-serif", color: '#89C541', letterSpacing: '-0.05em', marginLeft: '-6px'}}>
                Hello,<br/>
                I'm Kara!
              </h2>
              <p className="text-sm leading-relaxed mb-3" style={{fontFamily: "'Lora', serif", color: '#fff', maxWidth: '400px'}}>
                With a dual degree in Computer Science and Graphic Design, I thrive in the space where technical logic meets human-centered design.
              </p>
              <p className="text-sm leading-relaxed mb-6" style={{fontFamily: "'Lora', serif", color: '#fff', maxWidth: '400px'}}>
                I have spent eight years bridging the gap between engineering constraints and brand aesthetics, ensuring products are both powerful under the hood, as well as intuitive and accessible on the surface.
              </p>
              <a href="#contact" className="inline-flex items-center gap-2 px-6 py-3 rounded-full transition group" style={{fontFamily: "'Lora', serif", backgroundColor: '#864198', color: '#fff', fontSize: '14px'}} onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#89C541'} onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#864198'}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="11" cy="11" r="8"></circle>
                  <path d="m21 21-4.35-4.35"></path>
                </svg>
                knwelch00@yahoo.com
              </a>
            </div>
          </div>

          {/* photo with bg txt */}
          <div className="hero-photo relative flex justify-start items-center" style={{marginLeft: 'clamp(1rem, 7.5vw, 8rem)'}}>
            {/* photo container */}
            <div className="relative" style={{width: '400px', height: '400px'}}>
              
              {/* left brain text */}
              <p className="absolute bottom-4 left-4 text-xs leading-relaxed" style={{
                fontFamily: "'Lora', serif",
                color: '#89C541',
                maxWidth: '224px',
                zIndex: 0
              }}>
                Web Design<br />Python<br />CSS<br />JavaScript<br />UI/UX Design<br />Python<br />C#<br />Java<br />Full-Stack Development<br />React<br />Vue.js<br />React Native<br />Front End Development<br />
              </p>
              
              {/* right brain text */}
              <p className="absolute top-4 right-4 text-xs leading-relaxed text-right" style={{
                fontFamily: "'Lora', serif",
                color: '#89C541',
                maxWidth: '224px',
                zIndex: 0
              }}>
                Digital Illustration<br />Character Design<br />2D Animation<br />Game Design<br />Graphic Design<br />Adobe Creative Suite<br />Photoshop<br />InDesign<br />Illustrator<br />Figma<br />Typography<br />Logo Design<br />Branding<br />
              </p>
              
              <img src="/SIDE.png" alt="Kara Welch" className="w-full h-full object-contain relative" style={{zIndex: 1}} />
            </div>
          </div>
        </div>
      </section>

      {/* projects!! */}
      <section id="projects" className="py-12 px-6 bg-black">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl mb-3" style={{fontFamily: "'Limelight', sans-serif", color: '#89C541', letterSpacing: '0.0em'}}>Featured Projects</h2>
            <p className="text-sm" style={{fontFamily: "'Lora', serif", color: '#fff'}}>
              A collection of recent work that showcases my technical and creative abilities.
            </p>
          </div>

          <div className="projects-grid grid md:grid-cols-2 gap-5">
            {projects.map((project) => (
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
        </div>
      </section>

      {/* footer */}
      <footer className="py-6 px-6 bg-black" style={{borderTop: '1px solid rgba(134, 65, 152, 0.2)'}}>
        <div className="max-w-7xl mx-auto text-center" style={{fontFamily: "'Lora', serif", color: '#ccc'}}>
          <p>&copy; 2026 Kara Welch. All rights reserved.</p>
        </div>
      </footer>
    </div>
    </>
  )
}

export default Home;
