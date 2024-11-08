import express from "express";
import { PrismaClient } from "@prisma/client";
import upload from "../config/multer.js";
const prisma = new PrismaClient();
const router = express.Router();

router.post("/events", upload.single("image"), async (req, res) => {
  try {
    const {
      title,
      location,
      date,
      duration,
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

    const newEvent = await prisma.event.create({
      data: {
        title,
        location,
        date: new Date(date),
        duration,
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
