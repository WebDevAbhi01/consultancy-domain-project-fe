import { Outlet } from "react-router-dom"
import { Footer } from "@/components/layout/Footer"
import { Header } from "@/components/layout/Header"
import { StickyChatButton } from "@/components/common/StickyChatButton"

export function AppLayout() {
  return (
    <div className="flex min-h-screen flex-col bg-[var(--color-background)]">
      <Header />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
      <StickyChatButton />
    </div>
  )
}
