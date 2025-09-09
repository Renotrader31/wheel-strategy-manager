# 🎯 Wheel Strategy Manager

Professional options trading dashboard for wheel strategy management with comprehensive P&L tracking, position management, and trade analytics.

![Wheel Strategy Manager](https://img.shields.io/badge/Status-Production%20Ready-brightgreen)
![License](https://img.shields.io/badge/License-MIT-blue)
![Version](https://img.shields.io/badge/Version-1.0.0-orange)

## ✨ Features

### 📊 **Comprehensive P&L Tracking**
- **Realized P&L**: Track actual profits/losses from closed positions
- **Unrealized P&L**: Monitor paper gains/losses on open positions  
- **Total P&L**: Combined performance overview
- **Win Rate**: Success rate based on completed trades only
- **Performance Metrics**: Average time to expiration, capital deployment tracking

### 🎯 **Trade-Based Organization**
- **Grouped Positions**: Stock purchases, covered calls, and cash-secured puts organized by underlying
- **Complete Trade Lifecycle**: Track CSP → Assignment → Stock → Covered Call → Called Away cycles
- **Position Management**: Add, edit, close, and roll positions with detailed tracking
- **Multi-Position Support**: Add multiple contracts of the same strategy

### 💾 **Data Persistence & Backup**
- **localStorage**: Automatic data persistence across browser sessions
- **Export/Import**: JSON backup and restore functionality
- **Auto-Save**: Automatic saving every 30 seconds
- **Data Validation**: Robust error handling and data integrity checks

### ⚡ **Production Features**
- **Keyboard Shortcuts**: Power user shortcuts for common actions
- **Responsive Design**: Mobile-optimized interface
- **Real-time Updates**: Instant metric calculations and UI updates
- **Notifications**: Success/error notifications for all actions
- **Performance Optimized**: Fast loading and smooth interactions

## 🚀 Quick Start

### Option 1: Deploy to Vercel (Recommended)

1. **Fork this repository**
   ```bash
   # Clone your fork
   git clone https://github.com/yourusername/wheel-strategy-manager.git
   cd wheel-strategy-manager
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Deploy to Vercel**
   ```bash
   # Install Vercel CLI
   npm i -g vercel

   # Deploy
   vercel --prod
   ```

4. **Access your dashboard**
   Your live dashboard will be available at `https://your-app-name.vercel.app`

### Option 2: Local Development

1. **Clone and setup**
   ```bash
   git clone https://github.com/yourusername/wheel-strategy-manager.git
   cd wheel-strategy-manager
   npm install
   ```

2. **Run locally**
   ```bash
   npm run dev
   ```

3. **Open in browser**
   Navigate to `http://localhost:3000`

## 📖 User Guide

### Getting Started

1. **Create Your First Trade**
   - Click "Add New Trade" or press `Ctrl+N`
   - Enter stock symbol (e.g., AAPL, TSLA)
   - Choose starting strategy (Cash-Secured Put or Direct Stock Purchase)
   - Set capital allocation

2. **Add Positions**
   - Within each trade, add positions using the "Add Position" buttons
   - Support for stocks, covered calls, and cash-secured puts
   - Enter all relevant details (strikes, expiration, premiums)

3. **Track Performance**
   - Monitor realized vs unrealized P&L in real-time
   - Update current stock prices manually for accurate unrealized calculations
   - View comprehensive metrics and win rates

4. **Close Positions**
   - Use the "Close" button on any position
   - Choose closing method (Market Sale, Assignment, Expiration, Buyback)
   - Enter actual closing prices for accurate realized P&L
   - Closed positions automatically move to history

### Keyboard Shortcuts

| Shortcut | Action |
|----------|--------|
| `Ctrl+N` | Add New Trade |
| `Ctrl+P` | Add Position |
| `Ctrl+B` | Backup Data |
| `Ctrl+I` | Import Data |
| `Alt+1`  | Dashboard Tab |
| `Alt+2`  | Analytics Tab |
| `Alt+3`  | History Tab |

### Data Management

#### Backup Your Data
- Click the "Backup" button or press `Ctrl+B`
- Downloads a JSON file with all your trades and settings
- Store backups safely for data recovery

#### Import Data
- Click "Import" or press `Ctrl+I`
- Select a previously exported JSON backup file
- Confirms before replacing current data

## 🏗️ Project Structure

```
wheel-strategy-manager/
├── public/
│   └── index.html          # Main dashboard application
├── docs/                   # Documentation files
├── .github/
│   └── workflows/          # GitHub Actions (future)
├── package.json           # Project configuration
├── vercel.json           # Vercel deployment config
├── .gitignore           # Git ignore rules
├── README.md            # This file
└── LICENSE              # MIT license
```

## 🔧 Technical Details

### Architecture
- **Frontend**: Pure HTML5, CSS3, JavaScript (ES6+)
- **Persistence**: Browser localStorage
- **Deployment**: Static hosting (Vercel, Netlify, GitHub Pages)
- **No Backend Required**: Fully client-side application

### Browser Support
- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

### Data Storage
- Uses browser localStorage for data persistence
- JSON format for easy backup/restore
- Automatic data validation and error handling

## 📊 Feature Roadmap

### Version 1.1 (Coming Soon)
- [ ] Real-time stock price integration
- [ ] Advanced analytics charts
- [ ] PDF report generation
- [ ] Options Greeks calculator
- [ ] Risk management alerts

### Version 1.2 (Future)
- [ ] Multi-account support
- [ ] Cloud data synchronization
- [ ] Mobile app (React Native)
- [ ] API integrations (TD Ameritrade, etc.)
- [ ] Tax reporting features

## 🤝 Contributing

We welcome contributions! Please see our [Contributing Guidelines](CONTRIBUTING.md) for details.

### Development Setup

1. Fork the repository
2. Create a feature branch: `git checkout -b feature-name`
3. Make your changes and test thoroughly
4. Commit: `git commit -am 'Add new feature'`
5. Push: `git push origin feature-name`
6. Create a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🆘 Support

### Getting Help
- **Documentation**: Check this README and docs folder
- **Issues**: Open a GitHub issue for bugs or feature requests
- **Discussions**: Use GitHub Discussions for questions

### Common Issues

#### Data Not Persisting
- Ensure your browser allows localStorage
- Check browser storage settings
- Try exporting/importing data as backup

#### Performance Issues
- Clear browser cache
- Check available storage space
- Reduce number of active trades if experiencing slowdowns

## 🎯 Why Wheel Strategy Manager?

### Professional Trading Requires Professional Tools
- **Accurate Tracking**: Distinguish between realized and unrealized P&L
- **Complete Picture**: See your entire wheel strategy lifecycle in one place
- **Data-Driven Decisions**: Make informed decisions based on actual performance metrics
- **Risk Management**: Track capital deployment and position concentration

### Built for Real Traders
- **No Fluff**: Focus on essential metrics and functionality
- **Speed**: Fast, responsive interface for active trading
- **Reliability**: Robust data persistence and error handling
- **Privacy**: Your data stays on your device

## 📈 Success Stories

> "Finally, a tool that properly tracks my wheel strategy performance. The realized vs unrealized P&L separation is exactly what I needed to understand my actual returns."
> 
> *- Options Trader*

> "The trade-based grouping makes it so easy to see how each of my wheel cycles is performing. Game changer for managing multiple positions."
> 
> *- Portfolio Manager*

---

**Made with ❤️ for the options trading community**

*Wheel Strategy Manager - Professional tools for professional traders*
