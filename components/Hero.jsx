export default function Hero() {
  return (
    <section className="home-hero">
      <div className="scanline" />

      <div className="home-hero-content">
        <img
          src="/images/logo.png"
          alt="ShadowmodeX"
          className="home-logo"
        />

        <h1>
          SHADOWMODE<span>X</span>
        </h1>

        <p className="tagline">
          NEON CYBERPUNK GAMING CREATOR
        </p>

        <div className="home-buttons">
          <a
            href="https://www.youtube.com/@ShadowmodeX719"
            target="_blank"
            className="btn-neon red"
          >
            YOUTUBE
          </a>

          <a
            href="https://www.instagram.com/shadowmodex719"
            target="_blank"
            className="btn-neon purple"
          >
            INSTAGRAM
          </a>

          <a
            href="mailto:shadowmodex@gmail.com"
            className="btn-neon blue"
          >
            CONTACT
          </a>
        </div>
      </div>
    </section>
  )
}
