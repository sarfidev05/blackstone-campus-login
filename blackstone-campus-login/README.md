# Blackstone Central Campus Management App

## Overview

This project is a prototype of a login page for the Blackstone Central campus management app. It includes features like role-based redirection, dark mode, responsive design, and adheres to the brand guidelines of Blackstone School of Law & Business and the University of London.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Setup Instructions](#setup-instructions)
- [Usage](#usage)
- [Design Choices](#design-choices)
- [AI Tool Utilization](#ai-tool-utilization)
- [Challenges Encountered](#challenges-encountered)
- [License](#license)

## Features

- **Login Page**: A modern, responsive login page with input validation.
- **Role-Based Redirection**: Simulates different user dashboards (Admin and Student) based on login credentials.
- **Dark Mode**: Allows users to switch between light and dark themes.
- **Accessibility**: Follows best practices for accessibility.
- **Responsive Design**: Adapts well to mobile and desktop views.
- **Bonus Features**: Includes a loading animation during the login process.

## Technologies Used

- **Frontend**: React, React Router
- **Styling**: CSS (with CSS Variables for themes)
- **State Management**: React hooks
- **Design Tools**: Figma (for wireframes and UI design)
- **Development Tools**: Vite, GitHub

## Setup Instructions

1. **Clone the Repository**:
   ```bash
   git clone <repository-url>
   cd <repository-directory>

2. **Install Dependencies**:
   npm install

3. **Run the Development Server**:
   npm run dev

4. **Open your browser and navigate to**:

   http://localhost:5173

5. **Usage**

  Enter the username and password to log in.
  Depending on the role (Admin or Student), you will be redirected to the respective dashboard.

  Admin: admin@blackstone.com
  Password: admin123

  Student: student@blackstone.com
  Password: student123