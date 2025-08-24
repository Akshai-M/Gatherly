import { ClerkProvider } from "@clerk/nextjs";
import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <ClerkProvider>
        <body className={` bg-dark-2 antialiased`}>{children}</body>
      </ClerkProvider>
    </html>
  );
}
