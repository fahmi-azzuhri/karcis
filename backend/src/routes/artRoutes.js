import express from "express";
import upload from "../config/multer.js";
import prisma from "../config/prisma.js";
import path from "path";
import fs from "fs";
const router = express.Router();

//POST: Create a new event
router.post("/arts", upload.single("image"), async (req, res) => {
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

    const newEvent = await prisma.art.create({
      data: {
        title,
        location,
        date: new Date(date),
        startTime: new Date(`${date}T${startTime}:00`),
        endTime: new Date(`${date}T${endTime}:00`),
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

// GET: Retrieve all events
router.get("/arts", async (req, res) => {
  try {
    const events = await prisma.art.findMany();
    res.status(200).json(events);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// GET: Retrieve a specific event by ID
router.get("/arts/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const event = await prisma.art.findUnique({
      where: { id: parseInt(id, 10) },
    });

    if (!event) {
      return res.status(404).json({ error: "Event not found" });
    }

    res.status(200).json(event);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// PUT: Update an event by ID
router.put("/arts/:id", upload.single("image"), async (req, res) => {
  try {
    const { id } = req.params;
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

    const imageUrl = req.file ? `/uploads/${req.file.filename}` : undefined;

    const updatedEvent = await prisma.art.update({
      where: { id: parseInt(id, 10) },
      data: {
        title,
        location,
        date: date ? new Date(date) : undefined,
        startTime: startTime ? new Date(`${date}T${startTime}:00`) : undefined,
        endTime: endTime ? new Date(`${date}T${endTime}:00`) : undefined,
        audience,
        attention,
        description,
        vipPrice: vipPrice ? parseFloat(vipPrice) : undefined,
        vvipPrice: vvipPrice ? parseFloat(vvipPrice) : undefined,
        ngedatePrice: ngedatePrice ? parseFloat(ngedatePrice) : undefined,
        ngedatePremiumPrice: ngedatePremiumPrice
          ? parseFloat(ngedatePremiumPrice)
          : undefined,
        ramePrice: ramePrice ? parseFloat(ramePrice) : undefined,
        ramePremiumPrice: ramePremiumPrice
          ? parseFloat(ramePremiumPrice)
          : undefined,
        imageUrl,
      },
    });

    res.status(200).json(updatedEvent);
  } catch (error) {
    if (error.code === "P2025") {
      return res.status(404).json({ error: "Event not found" });
    }
    res.status(500).json({ error: error.message });
  }
});

// DELETE: Delete an event by ID
router.delete("/arts/:id", async (req, res) => {
  try {
    const { id } = req.params;

    // Cari event berdasarkan ID
    const event = await prisma.art.findUnique({
      where: { id: parseInt(id, 10) },
    });

    if (!event) {
      return res.status(404).json({ error: "Event not found" });
    }

    // Jika event memiliki gambar
    if (event.imageUrl) {
      const imagePath = path.join(
        process.cwd(),
        "uploads",
        path.basename(event.imageUrl)
      );

      // Log untuk debug
      console.log(`Attempting to delete: ${imagePath}`);

      // Cek apakah file ada sebelum dihapus
      fs.access(imagePath, fs.constants.F_OK, (err) => {
        if (err) {
          console.error(`File not found: ${imagePath}`);
        } else {
          // Hapus file
          fs.unlink(imagePath, (unlinkErr) => {
            if (unlinkErr) {
              console.error(`Error deleting file: ${imagePath}`, unlinkErr);
            } else {
              console.log(`File deleted: ${imagePath}`);
            }
          });
        }
      });
    }

    // Hapus data event dari database
    await prisma.art.delete({
      where: { id: parseInt(id, 10) },
    });

    res.status(200).json({ message: "art deleted successfully" });
  } catch (error) {
    if (error.code === "P2025") {
      return res.status(404).json({ error: "Event not found" });
    }
    res.status(500).json({ error: error.message });
  }
});

// GET: Retrieve ticket info for a specific event by ID
router.get("/arts/ticket-info/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const art = await prisma.art.findUnique({
      where: { id: parseInt(id, 10) },
    });

    if (!art) {
      return res.status(404).json({ error: "Event not found" });
    }

    // Mengirim data event untuk ticket info
    res.status(200).json(art);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

export default router;
