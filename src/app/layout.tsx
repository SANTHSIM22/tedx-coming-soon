import { TEDxStarsCanvas } from "@/components/ui/stars";
import "./globals.css";
import Lenis from "@/components/Lenis";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="no-scrollbar">
      <body className="mx-auto">
        <TEDxStarsCanvas />
        <Lenis>{children}</Lenis>
      </body>
    </html>
  );
}
