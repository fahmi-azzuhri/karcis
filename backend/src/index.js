// index.js
import express from "express";
import cors from "cors";
import authRoutes from "./routes/authRoutes.js";
import eventRoutes from "./routes/eventRoutes.js";
import { generateAdminAccount } from "./services/adminService.js";

const app = express();

app.use(
  cors({
    origin: "http://localhost:5173",
  })
);
app.use(express.json());

// Set up routes
app.use("/auth", authRoutes);
app.use("/api", eventRoutes);

// Generate an admin account on server start
generateAdminAccount();

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
