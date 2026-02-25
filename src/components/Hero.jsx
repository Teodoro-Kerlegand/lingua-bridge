import "./Hero.css";
import logo from "../assets/logo.png";
import banner from "../assets/hero-banner.png";

export default function Hero() {
  return (
    <section className="hero">
      
      <div className="hero-inner">
        <div className="hero-logo">
          <img src={logo} alt="LinguaBridge logo" />
        </div>

        <div className="hero-banner">
          <img src={banner} alt="Spanish lesson banner" />
        </div>
      </div>

      <div className="hero-content">
        <h1>Speak Real Spanish with Confidence</h1>

        <p>
          Private 1-on-1 lessons with native Mexican teachers. Real conversation. Start for just $9.
        </p>

        <div className="buttons">
          <a href="#" className="btn btn-red">
            Start My $9 Trial
          </a>
          <a href="#pricing" className="btn btn-blue">
            See Pricing
          </a>
        </div>
        <p className="hero-trust">
  No subscription required • Flexible scheduling
</p>
      </div>

    </section>
  );
}
