import { NextApiRequest, NextApiResponse } from "next";
import { getSession } from "next-auth/react";
import prisma from "@/lib/prismadb"
import { authOptions } from '@/pages/api/auth/[...nextauth]';
import { getServerSession } from "next-auth";
const serverAuth = async (req: NextApiRequest, res:NextApiResponse) => {
  const session = await getServerSession(req, res, authOptions)

  console.log("serverAUth ", session )
  if (!session?.user?.email) {
    throw new Error("Not signed In ");
  }

  const currentUser = await prisma.user.findUnique({
    where: {
      email: session.user.email,
    },
  });
  if (!currentUser) {
    throw new Error("Not signed in here");
  }

  return { currentUser };
};

export default serverAuth;
