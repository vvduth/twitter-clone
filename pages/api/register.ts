import { NextApiRequest, NextApiResponse } from "next";
import bcrypt from "bcrypt";
import prisma from "@/lib/prismadb";
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    res.status(405).end();
  }

  try {
    const { name, username, email, password } = req.body;
    const hasedPassword = await bcrypt.hash(password, 12);
    const user = await prisma.user.create({
        data: {email, username, name, hasedPassword}
    });
  } catch (error) {
    console.log(error);
    res.status(404).end();
  }
}
