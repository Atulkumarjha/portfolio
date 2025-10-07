# Portfolio Project

A modern, responsive portfolio website built with Next.js, React, and TypeScript. This project showcases your work, skills, and personal information in a visually appealing and interactive way.

## Features
- Next.js 15+ with Turbopack for fast builds
- TypeScript for type safety
- Modular component structure
- Animated and interactive UI elements
- Responsive design for all devices
- Contact form with email sending capability
- Project and blog showcase
- Customizable theme and assets

## Folder Structure
```
public/           # Static assets (images, PDF resume, etc.)
src/
  app/            # Next.js app directory (pages, layouts, API routes)
  components/     # Reusable React components
    ui/           # UI-specific components (navbar, cards, etc.)
    ...           # Other components
  lib/            # Utility functions
```

## Getting Started

### Prerequisites
- Node.js (18+ recommended)
- npm or yarn

### Installation
```bash
npm install
# or
yarn install
```

### Running Locally
```bash
npm run dev
# or
yarn dev
```
Visit `http://localhost:3000` in your browser.

### Building for Production
```bash
npm run build
```

## Customization
- Update your personal info, projects, and images in the `src/app` and `public/assets` folders.
- Modify or add components in `src/components` for new features.
- Change theme styles in `globals.css` or component files.

## Environment Variables
If you use the contact form, set up your email service credentials in `.env.local` as needed.

## Contributing
Pull requests and suggestions are welcome! Please open an issue for major changes.

## License
MIT

## Author
Atul Kumar Jha
