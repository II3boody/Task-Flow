# Task Flow - Professional Task Management Dashboard

<div align="center">

![Version](https://img.shields.io/badge/version-1.0.0-blue.svg?cacheSeconds=2592000)
![License](https://img.shields.io/badge/license-MIT-green.svg)
![Build Status](https://img.shields.io/badge/build-passing-brightgreen.svg)
![Code Quality](https://img.shields.io/badge/code%20quality-A+-brightgreen.svg)

### A Modern, Responsive Task Management Application Built with React, TypeScript & Tailwind CSS

[Features](#features) • [Getting Started](#getting-started) • [Usage](#usage) • [Tech Stack](#tech-stack) • [Contributing](#contributing)

</div>

---

## About The Project

**Task Flow** is a professional-grade task management dashboard designed to help users organize, track, and manage their daily tasks efficiently. Built with modern web technologies, it provides an intuitive interface with real-time updates and persistent storage.

### Key Highlights
- **Fully Responsive Design** - Works seamlessly on desktop, tablet, and mobile devices
- **Modern UI/UX** - Built with Tailwind CSS for a professional appearance
- **Local Storage** - Tasks persist automatically in browser storage
- **Lightning Fast** - Powered by Vite for optimal performance
- **Type Safe** - Full TypeScript support for robust code
- **Mobile Optimized** - Touch-friendly interface for all devices

---

## Features

### Core Features
- **Create Tasks** - Add new tasks with ease
- **Edit Tasks** - Modify existing tasks
- **Mark Complete** - Track task completion status
- **Delete Tasks** - Remove completed or unwanted tasks
- **Dashboard Analytics** - View task statistics and overview
- **Home Page** - Beautiful landing page
- **Responsive Navigation** - Smooth navigation between pages

### Additional Features
- **Auto-Save** - Tasks automatically saved to local storage
- **Beautiful UI** - Modern design with Tailwind CSS
- **Fast Performance** - Optimized with Vite
- **Component Based** - Modular, reusable components
- **Client-Side Routing** - Smooth page transitions with React Router

---

## Getting Started

### Prerequisites
- Node.js (v14.0 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/II3boody/Task-Flow.git
   cd Task-Flow
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open in browser**
   ```
   http://localhost:5173
   ```

### Building for Production

```bash
npm run build
# or
yarn build
```

Preview production build:
```bash
npm run preview
```

---

## Usage

### Creating a Task
1. Navigate to the **Tasks** page
2. Click on the "Add Task" button
3. Enter task details
4. Click "Create" to save

### Viewing Dashboard
- Go to **Dashboard** to see your task statistics
- View total tasks, completed, and pending counts
- Monitor your productivity

### Managing Tasks
- **Edit**: Click the edit icon to modify task details
- **Complete**: Mark tasks as done with the checkbox
- **Delete**: Remove tasks with the delete button

---

## Project Structure

```
task-dashboard/
├── public/              # Static assets
│   ├── favicon.svg
│   └── icons.svg
├── src/
│   ├── Components/      # Reusable components
│   │   ├── Layout/
│   │   ├── NavBar/
│   │   ├── Sidebar/
│   │   ├── TaskCard/
│   │   ├── StatCard/
│   │   └── Footer/
│   ├── Pages/           # Page components
│   │   ├── Home/
│   │   ├── Dashboard/
│   │   ├── Tasks/
│   │   └── Error/
│   ├── Types/           # TypeScript types
│   │   └── Task/
│   ├── assets/          # Images and SVGs
│   ├── App.tsx          # Main app component
│   ├── App.css          # Global styles
│   ├── index.css        # Tailwind imports
│   └── main.tsx         # React entry point
├── index.html           # HTML template
├── package.json         # Dependencies
├── tsconfig.json        # TypeScript config
├── vite.config.ts       # Vite configuration
└── README.md            # This file
```

---

## Tech Stack

### Frontend Framework
- **React 19.2** - UI library
- **TypeScript** - Type-safe JavaScript
- **React Router 7** - Client-side routing

### Styling & UI
- **Tailwind CSS 4.3** - Utility-first CSS framework
- **Tailwind Vite Plugin** - Seamless Tailwind integration

### Build Tool
- **Vite 8.3** - Next-generation build tool
- **HMR (Hot Module Replacement)** - Instant development feedback

### Development Tools
- **ESLint** - Code linting
- **Babel** - JavaScript compiler
- **React Compiler** - Optimized React compilation

### Browser Storage
- **LocalStorage API** - Persistent client-side storage

---

## Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server with HMR |
| `npm run build` | Build for production |
| `npm run lint` | Run ESLint to check code quality |
| `npm run preview` | Preview production build locally |

---

## Styling & Design System

This project uses **Tailwind CSS** for styling, providing:
- Consistent color palette
- Responsive grid system
- Pre-built utility classes
- Mobile-first approach

---

## Data Persistence

Tasks are automatically saved to browser's **LocalStorage**:
- All tasks persist between sessions
- No backend server required
- Works offline

---

## Known Issues & Future Improvements

### Planned Features
- [ ] Backend API integration
- [ ] User authentication
- [ ] Task categories/tags
- [ ] Priority levels
- [ ] Due dates
- [ ] Task search and filters
- [ ] Dark mode toggle
- [ ] Export tasks (PDF/CSV)
- [ ] Task reminders/notifications
- [ ] Drag and drop reordering

---

## Contributing

Contributions are welcome and greatly appreciated! 

### How to Contribute

1. **Fork the repository**
   ```bash
   git clone https://github.com/II3boody/Task-Flow.git
   ```

2. **Create your feature branch**
   ```bash
   git checkout -b feature/AmazingFeature
   ```

3. **Make your changes**
   - Follow the existing code style
   - Add comments where necessary
   - Test your changes

4. **Commit your changes**
   ```bash
   git commit -m 'Add some AmazingFeature'
   ```

5. **Push to the branch**
   ```bash
   git push origin feature/AmazingFeature
   ```

6. **Open a Pull Request**
   - Describe your changes clearly
   - Link any related issues
   - Request review from maintainers

### Code Standards
- Use TypeScript for type safety
- Follow React best practices
- Keep components small and focused
- Write meaningful variable names
- Add JSDoc comments for complex functions

---

## License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

You are free to use, modify, and distribute this project.

---

## Author

**II3boody**

- GitHub: [@II3boody](https://github.com/II3boody)
- Project Repository: [Task-Flow](https://github.com/II3boody/Task-Flow)

---

## Support

If you find this project helpful, please consider:

- **Starring the repository** on GitHub
- **Forking the project** for your own use
- **Sharing** with your network
- **Providing feedback** and suggestions
- **Reporting bugs** if you find any

---

## Contact & Feedback

Feel free to reach out with any questions or feedback:

- **GitHub Issues**: [Report bugs or request features](https://github.com/II3boody/Task-Flow/issues)
- **GitHub Discussions**: [Join our community](https://github.com/II3boody/Task-Flow/discussions)

---

## Acknowledgments

- [React Documentation](https://react.dev)
- [Tailwind CSS](https://tailwindcss.com)
- [Vite](https://vitejs.dev)
- [TypeScript](https://www.typescriptlang.org)

---

<div align="center">

### Made with passion by II3boody

**Star the project if you find it useful!**

</div>

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])

```
