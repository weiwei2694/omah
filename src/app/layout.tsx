import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Omah.',
  description: 'looking for a house with a low price and quality here, and sell your house quickly here',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className='font__poppins'>{children}</body>
    </html>
  )
}
