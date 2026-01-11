import Navbar from "../../components/Navbar"

export default function Minecraft() {
  return (
    <>
      <Navbar />

      <section className="coming-hero">
        <h1>MINECRAFT</h1>
        <p>Content Under Construction</p>
      </section>

      <section className="coming-content">
        <div className="neon-box">
          <h3>COMING SOON</h3>
          <p>
            ShadowmodeX is actively preparing cinematic gameplay and creative
            content for Minecraft Stay tuned
          </p>
        </div>

        <div className="coming-grid">
          <img src="/images/minecraft/minecraft1.jpg" />
        </div>
      </section>
    </>
  )
}
