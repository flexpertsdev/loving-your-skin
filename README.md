# Loving Your Skin (LYS) Platform

A B2B Korean beauty marketplace platform connecting verified Korean beauty brands with international retailers.

## 🚀 Getting Started

### Prerequisites
- Node.js 22.16.0 or higher
- npm 10.0.0 or higher

### Installation
```bash
# Clone the repository
git clone https://github.com/flexpertsdev/loving-your-skin.git
cd loving-your-skin

# Install dependencies
npm install

# Start development server
npm run dev
```

The app will be available at http://localhost:3000

### Build for Production
```bash
npm run build
```

## 🏗️ Tech Stack
- **Framework**: Vite + React 19
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **State Management**: Zustand
- **Routing**: React Router v7
- **Forms**: React Hook Form + Zod
- **API**: Mock data (ready for Firebase migration)

## 📱 Features
- Invite-only retailer access
- Brand and product discovery
- Shopping cart with MOQ validation
- Order management system
- In-app messaging
- Multi-language support (EN/KO/ZH)

## 🔐 Demo Accounts
For development and testing:
- **Retailer**: `retailer@example.com` / `retailer123`
- **Admin**: `admin@lys.com` / `admin123`
- **Brand Rep**: `brand@example.com` / `brand123`

## 🚢 Deployment
This project is configured for deployment on Netlify. The `netlify.toml` file includes all necessary build settings.

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/flexpertsdev/loving-your-skin)

## 📂 Project Structure
```
src/
├── components/     # Reusable UI components
├── contexts/       # React contexts
├── hooks/          # Custom React hooks
├── lib/            # Utilities and mock data
├── pages/          # Page components
├── routes/         # Route definitions
├── styles/         # Global styles
└── types/          # TypeScript type definitions
```

## 🎨 Design System
The platform uses a custom design system based on Korean beauty aesthetics:
- **Primary**: Rose Gold (#D4A5A5)
- **Background**: Soft Pink (#FDF8F6)
- **Text**: Deep Charcoal (#1A1A1A)

## 📝 License
Private repository - All rights reserved