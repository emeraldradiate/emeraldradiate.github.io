import ProjectDetail from '../components/ProjectDetail';

function ArtistPortfolioProject() {
  const projectData = {
    title: "Artist Portfolio Website Redesign",
    tagline: "A SquareSpace website redesign on both mobile and web platforms for an artist client, including five pages with custom CSS.",
    
    youtubeUrl: "https://youtu.be/F3YYB2HI_tE",
    
    overview: [
      "I designed and developed a professional portfolio website for a multidisciplinary artist specializing in 2D animation, storyboarding, and merchandise design. My goal was to create a vibrant digital space that reflected the high energy and creativity of the artist's work. I began the process by establishing a custom brand identity and building a high fidelity prototype in Figma to ensure the client was aligned with the visual direction before development began.",
      "The final live site features a dynamic landing page with a hero section, direct image links to specialized portfolio categories, and a scrollable gallery for miscellaneous art pieces. I built the site using Squarespace per the client's request, allowing an easy to manage backend, and I heavily customized the frontend to break away from standard templates. This included creating dedicated portfolio pages that showcase a mix of video and static imagery alongside descriptive text to provide context for each project.",
      "To capture the client's requested upbeat and cartoony aesthetic, I selected a bold typography pairing of Momentz for impactful headings, and Inter for clean body text. The site uses a color palette of deep blues and vibrant oranges, which I integrated throughout the layout to create a cohesive and professional feel. The result is a fully functional and responsive platform that serves as a central hub for the artist's professional inquiries and creative output."
    ],
    
    divider: "/divide.png",
    
    role: "Designer & Developer",
    timeline: "1 month",
    year: "2026",
    
    technologies: [
      "Graphic Design", 
      "SquareSpace", 
      "CSS", 
      "UI/UX", 
      "Web App", 
      "Mobile Design"
    ],
    
    challenge: "The primary challenge was overcoming the design limitations of the Squarespace platform to create a truly unique and branded user interface. I had to find ways to implement custom visual elements, such as specific text shadows and decorative navigation markers, that were not available through the standard site editor.",
    
    solution: "I solved this by writing extensive custom CSS to override default styles and inject unique design features directly into the site code. I utilized media queries to ensure that complex layout changes, like custom gallery margins and large header text, remained perfectly scaled and readable across both desktop and mobile devices.",
    
    features: [
      {
        title: "Custom Brand Identity",
        description: "A unique visual language featuring the Momentz and Inter font pairing and a curated color palette that matches the artist's creative style."
      },
      {
        title: "Specialized Portfolio Modules",
        description: "Distinct pages for animation, storyboarding, and merchandise that utilize custom layouts to highlight different types of media effectively."
      },
      {
        title: "Enhanced UI Elements",
        description: "Custom CSS styling including vibrant orange text shadows, gradient backgrounds, and star shaped navigation separators that elevate the standard web interface."
      }
    ],
    
    images: [
      { src: "/ap1.png", alt: "Artist portfolio screenshot 1" },
      { src: "/ap2.png", alt: "Artist portfolio screenshot 2" },
      { src: "/ap3.png", alt: "Artist portfolio screenshot 3" },
      { src: "/ap4.png", alt: "Artist portfolio screenshot 4" },
      { src: "/ap5.png", alt: "Artist portfolio screenshot 5" }
    ],
    
    outcomes: [
      "Successfully translated a complex Figma prototype into a live production website with high accuracy.",
      "Mastered the use of custom CSS injections to push the boundaries of CMS templates and grid systems.",
      "Developed a smooth workflow for presenting design concepts to a client and incorporating their feedback into the final build.",
      "Learned how to manage specific section IDs and block IDs to apply targeted styles without affecting the rest of the site architecture.",
      "Recognized the importance of balancing aesthetic custom styling with mobile responsiveness to ensure a consistent experience for all visitors."
    ],
    
    liveUrl: "https://www.dsteveart.com/",
    githubUrl: "#"
  };

  return <ProjectDetail data={projectData} />;
}

export default ArtistPortfolioProject;
