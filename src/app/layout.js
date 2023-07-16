import './globals.css'
import { Inter } from 'next/font/google'
import StateContext, {StateProvider} from "../../utils/StateContext";
import {useContext} from "react";

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Maiara Morit',
  description: 'Maiara Morit - Personal Website',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <StateProvider>
          {children}
        </StateProvider>
      </body>
    </html>
  )
}
