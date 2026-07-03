# Mo — AI Studio React Demo

A modern, full-stack AI-powered React application built with **Vite**, **TypeScript**, and **Google Gemini API**. Mo showcases best practices for building responsive AI applications with a clean component architecture.

## Overview

Mo is a React-based demonstration application that integrates Google's Gemini AI API. It provides a production-ready template for building AI-powered web applications with TypeScript, Tailwind CSS, and Vite's lightning-fast build system.

**Live Demo:** https://mo-murex-eight.vercel.app

## Features

- ✅ **Gemini AI Integration**: Powered by Google's latest Gemini models
- ✅ **React 19 + TypeScript**: Modern, type-safe component architecture
- ✅ **Vite Build System**: Ultra-fast development and production builds
- ✅ **Tailwind CSS**: Utility-first responsive styling
- ✅ **Motion Animations**: Smooth UI transitions and animations
- ✅ **Responsive Design**: Mobile-first, works on all devices
- ✅ **Hot Module Replacement**: Instant development feedback
- ✅ **Production Optimized**: Minimal bundle size

## Tech Stack

### Frontend
- **React** 19.0 - UI library
- **TypeScript** 5.8 - Type safety
- **Vite** 6.2 - Build tool and dev server
- **Tailwind CSS** 4.1 - Utility-first CSS
- **Lucide React** 0.546 - Icon library

### Build & Development
- **@vitejs/plugin-react** - React JSX support
- **@tailwindcss/vite** - Tailwind CSS integration
- **TypeScript** - Language support

### Dependencies
- **@google/genai** 1.29 - Gemini API client
- **motion** 12.23 - Animation library
- **dotenv** 17.2 - Environment management

## Project Structure

```
Mo/
├── src/
│   ├── App.tsx                 # Main application component
│   ├── main.tsx                # React DOM entry point
│   ├── index.css               # Global styles
│   ├── components/             # Reusable components
│   │   ├── Chat.tsx           # Chat interface
│   │   ├── Button.tsx         # Styled button
│   │   └── ...                # Other components
│   └── types/                  # TypeScript definitions
├── public/
│   ├── index.html              # HTML template
│   └── favicon.ico            # App icon
├── vite.config.ts             # Vite configuration
├── tsconfig.json              # TypeScript configuration
├── tailwind.config.js         # Tailwind configuration
├── postcss.config.js          # PostCSS configuration
├── .env.example               # Environment template
├── .env.local                 # Local environment (git-ignored)
├── package.json               # Dependencies
├── package-lock.json          # Lock file
└── README.md                  # This file
```

## Installation

### Prerequisites

- **Node.js** 18 or higher
- **npm** 9+ or **yarn** 3+
- **Google Gemini API Key** (free tier available)

### Setup Steps

1. **Clone the repository**
   ```bash
   git clone https://github.com/lenchobel/Mo.git
   cd Mo
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Get a Gemini API Key**
   - Visit https://ai.google.dev
   - Click "Get API Key"
   - Create a new key (free tier available)

4. **Configure environment variables**
   ```bash
   # Copy template
   cp .env.example .env.local

   # Edit with your API key
   # GEMINI_API_KEY=your_api_key_here
   ```

5. **Start development server**
   ```bash
   npm run dev
   ```

   Vite server runs on `http://localhost:5173` by default (or `http://localhost:3000` if configured).

## Configuration

### Environment Variables

```env
# Required
GEMINI_API_KEY=your_gemini_api_key_here

# Optional
VITE_API_URL=https://api.example.com
VITE_LOG_LEVEL=info
```

### Vite Configuration

Edit `vite.config.ts` to customize:
- Port and host
- Proxy settings
- Build optimization
- Plugin configuration

### Tailwind Configuration

Customize `tailwind.config.js`:
- Color palette
- Typography scales
- Spacing values
- Breakpoints

## Running the Project

### Development

```bash
# Start development server with HMR
npm run dev

# Open http://localhost:3000 (or 5173) in your browser
```

**Features:**
- Hot Module Replacement (HMR)
- Fast Refresh for React components
- TypeScript checking on save
- Instant feedback

### Build for Production

```bash
# Create optimized production build
npm run build

# Output in `dist/` directory
```

### Preview Production Build

```bash
# Test production build locally
npm run preview

# Opens build on local server
```

### Type Checking

```bash
# Check TypeScript types without building
npm run lint

# (Or manually)
npx tsc --noEmit
```

## Deployment

### Deploy to Vercel (Recommended)

1. **Push to GitHub**
   ```bash
   git push origin master
   ```

2. **Connect to Vercel**
   - Visit https://vercel.com
   - Click "New Project"
   - Select GitHub repository
   - Configure build:
     - Framework: Vite
     - Build Command: `npm run build`
     - Output Directory: `dist`

3. **Add Environment Variables**
   - Settings → Environment Variables
   - Add `GEMINI_API_KEY`

4. **Deploy**
   - Click "Deploy"
   - Your app is live at unique Vercel URL

### Deploy to Netlify

1. **Connect repository**
   - Visit https://netlify.com
   - Click "New site from Git"
   - Select repository

2. **Configure build**
   - Build command: `npm run build`
   - Publish directory: `dist`

3. **Add environment variables**
   - Site Settings → Build & Deploy → Environment
   - Add `GEMINI_API_KEY`

4. **Deploy**
   - Click "Deploy site"

### Deploy to GitHub Pages

1. **Update `vite.config.ts`**
   ```typescript
   export default defineConfig({
     base: '/Mo/',  // Your repo name
     // ...
   });
   ```

2. **Add GitHub Actions workflow** (`.github/workflows/deploy.yml`)
   ```yaml
   name: Deploy to GitHub Pages
   on: [push]
   jobs:
     deploy:
       runs-on: ubuntu-latest
       steps:
         - uses: actions/checkout@v2
         - uses: actions/setup-node@v2
         - run: npm install && npm run build
         - uses: peaceiris/actions-gh-pages@v3
           with:
             github_token: ${{ secrets.GITHUB_TOKEN }}
             publish_dir: ./dist
   ```

### Deploy to Custom Server

```bash
# Build the application
npm run build

# Copy dist/ to your server
scp -r dist/* user@server:/var/www/mo/

# Serve with nginx/Apache
# (Configure as static file server)
```

## API Integration

### Gemini API Setup

The application uses the Google Gemini API for AI responses.

**Example Integration:**

```typescript
import { GoogleGenerativeAI } from "@google/genai";

const client = new GoogleGenerativeAI(process.env.VITE_GEMINI_API_KEY);
const model = client.getGenerativeModel({ model: "gemini-pro" });

async function generateResponse(prompt: string) {
  const response = await model.generateContent(prompt);
  return response.response.text();
}
```

### API Endpoint

**URL:** `https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent`

**Methods:**
- `generateContent()` - Single response
- `generateContentStream()` - Streaming response

## Roadmap

### Version 1.1
- [ ] Conversation history
- [ ] Export chat as PDF
- [ ] Dark mode toggle
- [ ] Typing indicators

### Version 2.0
- [ ] Backend API
- [ ] User authentication
- [ ] Database integration
- [ ] Advanced analytics

### Version 3.0
- [ ] Multi-model support
- [ ] Custom AI personalities
- [ ] Team collaboration
- [ ] Admin dashboard

## Challenges Solved

### 1. **Fast Build Times**
   - Vite's module-based bundling
   - Instant dev server startup
   - HMR for rapid iteration

### 2. **Type Safety**
   - Full TypeScript support
   - Type-safe API integration
   - Better IDE support

### 3. **Responsive Design**
   - Tailwind's utility-first approach
   - Mobile-first breakpoints
   - Consistent spacing and colors

### 4. **API Integration**
   - Clean async/await patterns
   - Error boundary implementation
   - Retry logic for reliability

## Future Improvements

1. **Performance**
   - Code splitting for routes
   - Image optimization
   - Lazy loading components
   - Service worker for offline support

2. **Features**
   - Multi-turn conversations
   - Document upload and analysis
   - Model selection UI
   - Response regeneration

3. **Developer Experience**
   - E2E tests with Playwright
   - Component storybook
   - API documentation
   - Development guidelines

4. **Production**
   - Error tracking (Sentry)
   - Analytics integration
   - Usage monitoring
   - Performance metrics

## Troubleshooting

### "API Key Error"
- Verify `GEMINI_API_KEY` in `.env.local`
- Ensure key is active at https://ai.google.dev
- Restart dev server after `.env` changes

### "Port Already in Use"
```bash
# Use different port
npm run dev -- --port 5174
```

### "Build Fails"
```bash
# Clear dependencies and reinstall
rm -rf node_modules package-lock.json
npm install
npm run build
```

### "TypeScript Errors"
```bash
# Check for type errors
npm run lint

# Fix lint issues
npx tsc --noEmit
```

### "Vite HMR Not Working"
- Check browser console for connection errors
- Ensure firewall isn't blocking WebSocket
- Try explicit HMR config in `vite.config.ts`:
  ```typescript
  server: {
    hmr: {
      protocol: 'ws',
      host: 'localhost',
      port: 5173,
    }
  }
  ```

## Development

### Project Scripts

```bash
npm run dev      # Start dev server
npm run build    # Build for production
npm run preview  # Preview production build
npm run lint     # Check TypeScript types
```

### Best Practices

1. **Component Organization**
   - One component per file
   - Use TypeScript interfaces
   - Keep components small and focused

2. **State Management**
   - Use React hooks (useState, useContext)
   - Consider Zustand for complex state
   - Avoid prop drilling

3. **Styling**
   - Use Tailwind utilities
   - Avoid inline styles
   - Create component classes in CSS

4. **Performance**
   - Use React.memo for expensive components
   - Lazy load routes
   - Optimize images

## License

MIT License — See LICENSE file for details.

---

**Project:** Mo AI Studio Demo  
**Maintainer:** Lencho Belay Abdisa  
**Status:** Production Ready  
**Last Updated:** July 2025
