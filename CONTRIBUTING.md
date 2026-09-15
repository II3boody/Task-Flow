# 🤝 Contributing to Task Flow

Thank you for your interest in contributing to Task Flow! This document provides guidelines and instructions for contributing.

## 📋 Table of Contents

- [Code of Conduct](#code-of-conduct)
- [Getting Started](#getting-started)
- [Development Process](#development-process)
- [Commit Guidelines](#commit-guidelines)
- [Pull Request Process](#pull-request-process)
- [Coding Standards](#coding-standards)
- [Reporting Bugs](#reporting-bugs)
- [Suggesting Features](#suggesting-features)

---

## 📜 Code of Conduct

### Our Pledge

We are committed to providing a welcoming and inspiring community for all. Please read and adhere to our [Code of Conduct](CODE_OF_CONDUCT.md).

---

## 🚀 Getting Started

### 1. Fork the Repository

Click the "Fork" button on the GitHub repository to create your own copy.

```bash
git clone https://github.com/YOUR_USERNAME/Task-Flow.git
cd Task-Flow
```

### 2. Add Upstream Remote

```bash
git remote add upstream https://github.com/II3boody/Task-Flow.git
```

### 3. Create a Feature Branch

```bash
git checkout -b feature/your-feature-name
```

Branch naming conventions:
- `feature/` - New feature
- `bugfix/` - Bug fix
- `docs/` - Documentation
- `refactor/` - Code refactoring
- `test/` - Test additions

### 4. Install Dependencies

```bash
npm install
```

### 5. Start Development Server

```bash
npm run dev
```

---

## 💻 Development Process

### Before You Start

1. Check if an issue exists for what you want to work on
2. If not, create an issue to discuss your changes
3. Wait for approval before starting work
4. Assign the issue to yourself

### While Developing

1. Keep your code clean and well-documented
2. Follow the [Coding Standards](#coding-standards)
3. Write meaningful commit messages
4. Test your changes thoroughly
5. Keep your branch updated with main

```bash
git fetch upstream
git rebase upstream/main
```

### Before Submitting

1. Run linter:
   ```bash
   npm run lint
   ```

2. Build project:
   ```bash
   npm run build
   ```

3. Test your changes in the browser

---

## 📝 Commit Guidelines

### Commit Message Format

```
<type>: <subject>

<body>

<footer>
```

### Type

- `feat:` - New feature
- `fix:` - Bug fix
- `docs:` - Documentation changes
- `style:` - Code style changes (formatting, semicolons, etc.)
- `refactor:` - Code refactoring
- `test:` - Adding tests
- `chore:` - Maintenance tasks

### Subject

- Use imperative mood ("add feature" not "added feature")
- Don't capitalize first letter
- No period at the end
- Limit to 50 characters

### Body

- Optional but recommended for complex changes
- Explain what and why, not how
- Wrap at 72 characters
- Separate from subject with blank line

### Footer

- Reference issues: `Closes #123`
- Breaking changes: `BREAKING CHANGE: description`

### Examples

```
feat: add task priority levels

Implement priority system for tasks allowing users to set
high, medium, or low priority levels.

Closes #42
```

```
fix: resolve memory leak in task store

Remove circular references in task management store that
caused memory accumulation over time.

Fixes #67
```

---

## 🔄 Pull Request Process

### Before Submitting PR

1. **Update your branch**
   ```bash
   git fetch upstream
   git rebase upstream/main
   ```

2. **Run tests and linter**
   ```bash
   npm run lint
   npm run build
   ```

3. **Push to your fork**
   ```bash
   git push origin your-branch-name
   ```

### PR Description Template

```markdown
## Description
Brief description of changes

## Type of Change
- [ ] Bug fix
- [ ] New feature
- [ ] Breaking change
- [ ] Documentation update

## Related Issues
Closes #(issue number)

## Testing
Describe how to test these changes

## Checklist
- [ ] Code follows style guidelines
- [ ] Self-review completed
- [ ] Comments added for complex logic
- [ ] Documentation updated
- [ ] No new warnings generated
- [ ] Tests added/updated
```

### PR Review Process

1. At least one maintainer review required
2. All feedback must be addressed
3. All discussions must be resolved
4. CI checks must pass
5. PR will be squashed and merged

---

## 🎨 Coding Standards

### TypeScript

- Use strict mode (`strict: true` in tsconfig.json)
- Type all function parameters and return types
- Avoid `any` type
- Use interfaces for object structures

```typescript
// Good
interface Task {
  id: string;
  title: string;
  completed: boolean;
}

function addTask(task: Task): void {
  // implementation
}

// Bad
function addTask(task: any) {
  // implementation
}
```

### React Components

- Use functional components with hooks
- Component names in PascalCase
- Props interfaces end with `Props`
- Separate concerns: one component per file

```typescript
// Good
interface ButtonProps {
  onClick: () => void;
  label: string;
  disabled?: boolean;
}

export function Button({ onClick, label, disabled }: ButtonProps) {
  return (
    <button onClick={onClick} disabled={disabled}>
      {label}
    </button>
  );
}
```

### File Structure

```
Components/
├── ComponentName/
│   ├── ComponentName.tsx
│   ├── ComponentName.css
│   └── index.ts
```

### Naming Conventions

- **Files**: PascalCase for components, lowercase with dash for utilities
- **Variables**: camelCase
- **Constants**: UPPER_CASE
- **Classes**: PascalCase

### Code Style

- Use ESLint configuration provided
- Prettier formatting (if available)
- Max line length: 100 characters
- Indent: 2 spaces

### Comments and Documentation

```typescript
/**
 * Adds a new task to the task list
 * @param task - The task object to add
 * @returns The ID of the created task
 */
function addTask(task: Task): string {
  // implementation
}
```

---

## 🐛 Reporting Bugs

### Before Reporting

- Check if the bug already exists in issues
- Make sure it's not a user error
- Test with latest version

### Bug Report Template

**Title:** Brief description of the bug

**Description:**
A clear description of what the bug is.

**Steps to Reproduce:**
1. Go to '...'
2. Click on '...'
3. Scroll down to '...'
4. See error

**Expected Behavior:**
What should have happened

**Actual Behavior:**
What actually happened

**Screenshots:**
If applicable, add screenshots

**Environment:**
- Browser: [e.g. Chrome 120]
- OS: [e.g. Windows 10]
- Node Version: [e.g. 18.0]

**Additional Context:**
Any other relevant information

---

## ✨ Suggesting Features

### Feature Request Template

**Title:** Brief description of the feature

**Is this related to a problem?**
Describe the problem you're trying to solve

**Desired Solution:**
Describe what you want to happen

**Alternatives Considered:**
Other solutions you've thought of

**Additional Context:**
Mockups, examples, or other context

---

## 📚 Resources

- [React Documentation](https://react.dev)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [Vite Guide](https://vitejs.dev/guide/)

---

## 🎯 Development Tips

### Useful Commands

```bash
# Start development server with HMR
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Run linter
npm run lint

# Fix linting errors
npm run lint -- --fix
```

### Debugging

1. Use React DevTools Chrome extension
2. Use browser DevTools for debugging
3. Check Console for errors
4. Use `console.log()` for quick debugging

---

## 🙏 Thank You

Thank you for contributing to Task Flow! Your efforts help make this project better.

---

**Questions?** Open an issue or start a discussion!

Happy coding! 🚀
