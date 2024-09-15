import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import {MenuButton, PageBottom, PageHeader, SideMenu} from '@/app/globalLayout'
import '@/app/globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
    title: 'Splatools!',
    description: 'An online splatoon 3 tool hosted by LikiaStudios.'
}

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
        <body className={inter.className+" bg-[url('/tools/splatools/background.png')] overflow-x-hidden"}>
        <SideMenu/>
        <MenuButton/>
        <p className={"fixed opacity-50 left-[104px] top-[16px] font-black text-neutral-500 z-[70]"}>{"This website is not affiliated with Nintendo in any kind."}<br/>{"All trademarks belongs to their rightful owners."}</p>
        {children}
        <PageBottom alwaysShow={false}/>
        </body>
        </html>
    )
}