import "./HowItWorks.css";

export default function HowItWorks() {
  return (
    <section id="how" className="how-section">
      <div className="how-container">

        <h2 className="how-title">How LinguaBridge Works</h2>
        <p className="how-subtitle">
          Simple. Personal. Effective.
        </p>

        <div className="how-steps">

          <div className="how-card">
            <div className="step-number">1</div>
            <h3>Book Your $9 Trial</h3>
            <p>
              Start with a 25-minute session. Meet your teacher and
              experience real Spanish conversation.
            </p>
          </div>

          <div className="how-card">
            <div className="step-number">2</div>
            <h3>Get Your Personalized Plan</h3>
            <p>
              We assess your level and design lessons based on your
              goals — travel, business, or fluency.
            </p>
          </div>

          <div className="how-card">
            <div className="step-number">3</div>
            <h3>Speak with Confidence</h3>
            <p>
              Continue with private 1-on-1 lessons and optional
              Mexican culture segments.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}