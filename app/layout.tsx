import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://marthiedemo.fwh.is"),
  title: "Goma Héberge | Gestion et location de logements à Goma",
  description: "Trouvez des appartements meublés, maisons et studios sécurisés pour vos séjours à Goma, RDC.",
  verification: {google: <meta name="google-site-verification" content="h1_XgJ41-1uTjD48C-d2pzTUhIYpOzRqxq2s2UYj8cE" />},
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
      <body>{children}</body>
    </html>
  );
}