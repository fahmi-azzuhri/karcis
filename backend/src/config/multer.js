import multer from "multer";
import path from "path";
import fs from "fs";
import { fileURLToPath } from "url";

// Mendapatkan __dirname yang kompatibel dengan ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Tentukan path folder "uploads"
const uploadDir = path.join(__dirname, "uploads");

// Cek apakah folder "uploads" ada; jika tidak, buat foldernya
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir);
}

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, uploadDir);
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

const upload = multer({ storage });

export default upload;
