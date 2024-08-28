import { NextResponse } from "next/server";
import dbConnect from "@/lib/mongodb";
import User from "@/models/User";

export async function GET() {
  try {
    await dbConnect();
    const users = await User.find({});
    return NextResponse.json(users);
  } catch (err) {
    console.log(err);
    return NextResponse.json(err);
  }
}

export async function POST(req: Request) {
  try {
    await dbConnect();
    const data = await req.json();

    let user = await User.findOne(data);
    if (!user) {
      user = await User.create({ ...data, step: 1 });
    }
    return NextResponse.json(user);
  } catch (err) {
    console.log(err);
    return NextResponse.json(err);
  }
}
