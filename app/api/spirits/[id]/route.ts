import { NextRequest, NextResponse } from "next/server";

import { spirits } from "../spirits.mock";

export async function POST(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;

    const spiritIndex = spirits.findIndex((s) => s.id === id);
    if (spiritIndex === -1) {
      return NextResponse.json(
        { message: "Spirit not found" },
        { status: 404 }
      );
    }

    const fail = Math.random() < 0.3;
    if (fail) {
      return NextResponse.json(
        { message: "Capture failed due to spiritual interference" },
        { status: 500 }
      );
    }

    spirits[spiritIndex].status = "Captured";

    return NextResponse.json(spirits[spiritIndex], { status: 200 });
  } catch (error) {
    console.error("[SPIRITS_POST] Server error", error);
    return NextResponse.json(
      { message: "Couldn't capture the spirit" },
      { status: 500 }
    );
  }
}
