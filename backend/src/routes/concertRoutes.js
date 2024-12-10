import express from "express";
import upload from "../config/multer.js";
import prisma from "../config/prisma.js";
import path from "path";
import fs from "fs";

const router = express.Router();

// POST: Create a new concert
router.post("/concerts", upload.single("image"), async (req, res) => {
  try {
    const {
      name,
      artist,
      location,
      date,
      startTime,
      endTime,
      ticketPrice,
      description,
    } = req.body;
    const imageUrl = req.file ? `/uploads/${req.file.filename}` : null;

    const newConcert = await prisma.concert.create({
      data: {
        name,
        artist,
        location,
        date: new Date(date),
        startTime: new Date(`${date}T${startTime}:00`),
        endTime: new Date(`${date}T${endTime}:00`),
        ticketPrice: parseFloat(ticketPrice),
        description,
        imageUrl,
      },
    });

    res.status(201).json(newConcert);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// GET: Retrieve all concerts
router.get("/concerts", async (req, res) => {
  try {
    const concerts = await prisma.concert.findMany();
    res.status(200).json(concerts);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// GET: Retrieve a specific concert by ID
router.get("/concerts/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const concert = await prisma.concert.findUnique({
      where: { id: parseInt(id, 10) },
    });

    if (!concert) {
      return res.status(404).json({ error: "Concert not found" });
    }

    res.status(200).json(concert);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// PUT: Update a concert by ID
router.put("/concerts/:id", upload.single("image"), async (req, res) => {
  try {
    const { id } = req.params;
    const {
      name,
      artist,
      location,
      date,
      startTime,
      endTime,
      ticketPrice,
      description,
    } = req.body;
    const imageUrl = req.file ? `/uploads/${req.file.filename}` : undefined;

    const updatedConcert = await prisma.concert.update({
      where: { id: parseInt(id, 10) },
      data: {
        name,
        artist,
        location,
        date: date ? new Date(date) : undefined,
        startTime: startTime ? new Date(`${date}T${startTime}:00`) : undefined,
        endTime: endTime ? new Date(`${date}T${endTime}:00`) : undefined,
        ticketPrice: ticketPrice ? parseFloat(ticketPrice) : undefined,
        description,
        imageUrl,
      },
    });

    res.status(200).json(updatedConcert);
  } catch (error) {
    if (error.code === "P2025") {
      return res.status(404).json({ error: "Concert not found" });
    }
    res.status(500).json({ error: error.message });
  }
});

// DELETE: Delete a concert by ID
router.delete("/concerts/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const concert = await prisma.concert.findUnique({
      where: { id: parseInt(id, 10) },
    });

    if (!concert) {
      return res.status(404).json({ error: "Concert not found" });
    }

    if (concert.imageUrl) {
      const imagePath = path.join(
        process.cwd(),
        "uploads",
        path.basename(concert.imageUrl)
      );

      fs.access(imagePath, fs.constants.F_OK, (err) => {
        if (!err) {
          fs.unlink(imagePath, (unlinkErr) => {
            if (unlinkErr) {
              console.error(`Error deleting file: ${imagePath}`, unlinkErr);
            }
          });
        }
      });
    }

    await prisma.concert.delete({
      where: { id: parseInt(id, 10) },
    });

    res.status(200).json({ message: "Concert deleted successfully" });
  } catch (error) {
    if (error.code === "P2025") {
      return res.status(404).json({ error: "Concert not found" });
    }
    res.status(500).json({ error: error.message });
  }
});

export default router;
