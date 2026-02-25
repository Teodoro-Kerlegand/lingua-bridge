import "./Pricing.css";

export default function Pricing() {
  return (
    <section className="pricing-section">
      <h2 className="pricing-title">Pricing</h2>

      <div className="pricing-grid">

        {/* ENGLISH PACK */}
        <div className="price-card">
          <div className="price-header red">
            <h3>THE ENGLISH PACK</h3>
            <p>
              6 lessons for <strong>$100</strong><br />
              <span>(save $20)</span>
            </p>
          </div>

          <div className="price-body">
            <p className="price-highlight">6 personalized private lessons</p>

            <ul>
              <li>60 min or 40 min + 20 culture format</li>
              <li>Optional Spanish level test</li>
            </ul>

            <div className="price-footer">
              → Best value for steady progress
            </div>
          </div>
        </div>

        {/* TRY OUT SESSION */}
        <div className="price-card">
          <div className="price-header green">
            <h3>TRY OUT SESSION</h3>
            <p>
              <strong>$9</strong> – 25 minutes
            </p>
          </div>

          <div className="price-body">
            <p className="price-highlight">
              Discover the <span className="brand">Lingua Bridge</span> Method
            </p>

            <ul>
              <li>Quick conversation based level check</li>
              <li>Personalized learning plan</li>
            </ul>

            <div className="price-footer">
              → Perfect for New Students
            </div>
          </div>
        </div>

        {/* PRIVATE LESSON */}
        <div className="price-card">
          <div className="price-header blue">
            <h3>1:1 PRIVATE LESSON</h3>
            <p>
              <strong>$20</strong> per lesson
            </p>
          </div>

          <div className="price-body">
            <p className="price-highlight">Choose your lesson style</p>

            <ul>
              <li>60 min fully personalized</li>
              <li>Optional Spanish level test</li>
            </ul>

            <div className="price-footer">
              → Flexible and personalized learning
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
