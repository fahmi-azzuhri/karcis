const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const path = require("path");

const createTicket = async (req, res) => {
  const { title, description, price } = req.body;
  const imageUrl = req.file ? `/uploads/${req.file.filename}` : null;

  try {
    const ticket = await prisma.ticket.create({
      data: { title, description, price: parseFloat(price), imageUrl },
    });

    res.status(201).json(ticket);
  } catch (error) {
    res.status(400).json({ message: "Error creating ticket" });
  }
};

const getAllTickets = async (req, res) => {
  const tickets = await prisma.ticket.findMany();
  res.json(tickets);
};

const getTicket = async (req, res) => {
  const { id } = req.params;
  const ticket = await prisma.ticket.findUnique({
    where: { id: parseInt(id) },
  });

  if (!ticket) {
    return res.status(404).json({ message: "Ticket not found" });
  }

  res.json(ticket);
};

const updateTicket = async (req, res) => {
  const { id } = req.params;
  const { title, description, price } = req.body;
  const imageUrl = req.file ? `/uploads/${req.file.filename}` : null;

  try {
    const ticket = await prisma.ticket.update({
      where: { id: parseInt(id) },
      data: { title, description, price: parseFloat(price), imageUrl },
    });

    res.json(ticket);
  } catch (error) {
    res.status(400).json({ message: "Error updating ticket" });
  }
};

const deleteTicket = async (req, res) => {
  const { id } = req.params;

  try {
    await prisma.ticket.delete({ where: { id: parseInt(id) } });
    res.json({ message: "Ticket deleted successfully" });
  } catch (error) {
    res.status(400).json({ message: "Error deleting ticket" });
  }
};

module.exports = {
  createTicket,
  getAllTickets,
  getTicket,
  updateTicket,
  deleteTicket,
};
