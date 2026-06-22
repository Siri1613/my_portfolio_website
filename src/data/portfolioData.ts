import type { SkillCategory, Experience, Project, Education, NavItem } from '../types';

export const navItems: NavItem[] = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
];

export const personalInfo = {
  name: 'Kshatri Reshmasree',
  roles: ['Frontend Developer', 'React.js Developer', 'React Native Developer', 'UI/UX Enthusiast'],
  tagline: 'Crafting seamless digital experiences across web & mobile',
  summary:
    'Passionate Frontend Developer with hands-on experience building responsive web applications and cross-platform mobile apps. Currently working at Kshema General Insurance contributing to scalable crop insurance platforms, and a Microsoft India internship alumna. I thrive at the intersection of clean code and intuitive UI.',
  email: 'siri161329@gmail.com',
  phone: '+91 7993469244',
  location: 'Guntur, Andhra Pradesh, India',
  github: 'https://github.com/Siri1613/My_portfolio',
  linkedin: 'https://www.linkedin.com/in/kshatri-reshmasree-59b603219/',
  languages: ['English', 'Hindi', 'Telugu'],
};

export const skillCategories: SkillCategory[] = [
  {
    name: 'Frontend',
    skills: [
      { name: 'React.js', level: 92 },
      { name: 'TypeScript', level: 85 },
      { name: 'JavaScript', level: 90 },
      { name: 'HTML5', level: 95 },
      { name: 'CSS3', level: 90 },
      { name: 'Redux', level: 80 },
      { name: 'React Hooks', level: 88 },
      { name: 'React Native', level: 82 },
    ],
  },
  {
    name: 'Programming',
    skills: [
      { name: 'Java (OOPs)', level: 78 },
      { name: 'C Programming', level: 75 },
      { name: 'Data Structures & Algorithms', level: 80 },
      { name: 'Python', level: 72 },
    ],
  },
  {
    name: 'Tools & Platforms',
    skills: [
      { name: 'Git', level: 88 },
      { name: 'GitHub', level: 88 },
      { name: 'REST APIs', level: 85 },
      { name: 'OpenCV', level: 70 },
    ],
  },
];

export const experiences: Experience[] = [
  {
    company: 'Kshema General Insurance',
    role: 'Frontend Developer',
    duration: 'Apr 2025 – Present',
    location: 'Hyderabad, India',
    type: 'full-time',
    responsibilities: [
      'Developing responsive web applications using React.js, ensuring cross-browser compatibility and optimal user experience.',
      'Building and maintaining mobile applications for Android and iOS using React Native.',
      'Implementing React Forms using React Hooks for state management, reusable components, side effects, and performance optimization.',
      'Integrating RESTful APIs to fetch, display, and manage dynamic data across applications.',
      'Collaborating with backend teams and designers to deliver intuitive, user-friendly interfaces.',
      'Handling UI components, form validations, error handling, and data rendering efficiently.',
    ],
    tech: ['React.js', 'React Native', 'TypeScript', 'Redux', 'REST APIs', 'React Hooks'],
  },
  {
    company: 'Microsoft India',
    role: 'Software Engineer Intern',
    duration: 'May 2023 – July 2023',
    location: 'Hyderabad, India',
    type: 'intern',
    responsibilities: [
      'Developed a custom Microsoft Edge plugin to track third-party (3P) URL activities inaccessible within the internal network.',
      'Integrated REST APIs for real-time data capture, processing, and management of user activities.',
      'Implemented secure data storage and domain integration to ensure internal visibility of tracked activities.',
      'Enabled Office 365 integration for unified monitoring of internal and external user interactions.',
      'Implemented efficient event logging and performance optimization techniques to ensure minimal browser performance impact.',
    ],
    tech: ['JavaScript', 'REST APIs', 'Browser Extension API', 'Office 365', 'Embedded C'],
  },
];

export const projects: Project[] = [
  {
    title: 'Automatic Door Open System using RFID Tags',
    description:
      'An automated door access and attendance system leveraging RFID technology and Arduino to authenticate users, record attendance securely in a database, and control door access automatically.',
    tech: ['Arduino', 'Embedded C', 'RFID', 'Database Integration'],
    features: [
      'RFID-based user authentication',
      'Automated door control via relay module',
      'Secure attendance recording in database',
      'Reduced manual effort and improved accuracy',
      'Enhanced physical security system',
    ],
    github: 'https://github.com/Siri1613/My_portfolio',
    demo: '#',
    image: 'https://images.pexels.com/photos/1550337/pexels-photo-1550337.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'IoT / Embedded',
  },
  {
    title: 'Vehicle Accident Prevention using Eye Blink Sensor',
    description:
      'A driver safety system using an eye blink sensor and Arduino to monitor drowsiness in real time, triggering an alarm and automatically stopping the vehicle if unsafe eye closure is detected.',
    tech: ['Arduino', 'Eye Blink Sensor', 'Embedded C', 'Relay Module'],
    features: [
      'Real-time drowsiness monitoring',
      'Automatic alarm on unsafe eye closure',
      'Vehicle stop via relay module',
      'Low-latency sensor response',
      'Prototype for road safety automation',
    ],
    github: 'https://github.com/Siri1613/My_portfolio',
    demo: '#',
    image: 'https://images.pexels.com/photos/3747463/pexels-photo-3747463.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'IoT / Safety',
  },
  {
    title: 'Eyeball Detection using OpenCV',
    description:
      'A real-time eyeball detection and tracking system using OpenCV and Python, implementing image processing and machine learning techniques to accurately detect and track eye movements in images and video streams.',
    tech: ['Python', 'OpenCV', 'Machine Learning', 'Computer Vision'],
    features: [
      'Real-time eye detection in video streams',
      'Machine learning-based tracking algorithms',
      'Optimized for processing speed and accuracy',
      'Works on both images and live video',
      'Reliable performance under varying conditions',
    ],
    github: 'https://github.com/Siri1613/My_portfolio',
    demo: '#',
    image: 'https://images.pexels.com/photos/5926382/pexels-photo-5926382.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Computer Vision / ML',
  },
  {
    title: 'Cosmetic Product Recommendation System',
    description:
      'A recommendation system using Python and NLP techniques to analyze user reviews through sentiment analysis, identifying top-rated cosmetic products and recommending based on positive user sentiment.',
    tech: ['Python', 'NLP', 'Sentiment Analysis', 'Machine Learning', 'Data Analysis'],
    features: [
      'NLP-based review sentiment analysis',
      'Sentiment scoring for product ranking',
      'Automated top-product identification',
      'Data-driven recommendation engine',
      'Practical ML and data analysis showcase',
    ],
    github: 'https://github.com/Siri1613/My_portfolio',
    demo: '#',
    image: 'https://images.pexels.com/photos/3373736/pexels-photo-3373736.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'ML / NLP',
  },
];

export const education: Education[] = [
  {
    degree: 'Bachelor of Technology (ECE)',
    institution: 'KL University',
    duration: '2020 – 2024',
    gpa: '9.07 / 10',
    field: 'Electronics & Communication Engineering',
  },
  {
    degree: 'Intermediate – MPC',
    institution: 'Narayana Junior College',
    duration: '2018 – 2020',
    gpa: '9.3 / 10',
    field: 'Mathematics, Physics & Chemistry',
  },
  {
    degree: 'Secondary School Certificate (SSC)',
    institution: 'Munnangi High School',
    duration: '2017 – 2018',
    gpa: '9.2 / 10',
    field: 'General Education',
  },
];

export const softSkills = [
  'Problem Solving',
  'Analytical Thinking',
  'Communication Skills',
  'Team Collaboration',
  'Adaptability',
  'Time Management',
  'Quick Learning',
  'Attention to Detail',
];
