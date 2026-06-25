import { SignUp } from "@clerk/nextjs";
import Image from "next/image";

export default function SignUpPage() {
  return (
    <div style={{
      minHeight: "100vh",
      background: "#050d18",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      gap: "1.5rem",
    }}>
      <Image src="/zschool-logo-dark.png" alt="Z-School" width={140} height={50} style={{ objectFit: "contain" }} />
      <SignUp
        appearance={{
          variables: {
            colorBackground: "#0a1628",
            colorPrimary: "#00e5ff",
            colorInputBackground: "#0f1f3a",
            colorInputText: "#cdd9f0",
            borderRadius: "12px",
            fontFamily: "Heebo, sans-serif",
          },
          elements: {
            card: { border: "1px solid rgba(0,229,255,0.15)", boxShadow: "0 0 40px rgba(0,229,255,0.08)" },
            headerTitle: { color: "#ffffff", fontSize: "1.4rem" },
            headerSubtitle: { color: "#5a7a9a" },
            socialButtonsBlockButton: { border: "1px solid rgba(0,229,255,0.2)", color: "#cdd9f0" },
            dividerLine: { background: "rgba(0,229,255,0.1)" },
            dividerText: { color: "#5a7a9a" },
            formFieldLabel: { color: "#cdd9f0" },
            footerActionText: { color: "#5a7a9a" },
            footerActionLink: { color: "#00e5ff" },
          },
        }}
      />
    </div>
  );
}
