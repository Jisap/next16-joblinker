"use client"

import { usePathname } from "next/navigation"
import Footer from "../Components/Footer/Footer"
import Navbar from "../Components/Navbar/Navbar"

const LayoutWrapper = ({ children }: { children: React.ReactNode }) => {

  const pathname = usePathname()

  const hidelayout = pathname === "/Dashboard" || pathname.startsWith("/Dashboard/") || pathname === "/UI-Components/Signup"

  return (
    <>
      {!hidelayout && <Navbar />}
      {children}
      {!hidelayout && <Footer />}
    </>
  )
}

export default LayoutWrapper