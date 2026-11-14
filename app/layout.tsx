import type { Metadata } from "next";
import { SiteHeader } from "@/components/SiteHeader";
import { Animations } from "@/components/Animations";
import "./globals.css";
export const metadata: Metadata = {
  metadataBase: new URL(
    "https://luxegrid-construction-marketing.faithfulchime1.chatgpt.site",
  ),
  title: {
    default: "LuxeGrid — Construction & Marketing",
    template: "%s | LuxeGrid",
  },
  description:
    "A real estate and construction partner in Islamabad. Discover a considered approach to buying, selling, renting, marketing, and building.",
  robots: { index: false, follow: false },
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <a className="skip-link" href="#main">
          Skip to content
        </a>
        <SiteHeader />
        {children}
        <Animations />
      </body>
    </html>
  );
}
