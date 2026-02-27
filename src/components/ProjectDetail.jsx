import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import Navigation from './Navigation';

function ProjectDetail({ data }) {
  const {
    title,
    tagline,
    youtubeUrl,
    overview,
    divider = "/divide.png",
    role,
    timeline,
    year,
    technologies,
    challenge,
    solution,
    features,
    images,
    outcomes,
    liveUrl,
    githubUrl
  } = data;

  // convert YouTube URL to embed URL
  const getYouTubeEmbedUrl = (url) => {
    if (!url) return null;
    
    // handle diff YouTube URL formats
    let videoId = null;
    
    // Format: https://www.youtube.com/watch?v=VIDEO_ID
    if (url.includes('youtube.com/watch')) {
      const urlParams = new URLSearchParams(new URL(url).search);
      videoId = urlParams.get('v');
    }
    // Format: https://youtu.be/VIDEO_ID
    else if (url.includes('youtu.be/')) {
      videoId = url.split('youtu.be/')[1]?.split('?')[0];
    }
    // Format: https://www.youtube.com/embed/VIDEO_ID (already embed format)
    else if (url.includes('youtube.com/embed/')) {
      return url;
    }
    
    return videoId ? `https://www.youtube.com/embed/${videoId}` : null;
  };

  const [lightboxImage, setLightboxImage] = useState(null);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const openLightbox = (image, index) => {
    setLightboxImage(image);
    setLightboxIndex(index);
  };

  const closeLightbox = () => {
    setLightboxImage(null);
  };

  const goToPrevious = () => {
    const newIndex = lightboxIndex === 0 ? images.length - 1 : lightboxIndex - 1;
    setLightboxIndex(newIndex);
    setLightboxImage(images[newIndex]);
  };

  const goToNext = () => {
    const newIndex = lightboxIndex === images.length - 1 ? 0 : lightboxIndex + 1;
    setLightboxIndex(newIndex);
    setLightboxImage(images[newIndex]);
  };

  // ESC key to close lightbox and arrow keys for nav
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!lightboxImage) return;
      
      if (e.key === 'Escape') {
        closeLightbox();
      } else if (e.key === 'ArrowLeft' && images && images.length > 1) {
        const newIndex = lightboxIndex === 0 ? images.length - 1 : lightboxIndex - 1;
        setLightboxIndex(newIndex);
        setLightboxImage(images[newIndex]);
      } else if (e.key === 'ArrowRight' && images && images.length > 1) {
        const newIndex = lightboxIndex === images.length - 1 ? 0 : lightboxIndex + 1;
        setLightboxIndex(newIndex);
        setLightboxImage(images[newIndex]);
      }
    };

    if (lightboxImage) {
      document.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden'; // prevents scrolling when lightbox is open
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [lightboxImage, lightboxIndex, images]);

  return (
    <div className="min-h-screen bg-black">
      {/* lightbox modal */}
      {lightboxImage && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center p-8"
          style={{
            backgroundColor: 'rgba(0, 0, 0, 0.95)',
            backdropFilter: 'blur(8px)'
          }}
          onClick={closeLightbox}
        >
          {/* close button, top right */}
          <button
            className="absolute top-6 right-6 text-white hover:text-[#89C541] transition"
            onClick={closeLightbox}
            style={{ 
              cursor: 'pointer', 
              zIndex: 101,
              backgroundColor: 'rgba(0, 0, 0, 0.7)',
              width: '48px',
              height: '48px',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              border: '1px solid rgba(255, 255, 255, 0.2)'
            }}
          >
            <span style={{ fontSize: '2.8rem', lineHeight: 1, transform: 'translateY(-5px)', display: 'block' }}>×</span>
          </button>

          {/* previous arrow, left */}
          {images && images.length > 1 && (
            <button
              className="absolute left-6 text-white hover:text-[#89C541] transition"
              onClick={(e) => {
                e.stopPropagation();
                goToPrevious();
              }}
              style={{ 
                cursor: 'pointer', 
                zIndex: 101,
                backgroundColor: 'rgba(0, 0, 0, 0.7)',
                width: '40px',
                height: '40px',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                border: '1px solid rgba(255, 255, 255, 0.2)'
              }}
            >
              <span style={{ fontSize: '2.4rem', fontFamily: "'Lora', serif", lineHeight: 1, transform: 'translateY(-4px) translateX(-1.5px)', display: 'block' }}>‹</span>
            </button>
          )}

          {/* image, center */}
          <img 
            src={lightboxImage.src} 
            alt={lightboxImage.alt}
            className="max-w-full max-h-full object-contain"
            onClick={(e) => e.stopPropagation()}
            style={{ cursor: 'default' }}
          />

          {/* next arrow, right */}
          {images && images.length > 1 && (
            <button
              className="absolute right-6 text-white hover:text-[#89C541] transition"
              onClick={(e) => {
                e.stopPropagation();
                goToNext();
              }}
              style={{ 
                cursor: 'pointer', 
                zIndex: 101,
                backgroundColor: 'rgba(0, 0, 0, 0.7)',
                width: '40px',
                height: '40px',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                border: '1px solid rgba(255, 255, 255, 0.2)'
              }}
            >
              <span style={{ fontSize: '2.4rem', fontFamily: "'Lora', serif", lineHeight: 1, transform: 'translateY(-4px) translateX(1.5px)', display: 'block' }}>›</span>
            </button>
          )}

          {/* image counter, bottom */}
          {images && images.length > 1 && (
            <div 
              className="absolute bottom-6 left-1/2 transform -translate-x-1/2 text-white"
              style={{
                fontFamily: "'Lora', serif",
                fontSize: '0.8rem',
                zIndex: 101,
                backgroundColor: 'rgba(0, 0, 0, 0.7)',
                padding: '6px 16px',
                borderRadius: '16px',
                border: '1px solid rgba(255, 255, 255, 0.2)'
              }}
            >
              {lightboxIndex + 1} / {images.length}
            </div>
          )}
        </div>
      )}

      {/* Navigation */}
      <Navigation isHomePage={false} />

      {/* hero section */}
      <section className="relative pt-34 pb-12 px-6 md:px-12 lg:px-24 overflow-hidden">
        <div className="absolute inset-0" style={{background: 'linear-gradient(to bottom right, rgba(134, 65, 152, 0.3), black, rgba(137, 197, 65, 0.3)'}}></div>
        
        <div className="relative max-w-5xl mx-auto">
          <div className="mb-10">
            <h1 className="text-5xl md:text-6xl mb-3" style={{fontFamily: "'Limelight', sans-serif", color: '#89C541', letterSpacing: '-0.02em'}}>
              {title}
            </h1>
            {tagline && (
              <p className="text-sm md:text-base mb-6" style={{fontFamily: "'Lora', serif", color: '#ccc', maxWidth: '50%'}}>
                {tagline}
              </p>
            )}
            
            {/* meta info */}
            <div className="flex flex-wrap gap-6 mb-6">
              {role && (
                <div>
                  <p className="text-xs mb-0.5" style={{fontFamily: "'Lora', serif", color: '#89C541'}}>Role</p>
                  <p className="text-base" style={{fontFamily: "'Lora', serif", color: '#fff'}}>{role}</p>
                </div>
              )}
              {timeline && (
                <div>
                  <p className="text-xs mb-0.5" style={{fontFamily: "'Lora', serif", color: '#89C541'}}>Timeline</p>
                  <p className="text-base" style={{fontFamily: "'Lora', serif", color: '#fff'}}>{timeline}</p>
                </div>
              )}
              {year && (
                <div>
                  <p className="text-xs mb-0.5" style={{fontFamily: "'Lora', serif", color: '#89C541'}}>Year</p>
                  <p className="text-base" style={{fontFamily: "'Lora', serif", color: '#fff'}}>{year}</p>
                </div>
              )}
            </div>

            {/* technologies */}
            {technologies && technologies.length > 0 && (
              <div className="flex flex-wrap gap-1.5 mb-6">
                {technologies.map((tech, index) => (
                  <span 
                    key={index}
                    className="px-3 py-1.5 rounded-full text-xs"
                    style={{
                      backgroundColor: 'rgba(137, 197, 65, 0.1)',
                      color: '#89C541',
                      border: '1px solid rgba(137, 197, 65, 0.3)',
                      fontFamily: "'Lora', serif"
                    }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            )}

            {/* action buttons */}
            <div className="flex gap-3">
              {liveUrl && liveUrl !== '#' && (
                <a 
                  href={liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full transition"
                  style={{fontFamily: "'Lora', serif", backgroundColor: '#864198', color: '#fff'}}
                  onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#89C541'}
                  onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#864198'}
                >
                  View Live Site
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                    <polyline points="15 3 21 3 21 9"></polyline>
                    <line x1="10" y1="14" x2="21" y2="3"></line>
                  </svg>
                </a>
              )}
              {githubUrl && githubUrl !== '#' && (
                <a 
                  href={githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full transition"
                  style={{
                    fontFamily: "'Lora', serif", 
                    backgroundColor: 'transparent', 
                    color: '#89C541',
                    border: '1px solid rgba(137, 197, 65, 0.3)'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = 'rgba(137, 197, 65, 0.1)';
                    e.currentTarget.style.borderColor = '#89C541';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = 'transparent';
                    e.currentTarget.style.borderColor = 'rgba(137, 197, 65, 0.3)';
                  }}
                >
                  View on GitHub
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </a>
              )}
            </div>
          </div>

          {/* YouTube video embed */}
          {youtubeUrl && (
            <div className="rounded-2xl overflow-hidden" style={{
              border: '1px solid rgba(134, 65, 152, 0.3)',
              boxShadow: '0 8px 32px rgba(134, 65, 152, 0.2)',
              position: 'relative',
              paddingBottom: '56.25%', // 16:9 aspect ratio
              height: 0
            }}>
              <iframe 
                src={getYouTubeEmbedUrl(youtubeUrl)}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  backgroundColor: '#000'
                }}
              />
            </div>
          )}
        </div>
      </section>

      {/* overview */}
      {overview && (
        <section className="py-12 px-6 md:px-12 lg:px-24 bg-black">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl mb-5" style={{fontFamily: "'Limelight', sans-serif", color: '#89C541'}}>
              Overview
            </h2>
            {Array.isArray(overview) ? (
              overview.map((paragraph, index) => (
                <p key={index} className="text-sm leading-relaxed mb-5" style={{fontFamily: "'Lora', serif", color: '#ccc'}}>
                  {paragraph}
                </p>
              ))
            ) : (
              <p className="text-sm leading-relaxed mb-6" style={{fontFamily: "'Lora', serif", color: '#ccc'}}>
                {overview}
              </p>
            )}
            {divider && (
              <div className="flex justify-center mt-10">
                <img src={divider} alt="Section divider" className="w-[25.6rem] h-auto" />
              </div>
            )}
          </div>
        </section>
      )}

      {/* challenge & solution sections */}
      {(challenge || solution) && (
        <section className="pt-0 pb-6 px-6 md:px-12 lg:px-24 bg-black">
          <div className="max-w-5xl mx-auto">
            <div className="flex flex-col lg:flex-row gap-6 lg:gap-10 items-center">
              {challenge && (
                <div className="flex-1 text-right">
                  <h3 className="text-2xl mb-3" style={{fontFamily: "'Limelight', sans-serif", color: '#89C541'}}>
                    The Challenge
                  </h3>
                  <p className="text-sm leading-relaxed" style={{fontFamily: "'Lora', serif", color: '#ccc'}}>
                    {challenge}
                  </p>
                </div>
              )}
              
              {/* Image divider */}
              {challenge && solution && (
                <div className="hidden lg:flex justify-center flex-shrink-0">
                  <img src="/divide2.png" alt="Divider" style={{height: '204px', width: 'auto', opacity: 0.8}} />
                </div>
              )}
              
              {solution && (
                <div className="flex-1">
                  <h3 className="text-2xl mb-3" style={{fontFamily: "'Limelight', sans-serif", color: '#89C541'}}>
                    The Solution
                  </h3>
                  <p className="text-sm leading-relaxed" style={{fontFamily: "'Lora', serif", color: '#ccc'}}>
                    {solution}
                  </p>
                </div>
              )}
            </div>
          </div>
        </section>
      )}

      {/* key features section */}
      {features && features.length > 0 && (
        <section className="py-12 px-6 md:px-12 lg:px-24 bg-black">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl mb-10 text-center" style={{fontFamily: "'Limelight', sans-serif", color: '#89C541'}}>
              Key Features
            </h2>
            <div className="flex flex-col md:flex-row gap-6 md:gap-0 items-start justify-center">
              {features.map((feature, index) => (
                <>
                  <div key={`feature-${index}`} className="flex-1 md:px-5">
                    <h3 className="text-xl mb-3" style={{fontFamily: "'Limelight', sans-serif", color: '#864198'}}>
                      {feature.title}
                    </h3>
                    <p className="text-sm leading-relaxed" style={{fontFamily: "'Lora', serif", color: '#ccc'}}>
                      {feature.description}
                    </p>
                  </div>
                  {index < features.length - 1 && (
                    <div key={`divider-${index}`} className="hidden md:flex justify-center flex-shrink-0 px-3">
                      <div className="w-px" style={{height: '104px', background: 'linear-gradient(to bottom, transparent, #864198, transparent)'}}></div>
                    </div>
                  )}
                </>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* screenshot gallery */}
      {images && images.length > 0 && (
        <section className="py-12 px-6 md:px-12 lg:px-24 bg-black">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl mb-10 text-center" style={{fontFamily: "'Limelight', sans-serif", color: '#89C541'}}>
              Project Showcase
            </h2>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: '1.2rem',
              gridAutoRows: '200px'
            }}>
              {images.map((image, index) => {
                // diff grid patterns
                const spanPatterns = [
                  { row: 1, col: 1 },  // standard
                  { row: 1, col: 1 },  // standard
                  { row: 2, col: 1 },  // tall
                  { row: 1, col: 2 },  // wide
                  { row: 1, col: 1 },  // standard
                  { row: 1, col: 1 },  // standard
                  { row: 1, col: 2 },  // wide
                  { row: 2, col: 1 }   // tall
                ];
                const pattern = spanPatterns[index % spanPatterns.length];
                
                return (
                  <div 
                    key={index} 
                    className="overflow-hidden" 
                    style={{
                      gridRow: `span ${pattern.row}`,
                      gridColumn: `span ${pattern.col}`,
                      position: 'relative',
                      height: '100%',
                      cursor: 'pointer'
                    }}
                    onClick={() => openLightbox(image, index)}
                  >
                    <img 
                      src={image.src} 
                      alt={image.alt} 
                      className="transition" 
                      style={{
                        display: 'block',
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        objectPosition: 'center'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.transform = 'scale(1.05)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform = 'scale(1)';
                      }}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* outcomes */}
      {outcomes && outcomes.length > 0 && (
        <section className="py-12 px-6 md:px-12 lg:px-24 bg-black">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl mb-6" style={{fontFamily: "'Limelight', sans-serif", color: '#89C541'}}>
              Goals Met & Lessons Learned
            </h2>
            <ul className="space-y-3">
              {outcomes.map((outcome, index) => (
                <li key={index} className="flex items-start gap-3">
                  <svg className="w-5 h-5 flex-shrink-0 mt-0.5" fill="none" stroke="#864198" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <p className="text-sm leading-relaxed" style={{fontFamily: "'Lora', serif", color: '#ccc'}}>
                    {outcome}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      {/* next project nav */}
      <section className="py-12 px-6 md:px-12 lg:px-24 bg-black" style={{borderTop: '1px solid rgba(134, 65, 152, 0.2)'}}>
        <div className="max-w-5xl mx-auto text-center">
          <Link 
            to="/"
            className="inline-flex items-center gap-1.5 px-6 py-3 rounded-full transition text-base"
            style={{fontFamily: "'Lora', serif", backgroundColor: '#864198', color: '#fff'}}
            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#89C541'}
            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#864198'}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M19 12H5M12 19l-7-7 7-7"/>
            </svg>
            View All Projects
          </Link>
        </div>
      </section>

      {/* footer */}
      <footer className="py-6 px-6 md:px-12 lg:px-24 bg-black" style={{borderTop: '1px solid rgba(134, 65, 152, 0.2)'}}>
        <div className="max-w-5xl mx-auto text-center" style={{fontFamily: "'Lora', serif", color: '#ccc'}}>
          <p>&copy; 2026 Kara Welch. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

ProjectDetail.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string.isRequired,
    tagline: PropTypes.string,
    youtubeUrl: PropTypes.string,
    overview: PropTypes.oneOfType([PropTypes.string, PropTypes.arrayOf(PropTypes.string)]),
    divider: PropTypes.string,
    role: PropTypes.string,
    timeline: PropTypes.string,
    year: PropTypes.string,
    technologies: PropTypes.arrayOf(PropTypes.string),
    challenge: PropTypes.string,
    solution: PropTypes.string,
    features: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
      })
    ),
    images: PropTypes.arrayOf(
      PropTypes.shape({
        src: PropTypes.string.isRequired,
        alt: PropTypes.string.isRequired,
        caption: PropTypes.string,
      })
    ),
    outcomes: PropTypes.arrayOf(PropTypes.string),
    liveUrl: PropTypes.string,
    githubUrl: PropTypes.string,
  }).isRequired,
};

export default ProjectDetail;
