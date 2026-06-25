import { auth } from "@clerk/nextjs/server";
import { NextRequest, NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ slug: string }> }
) {
  const { userId } = await auth();

  if (!userId) {
    return NextResponse.redirect(new URL("/sign-in", request.url));
  }

  const { slug } = await params;
  const filePath = path.join(process.cwd(), "content", "units", slug, "index.html");

  if (!fs.existsSync(filePath)) {
    return new NextResponse("יחידה לא נמצאה", { status: 404 });
  }

  let html = fs.readFileSync(filePath, "utf-8");
  html = html.replaceAll("../../assets/", "/assets/");

  return new NextResponse(html, {
    headers: { "Content-Type": "text/html; charset=utf-8" },
  });
}
