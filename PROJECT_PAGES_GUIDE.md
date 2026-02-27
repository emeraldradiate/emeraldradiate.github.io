# Project Detail Pages - Usage Guide

## Overview

Your portfolio now has a project detail page system! I've created:

1. **Routing System** - Using React Router for navigation between pages
2. **Skincare Project Page** - A complete example at `/projects/skincare`
3. **Reusable Template** - A flexible component for creating more project pages

## What's Been Set Up

### File Structure
```
src/
├── App.jsx                          # Router configuration
├── pages/
│   ├── Home.jsx                     # Main portfolio page
│   └── SkincareProject.jsx          # Example project detail page
└── components/
    └── ProjectDetail.jsx            # Reusable template component
```

### How to View

1. Run your development server: `npm run dev`
2. Navigate to your homepage
3. Click "Learn More" on the Skincare Website project card
4. You'll be taken to `/projects/skincare`

## Creating New Project Pages

### Option 1: Using the Reusable Template (Recommended)

Create a new file in `src/pages/` (e.g., `ArtistPortfolio.jsx`):

```jsx
import ProjectDetail from '../components/ProjectDetail';

function ArtistPortfolio() {
  const projectData = {
    title: "Artist Portfolio",
    tagline: "A modern portfolio redesign for a digital artist",
    
    // YouTube URL for embedded video at the top
    youtubeUrl: "https://www.youtube.com/watch?v=VIDEO_ID",
    
    overview: "A SquareSpace website redesign on both mobile and web platforms...",
    role: "Designer & Developer",
    timeline: "3 weeks",
    year: "2024",
    technologies: ["Graphic Design", "SquareSpace", "CSS"],
    challenge: "The client needed a portfolio that showcased their art...",
    solution: "Created a clean, gallery-focused design with custom CSS...",
    features: [
      {
        title: "Custom Gallery",
        description: "Interactive photo gallery with lightbox functionality"
      },
      {
        title: "Mobile Optimized",
        description: "Fully responsive design tested on multiple devices"
      },
      {
        title: "Brand Consistency",
        description: "Custom CSS to match the artist's personal brand"
      }
    ],
    images: [
      { 
        src: "/project2.png", 
        alt: "Homepage view", 
        caption: "Clean homepage with featured works" 
      },
      { 
        src: "/project2-gallery.png", 
        alt: "Gallery page", 
        caption: "Interactive gallery layout" 
      }
    ],
    outcomes: [
      "Increased client inquiries by 40% after launch",
      "Improved mobile engagement metrics",
      "Client satisfaction with custom branding"
    ],
    liveUrl: "https://artistportfolio.com",
    githubUrl: "#" // Use "#" if no GitHub repo
  };

  return <ProjectDetail data={projectData} />;
}

export default ArtistPortfolio;
```

### Option 2: Custom Page (Like SkincareProject.jsx)

Copy `SkincareProject.jsx` and customize all sections to fit your needs.

## Adding Routes

After creating a new project page, add it to `App.jsx`:

```jsx
import ArtistPortfolio from './pages/ArtistPortfolio';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects/skincare" element={<SkincareProject />} />
        <Route path="/projects/artist-portfolio" element={<ArtistPortfolio />} />
        {/* Add more routes here */}
      </Routes>
    </Router>
  );
}
```

## Updating Home Page Links

In `Home.jsx`, update the project links to match your routes:

```jsx
const projects = [
  {
    id: 1,
    title: "Skincare Website",
    // ...
    link: "/projects/skincare",  // ✅ Already updated
  },
  {
    id: 2,
    title: "Artist Portfolio",
    // ...
    link: "/projects/artist-portfolio",  // 👈 Update this
  },
  // etc...
];
```

## Project Data Structure

The `ProjectDetail` component accepts the following fields:

### Required
- **title** (string) - Project name

### Optional but Recommended
- **tagline** (string) - Brief description shown under title
- **youtubeUrl** (string) - YouTube video URL to embed at top (e.g., "https://www.youtube.com/watch?v=VIDEO_ID")
  - Supports standard YouTube URLs (youtube.com/watch), short URLs (youtu.be), and embed URLs
- **overview** (string) - Detailed project description
- **role** (string) - Your role in the project
- **timeline** (string) - How long the project took
- **year** (string) - When the project was completed
- **technologies** (array of strings) - Tech stack used
- **challenge** (string) - Problem you were solving
- **solution** (string) - How you solved it
- **features** (array of objects) - Key features
  - `title` (string)
  - `description` (string)
- **images** (array of objects) - Project screenshots
  - `src` (string) - Image path
  - `alt` (string) - Alt text
  - `caption` (string) - Optional caption
- **outcomes** (array of strings) - Results and learnings
- **liveUrl** (string) - Link to live site (use "#" if none)
- **githubUrl** (string) - Link to GitHub repo (use "#" if none)

## Sections Included

Each project detail page includes:

1. ✅ **Navigation** - Back to portfolio button
2. ✅ **Hero Section** - Title, tagline, meta info, tech tags, action buttons
3. ✅ **Overview** - Project description
4. ✅ **Challenge & Solution** - Two-column layout
5. ✅ **Key Features** - Three-column grid of features
6. ✅ **Image Gallery** - Showcase screenshots with captions
7. ✅ **Outcomes & Learnings** - Bullet points of results
8. ✅ **Navigation** - Return to all projects button
9. ✅ **Footer** - Consistent with your branding

## Tips for Great Project Pages

### Content
- **Be specific**: Include metrics and concrete outcomes when possible
- **Tell a story**: Walk through your design/development process
- **Show your thinking**: Explain why you made certain decisions
- **Use visuals**: Include screenshots, mockups, wireframes, or prototypes

### Images
- **Use placeholders during development**: Try `https://placehold.co/1200x800/89C541/000000?text=Your+Text`
  - Customize colors using your brand colors: `89C541` (green) or `864198` (purple)
  - Adjust dimensions as needed (e.g., `1200x600` for hero, `1200x800` for gallery)
- Place final project images in the `public/` folder
- Use descriptive filenames (e.g., `skincare-hero.png`, `skincare-mobile.png`)
- Optimize images for web (compress to reasonable file sizes)
- Include alt text for accessibility

### URLs
- Use "#" for `liveUrl` or `githubUrl` if you don't have links yet
- The buttons will automatically hide if the value is "#"

### Routing
- Use descriptive, lowercase URLs with hyphens: `/projects/mind-mapper`
- Keep them short but meaningful
- Match them to your project names

## Color Scheme Reference

Your portfolio uses these colors:
- **Primary Green**: `#89C541`
- **Primary Purple**: `#864198`
- **Background**: Black (`#000000`)
- **Text**: White/Gray (`#fff`, `#ccc`)

## Need Help?

If you want to:
- Add more sections to the template
- Change the layout or styling
- Add animations or interactions
- Include videos or other media

Just ask! The template is flexible and can be customized to fit your needs.
