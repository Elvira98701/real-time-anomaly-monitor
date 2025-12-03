import { NextResponse } from "next/server";

import { spirits } from "./spirits.mock";

export async function GET() {
  try {
    return NextResponse.json(spirits, { status: 200 });
  } catch (error) {
    console.error("[SPIRITS_GET] Server error", error);
    return NextResponse.json(
      { message: "Couldn't get the spirits" },
      { status: 500 }
    );
  }
}
