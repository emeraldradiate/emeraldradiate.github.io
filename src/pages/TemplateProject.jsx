import ProjectDetail from '../components/ProjectDetail';

function TemplateProject() {
  const projectData = {
    title: "Project Title Here",
    tagline: "Placeholder tagline for your project - brief description goes here.",
    
    // YouTube URL (will be embedded at the top)
    // Example: "https://www.youtube.com/watch?v=VIDEO_ID" or "https://youtu.be/VIDEO_ID"
    youtubeUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    
    overview: [
      "Placeholder paragraph 1. Replace this with your project overview text.",
      "Placeholder paragraph 2. Add more context about your project here.",
      "Placeholder paragraph 3. Describe your design choices and approach."
    ],
    
    divider: "/divide.png", // Optional section divider image
    
    role: "Your Role",
    timeline: "Project Duration",
    year: "2026",
    
    technologies: [
      "Tech 1", 
      "Tech 2", 
      "Tech 3", 
      "Tech 4", 
      "Tech 5", 
      "Tech 6"
    ],
    
    challenge: "Placeholder challenge description. Explain the main problem or challenge you faced in this project.",
    
    solution: "Placeholder solution description. Describe how you solved the challenge and what approach you took.",
    
    features: [
      {
        title: "Feature 1 Title",
        description: "Placeholder description for first key feature of your project."
      },
      {
        title: "Feature 2 Title",
        description: "Placeholder description for second key feature of your project."
      },
      {
        title: "Feature 3 Title",
        description: "Placeholder description for third key feature of your project."
      }
    ],
    
    images: [
      { src: "/image1.png", alt: "Placeholder alt text 1", caption: "Placeholder caption 1" },
      { src: "/image2.png", alt: "Placeholder alt text 2", caption: "Placeholder caption 2" },
      { src: "/image3.png", alt: "Placeholder alt text 3", caption: "Placeholder caption 3" },
      { src: "/image4.png", alt: "Placeholder alt text 4", caption: "Placeholder caption 4" },
      { src: "/image5.png", alt: "Placeholder alt text 5", caption: "Placeholder caption 5" },
      { src: "/image6.png", alt: "Placeholder alt text 6", caption: "Placeholder caption 6" },
      { src: "/image7.png", alt: "Placeholder alt text 7", caption: "Placeholder caption 7" },
      { src: "/image8.png", alt: "Placeholder alt text 8", caption: "Placeholder caption 8" }
    ],
    
    outcomes: [
      "Placeholder outcome 1. Describe what you achieved or learned.",
      "Placeholder outcome 2. Add another goal met or lesson learned.",
      "Placeholder outcome 3. Include additional outcomes or insights.",
      "Placeholder outcome 4. Final outcome or reflection on the project."
    ],
    
    liveUrl: "#", // Update with actual URL or remove this line if no live site
    githubUrl: "#" // Update with actual URL or remove this line if no GitHub repo
  };

  return <ProjectDetail data={projectData} />;
}

export default TemplateProject;
