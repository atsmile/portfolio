import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  description:
    "宮崎在住のフロントエンドエンジニア。React / Next.js を中心に UI 開発をしています。",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  );
}
