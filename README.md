# Portfolio - Kshatri Reshmasree

A modern, responsive portfolio website showcasing frontend development skills, professional experience, and projects.

## About

This is a personal portfolio website for *Kshatri Reshmasree*, a Frontend Developer specializing in React.js and React Native. The site features smooth animations, dark/light theme support, and a clean, professional design.

## Features

- *Responsive Design* — Works seamlessly on desktop, tablet, and mobile
- *Dark/Light Theme* — Toggle between themes with smooth transitions
- *Smooth Animations* — Powered by Framer Motion for scroll-triggered animations
- *Multiple Sections* — Hero, About, Skills, Experience, Projects, Education, Contact
- *Contact Form* — Integrated with Supabase for message storage

## Tech Stack

- *React 18* — UI library
- *TypeScript* — Type-safe JavaScript
- *Vite* — Fast build tool and dev server
- *Tailwind CSS* — Utility-first CSS framework
- *Framer Motion* — Animation library
- *Lucide React* — Icon library
- *Supabase* — Backend for contact form

## Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher recommended)
- npm (comes with Node.js)

## Getting Started

### 1. Clone or Download

If you downloaded the zip from Bolt, extract it to your desired location.

### 2. Install Dependencies

bash
npm install


### 3. Start Development Server

bash
npm run dev


The site will be available at http://localhost:5173

## Available Scripts

| Command | Description |
|---------|-------------|
| npm run dev | Start development server with hot reload |
| npm run build | Build for production (outputs to dist/ folder) |
| npm run preview | Preview production build locally |
| npm run lint | Run ESLint to check for code issues |
| npm run typecheck | Run TypeScript type checking |

## Project Structure


project/
├── src/
│   ├── components/       # Reusable UI components
│   │   ├── Footer.tsx
│   │   ├── Navbar.tsx
│   │   └── SectionWrapper.tsx
│   ├── sections/         # Page sections
│   │   ├── About.tsx
│   │   ├── Contact.tsx
│   │   ├── Education.tsx
│   │   ├── Experience.tsx
│   │   ├── Hero.tsx
│   │   ├── Projects.tsx
│   │   └── Skills.tsx
│   ├── hooks/            # Custom React hooks
│   │   ├── useScrollAnimation.ts
│   │   └── useTheme.ts
│   ├── data/             # Portfolio content data
│   │   └── portfolioData.ts
│   ├── types/            # TypeScript type definitions
│   │   └── index.ts
│   ├── App.tsx           # Main application component
│   ├── main.tsx          # Application entry point
│   └── index.css         # Global styles
├── public/               # Static assets
├── index.html            # HTML template
├── vite.config.ts        # Vite configuration
├── tailwind.config.js    # Tailwind CSS configuration
└── package.json          # Dependencies and scripts


## Customization

All portfolio content (name, skills, experience, projects, education) is stored in src/data/portfolioData.ts. Edit this file to update your personal information.
