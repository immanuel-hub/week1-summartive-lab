# Personal Project Showcase App

A responsive React application for showcasing personal projects. Users can view, add, and search through projects on a clean landing page.
---
## Features
- Landing page displaying a list of projects
- Form to dynamically add new projects (title + description)
- Live search that filters projects by title or description
- Responsive design that adapts to mobile, tablet, and desktop screen sizes
- State managed with `useState` at the nearest common parent (`App`)
- Modular component structure: `ProjectForm`, `SearchBar`, `ProjectList`
- Unit tests for all key components using Vitest and React Testing Library
---
## Setup & Usage
### Prerequisites
- Node.js (v18 or higher)
- npm
### Install dependencies
```bash
cd trial
npm install
```
### Run development server
```bash
npm run dev
```
Then open [http://localhost:5173](http://localhost:5173) in your browser.
### Run tests
```bash
npm test
```
### Build for production
```bash
npm run build
```
---
## Project Structure
```
src/
├── components/
│   ├── ProjectForm.jsx   # Form for adding new projects
│   ├── SearchBar.jsx     # Search input component
│   └── ProjectList.jsx   # Renders the list of projects
├── styles/
│   └── App.css           # All application styles
├── tests/
│   └── App.test.jsx      # Unit and integration tests
├── App.jsx               # Root component, holds shared state
├── main.jsx              # App entry point
└── index.css             # Global base styles
```
---
## Known Limitations
- Projects are not persisted — refreshing the page resets the list to the initial seed data
- No ability to edit or delete existing projects
- No mock-up image was provided, so styles are based on a clean, minimal interpretation
- Search is client-side only and works on the current in-memory list
