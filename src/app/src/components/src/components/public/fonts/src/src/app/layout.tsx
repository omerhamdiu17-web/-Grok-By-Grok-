import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Grok',
  description: 'Built by xAI. Powered by curiosity.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de">
      <body>{children}</body>
    </html>
  );
}
