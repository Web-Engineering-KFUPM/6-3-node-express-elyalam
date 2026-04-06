// TODO 1: Import and Create express app instance

// TODO 1: Define server port

import express from "express";
const app = express();
const PORT = 3000;
// TODO 4: Import and Apply CORS middleware
import cors from "cors";
app.use(cors);

// TODO 5: Import and apply Morgan middleware


// TODO 6.1: Create root route "/"


// TODO 6.2: Create "/api/quote" route

import morgan from "morgan";
app.use(morgan("dev"));

app.get("/", (req, res) => {
  res.send("Server is running");
});

app.get("/api/quote", (req, res) => {
  const quote = getRandomQuote();
  res.json({ quote });
});
// TODO 7: Start server using app.listen
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});