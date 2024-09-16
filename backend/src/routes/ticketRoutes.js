const express = require("express");
const multer = require("multer");
const {
  createTicket,
  getAllTickets,
  getTicket,
  updateTicket,
  deleteTicket,
} = require("../controllers/ticketController");
const authMiddleware = require("../middlewares/authMiddleware");
const router = express.Router();

const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, "uploads/"),
  filename: (req, file, cb) =>
    cb(null, Date.now() + path.extname(file.originalname)),
});

const upload = multer({ storage });

router.post("/", authMiddleware, upload.single("image"), createTicket);
router.get("/", getAllTickets);
router.get("/:id", getTicket);
router.put("/:id", authMiddleware, upload.single("image"), updateTicket);
router.delete("/:id", authMiddleware, deleteTicket);

module.exports = router;
