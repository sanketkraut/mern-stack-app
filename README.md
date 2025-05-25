# MERN Stack Step-by-Step Application

This is a **MERN stack monorepo** containing both backend and frontend for a step-by-step data processing app.

---

## Project Structure

```
mern-stack-app/
├── backend/   # Express + MongoDB API
│   ├── src/
│   │   ├── controllers/
│   │   │   ├── api1Controller.js
│   │   │   ├── api2Controller.js
│   │   │   ├── api3Controller.js
│   │   │   ├── api4Controller.js
│   │   │   └── api5Controller.js
│   │   ├── models/
│   │   │   └── dataModel.js
│   │   ├── routes/
│   │   │   └── apiRoutes.js
│   │   ├── config/
│   │   │   └── db.js
│   │   └── app.js
│   ├── package.json
│   └── README.md
├── frontend/  # React + Redux Toolkit UI
│   ├── src/
│   │   ├── components/
│   │   │   └── FinalOutput.js
│   │   ├── features/
│   │   │   └── outputSlice.js
│   │   ├── services/
│   │   │   └── apiService.js
│   │   ├── App.js
│   │   ├── index.js
│   │   └── index.css
│   ├── package.json
│   └── README.md
├── .gitignore
└── README.md
```

---

## Backend

- **Express.js REST API** with 5 endpoints (`/api1` to `/api5`)
- Each API step processes data and passes it to the next
- **MongoDB** integration using Mongoose
- Stores each step's data in the database

### Setup

1. `cd backend`
2. `npm install`
3. Create a `.env` file with:
   ```
   MONGO_URI=mongodb://localhost:27017/stepapp
   ```
4. `npm start`  
   (Runs on [http://localhost:3000](http://localhost:3000) by default)

### API Endpoints

- `POST /api/api1` – Start the process (`{ input }`)
- `POST /api/api2` – Step 2 (`{ id, step1 }`)
- `POST /api/api3` – Step 3 (`{ id, step2 }`)
- `POST /api/api4` – Step 4 (`{ id, step3 }`)
- `POST /api/api5` – Final step (`{ id, step4 }`)

---

## Frontend

- **React** app with **Redux Toolkit** for state management
- Calls backend APIs in sequence and displays each step's output
- Modern UI with clean styling
- Uses **Axios** for API requests

### Setup

1. `cd frontend`
2. `npm install`
3. `npm start`  
   (Runs on [http://localhost:3000](http://localhost:3000) by default)

### Usage

- Enter input in the form and submit.
- The app will call each backend API step-by-step and display the output for each step.
- The final output is shown at the bottom.
- Use the "Clear All" button to reset the form and outputs.

---

## Notes

- `node_modules` and `.env` files are ignored for both frontend and backend via `.gitignore`.
- Make sure MongoDB is running locally or update `MONGO_URI` for Atlas/cloud.
- Both frontend and backend can run concurrently on different ports if needed.

---

## License

MIT

---