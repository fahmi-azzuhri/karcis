import express from "express";
import upload from "../config/multer.js";
import prisma from "../config/prisma.js";
const router = express.Router();

router.post("/events", upload.single("image"), async (req, res) => {
  try {
    const {
      title,
      location,
      date,
      startTime,
      endTime,
      audience,
      attention,
      description,
      vipPrice,
      vvipPrice,
      ngedatePrice,
      ngedatePremiumPrice,
      ramePrice,
      ramePremiumPrice,
    } = req.body;
    const imageUrl = req.file ? `/uploads/${req.file.filename}` : null;

    // Convert startTime and endTime to Date objects
    const startTimeDate = new Date(`${date}T${startTime}:00`);
    const endTimeDate = new Date(`${date}T${endTime}:00`);

    const newEvent = await prisma.event.create({
      data: {
        title,
        location,
        date: new Date(date),
        startTime: startTimeDate,
        endTime: endTimeDate,
        audience,
        attention,
        description,
        vipPrice: parseFloat(vipPrice),
        vvipPrice: parseFloat(vvipPrice),
        ngedatePrice: parseFloat(ngedatePrice),
        ngedatePremiumPrice: parseFloat(ngedatePremiumPrice),
        ramePrice: parseFloat(ramePrice),
        ramePremiumPrice: parseFloat(ramePremiumPrice),
        imageUrl,
      },
    });

    res.status(201).json(newEvent);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

export default router;
