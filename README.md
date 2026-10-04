# Xntrova Technologies Web Platform

Modern, high-performance website for Xntrova Technologies built with React 19, Vite, and Tailwind CSS.

## 🚀 Getting Started

### Install Dependencies
```bash
npm install
```

### Run Locally (Dev Server)
```bash
npm run dev
```

### Build for Production
```bash
npm run build
```

## 🔥 Deploying to Firebase Hosting

This project is configured and ready for Firebase Hosting.

### 1. Authenticate with Firebase
```bash
firebase login
```

### 2. Set your Firebase Project ID
Link your Firebase project:
```bash
firebase use --add
```
*(Or edit `.firebaserc` directly with your Firebase project ID)*

### 3. Deploy
Build and deploy in a single command:
```bash
npm run deploy
```
or manually:
```bash
npm run build
firebase deploy --only hosting
```
