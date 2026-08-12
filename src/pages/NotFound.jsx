import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <section className="center" style={{ padding: '120px 0' }}>
      <div className="container">
        <span className="hero-umbrella" style={{ fontSize: '5rem', display: 'inline-block' }}>
          ☂️
        </span>
        <h1 className="section-title">This page wandered out of the shelter.</h1>
        <p className="section-lead" style={{ marginInline: 'auto' }}>
          The page you are looking for does not exist. Let&apos;s get you back home.
        </p>
        <div className="btn-row" style={{ justifyContent: 'center' }}>
          <Link to="/" className="btn btn-primary">
            Back to home
          </Link>
          <Link to="/programs" className="btn btn-outline">
            Explore programs
          </Link>
        </div>
      </div>
    </section>
  );
}
