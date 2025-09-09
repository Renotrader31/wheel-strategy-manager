# Contributing to Wheel Strategy Manager Pro

Thank you for your interest in contributing! This document provides guidelines for contributing to the project.

## 🚀 Getting Started

### Prerequisites
- Node.js 14+ and npm 6+
- Git
- Basic knowledge of HTML, CSS, JavaScript
- Understanding of options trading concepts (helpful but not required)

### Development Setup

1. **Fork and Clone**
   ```bash
   git clone https://github.com/yourusername/wheel-strategy-manager-pro.git
   cd wheel-strategy-manager-pro
   ```

2. **Install Dependencies**
   ```bash
   npm install
   ```

3. **Start Development Server**
   ```bash
   npm run dev
   ```

4. **Open in Browser**
   Visit `http://localhost:3000`

## 📝 Types of Contributions

We welcome contributions in these areas:

### 🐛 Bug Reports
- Use the bug report template
- Include steps to reproduce
- Specify browser and version
- Attach screenshots if helpful

### ✨ Feature Requests
- Use the feature request template
- Explain the use case
- Consider existing alternatives
- Discuss implementation approach

### 🔧 Code Contributions
- Bug fixes
- New features
- Performance improvements
- UI/UX enhancements
- Documentation improvements

### 📚 Documentation
- README improvements
- Code comments
- User guides
- Tutorial content
- API documentation

## 🛠️ Development Guidelines

### Code Style
- Use consistent indentation (2 spaces)
- Follow JavaScript ES6+ conventions
- Use semantic HTML and accessible markup
- Write descriptive variable and function names
- Add comments for complex logic

### File Structure
```
wheel-strategy-manager-pro/
├── public/
│   ├── index.html          # Main application file
│   └── manifest.json       # PWA manifest
├── scripts/
│   ├── backup.js           # Utility scripts
│   └── validate.js
├── .github/
│   └── workflows/          # CI/CD workflows
├── docs/                   # Documentation
└── README.md
```

### Coding Standards

#### JavaScript
```javascript
// Use const/let instead of var
const tradeData = new Map();
let currentPrice = 0;

// Use arrow functions for short functions
const calculatePnL = (entry, current) => current - entry;

// Use template literals for string interpolation
const message = `Trade ${symbol} P&L: $${pnl.toFixed(2)}`;

// Use destructuring for cleaner code
const { symbol, quantity, entryPrice } = trade;
```

#### CSS
```css
/* Use CSS custom properties for theming */
:root {
  --primary-color: #1a1f3a;
  --text-color: #333333;
}

/* Use semantic class names */
.trade-card { }
.metric-positive { }
.btn-primary { }

/* Use mobile-first responsive design */
@media (min-width: 768px) {
  .trade-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}
```

### Testing
Currently, the project uses manual testing. Future contributions should include:
- Unit tests for calculation functions
- Integration tests for user interactions
- Browser compatibility testing
- Performance testing

### Accessibility
- Use semantic HTML elements
- Include proper ARIA labels
- Ensure keyboard navigation works
- Test with screen readers
- Maintain good color contrast ratios

## 📋 Contribution Process

### 1. Planning
- Check existing issues and PRs
- Discuss major changes in issues first
- Break large features into smaller PRs

### 2. Development
- Create a feature branch: `git checkout -b feature/your-feature-name`
- Make your changes following the guidelines
- Test thoroughly in multiple browsers
- Update documentation if needed

### 3. Submission
- Commit with clear messages: `git commit -m "Add P&L export feature"`
- Push to your fork: `git push origin feature/your-feature-name`
- Create a Pull Request with detailed description

### 4. Review Process
- Maintainers will review your PR
- Address feedback and make requested changes
- Once approved, your PR will be merged

## 📬 Pull Request Guidelines

### Title Format
```
[Type]: Brief description

Examples:
- [Feature]: Add keyboard shortcuts for trade management
- [Fix]: Resolve P&L calculation for covered calls
- [Docs]: Update deployment instructions
- [Style]: Improve mobile responsive design
```

### Description Template
```markdown
## Description
Brief description of changes

## Type of Change
- [ ] Bug fix
- [ ] New feature
- [ ] Documentation update
- [ ] Performance improvement
- [ ] Other (specify)

## Testing
- [ ] Tested in Chrome
- [ ] Tested in Firefox
- [ ] Tested in Safari
- [ ] Tested on mobile
- [ ] Manual testing completed

## Checklist
- [ ] Code follows style guidelines
- [ ] Self-review completed
- [ ] Documentation updated
- [ ] No new warnings or errors
```

## 🎯 Areas for Contribution

### High Priority
- **Performance Optimization**: Improve loading and rendering speed
- **Mobile Experience**: Enhance mobile usability
- **Accessibility**: Improve screen reader compatibility
- **Testing**: Add automated testing framework

### Medium Priority
- **Data Export**: Additional export formats (Excel, PDF)
- **Charting**: Add visual P&L charts and graphs
- **Themes**: Additional color themes
- **Integrations**: Broker API connections (future)

### Low Priority
- **Advanced Features**: Portfolio analytics, risk metrics
- **Customization**: Customizable dashboard layouts
- **Notifications**: Browser notifications for important events

## ❓ Questions?

- **General Questions**: Open a GitHub Discussion
- **Bug Reports**: Create a GitHub Issue
- **Security Issues**: See SECURITY.md
- **Direct Contact**: [maintainer@example.com]

## 🏆 Recognition

Contributors are recognized in:
- CHANGELOG.md for each release
- README.md contributors section
- GitHub contributors page

Thank you for helping make Wheel Strategy Manager Pro better! 🚀
