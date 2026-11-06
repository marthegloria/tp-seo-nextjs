import type { Metadata } from "next";
import "./globals.css";
import { GoogleAnalytics } from "@next/third-parties/google";


export const metadata: Metadata = {
  metadataBase: new URL("https://marthiedemo.fwh.is"),
  title: "Goma Héberge | Gestion et location de logements à Goma",
  description: "Trouvez des appartements meublés, maisons et studios sécurisés pour vos séjours à Goma, RDC.",
  verification: {google: "h1_XgJ41-1uTjD48C-d2pzTUhIYpOzRqxq2s2UYj8cE",},
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Goma Héberge - Location de logements à Goma",
    description: "Appartements meublés, maisons et studios vérifiés pour des séjours courts et longs à Goma.",
    type: "website",
    locale: "fr_CD",
    siteName: "Goma Héberge",
    url: "/",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body>{children} <GoogleAnalytics gaId="G-CXBJ27TSSW"/>  </body>
    </html>
  );
}