export const metadata = {
  title: 'Simple Hello World',
  description: 'A simple Next.js app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
