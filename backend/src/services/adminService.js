import prisma from "../config/prisma.js";
import { hashPassword } from "../utils/hash.js";

export const generateAdminAccount = async () => {
  const adminExists = await prisma.user.findFirst({ where: { role: "admin" } });

  if (!adminExists) {
    const adminPassword = await hashPassword("admin123");
    await prisma.user.create({
      data: {
        firstname: "Admin",
        lastname: "User",
        email: "admin@example.com",
        password: adminPassword,
        role: "admin",
      },
    });
    console.log(
      "Admin account generated with email: admin@example.com and password: admin123"
    );
  } else {
    console.log("Admin account already exists");
  }
};
