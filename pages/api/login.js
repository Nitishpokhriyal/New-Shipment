import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";
const jwt = require("jsonwebtoken");

const prisma = new PrismaClient();

export default async (req, res) => {
  if (req.method === 'POST') {
    const { email, password } = req.body;

    try {
      const users = await prisma.user.findUnique({
        where: { email },
      });

      if (!users) {
        return res.status(401).json({ message: 'Authentication failed' });
      }

      const Match =await bcrypt.compare(password, users.password);

      if (!Match) {
        const token = jwt.sign(
          { email: prisma.user.email, role: prisma.user.role },
          "jwt-secret-key",
          { expiresIn: "1d" }
        );
         res.cookie("token",token)
         return res.json({Status:"Success",role:users.role})
      }
      res.status(200).json({ message: 'Login successful', users });
    } catch (error) {
      console.error('Error:', error);
      res.status(500).json({ message: 'Server error' });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
};
