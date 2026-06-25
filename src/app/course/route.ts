import { auth } from "@clerk/nextjs/server";
import { NextRequest, NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export async function GET(request: NextRequest) {
  const { userId } = await auth();

  if (!userId) {
    return NextResponse.redirect(new URL("/sign-in", request.url));
  }

  const filePath = path.join(process.cwd(), "content", "course.html");
  let html = fs.readFileSync(filePath, "utf-8");
  html = html.replaceAll("../../assets/", "/assets/");
  html = html.replaceAll("../assets/", "/assets/");

  // Bypass the old built-in auth screen since Clerk handles authentication
  html = html.replace(
    "</body>",
    `<script>
      document.addEventListener('DOMContentLoaded', function() {
        var authScreen = document.getElementById('auth-screen');
        if (authScreen) authScreen.classList.remove('active');
        var dashboardScreen = document.getElementById('dashboard-screen');
        if (dashboardScreen) dashboardScreen.classList.add('active');
        localStorage.setItem('cp_current', 'clerk_user');
      });
    </script></body>`
  );

  return new NextResponse(html, {
    headers: { "Content-Type": "text/html; charset=utf-8" },
  });
}
