import prisma from "../config/prisma.js";
import { hashPassword, comparePassword } from "../utils/hash.js";
import { generateToken } from "../utils/jwt.js";

export const register = async (req, res) => {
  const { firstname, lastname, email, password } = req.body;
  const hashedPassword = await hashPassword(password);

  try {
    await prisma.user.create({
      data: {
        firstname,
        lastname,
        email,
        password: hashedPassword,
        role: "user",
      },
    });
    res.status(201).json({ message: "User registered successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error registering user", error });
  }
};

export const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await prisma.user.findUnique({ where: { email } });
    if (!user || !(await comparePassword(password, user.password))) {
      return res.status(401).json({ message: "Invalid email or password" });
    }

    const token = generateToken(user);
    res
      .status(200)
      .json({
        message: "Login successful",
        token,
        firstname: user.firstname,
        role: user.role,
      });
  } catch (error) {
    res.status(500).json({ message: "Error logging in", error });
  }
};
