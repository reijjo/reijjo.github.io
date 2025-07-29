const tarpit = {
  id: "tarpit",
  logo: "/assets/icons/fish.png",
  title: "Tärpit",
  description: "Sports bet tracking made simple",
  whatIs: [
    "Tärpit is a personal sports betting tracker designed to help users easily log, organize, and analyze their bets.",
    "Whether you're casually betting on your favorite team or tracking performance over time, Tärpit provides a simple, focused UI to keep everything in one place — without the clutter of gambling platforms.",
    "This is a fullstack web app I built from scratch to learn production-ready development with authentication, REST APIs, and persistent user data.",
  ],
  why: [
    "I'm an on-and-off sports bettor, and I always found it frustrating to track my bets — especially using Excel on my phone.",
    "I wanted something lightweight, fast, and mobile-friendly that actually made it enjoyable to log and view my bets.",
    "This project gave me the chance to solve a real problem I’ve had for years, while also sharpening my skills in building a fullstack web app with clean UX, authentication, and data persistence.",
  ],
  challenges: [
    "Designing a layout that works well on mobile without feeling cramped",
    "Validating bet data (like odds, amount, and outcomes) in a flexible way",
    "Creating secure user accounts with proper error handling",
    "Structuring the backend to allow filtering, sorting, and expanding features later",
    "Handling API errors cleanly so users always know what’s happening",
  ],
  stack: {
    frontend: "React | TypeScript | CSS",
    backend: "Bun | Express.js",
    database: "PostgreSQL | Sequelize | AWS RDS",
    devops: "Docker | GitHub Actions | pgAdmin",
    other: "RestAPI | Redux | RTK Query",
  },
  links: {
    github: "https://github.com/reijjo/bet",
    live: "https://tarpit.pages.dev/",
  },
  images: {
    desktop: [
      "/assets/images/projects/tarpit/landing.webp",
      "/assets/images/projects/tarpit/login.webp",
      "/assets/images/projects/tarpit/dash.webp",
    ],
    mobile: [],
  },
};

const yatzy = {
  id: "yatzy",
  logo: "/assets/icons/game_die.png",
  title: "Yatzy",
  description: "Classic dice game brought to the browser",
  whatIs: [
    "Yatzy is a classic dice game brought to the browser, built as my first TypeScript project.",
    "It's a fullstack app with user authentication, so players can register, log in, and track their games securely.",
    "This project was a way for me to learn TypeScript in a real-world context, while also having fun building a game I've always enjoyed.",
  ],
  why: [
    "I wanted a simple way to play Yatzy online, but every app I found was filled with ads, coins, and unnecessary extras.",
    "So I decided to make my own clean version — fast, focused, and mobile-friendly.",
    "I also needed a hands-on way to learn TypeScript, and combining it with authentication and backend logic made it the perfect learning project.",
  ],
  challenges: [
    "Learning TypeScript from scratch and applying strict typing across the stack",
    "Implementing JWT authentication with secure login and registration",
    "Designing and coding the Yatzy game logic, including scoring rules and bonus conditions",
    "Creating a responsive UI that works well on both desktop and mobile",
    "Keeping the codebase clean and scalable while exploring new tools and patterns",
  ],
  stack: {
    frontend: "React | TypeScript | CSS",
    backend: "Node.js | Express.js",
    database: "MongoDB",
    devops: "",
    other: "RestAPI | JSON Web Token",
  },
  links: {
    github: "https://github.com/reijjo/jazz",
    live: "https://dancing-mousse-cb6e47.netlify.app/",
  },
  images: {
    desktop: [
      "/assets/images/projects/yatzy/dash.webp",
      "/assets/images/projects/yatzy/yatzyDesk.webp",
      "/assets/images/projects/yatzy/points.webp",
    ],
    mobile: [],
  },
};

const hypertube = {
  id: "hypertube",
  logo: "/assets/icons/hypertube-nobg.png",
  title: "Hypertube",
  description: "Movie streaming service",
  whatIs: [
    "A fullstack streaming service that lets users search, watch, and comment on movies — all from within the browser.",
    "The video player is fully integrated and streams videos via the BitTorrent protocol using the YTS API.",
    "Subtitles are fetched dynamically from OpenSubtitles and can be switched during playback.",
    "Built as a 3-person team project for the final Hive Helsinki web curriculum. I focused on the backend, authentication system, and video player integration.",
  ],
  why: [
    "This was the final project of Hive Helsinki's web branch, designed to bring together everything we learned during the program.",
    "I was particularly interested in learning how to integrate OAuth login and handle torrent-based video delivery in a web-friendly way.",
  ],
  challenges: [
    "Implementing OAuth login with GitHub and 42-school accounts was tricky, especially getting the authentication flow right and securely storing session cookies",
    "Integrating the video player with the BitTorrent protocol required managing peer connections, buffering, and ensuring smooth playback without blocking the UI",
    "Handling subtitles dynamically from OpenSubtitles API meant parsing and syncing subtitles properly, along with fallback logic based on user language and availability.",
    "Persisting and managing movie data, including saving user history, marking watched movies, and periodically cleaning up old torrents, required careful database design and background job handling.",
    "Maintaining a clean Dockerized development environment for frontend, backend, and database (pgAdmin/PostgreSQL) helped simulate real-world deployment but involved troubleshooting network and volume issues early on",
  ],
  stack: {
    frontend: "React | TailwindCSS",
    backend: "Node.js | Express.js",
    database: "PostgreSQL",
    devops: "Docker | pgAdmin",
    other: "Oauth Login | RestAPI",
  },
  links: {
    github: "https://github.com/reijjo/Hypertube",
    live: "",
  },
  images: {
    desktop: [
      "/assets/images/projects/hypertube/land.webp",
      "/assets/images/projects/hypertube/movies.webp",
      "/assets/images/projects/hypertube/rolling.webp",
    ],
    mobile: [],
  },
};

const matcha = {
  id: "matcha",
  logo: "/assets/icons/matcha-nobg.png",
  title: "Matcha",
  description: "Dating app",
  whatIs: [
    "A fullstack dating app inspired by Tinder, built as part of the Hive Helsinki web curriculum.",
    "Users can register, build a profile, browse potential matches, and chat in real-time once a match is made.",
    "Features include location-based matching using OpenCage and IPapi, live notifications, and chat via WebSockets.",
    "I was responsible for integrating authentication, setting up the backend, real-time features, and working with external APIs.",
  ],
  why: [
    "This project was an opportunity to combine real-time features, location logic, and user interaction into one fullstack application.",
    "It also served as a great way to practice working with sockets and geolocation in a real-world context.",
  ],
  challenges: [
    "Implementing real-time notifications and chat using Socket.io required managing socket connections, user sessions, and message delivery efficiently.",
    "Calculating distances between users using IP-based location data from OpenCage and IPapi presented accuracy and fallback challenges.",
    "Ensuring user interactions (like visits, likes, matches) were stored and reflected correctly in the UI involved complex database logic and UI updates.",
    "Populating the database with 500 fake user profiles for testing required scripting and careful insertion to simulate realistic user behavior.",
  ],
  stack: {
    frontend: "React | TailwindCSS",
    backend: "Node.js | Express.js",
    database: "PostgreSQL",
    devops: "Docker | pgAdmin",
    other: "Socket.io | RestAPI",
  },
  links: {
    github: "https://github.com/reijjo/Matcha",
    live: "",
  },
  images: {
    desktop: [
      "/assets/images/projects/matcha/land.png",
      "/assets/images/projects/matcha/feed.webp",
    ],
    mobile: [],
  },
};

const job = {
  id: "Applications",
  logo: "/assets/icons/male-office-worker.png",
  title: "Job Applications",
  description: "Place where I keep track of my job applications",
  whatIs: [
    "A personal tool to track and manage my job applications during the job hunt.",
    "Features include adding new applications, editing details, deleting entries, and updating application status.",
    "Simple and functional CRUD app with a clean UI and smooth user experience.",
  ],
  why: [
    "I wanted a focused alternative to messy spreadsheets—something fast and made just for my own workflow.",
    "It also gave me a good reason to try out GraphQL in a real-world scenario.",
  ],
  challenges: [
    "This was the first project where I used GraphQL, and getting familiar with queries, mutations, and schema design was a valuable learning experience.",
    "Thinking through how to structure filtering and sorting logic for future scalability gave me insight into GraphQL patterns and client-server data handling.",
  ],
  stack: {
    frontend: "React | CSS",
    backend: "Bun | Express.js",
    database: "MongoDB",
    devops: "",
    other: "GraphQL",
  },
  links: {
    github: "https://github.com/reijjo/duunihaku",
    live: "",
  },
  images: {
    desktop: [
      "/assets/images/projects/duuni/land.webp",
      "/assets/images/projects/duuni/mod.webp",
    ],
    mobile: [],
  },
};

export const projectInfo = [tarpit, yatzy, job, hypertube, matcha];
