import { type Metadata } from 'next'

import { RootLayout } from '@/components/RootLayout'

import '@/styles/tailwind.css'

export const metadata: Metadata = {
  title: {
    template: '%s - Introverse',
    default: 'Introverse - Connection Card Game',
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="h-full bg-neutral-950 text-base antialiased">
      <script
        defer
        src="https://umami-tawny-theta.vercel.app/script.js"
        data-website-id="dd42565c-a839-4c36-9a21-974f88775741"
      ></script>
      <body className="flex min-h-full flex-col">
        <RootLayout>{children}</RootLayout>
      </body>
    </html>
  )
}
