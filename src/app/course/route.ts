import { auth, currentUser } from "@clerk/nextjs/server";
import { NextRequest, NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export async function GET(request: NextRequest) {
  const { userId } = await auth();

  if (!userId) {
    return NextResponse.redirect(new URL("/sign-in", request.url));
  }

  const user = await currentUser();
  const firstName = user?.firstName || "";
  const lastName = user?.lastName || "";
  const fullName = [firstName, lastName].filter(Boolean).join(" ") || "תלמיד";

  const filePath = path.join(process.cwd(), "content", "course.html");
  let html = fs.readFileSync(filePath, "utf-8");
  html = html.replaceAll("../../assets/", "/assets/");
  html = html.replaceAll("../assets/", "/assets/");
  html = html.replace(
    "function openUnit(unit) {\n  window.location.href = unit.file;\n}",
    "function openUnit(unit) {\n  var match = unit.file.match(/units\\/(unit-\\d+)\\//); \n  if (match) window.location.href = '/units/' + match[1];\n}"
  );

  html = html.replace(
    "</body>",
    `<script>
      document.addEventListener('DOMContentLoaded', function() {
        var username = 'clerk_user';
        var fullName = ${JSON.stringify(fullName)};
        var existing = JSON.parse(localStorage.getItem('cp_users') || '{}');
        if (!existing[username]) {
          existing[username] = { name: fullName, completedUnits: [], xp: 0 };
        } else {
          existing[username].name = fullName;
        }
        localStorage.setItem('cp_users', JSON.stringify(existing));
        localStorage.setItem('cp_current', username);
        if (typeof loadDashboard === 'function') {
          loadDashboard(username);
        }
        // Override logout to use Clerk sign-out
        window.handleLogout = function() {
          window.location.href = '/sign-out';
        };
      });
    </script></body>`
  );

  return new NextResponse(html, {
    headers: { "Content-Type": "text/html; charset=utf-8" },
  });
}
