# Gihan Wanninayaka Portfolio

A minimalist portfolio website inspired by modern web design principles, featuring dark/light/monospaced theme switching and a clean aesthetic inspired by p5aholic.me.

## Features

- Dark and Light theme modes
- Monospaced font toggle
- Responsive design
- Grain/noise texture overlay
- Smooth page transitions
- Clean, minimalist aesthetic

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Add required assets to the `public` folder:
   - `noise.png` - A noise/grain texture image (you can generate one online or use a noise texture generator)
   - `favicon.ico` - Your favicon

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

```
/gihan-portfolio/
├── components/
│   └── Layout.js          # Main layout with navigation and theme switcher
├── pages/
│   ├── _app.js            # Next.js app wrapper
│   ├── index.js           # Home page
│   ├── projects.js        # Projects listing
│   ├── info.js            # Info/about page
│   └── contact.js         # Contact page
├── public/
│   ├── noise.png          # Grain texture (needs to be added)
│   └── favicon.ico        # Favicon (needs to be added)
├── styles/
│   └── globals.css        # Global styles and theme variables
└── ...config files
```

## Customization

### Colors
Edit the CSS variables in `styles/globals.css`:
```css
:root {
  --bg-primary: #1a1a1a;
  --bg-secondary: #2d1b3d;
  --text-primary: #ffffff;
  --text-secondary: #c9a961;
  --border-color: #333;
}
```

### Projects
Edit the projects array in `pages/projects.js` to add your own projects.

### Content
Update the content in each page file to match your information.

## Building for Production

```bash
npm run build
npm start
```

## Technologies Used

- Next.js 14
- React 18
- Tailwind CSS 3
- CSS Variables for theming

## Notes

- The noise texture adds a subtle grain effect to the entire site
- Theme preferences are saved to localStorage
- The site is fully responsive and works on all device sizes
