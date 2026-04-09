# AI Models Hub

AI Models Hub is a responsive React application that showcases a curated collection of popular AI models. It provides a sleek, modern interface where users can browse, select, and manage subscriptions for various AI tools. The project is built with Vite, React, and styled with Tailwind CSS and DaisyUI.

## Features

-   **Discover AI Models:** Browse a dynamic grid of AI models, each with a detailed card showing its logo, description, price, and status.
-   **Subscription Cart:** Add or remove AI models to a subscription cart with a single click.
-   **Cart Management:** View all selected models in a dedicated cart section, which calculates and displays the total subscription cost.
-   **Real-time Notifications:** Get instant feedback for actions like adding a model to the cart or completing a checkout, powered by `react-toastify`.
-   **Responsive Design:** The UI is fully responsive and optimized for a seamless experience on desktops, tablets, and mobile devices.
-   **Modern Styling:** Utilizes Tailwind CSS for a utility-first styling approach, with components enhanced by DaisyUI and custom styles for a visually appealing, dark-themed interface.

## Tech Stack

-   **Frontend:** React
-   **Build Tool:** Vite
-   **Styling:** Tailwind CSS, DaisyUI
-   **State Management:** React Hooks (`useState`)
-   **Notifications:** `react-toastify`
-   **Icons:** `react-icons`

## 🔗Live Link: 
https://ai-models-hub.vercel.app

## Getting Started

Follow these instructions to get a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

-   [Node.js](https://nodejs.org/) (v18.x or later)
-   [npm](https://www.npmjs.com/) (Node Package Manager)

### Installation & Setup

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/mahmudulhasanzb/ai-models-hub.git
    ```

2.  **Navigate to the project directory:**
    ```bash
    cd ai-models-hub
    ```

3.  **Install dependencies:**
    ```bash
    npm install
    ```

4.  **Run the development server:**
    ```bash
    npm run dev
    ```

5.  Open your browser and go to `http://localhost:5173` (or the address shown in your terminal) to view the application.

## Project Structure

Here is an overview of the project's directory structure:

```
/
├── public/
│   └── models.json         # Data source for AI models
├── src/
│   ├── assets/             # Static assets (images, logos)
│   ├── components/         # Reusable React components
│   │   ├── Cart/Cart.jsx
│   │   ├── Footer/Footer.jsx
│   │   ├── Hero/Hero.jsx
│   │   ├── Models/Models.jsx
│   │   └── NavBar/NavBar.jsx
│   ├── App.jsx             # Main application component and state management
│   ├── main.jsx            # React application entry point
│   └── index.css           # Global styles and Tailwind CSS configuration
├── package.json            # Project dependencies and scripts
└── vite.config.js          # Vite configuration file


