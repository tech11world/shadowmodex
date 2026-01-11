import Link from "next/link"

export default function Navbar() {
  return (
    <nav className="navbar">
      <img src="/images/logo.png" alt="ShadowmodeX" />
      <div>
        <Link href="/">HOME</Link>
        <Link href="/gta">GTA</Link>
        <Link href="/minecraft">MINECRAFT</Link>
        <Link href="/hogwarts">HOGWARTS</Link>
        <Link href="/wwe">WWE</Link>
      </div>
    </nav>
  )
}
