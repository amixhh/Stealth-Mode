import type { Metadata } from "next";
import { ClerkProvider } from '@clerk/nextjs';
import "./globals.css";

export const metadata: Metadata = {
  title: "Legally AI",
  description: "AI-powered legal assistance and CRM solutions for the public",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider
      appearance={{
        variables: {
          colorPrimary: "#000000",
          colorBackground: "#FAF7F4",
          colorText: "#000000",
          colorTextSecondary: "#6B7280",
        },
        elements: {
          formButtonPrimary: {
            backgroundColor: "#000000",
            color: "#FFFFFF",
            fontSize: "14px",
            fontWeight: "500",
            borderRadius: "9999px",
            padding: "12px 24px"
          },
          card: {
            backgroundColor: "#FFFFFF",
            borderRadius: "12px",
            boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)"
          },
          headerTitle: {
            fontSize: "24px",
            fontWeight: "700",
            color: "#000000"
          },
          headerSubtitle: {
            fontSize: "16px",
            color: "#6B7280"
          },
          socialButtonsBlockButton: {
            backgroundColor: "#FFFFFF",
            color: "#000000",
            border: "1px solid #E5E7EB"
          },
          userButtonAvatarBox: {
            width: "40px",
            height: "40px"
          },
          userButtonAvatarImage: {
            width: "40px",
            height: "40px",
            borderRadius: "50%"
          },
          userButtonTrigger: {
            width: "40px",
            height: "40px",
            borderRadius: "50%"
          }
        },
        layout: {
          logoPlacement: "inside",
                      logoImageUrl: "/legallyai-logo.png",
          socialButtonsPlacement: "bottom",
          socialButtonsVariant: "iconButton"
        }
      }}
    >
      <html lang="en">
        <body className="antialiased bg-[#FAF7F4]">
          <header>
            {/* <SignedOut>
              <SignInButton />
              <SignUpButton />
            </SignedOut>
            <SignedIn>
              <UserButton />
            </SignedIn> */}
          </header>
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
