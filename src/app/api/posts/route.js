import { NextResponse } from "next/server";
import connectDB from "@utils/db";
import Post from "@models/postSchema";

export const GET = async (req, res) => {
  try {
    await connectDB();

    const posts = await Post.find();

    return new NextResponse(JSON.stringify(posts), { status: 200 });
  } catch (error) {
    return new NextResponse(error, { status: 500 });
  }
};
