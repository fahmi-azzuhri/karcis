import express from "express";
import authRoutes from "./routes/authRoutes.js";
import { generateAdminAccount } from "./services/adminService.js";

const app = express();

app.use(express.json());
app.use("/auth", authRoutes);
app.use(cors());
generateAdminAccount();

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
