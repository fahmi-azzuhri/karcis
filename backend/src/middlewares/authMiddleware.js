const jwt = require("jsonwebtoken");
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const authMiddleware = async (req, res, next) => {
  const token = req.headers["authorization"]?.split(" ")[1];

  if (!token) {
    return res.status(401).json({ message: "Token is required" });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = await prisma.user.findUnique({ where: { id: decoded.userId } });
    next();
  } catch (error) {
    res.status(401).json({ message: "Invalid Token" });
  }
};

module.exports = authMiddleware;
