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
        var username = 'clerk_user';
        var existing = JSON.parse(localStorage.getItem('cp_users') || '{}');
        if (!existing[username]) {
          existing[username] = { name: 'תלמיד', completedUnits: [], xp: 0 };
          localStorage.setItem('cp_users', JSON.stringify(existing));
        }
        localStorage.setItem('cp_current', username);
        if (typeof loadDashboard === 'function') {
          loadDashboard(username);
        }
      });
    </script></body>`
  );

  return new NextResponse(html, {
    headers: { "Content-Type": "text/html; charset=utf-8" },
  });
}
