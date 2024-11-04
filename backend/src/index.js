import express from "express";
import authRoutes from "./routes/authRoutes.js";
import { generateAdminAccount } from "./services/adminService.js";
import cors from "cors";

const app = express();

app.use(
  cors({
    origin: "http://localhost:5173",
  })
);
app.use(express.json());
app.use("/auth", authRoutes);

generateAdminAccount();

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
