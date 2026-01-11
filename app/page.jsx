import Navbar from "../components/Navbar"
import Hero from "../components/Hero"

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />

      <section className="home-stats">
        <div className="stat-card">
          <h2>GTA V</h2>
          <p>Main Cinematic Series</p>
        </div>

        <div className="stat-card">
          <h2>4+</h2>
          <p>Games Planned</p>
        </div>

        <div className="stat-card">
          <h2>AI READY</h2>
          <p>Next Gen Website</p>
        </div>
      </section>
    </>
  )
}
