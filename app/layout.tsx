import './global.css'
import { Inter } from 'next/font/google'
import { ThemeProvider } from '@/components/theme-provider'
import toast, { Toaster } from 'react-hot-toast';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Vamel Consultancy Limited',
  description: 'Linking job seekers to their dream jobs',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
        <Toaster
  position="top-right"
  reverseOrder={false}
/>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}

