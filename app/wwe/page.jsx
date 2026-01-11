import Navbar from "../../components/Navbar"

export default function WWE() {
  return (
    <>
      <Navbar />

      <section className="coming-hero">
        <h1>WWE 2K</h1>
        <p>Match Setup in Progress</p>
      </section>

      <section className="coming-content">
        <div className="neon-box">
          <h3>COMING SOON</h3>
          <p>
            ShadowmodeX is preparing competitive wrestling gameplay and cinematic
            matches
          </p>
        </div>

        <div className="coming-grid">
          <img src="/images/wwe/wwe1.jpg" />
        </div>
      </section>
    </>
  )
}
