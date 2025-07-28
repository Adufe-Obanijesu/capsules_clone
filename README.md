# Capsule Landing Page Clone

A responsive landing page clone of an award winning site [Capsule by Moyra](https://capsule.moyra.co), built with React,
TypeScript, GSAP, and Vite. This project showcases modern web development techniques including smooth animations,
responsive design, and interactive elements.

🔗 **Live Demo**: [https://capsule-clone.netlify.app](https://capsule-clone.netlify.app)

## Features

- 📱 Fully responsive design that works on all device sizes
- ✨ Smooth animations and transitions using GSAP
- 🔄 Lazy-loaded sections for improved performance
- 🗺️ Interactive map integration with Azure Maps
- 🖱️ Custom scrolling experience with Lenis
- 🎨 Modern UI with Tailwind CSS
- 📦 Component-based architecture with React

## Technologies Used

- **React 19** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool
- **GSAP** - Animation library
- **Tailwind CSS** - Styling
- **Lenis** - Smooth scrolling
- **Azure Maps** - Map integration

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository
   ```bash
   git clone https://github.com/Adufe-Obanijesu/capsules_clone.git
   cd capsules_clone
   ```

2. Install dependencies
   ```bash
   npm install
   # or
   yarn
   ```

3. Create a `.env` file in the root directory with your Azure Maps API key:
   ```
   VITE_PRIMARY_KEY=your_azure_maps_api_key
   ```

4. Start the development server
   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. Open [http://localhost:5173](http://localhost:5173) in your browser

## Building for Production

```bash
npm run build
# or
yarn build
```

The built files will be in the `dist` directory.

## Project Structure

- `src/` - Source code
    - `components/` - Reusable UI components
    - `sections/` - Main page sections
    - `hooks/` - Custom React hooks
    - `data/` - Static data
    - `effects/` - Animation effects
    - `types/` - TypeScript type definitions

## License

This project is for educational purposes only. The original design belongs to [Moyra](https://capsule.moyra.co).
