import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import {PageBottom, PageHeader, SideBar, SideMenu} from './globalLayout'
import './globals.css'
import {Gap} from "@/app/widgets";
import Head from "next/head";

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'LikiaStudios',
  description: 'We make games. not we, i make games lol XD'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <SideMenu/>
        <PageHeader includeSearch={false}/>
        {children}
        <PageBottom/>
      </body>
    </html>
  )
}