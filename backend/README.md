# Backend - MERN Step-by-Step App

This is the **backend** for the MERN Step-by-Step App.

## Features

- Express.js REST API with 5 endpoints (`/api1` to `/api5`)
- Each API step processes data and passes it to the next
- MongoDB integration using Mongoose
- Stores each step's data in the database

## Setup

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Configure environment:**
   - Create a `.env` file in the `backend` folder:
     ```
     MONGO_URI=mongodb://localhost:27017/stepapp
     ```

3. **Start the server:**
   ```bash
   npm start
   ```
   The server runs on [http://localhost:3000](http://localhost:3000) by default.

## API Endpoints

- `POST /api/api1` – Start the process (input: `{ input }`)
- `POST /api/api2` – Step 2 (input: `{ id, step1 }`)
- `POST /api/api3` – Step 3 (input: `{ id, step2 }`)
- `POST /api/api4` – Step 4 (input: `{ id, step3 }`)
- `POST /api/api5` – Final step (input: `{ id, step4 }`)

Each endpoint returns the next step's output and the document `id`.

---