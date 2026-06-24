export const projects = [
  {
    id: "algo-arena",
    title: "AlgoArena",
    tagline: "Full-Stack Competitive Coding Platform",
    
    description:
      "Engineered a full-stack competitive coding platform where users solve DSA problems and execute code in real-time across multiple languages. Integrated Judge0 for sandboxed multi-language execution with visible and hidden test case evaluation. Implemented JWT authentication with Redis-based token blacklisting for stateless session invalidation. Powered an AI debugging assistant using Google Gemini API.",
    
    tech: [
      "React", "Node.js", "MongoDB",
      "Redis", "Judge0", "Gemini AI",
      "Cloudinary", "JWT", "TailwindCSS",
    ],
    
    highlights: [
      "Real-time multi-language code execution via Judge0",
      "Redis token blacklisting for secure session management",
      "AI debugging assistant via Google Gemini API",
      "Admin CRUD dashboard for problem management",
      "Monaco Editor for in-browser coding experience",
    ],
    
    github: "https://github.com/GopalMaheshwarii/AlgoArena",
    live:   "https://algoarena.live",
    featured: true,
  },

  {
    id: "wanderlust",
    title: "WanderLust",
    tagline: "Full-Stack Property Rental Marketplace",
    
    description:
      "Built a full-stack property rental marketplace with role-based access control, handling the complete listing lifecycle from creation to deletion. Implemented JWT authentication with Redis token blacklisting. Integrated Cloudinary for optimized image upload pipelines. Designed paginated listings with category filters and tax toggle, plus an admin panel for user listing management.",
    
    tech: [
      "React", "Node.js", "MongoDB",
      "Redis", "Cloudinary", "JWT", "TailwindCSS",
    ],
    
    highlights: [
      "JWT + Redis token blacklisting authentication",
      "Cloudinary image pipeline with metadata handling",
      "Paginated listings with category filters and tax toggle",
      "Admin dashboard for full listing management",
    ],
    
    github: "https://github.com/GopalMaheshwarii/WanderLust",
    live:   "https://wanderlust-demo.live",
    featured: true,
  },

  {
    id: "swiggy-clone",
    title: "Swiggy Clone",
    tagline: "Live Food Ordering Interface",
    
    description:
      "Developed a production-like food ordering interface consuming live Swiggy APIs via CORS proxy with dynamic restaurant routing. Built Redux Toolkit store with createAsyncThunk for async cart operations and optimistic UI updates. Implemented shimmer loading states for perceived performance.",
    
    tech: [
      "React", "Redux Toolkit", "React Router",
      "Parcel", "TailwindCSS",
    ],
    
    highlights: [
      "Live Swiggy API integration via CORS proxy",
      "Redux Toolkit with createAsyncThunk",
      "Shimmer UI for perceived performance",
      "Veg/non-veg filter with real-time menu data",
    ],
    
    github: "https://github.com/GopalMaheshwarii/swiggy-clone",
    live:   "#",
    featured: false,
  },
];