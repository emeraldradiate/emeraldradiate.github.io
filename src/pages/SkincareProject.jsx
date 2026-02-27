import ProjectDetail from '../components/ProjectDetail';

function SkincareProject() {
  const projectData = {
    title: "SHINTARO Skincare Website",
    tagline: "A fictional skincare website with three functional product pages, created to showcase web design and UI/UX skills.",
    
    youtubeUrl: "https://www.youtube.com/watch?v=N5yKWBsV0VE",
    
    overview: [
      "I designed Shintaro as a comprehensive digital storefront for a fictional organic skincare brand. My primary objective was to build a clean and immersive user experience that felt both modern and high end. Using a minimalist aesthetic, I created a desktop web application that highlights natural ingredients through high quality imagery and a disciplined layout.",
      "The site architecture includes a dynamic navigation bar, a scrolling hero section, and interactive product displays. I focused on creating a seamless flow from the landing page to individual product details to mimic a real world shopping journey. Each section was built to reinforce the brand identity of luxury and wellness.",
      "To achieve this look, I paired the elegant Cormorant Garamond for headings with the clean Montserrat for body text. This typographic hierarchy makes the site remain readable while also maintaining its sophisticated atmosphere. I utilized a neutral color palette of sage green and earthy tones to compliment the visual focus on the handcrafted products."
    ],
    divider: "/divide.png",
    role: "Designer & Developer",
    timeline: "2 weeks",
    year: "2025",
    technologies: ["HTML", "JavaScript", "UI/UX", "CSS", "Desktop Design", "Web App"],
    
    challenge: "To build a fully functional and polished e-commerce interface using only core web technologies. I had to manage interactive elements and layout consistency across multiple sections without relying on external frameworks.",
    solution: "I used clean semantic HTML, along with CSS Grid and Flexbox for precise positioning. I also implemented custom Javascript to handle all site interactions and scrolling animations to ensure a smooth user experience.",
    
    features: [
      {
        title: "Scrolling Hero Section",
        description: "A dynamic landing area that introduces the brand, and offers a clear call to action for new customers."
      },
      {
        title: "Product Pages",
        description: "Detailed layouts for featured items such as the Matcha soap. Includes multiple product photos, item details, and size and quantity selection."
      },
      {
        title: "Best Sellers Carousel",
        description: "A horizontal scrolling section that showcases top products with consistent pricing and imagery for quick browsing."
      }
    ],
    
    images: [
      { src: "/shintaro1.png", alt: "SHINTARO homepage hero section" },
      { src: "/shintaro2.png", alt: "SHINTARO product showcase" },
      { src: "/shintaro3.png", alt: "SHINTARO matcha soap product page" },
      { src: "/shintaro4.png", alt: "SHINTARO product imagery" },
      { src: "/shintaro5.png", alt: "SHINTARO best sellers section" },
      { src: "/shintaro6.png", alt: "SHINTARO product selection" },
      { src: "/shintaro7.png", alt: "SHINTARO navigation and layout" },
      { src: "/shintaro8.png", alt: "SHINTARO brand details" }
    ],
    
    outcomes: [
      "Successfully established a cohesive brand identity through color and typography.",
      "Developed a working navigation system and functional product detail pages.",
      "Solidified importance of organizing scripts to manage multiple interactive sections on a single page.",
      "Recognized that building for desktop first provides a strong design foundation, but requires a clear plan for future mobile scaling."
    ],
    
    liveUrl: "https://emeraldradiate.github.io/shintaro/", // Update with actual URL
    githubUrl: "https://github.com/emeraldradiate/shintaro" // Update with actual URL if applicable
  };

  return <ProjectDetail data={projectData} />;
}

export default SkincareProject;
