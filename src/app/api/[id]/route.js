import { NextResponse } from "next/server";
import connectDB from "@utils/db";
import Post from "@models/postSchema";

export const GET = async (req, { params }) => {
  const { id } = params;

  try {
    await connectDB();

    const post = await Post.findById(id);
    return new NextResponse(JSON.stringify(post), { status: 200 });
  } catch (error) {
    return new NextResponse(error, { status: 500 });
  }
};
