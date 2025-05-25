# Frontend - MERN Step-by-Step App

This is the **frontend** for the MERN Step-by-Step App.

## Features

- React app with Redux Toolkit for state management
- Calls backend APIs in sequence and displays each step's output
- Modern UI with clean styling
- Uses Axios for API requests

## Setup

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start the frontend:**
   ```bash
   npm start
   ```
   The app runs on [http://localhost:3000](http://localhost:3000) by default.

## Usage

- Enter input in the form and submit.
- The app will call each backend API step-by-step and display the output for each step.
- The final output is shown at the bottom.
- Use the "Clear All" button to reset the form and outputs.

## Notes

- Make sure the backend server is running and accessible at the expected API URL.
- `node_modules` and `.env` are ignored via `.gitignore`.

---