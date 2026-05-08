# Personal Project Showcase App

A responsive React application for showcasing personal projects. Users can view, add, and search through projects on a clean landing page.

## Features
- Landing page displaying a list of projects
- Form to dynamically add new projects (title + description)
- Live search that filters projects by title or description
- Responsive design that adapts to mobile, tablet, and desktop screen sizes
- State managed with `useState` at the nearest common parent (`App`)
- Modular component structure: `ProjectForm`, `SearchBar`, `ProjectList`

## Setup & Usage

### Prerequisites
- Node.js (v18 or higher)
- npm

### Install dependencies
```bash
npm install
```

### Run development server
```bash
npm run dev
```
Then open [http://localhost:5173](http://localhost:5173) in your browser.

### Build for production
```bash
npm run build
```

## Project Structure
```
src/
├── components/
│   ├── ProjectForm.jsx   # Form for adding new projects
│   ├── SearchBar.jsx     # Search input component
│   ├── ProjectList.jsx   # Renders the list of projects
│   └── styling/
│       └── App.css       # All application styles
├── App.jsx               # Root component, holds shared state
├── main.jsx              # App entry point
└── index.css             # Global base styles
```