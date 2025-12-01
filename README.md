# Yoonha Hwang - Portfolio

A personal portfolio website featuring a nostalgic **Windows 95** aesthetic. Built with React, TypeScript, and Vite.

## 🌟 Features

-   **Retro Design**: Authentic Windows 95 look and feel with custom fonts and UI components.
-   **Responsive Layout**: Optimized for both desktop and mobile devices.
-   **Interactive Elements**: Draggable windows, minimize/maximize functionality, and start menu interactions.
-   **Static Deployment**: Automatically deployed to AWS S3 via GitHub Actions.

## 🛠️ Tech Stack

-   **Framework**: [React](https://react.dev/)
-   **Language**: [TypeScript](https://www.typescriptlang.org/)
-   **Build Tool**: [Vite](https://vitejs.dev/)
-   **Styling**: Custom CSS (no external UI framework for the core aesthetic).

## 🚀 Getting Started

### Prerequisites

-   Node.js (v20 or later recommended)
-   npm

### Installation

1.  Clone the repository:
    ```bash
    git clone https://github.com/yourusername/yoonha-web.git
    ```
2.  Navigate to the project directory:
    ```bash
    cd yoonha-web
    ```
3.  Install dependencies:
    ```bash
    npm install
    ```

### Development

Start the development server:

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Build

Build the project for production:

```bash
npm run build
```

The output will be in the `dist` directory.

## 📦 Deployment

This project is configured to deploy automatically to AWS S3 using GitHub Actions.

### Workflow

The workflow file is located at `.github/workflows/deploy.yml`. It triggers on every push to the `main` branch.

### Configuration

The following secrets must be configured in the GitHub repository:

-   `AWS_ACCESS_KEY_ID`
-   `AWS_SECRET_ACCESS_KEY`
-   `AWS_REGION`
-   `S3_BUCKET_NAME`

## 📂 Project Structure

-   `src/`: Source code including components and styles.
    -   `components/`: Reusable UI components (Header, TitleBar, etc.).
    -   `assets/`: Images and other assets imported in code.
-   `public/`: Static assets (favicons, fonts, etc.) served directly.
