import './globals.css'

export const metadata = {
  title: 'Nouns Quiz',
  description: 'Quiz Game',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
