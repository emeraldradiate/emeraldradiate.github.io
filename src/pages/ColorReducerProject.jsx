import ProjectDetail from '../components/ProjectDetail';

function ColorReducerProject() {
  const projectData = {
    title: "PNG Color Reducer",
    tagline: "A simple C# program that algorithmically reduces the number of colors in an image for file size optimization purposes.",
    
    youtubeUrl: "https://www.youtube.com/watch?v=0Z_2BzkQQ3w",
    
    overview: [
      "I developed a PNG Color Reducer as a desktop utility program, designed to optimize image files by reducing their unique color count while maintaining visual fidelity. The application allows users to upload a PNG and specify a target palette size of up to 100 colors to significantly lower the file size. I built the entire tool using C# and the WPF framework for the interface, and integrated the ImageSharp library for high performance pixel manipulation.",
      "The core of the application is a custom implementation of the K-Means Clustering algorithm, which identifies the most dominant colors in any given image. Users can preview the reduced image in real time and regenerate the results until they achieve the perfect balance between quality and optimization. This project serves as a functional tool for web developers or designers who need to streamline their assets for faster loading times.",
      "I focused on creating a clean and responsive user interface that provides clear feedback throughout the processing stage. By offloading the heavy image processing to asynchronous tasks, I ensured the application remains stable and interactive even when handling high resolution files. The final output is a clean and optimized image that is ready for immediate use on the web or in digital projects."
    ],
    divider: "/divide.png",
    role: "Developer",
    timeline: "1 week",
    year: "2025",
    technologies: ["C#", ".NET 8.0", "Image Processing", "File I/O", "Desktop App"],
    
    challenge: "Implementing an efficient color quantization algorithm that could process large image files without causing the user interface to freeze. I had to manage complex pixel data and mathematical iterations while ensuring the final color palette accurately represented the original image.",
    solution: "I solved this by creating a K-Means Clustering service that uses pixel sampling for larger images and runs on a background thread. This approach maintains a responsive interface while the algorithm calculates the optimal color centroids and applies the new palette to the image data.",
    
    features: [
      {
        title: "K-Means Color Quantization",
        description: "A custom algorithmic approach that analyzes an image to find the most mathematically significant colors for a reduced palette."
    },
      {
        title: "Asynchronous Processing",
        description: "The implementation of task based logic ensures that heavy image calculations occur in the background without interrupting the user experience."
      },
      {
        title: "Interactive Live Preview",
        description: "A side by side comparison view that allows users to see the results of their color reduction settings before saving the file."
      }
    ],
    
    images: [
      { src: "/colorreducer1.png", alt: "Color Reducer application interface" },
      { src: "/colorreducer2.png", alt: "Before and after color reduction comparison" },
      { src: "/colorreducer3.png", alt: "Color palette analysis" },
      { src: "/colorreducer4.png", alt: "File size comparison statistics" },
      { src: "/colorreducer5.png", alt: "Processing large batch of images" },
      { src: "/colorreducer6.png", alt: "Color clustering visualization" }
    ],
    
    outcomes: [
      "Successfully implemented a complex clustering algorithm from scratch to solve a real world optimization problem.",
      "Gained experience in managing image memory and pixel buffers using the ImageSharp library.",
      "Learned how to use asynchronous programming in C# to keep a desktop application responsive during CPU intensive tasks.",
      "Developed a better understanding of how color data is stored and manipulated at the byte level.",
      "Recognized the value of sampling large datasets to improve performance without sacrificing the quality of the final result."
    ],
    
    liveUrl: "#", // Update with actual URL
    githubUrl: "#" // Update with actual URL if applicable
  };

  return <ProjectDetail data={projectData} />;
}

export default ColorReducerProject;
