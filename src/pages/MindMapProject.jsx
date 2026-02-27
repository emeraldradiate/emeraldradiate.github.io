import ProjectDetail from '../components/ProjectDetail';

function MindMapProject() {
  const projectData = {
    title: "Colorful Mind Maps",
    tagline: "A mind mapping program with extensive customization options, created using TypeScript and ReactFlow.",
    
    youtubeUrl: "https://youtu.be/32yy2n89nOc",
    
    overview: [
      "I developed this mind mapping application to help creative professionals organize and visualize complex narratives. Originally conceived as a prototype for a client to track elements for a novel, I expanded the project into a feature rich tool built with TypeScript and React. The application provides a highly flexible canvas where users can map out ideas using an array of customization options tailored for detailed brainstorming.",
      "The interface supports a high level of personalization, including four distinct node shapes, as well as a palette of ten colors that can be applied to a node's backgrounds, outlines, and connecting lines. Beyond basic mapping, I implemented essential productivity features such as undo and redo functionality, file saving and loading, and advanced node manipulation like mass selection and copying. These tools allow users to manage large datasets and intricate story structures without losing progress or feeling restricted by the software.",
      "To handle the visual complexity of many interconnected ideas, I engineered a custom system that allows for up to three parallel lines between the same modules. This ensures that multiple relationships can be visualized clearly without overlapping or creating visual clutter. By using TypeScript, I maintained a strict data structure across the entire application which ensures that even the most expansive mind maps remain performant and bug free during long sessions."
    ],
    
    divider: "/divide.png",
    
    role: "Developer",
    timeline: "1 month",
    year: "2025",
    
    technologies: [
      "TypeScript", 
      "React", 
      "ReactFlow", 
      "UI/UX", 
      "Web App"
    ],
    
    challenge: "My primary challenge was managing the complex state required for a non linear canvas while implementing advanced features like parallel edge rendering and undo history. I had to ensure that mathematical calculations for node positioning and line offsets remained accurate while allowing users to freely drag, copy, and delete elements.",
    
    solution: "I solved this by utilizing the ReactFlow library as a foundation and extending it with custom logic for parallel edges and coordinate mapping. I implemented a robust state management system to track every user action, which enabled a seamless undo and redo experience and allowed for stable file serialization for saving and loading.",
    
    features: [
      {
        title: "Advanced Customization",
        description: "Users can define specific shapes, border styles, and colors for every node and connection to create a personalized visual hierarchy."
      },
      {
        title: "Parallel Edge System",
        description: "A custom rendering engine that supports up to three distinct lines between nodes using mathematical offsets to prevent visual overlap."
      },
      {
        title: "Comprehensive Workflow Tools",
        description: "Full support for keyboard shortcuts and bulk actions including mass selection, copy and paste, and a history stack for undo and redo."
      }
    ],
    
    images: [
      { src: "/mindmap1.png", alt: "Mind map screenshot 1" },
      { src: "/mindmap2.png", alt: "Mind map screenshot 2" },
      { src: "/mindmap3.png", alt: "Mind map screenshot 3" },
      { src: "/mindmap4.png", alt: "Mind map screenshot 4" },
      { src: "/mindmap5.png", alt: "Mind map screenshot 5" },
      { src: "/mindmap6.png", alt: "Mind map screenshot 6" }
    ],
    
    outcomes: [
      "Successfully transformed a specific client request into a versatile and scalable software product.",
      "Mastered complex state management in React to handle frequent and nested data updates.",
      "Learned how to implement custom SVG rendering logic for unique node shapes and parallel connecting lines.",
      "Gained significant experience in TypeScript by defining rigorous types for nodes, edges, and application history.",
      "Recognized the importance of user experience design when building tools intended for long term creative focus and data organization."
    ],
    
    liveUrl: "https://emeraldradiate.github.io/mindmapper/", // Update with actual URL
    githubUrl: "https://github.com/emeraldradiate/mindmapper" // Update with actual URL if applicable
  };

  return <ProjectDetail data={projectData} />;
}

export default MindMapProject;
