import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Navigation from '../components/Navigation';

function AboutMe() {
  const aboutData = {
    title: "About Me",
    tagline: "A shallow dive into the person behind the curtain. Or something.",
    
    overview: [
      "Nice to meet you! I'm Kara, a multifaceted creative technologist and a recent graduate from Kennesaw State University with a dual degree in Computer Science and Graphic Design. My unique background allows me to bridge the gap between complex technical architecture and user centric design. I am perfectly equipped for full stack development and passionate about building digital products that are as high performing as they are visually stunning.",
      "Beyond my technical work, I am an active artist. I run an Etsy shop where I sell my art, also attending craft fairs as a seller across Georgia, which has given me a practical understanding of branding and entrepreneurship. In addition to this, my creative drive extends into game development, where I use Unity to build personal projects from the ground up by creating my own code, assets, and sound design.",
      "I thrive in environments where logic meets creativity, and I enjoy the challenge of translating abstract ideas into functional and beautiful software. Whether I am architecting a React application or designing a brand identity in the Adobe Creative Suite, I bring a disciplined and detail oriented approach to every project. My goal is to use my diverse toolkit to create impactful digital experiences that resonate with users on every level."
    ],
    
    divider: "/divide.png",
    
    education: [
      "I earned my Bachelor of Science in Computer Science in 2025, a year after obtaining a Bachelor of Fine Arts in Graphic Design in 2024 from Kennesaw State University.",
      "During my time on campus, I was an active member of the Animation Club, and a frequent participant in local game jams, where I honed my skills in rapid prototyping and collaborative development.",
      "A highlight of my academic career was winning first place in the college's 24-hour animation contest in 2023, which tested my ability to deliver high quality creative work under strict time constraints."
    ],
    
    experience: [
      "My professional background is rooted in my freelance work, where I have managed entire project lifecycles from initial Figma wireframes to final deployment.",
      "A couple of my key projects include a mind mapping prototype that I later fleshed out into a full scale productivity tool, as well as a complete portfolio website redesign for animator Daniel Stevenson.",
      "Throughout my freelance career, I have successfully delivered a wide variety of products, translating complex client requirements into scalable and aesthetic code."
    ],
        uniqueQualities: [
      {
        title: "Dual Discipline Expertise",
        description: "My ability to speak both tech and design languages ensures that the creative vision is never lost in translation during the implementation phase."
      },
      {
        title: "Full Stack Proficiency",
        description: "My comfort with both backend logic and frontend styling allows me to build cohesive applications without the need for a middleman between design and code."
      },
      {
        title: "Creative Problem Solving",
        description: "My experience as a professional artist and independent game developer gives me a unique perspective on how to tackle technical challenges with innovative and user focused solutions."
      }
    ],
        skills: [
      "Programming Languages: C#, Java, Python, JavaScript, TypeScript, and SQL",
      "Web Technologies: React, Vue, HTML5, CSS3, and Tailwind CSS",
      "Design Software: Figma, Adobe Photoshop, Illustrator, InDesign, and After Effects",
      "Development Tools: Unity, Android Studio, Git, GitHub, and MS SQL Server"
    ]
  };

  const {
    title,
    tagline,
    overview,
    divider,
    education,
    experience,
    uniqueQualities,
    skills
  } = aboutData;

  return (
    <div className="min-h-screen bg-black">
      {/* nav */}
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
          </div>
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

      {/* education & experience sections */}
      {(education || experience) && (
        <section className="pt-0 pb-6 px-6 md:px-12 lg:px-24 bg-black">
          <div className="max-w-5xl mx-auto">
            <div className="flex flex-col lg:flex-row gap-6 lg:gap-10 items-center">
              {education && (
                <div className="flex-1 text-right">
                  <h3 className="text-2xl mb-3" style={{fontFamily: "'Limelight', sans-serif", color: '#89C541'}}>
                    Education
                  </h3>
                  {Array.isArray(education) ? (
                    education.map((sentence, index) => (
                      <p key={index} className="text-sm leading-relaxed mb-3" style={{fontFamily: "'Lora', serif", color: '#ccc'}}>
                        {sentence}
                      </p>
                    ))
                  ) : (
                    <p className="text-sm leading-relaxed" style={{fontFamily: "'Lora', serif", color: '#ccc'}}>
                      {education}
                    </p>
                  )}
                </div>
              )}
              
              {/* Image divider */}
              {education && experience && (
                <div className="hidden lg:flex justify-center flex-shrink-0">
                  <img src="/divide2.png" alt="Divider" style={{height: '204px', width: 'auto', opacity: 0.8}} />
                </div>
              )}
              
              {experience && (
                <div className="flex-1">
                  <h3 className="text-2xl mb-3" style={{fontFamily: "'Limelight', sans-serif", color: '#89C541'}}>
                    Experience
                  </h3>
                  {Array.isArray(experience) ? (
                    experience.map((sentence, index) => (
                      <p key={index} className="text-sm leading-relaxed mb-3" style={{fontFamily: "'Lora', serif", color: '#ccc'}}>
                        {sentence}
                      </p>
                    ))
                  ) : (
                    <p className="text-sm leading-relaxed" style={{fontFamily: "'Lora', serif", color: '#ccc'}}>
                      {experience}
                    </p>
                  )}
                </div>
              )}
            </div>
          </div>
        </section>
      )}

      {/* unique qualities section */}
      {uniqueQualities && uniqueQualities.length > 0 && (
        <section className="py-12 px-6 md:px-12 lg:px-24 bg-black">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl mb-10 text-center" style={{fontFamily: "'Limelight', sans-serif", color: '#89C541'}}>
              Unique Qualities
            </h2>
            <div className="flex flex-col md:flex-row gap-6 md:gap-0 items-start justify-center">
              {uniqueQualities.map((quality, index) => (
                <>
                  <div key={`quality-${index}`} className="flex-1 md:px-5">
                    <h3 className="text-xl mb-3" style={{fontFamily: "'Limelight', sans-serif", color: '#864198'}}>
                      {quality.title}
                    </h3>
                    <p className="text-sm leading-relaxed" style={{fontFamily: "'Lora', serif", color: '#ccc'}}>
                      {quality.description}
                    </p>
                  </div>
                  {index < uniqueQualities.length - 1 && (
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

      {/* skills section */}
      {skills && skills.length > 0 && (
        <section className="py-12 px-6 md:px-12 lg:px-24 bg-black">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl mb-6" style={{fontFamily: "'Limelight', sans-serif", color: '#89C541'}}>
              Skills
            </h2>
            <ul className="space-y-3">
              {skills.map((skill, index) => (
                <li key={index} className="flex items-start gap-3">
                  <svg className="w-5 h-5 flex-shrink-0 mt-0.5" fill="none" stroke="#864198" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <p className="text-sm leading-relaxed" style={{fontFamily: "'Lora', serif", color: '#ccc'}}>
                    {skill}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      {/* back to home */}
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
            Back to Home
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

export default AboutMe;
