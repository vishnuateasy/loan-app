import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET() {
  try {
    const items = await prisma.user.findMany();
    return NextResponse.json(items);
  } catch (err) {
    console.log(err);
    return NextResponse.json(err);
  }
}

export async function POST(req: Request) {
  try {
    const data = await req.json();
    let user;
    const existingUser = await prisma.user.findUnique({
      where: {
        mobile: data.mobile, // or mobile: data.mobile if you prefer
      },
    });
    if (existingUser) {
      user = existingUser;
    } else {
      user = await prisma.user.create({
        data: { ...data, step: 1 },
      });
    }
    return NextResponse.json(user);
  } catch (err) {
    console.log(err);
    return NextResponse.json(err);
  }
}

export async function PUT(req: Request) {
  const { id, mobile } = await req.json();
  const updatedItem = await prisma.user.update({
    where: { id },
    data: { mobile },
  });
  return NextResponse.json(updatedItem);
}

export async function DELETE(req: Request) {
  const { id } = await req.json();
  await prisma.user.delete({
    where: { id },
  });
  return NextResponse.json({ message: "Item deleted" });
}
