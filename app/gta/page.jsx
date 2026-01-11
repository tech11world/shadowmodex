import Navbar from "../../components/Navbar"

export default function GTA() {
  return (
    <>
      <Navbar />

      <section className="gta-hero">
        <h1>GTA V</h1>
        <p>ShadowmodeX Cinematic Gameplay</p>
      </section>

      <section className="gta-content">

        <div className="neon-box">
          <h3>ABOUT THIS CONTENT</h3>
          <p>
            This GTA V gameplay is recorded edited and presented by ShadowmodeX
            focusing on cinematic driving missions and storytelling moments
          </p>
        </div>

        <div className="video-grid">
          <div className="video-neon">
            <iframe
              src="https://www.youtube.com/embed/BDOj-QmKT5c"
              allowFullScreen
            />
          </div>

          <div className="video-neon">
            <iframe
              src="https://www.youtube.com/embed/OD2OL-ucECg"
              allowFullScreen
            />
          </div>
        </div>

        <div className="image-grid-neon">
          {[1,2,3,4,5].map(i => (
            <img key={i} src={`/images/gta/gta1.jpg`} />
          ))}
        </div>

      </section>
    </>
  )
}
