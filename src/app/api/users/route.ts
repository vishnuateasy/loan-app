import { NextResponse } from "next/server";
import dbConnect from "@/lib/mongodb";
import User from "@/models/User";

export async function GET() {
  try {
    await dbConnect();
    const users = await User.find({});
    // const users = await prisma.user.findMany();
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
    console.log(data, "data");
    let user;
    const existingUser = await User.findOne({
      where: {
        mobile: data.mobile,
      },
    });
    if (existingUser) {
      user = existingUser;
    } else {
      user = await User.create({ ...data, step: 1 });
    }
    return NextResponse.json(user);
  } catch (err) {
    console.log(err);
    return NextResponse.json(err);
  }
}
