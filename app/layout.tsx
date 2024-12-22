import type { Metadata } from 'next'
import { Analytics } from '@vercel/analytics/react'
import StyledComponentsRegistry from '@/lib/registry'
import Theme from '@/components/Theme'
import { oswald } from '@/fonts/fonts'

export const metadata: Metadata = {
  title: 'unknown'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html>
      <body className={oswald.className}>
        <Theme>
          <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
          <Analytics />
        </Theme>
      </body>
    </html>
  )
}