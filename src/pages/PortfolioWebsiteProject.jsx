import ProjectDetail from '../components/ProjectDetail';

function PortfolioWebsiteProject() {
  const projectData = {
    title: "My Portfolio Website!",
    tagline: "A React portfolio showcasing technical and creative work with modern animations and intuitive navigation.",
    
    youtubeUrl: "",
    
    overview: [
      "I built this portfolio website from scratch to showcase my dual expertise in development and design, while also demonstrating my proficiency with modern web technologies. Using React and Vite, I crafted a fast and responsive single page application that highlights both my technical projects and creative work in an organized and visually striking manner. The site architecture prioritizes seamless navigation and performance, ensuring visitors can effortlessly explore my work across multiple categories.",
      "The design aesthetic reflects my personal brand through a bold color palette of electric green and deep purple against a dark backdrop. I implemented smooth hover animations, transitions, and a custom navigation system that adapts based on the user's location within the site. Each project is given its own dedicated detail page with comprehensive information including challenges faced, solutions implemented, and key technologies utilized.",
      "To ensure accessibility across devices, I developed a fully responsive layout that transitions from a horizontal desktop navigation to a streamlined hamburger menu on mobile. The site also features dynamic project filtering by tags, allowing visitors to quickly narrow down work by specific technologies or categories such as web apps, mobile design, or creative endeavors. This balance between technical sophistication and visual appeal makes this portfolio itself a testament to my capabilities."
    ],
    
    divider: "/divide.png",
    
    role: "Designer & Developer",
    timeline: "2 months",
    year: "2026",
    
    technologies: [
      "React",
      "Vite",
      "React Router",
      "UI/UX",
      "CSS",
      "Web App",
      "Mobile Design",
      "Desktop Design"
    ],
    
    challenge: "To create a portfolio that not only displays the best of my work, but also serves as a live demonstration of my technical and design skills. I needed to build a cohesive experience that balances information density with visual appeal, while also remaining performant and fully responsive across all device sizes.",
    
    solution: "I leveraged React Router for smooth client side navigation and structured the site with reusable components to maintain consistency. I implemented custom CSS animations and hover states throughout, and designed a flexible tagging system that allows for intuitive project filtering. The result is a maintainable codebase that uses shows my skill in modern web development.",
    
    features: [
      {
        title: "Dynamic Project Filtering",
        description: "An interactive tagging system that allows visitors to filter projects by technology, type, or category with instant visual feedback."
      },
      {
        title: "Responsive Navigation",
        description: "A context aware navigation bar that adapts its behavior based on whether the user is on the home page or an internal route, with a mobile friendly hamburger menu."
      },
      {
        title: "Project Detail Pages",
        description: "Comprehensive project breakdowns featuring embedded videos, image galleries, challenge and solution sections, outcomes, and direct links to live demos and repositories."
      }
    ],
    
    images: [
      { src: "/portfolio1.png", alt: "Portfolio website homepage hero section" },
      { src: "/portfolio2.png", alt: "Portfolio featured projects section" },
      { src: "/portfolio3.png", alt: "Portfolio project detail page" },
      { src: "/portfolio4.png", alt: "Portfolio technical work page with filters" },
      { src: "/portfolio5.png", alt: "Portfolio creative work showcase" },
      { src: "/portfolio6.png", alt: "Portfolio mobile responsive navigation" }
    ],
    
    outcomes: [
      "Successfully created a portfolio that doubles as a functional demonstration of React development skills and design sensibility.",
      "Implemented a scalable project architecture that makes adding new work or updating existing entries straightforward and maintainable.",
      "Achieved full responsiveness across devices with thoughtful breakpoints and adaptive layouts that preserve visual hierarchy.",
      "Established a cohesive brand identity through consistent typography, color usage, and animation patterns that tie the entire experience together.",
      "Learned the importance of building documentation alongside development, making it easier to explain technical decisions and design rationale to potential clients or employers."
    ],
    
    liveUrl: "https://emeraldradiate.github.io/",
    githubUrl: "https://github.com/emeraldradiate/emeraldradiate.github.io"
  };

  return <ProjectDetail data={projectData} />;
}

export default PortfolioWebsiteProject;
