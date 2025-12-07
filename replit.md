# Modem Ananda - Data Analyst Portfolio

## Overview
Professional portfolio website for Modem Ananda, a Data Analyst based in Bangalore. The site showcases data analytics experience, projects, skills, and provides a contact form for hiring managers.

## Recent Changes
- Dec 2024: Initial portfolio build with all sections
- Contact form with backend API integration

## Project Architecture

### Frontend (React + Vite)
- **client/src/pages/home.tsx**: Main portfolio page
- **client/src/components/**: Reusable components
  - Header.tsx - Fixed navigation with mobile menu
  - HeroSection.tsx - Introduction with name, title, metrics
  - SkillsSection.tsx - Technical skills organized by category
  - ProjectsSection.tsx - Featured projects with tech stacks
  - ExperienceSection.tsx - Work experience timeline
  - CertificationsSection.tsx - Professional certifications
  - ContactSection.tsx - Contact form with API integration
  - Footer.tsx - Site footer with social links
  - ThemeToggle.tsx - Dark/light mode toggle

### Backend (Express)
- **server/routes.ts**: API endpoints
  - POST /api/contact - Submit contact form messages
- **server/storage.ts**: In-memory storage for contact messages

### Shared
- **shared/schema.ts**: Zod schemas for data validation
  - contactMessages table schema
  - insertContactMessageSchema for form validation

## Key Features
- Responsive design (mobile, tablet, desktop)
- Dark mode support with theme toggle
- Smooth scroll navigation
- Working contact form with backend storage
- Professional design following design_guidelines.md

## Contact Information (Portfolio Owner)
- Email: anandam0127@gmail.com
- LinkedIn: linkedin.com/in/ananda-analyst/
- Phone: +91 8008726591
- Location: Bangalore, India

## Tech Stack
- Frontend: React, TypeScript, Tailwind CSS, Shadcn UI
- Backend: Express.js, Node.js
- Routing: Wouter
- State: TanStack Query
- Build: Vite
