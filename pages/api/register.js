import bcrypt from "bcrypt";

import { PrismaClient } from '@prisma/client';

let prisma = new PrismaClient();

export default async function handler(req, res) {
  
  if (req.method === 'POST') {

    const { name, email,password } = req.body;
    let hashed;
    try{
        hashed=await bcrypt.hash(password,10);
    }
    catch(err){
        return res.status(500).json({
            success:false,
            mesaage:"Error in hashing Password"
        })
    }
    const newUser = await prisma.user.create({
      data: {
        name,
        email,
        password:hashed,
      },
    });
    res.status(201).json(newUser);
  } else {
    res.status(405).end(); // Method Not Allowed
  }
}
