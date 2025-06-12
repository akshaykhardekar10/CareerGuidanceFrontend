# CareerGuidanceFrontend

This is a Frontend of the CareerGuidance website's , built with React, TypeScript, and Material-UI.

## Features

- Responsive design
- Modern UI components
- Smooth animations
- Interactive elements
- Testimonials carousel
- Partner logos showcase

## Prerequisites

- Node.js (v18 or higher)
- npm

## Setup

1. Clone the repository:
```bash
git clone <repository-url>
cd CareerGuidanceFrontend
```

2. Install dependencies:
```bash
npm install
```

3. Add logo images:
- Add all partner institution logos to the `public/logos` directory
- Follow the specifications in `public/logos/README.md`

## Development

To start the development server:

```bash
npm run dev
```

The application will be available at `http://localhost:5173`

## Building for Production

To create a production build:

```bash
npm run build
```

The built files will be in the `dist` directory.

## Project Structure

```
src/
  ├── components/
  │   ├── Navbar.tsx
  │   ├── Hero.tsx
  │   ├── Testimonials.tsx
  │   └── Partners.tsx
  ├── App.tsx
  └── index.css
public/
  ├── logos/
  │   └── [partner logos]
  └── wave.svg
```

## Technologies Used

- React
- TypeScript
- Material-UI
- Framer Motion
- Tailwind CSS
- Vite

## License

MIT
