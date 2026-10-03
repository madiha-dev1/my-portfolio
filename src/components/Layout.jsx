import { Outlet } from 'react-router-dom'
import Nav from './Nav'
import SocialRail from './SocialRail'
import Footer from './Footer'

export default function Layout() {
  return (
    <>
      <Nav />
      <SocialRail />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  )
}
