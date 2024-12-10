// src/config/multer.js
import multer from "multer";
import path from "path";
import fs from "fs";

// Define the new upload directory path
const uploadDir = path.join(process.cwd(), "uploads");

// Ensure the "uploads" folder exists
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir);
}

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, uploadDir);
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    const sanitizedFileName = file.originalname.replace(/\s/g, "_");
    cb(null, `${uniqueSuffix}-${sanitizedFileName}`);
  },
});

const upload = multer({ storage });

export default upload;
