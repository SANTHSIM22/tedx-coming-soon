import "./globals.css";
import { StarsCanvas } from "./ui/stars";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body >
      <StarsCanvas/>
        {children}
      </body>
    </html>
  );
}
