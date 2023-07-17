import { NextResponse } from "next/server";
import connectDB from "@utils/db";
import Post from "@models/Post";

export const GET = async (req, res) => {
  try {
    await connectDB();

    const posts = await Post.find();

    return new NextResponse(posts, { status: 200 });
  } catch (error) {
    return new NextResponse(error, { status: 500 });
  }
};
