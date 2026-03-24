import ProjectDetail from '../components/ProjectDetail';

function ColorApp2Project() {
  const projectData = {
    title: "PNG Color Reducer: Remastered",
    tagline: "A TypeScript and React web application for advanced PNG color reduction, dithering, and intelligent palette swapping.",
    
    youtubeUrl: "", // Add YouTube URL if available
    
    overview: [
      "I developed PNG Color Reducer: Remastered as a modern web-based remake of my original PNG Color Reducer desktop application, bringing the core color reduction functionality to the browser with significantly expanded capabilities. This advanced image processing tool specializes in color reduction and palette manipulation for PNG images, allowing users to upload or paste images and reduce them to anywhere from 2 to 64 colors while optionally applying dithering from 0% to 100%. Built with TypeScript and React, this project demonstrates my growth as a developer and my ability to handle complex image processing algorithms in the browser while maintaining a responsive and intuitive user interface.",
      "The core innovation of this remastered version is its intelligent palette swapping system, a feature that goes far beyond the original desktop application. After reducing an image's colors, users can swap the entire palette to maintain similar contrast values by first converting to grayscale and then mapping to hex codes with identical grayscale values. The system allows users to guide the color selection by choosing up to three ROYGBIV colors for the swapped palette to trend towards, creating visually cohesive results with creative control.",
      "I focused on creating a feature-rich yet intuitive interface that displays both the original compressed palette and the swapped palette with their hex codes at the bottom of the screen. Users can lock individual hex codes to prevent them from being changed in subsequent palette swaps, giving them precise control over the final color scheme. This combination of automated color processing and manual fine-tuning makes the application practical for artists, game developers, and designers working with pixel art or limited color palettes."
    ],
    divider: "/divide.png",
    role: "Developer & Designer",
    timeline: "3 weeks",
    year: "2025",
    technologies: ["TypeScript", "React", "Image Processing", "Canvas API", "UI/UX", "Web App"],
    
    challenge: "Implementing sophisticated color reduction and palette swapping algorithms that run efficiently in the browser while processing potentially large PNG files. I needed to develop a system that could maintain contrast relationships when swapping palettes and provide users with intuitive controls for guiding the color selection towards specific hue families.",
    solution: "I leveraged TypeScript for type-safe image processing logic and used the Canvas API for efficient pixel manipulation. The palette swapping algorithm converts colors to grayscale to preserve contrast relationships, then maps to new colors with matching luminance values. By implementing a ROYGBIV-based color trending system with up to three simultaneous color targets, I gave users creative control while maintaining mathematical consistency in the palette transformations.",
    
    features: [
      {
        title: "Reduction & Dithering",
        description: "Reduce PNG images to anywhere from 2 to 64 colors with adjustable dithering from 0% to 100% for optimal visual quality and file size optimization."
      },
      {
        title: "Palette Swapping",
        description: "Swap color palettes while maintaining contrast values through grayscale conversion and luminance matching. Guide swaps towards up to three ROYGBIV colors simultaneously to create cohesive, customized color schemes."
      },
      {
        title: "Hex Code Locking System",
        description: "Lock individual hex codes in the palette to prevent them from changing during subsequent swaps, enabling precise creative control over your final color scheme."
      }
    ],
    
    images: [
      { src: "/newcolor1.png", alt: "Color App main interface" },
      { src: "/newcolor2.png", alt: "Palette swapping interface with ROYGBIV color trending" },
      { src: "/newcolor3.png", alt: "Hex code locking system in action" },
      { src: "/newcolor4.png", alt: "Dithering control with 50% applied" },
      { src: "/newcolor5.png", alt: "Original vs reduced image comparison" },
      { src: "/newcolor6.png", alt: "Swapped palette with locked hex codes" }
    ],
    
    outcomes: [
      "Successfully implemented complex color reduction and dithering algorithms that run efficiently in the browser using TypeScript and React.",
      "Developed an innovative palette swapping system that preserves contrast relationships through grayscale-based luminance matching.",
      "Created an intuitive UI for controlling multiple simultaneous color trends using the ROYGBIV color spectrum.",
      "Implemented a flexible hex code locking system that gives users precise control over individual colors in the palette.",
      "Gained deep understanding of color theory, image processing techniques, and browser-based canvas manipulation.",
      "Designed a tool that bridges automated image processing with creative manual control for practical use in digital art workflows."
    ],
    
    liveUrl: "https://emeraldradiate.github.io/colorapp2/",
    githubUrl: "https://github.com/emeraldradiate/colorapp2"
  };

  return <ProjectDetail data={projectData} />;
}

export default ColorApp2Project;
