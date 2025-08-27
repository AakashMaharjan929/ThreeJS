const words = [
  {text: "Ideas", imgPath: "/images/ideas.svg", id: 1},
  {text: "Concepts", imgPath: "/images/concepts.svg", id: 2},
  {text: "Designs", imgPath: "/images/designs.svg", id: 3},
  {text: "Code", imgPath: "/images/code.svg", id: 4},
  {text: "Ideas", imgPath: "/images/ideas.svg", id: 5},
  {text: "Concepts", imgPath: "/images/concepts.svg", id: 6},
  {text: "Designs", imgPath: "/images/designs.svg", id: 7},
  {text: "Code", imgPath: "/images/code.svg", id: 8}
]

const navLinks = [
  {
    name: "Work",
    link: "#work",
  },
  {
    name: "Experience",
    link: "#experience",
  },
  {
    name: "Skills",
    link: "#skills",
  },
]; 

const counterItems = [
{ value: 4, suffix: "+", label: "Completed Projects" },
{ value: 3, suffix: "+", label: "Web Technologies Mastered" }, 
{ value: 2, suffix: "+", label: " Project Experience" },
{ value: 100, suffix: "%", label: "Commitment to Learning" },

  //   { value: 500, suffix: "+", label: "Years of Experienc" },
  // { value: 200, suffix: "+", label: "Satisfied Clients" },
  // { value: 108, suffix: "+", label: "Completed Projects" },
  // { value: 90, suffix: "%", label: "Client Retention Rate" },
];

const logoIconsList = [
  {
    imgPath: "/images/logos/react.png",
  },
  {
    imgPath: "/images/logos/python.svg",
  },
  {
    imgPath: "/images/logos/node.png",
  },
  {
    imgPath: "/images/logos/three.png",
  },
  {
    imgPath: "/images/logos/git.svg",
  },
  {
    imgPath: "/images/logos/php.png",
  },
  {
    imgPath: "/images/logos/tailwindcss.png",
  },
];

const abilities = [
  {
    imgPath: "/images/seo.png",
    title: "Quality Focus",
    desc: "Delivering high-quality results while maintaining attention to every detail.",
  },
  {
    imgPath: "/images/chat.png",
    title: "Reliable Communication",
    desc: "Keeping you updated at every step to ensure transparency and clarity.",
  },
  {
    imgPath: "/images/time.png",
    title: "On-Time Delivery",
    desc: "Making sure projects are completed on schedule, with quality & attention to detail.",
  },
];

const techStackImgs = [
  {
    name: "React Developer",
    imgPath: "/images/logos/react.png",
  },
  {
    name: "Python Developer",
    imgPath: "/images/logos/python.svg",
  },
  {
    name: "Backend Developer",
    imgPath: "/images/logos/node.png",
  },
  {
    name: "Three.js Developer",
    imgPath: "/images/logos/three.png",
  },
  {
    name: "Git & GitHub",
    imgPath: "/images/logos/git.svg",
  },
  {
    name: "PHP Developer",
    imgPath: "/images/logos/php.png",
  },
  {
    name: "Tailwind CSS",
    imgPath: "/images/logos/tailwindcss.png",
  },
];

const techStackIcons = [
  {
    name: "React Developer",
    modelPath: "/models/react_logo-transformed.glb",
    scale: 1,
    rotation: [0, 0, 0],
  },
  {
    name: "Python Developer",
    modelPath: "/models/python-transformed.glb",
    scale: 0.8,
    rotation: [0, 0, 0],
  },
  {
    name: "Backend Developer",
    modelPath: "/models/node-transformed.glb",
    scale: 5,
    rotation: [0, -Math.PI / 2, 0],
  },
  {
    name: "Interactive Developer",
    modelPath: "/models/three.js-transformed.glb",
    scale: 0.05,
    rotation: [0, 0, 0],
  },
  {
    name: "Project Manager",
    modelPath: "/models/git-svg-transformed.glb",
    scale: 0.05,
    rotation: [0, -Math.PI / 4, 0],
  },
];

const expCards = [
  {
    review:
      "This project taught me how to efficiently integrate APIs and handle dynamic data while maintaining performance on the frontend. I also gained hands-on experience with Appwrite as a backend service, which improved my ability to build scalable full-stack applications.",
    imgPath: "/images/exp1.png",
    logoPath: "/images/logos/react.png",
    title: "TrendFlix: Movie Trend App",
    date: "August 24",
    responsibilities: [
      "Trend analysis for movie data",
      "Stores user optimized search results and updates Trend",
      "Appwrite integration for backend and database management.",
      "Tech Stack: React, Node.js, Express, MongoDB, Appwrite",
    ],
        githubLink:"https://github.com/AakashMaharjan929/MERN-Stack/tree/main/Movie-Trend-App",
    liveLink:"",
  },
  {
    review:
      "Building this project gave me valuable insights into designing full e-commerce flows, from product management to order tracking. I also learned how to securely implement payments with Stripe, and improved my ability to create user-friendly experiences in a real-world business context.",
    imgPath: "/images/exp2.png",
    logoPath: "/images/logos/react.png",
    title: "Perfume Ecommerce App",
    date: "January 2025 - March 2025",
    responsibilities: [
      "An Ecommerce application for a perfume store.",
      "Users can add to cart/fav, and checkout. Admin can manage products and orders.",
      "Implemented secure payment processing using Stripe API.",
      "Users can check Delivery status",
      "Tech Stack: React, Node.js, Express, MongoDB, Stripe API, CSS",
    ],
        githubLink:"https://github.com/AakashMaharjan929/MERN-Stack/tree/main/Perfume%20Ecommerce",
    liveLink:"",
  },
  {
    review:
      "Through this project, I strengthened my backend development skills using PHP and MySQL, particularly in designing databases for real-world applications. I also learned how to implement secure payment approval flows and gained experience in balancing both user and admin requirements in a system.",
    imgPath: "/images/exp3.png",
    logoPath: "/images/logos/php.png",
    title: "Room Rental System",
    date: "October 2024 - November 2024",
    responsibilities: [
      "A Room Rental System, built with PHP and MySQL.",
      "Users can post rooms, book rooms, and manage their listings. Admin can manage users and listings.",
      "Uses QR payment with Admin approval",
      "Tech Stack: PHP, MySQL, HTML, CSS, FIGMA ",
    ],
    githubLink:"https://github.com/AakashMaharjan929/PHP/tree/main/Room%20Rental%20System",
    liveLink:"",
  },
];

const expLogos = [
  {
    name: "logo1",
    imgPath: "/images/logo1.png",
  },
  {
    name: "logo2",
    imgPath: "/images/logo2.png",
  },
  {
    name: "logo3",
    imgPath: "/images/logo3.png",
  },
];

const testimonials = [
  {
    name: "Esther Howard",
    mentions: "@estherhoward",
    review:
      "I can’t say enough good things about Adrian. He was able to take our complex project requirements and turn them into a seamless, functional website. His problem-solving abilities are outstanding.",
    imgPath: "/images/client1.png",
  },
  {
    name: "Wade Warren",
    mentions: "@wadewarren",
    review:
      "Working with Adrian was a fantastic experience. He transformed our outdated website into a modern, user-friendly platform. His attention to detail and commitment to quality are unmatched. Highly recommend him for any web dev projects.",
    imgPath: "/images/client3.png",
  },
  {
    name: "Guy Hawkins",
    mentions: "@guyhawkins",
    review:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    imgPath: "/images/client2.png",
  },
  {
    name: "Marvin McKinney",
    mentions: "@marvinmckinney",
    review:
      "Adrian was a pleasure to work with. He turned our outdated website into a fresh, intuitive platform that’s both modern and easy to navigate. Fantastic work overall.",
    imgPath: "/images/client5.png",
  },
  {
    name: "Floyd Miles",
    mentions: "@floydmiles",
    review:
      "Adrian’s expertise in web development is truly impressive. He delivered a robust and scalable solution for our e-commerce site, and our online sales have significantly increased since the launch. He’s a true professional!",
    imgPath: "/images/client4.png",
  },
  {
    name: "Albert Flores",
    mentions: "@albertflores",
    review:
      "Adrian was a pleasure to work with. He understood our requirements perfectly and delivered a website that exceeded our expectations. His skills in both frontend and backend dev are top-notch.",
    imgPath: "/images/client6.png",
  },
];

const socialImgs = [
  {
    name: "insta",
    url: "https://www.instagram.com/",
    imgPath: "/images/insta.png",
  },
  {
    name: "fb",
    url: "https://www.facebook.com/",
    imgPath: "/images/fb.png",
  },
  {
    name: "x",
    url: "https://www.x.com/",
    imgPath: "/images/x.png",
  },
  {
    name: "linkedin",
    url: "https://www.linkedin.com/",
    imgPath: "/images/linkedin.png",
  },
];

export {
  words,
  abilities,
  logoIconsList,
  counterItems,
  expCards,
  expLogos,
  testimonials,
  socialImgs,
  techStackIcons,
  techStackImgs,
  navLinks,
};