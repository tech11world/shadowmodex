import Navbar from "../../components/Navbar"

export default function Hogwarts() {
  return (
    <>
      <Navbar />

      <section className="coming-hero">
        <h1>HOGWARTS LEGACY</h1>
        <p>Magic is Loading</p>
      </section>

      <section className="coming-content">
        <div className="neon-box">
          <h3>COMING SOON</h3>
          <p>
            ShadowmodeX is working on immersive magical world gameplay and story
            based content
          </p>
        </div>

        <div className="coming-grid">
          <img src="/images/hogwarts/hw1.jpg" />
        </div>
      </section>
    </>
  )
}
