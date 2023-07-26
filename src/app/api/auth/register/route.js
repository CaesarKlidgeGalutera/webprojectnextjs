import connectDB from "@utils/db";
import { NextResponse } from "next/server";

export const POST = async (req) => {
  const { name, email, password } = await req.json();

  await connectDB();

  const newUser = new User({
    
  })

  try {
  } catch (error) {
    return new NextResponse(err.message, {
      status: 500,
    });
  }
};
