import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta property="og:title" content="C-Tribe Passport" />
        <meta property="og:description" content="C-Tribe Passport: access to knowledge, social and financial capital during the C-Tribe Festival and Conference" />
        <meta property="og:image" content="https://firebasestorage.googleapis.com/v0/b/project-brain-f7594.appspot.com/o/ctribe-preview-image.png?alt=media&token=6483586d-04db-4fa1-be3e-0da8282493a2" />
        <meta property="og:image:width" content="650" />
        <meta property="og:image:height" content="300" />
        <meta property="og:url" content="https://ctribe-event-web-staging.vercel.app/" />
        <meta property="og:type" content="website" />

        <meta name="twitter:card" content="C-Tribe Passport" />
        <meta name="twitter:title" content="C-Tribe Passport" />
        <meta name="twitter:description" content="C-Tribe Passport: access to knowledge, social and financial capital during the C-Tribe Festival and Conference" />
        <meta name="twitter:image" content="https://firebasestorage.googleapis.com/v0/b/project-brain-f7594.appspot.com/o/ctribe-preview-image.png?alt=media&token=6483586d-04db-4fa1-be3e-0da8282493a2" />
        <meta name="twitter:image:alt" content="C-Tribe Passport" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
