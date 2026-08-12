import { useEffect, useRef, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [menu, setMenu] = useState(null);
  const navRef = useRef(null);

  const close = () => {
    setOpen(false);
    setMenu(null);
  };

  // The trigger toggles its menu instead of navigating, so opening a dropdown
  // never fires a route change (which would scroll the page back to the top).
  const toggleMenu = (key) => (e) => {
    e.preventDefault();
    setMenu((current) => (current === key ? null : key));
  };

  useEffect(() => {
    if (!menu) return undefined;
    const onPointerDown = (e) => {
      if (navRef.current && !navRef.current.contains(e.target)) setMenu(null);
    };
    const onKeyDown = (e) => {
      if (e.key === 'Escape') setMenu(null);
    };
    document.addEventListener('pointerdown', onPointerDown);
    document.addEventListener('keydown', onKeyDown);
    return () => {
      document.removeEventListener('pointerdown', onPointerDown);
      document.removeEventListener('keydown', onKeyDown);
    };
  }, [menu]);

  const itemClass = (key) => `has-dropdown${menu === key ? ' open' : ''}`;

  return (
    <header className="navbar" ref={navRef}>
      <div className="container nav-inner">
        <Link to="/" className="logo" onClick={close}>
          <span className="umbrella">☂</span> Brolly Juniors
        </Link>

        <button
          className="nav-toggle"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          {open ? '✕' : '☰'}
        </button>

        <ul className={`nav-links ${open ? 'open' : ''}`}>
          <li className={itemClass('programs')}>
            <button
              type="button"
              className="nav-link"
              aria-expanded={menu === 'programs'}
              onClick={toggleMenu('programs')}
            >
              Programs <span className="caret" aria-hidden="true">▾</span>
            </button>
            <div className="dropdown">
              <div className="dropdown-group">
                <Link to="/programs" className="dropdown-title" onClick={close}>
                  ✨ All programs
                </Link>
              </div>
              <div className="dropdown-group">
                <Link to="/ai-for-kids" className="dropdown-title" onClick={close}>
                  🤖 AI for Kids <small>(Classes 6–10)</small>
                </Link>
                {[6, 7, 8, 9, 10].map((n) => (
                  <Link key={n} to={`/ai-for-kids/class-${n}`} className="dropdown-sub" onClick={close}>
                    AI Course · Class {n}
                  </Link>
                ))}
              </div>
              <div className="dropdown-group">
                <Link to="/python-for-kids" className="dropdown-title" onClick={close}>
                  🐍 Python for Kids <small>(Classes 6–10)</small>
                </Link>
                {[6, 7, 8, 9, 10].map((n) => (
                  <Link key={n} to={`/python-for-kids/class-${n}`} className="dropdown-sub" onClick={close}>
                    Python Course · Class {n}
                  </Link>
                ))}
              </div>
              <div className="dropdown-group">
                <Link to="/junior-skills" className="dropdown-title" onClick={close}>
                  🌱 Junior Skills <small>(Ages 4+ · Classes 1–5)</small>
                </Link>
                <Link to="/junior-skills/phonics" className="dropdown-sub" onClick={close}>Phonics &amp; Early Reading</Link>
                <Link to="/junior-skills/abacus" className="dropdown-sub" onClick={close}>Abacus</Link>
                <Link to="/junior-skills/vedic-maths" className="dropdown-sub" onClick={close}>Vedic Maths</Link>
                <Link to="/junior-skills/public-speaking" className="dropdown-sub" onClick={close}>Public Speaking</Link>
                <Link to="/junior-skills/digital-literacy" className="dropdown-sub" onClick={close}>Digital Literacy</Link>
              </div>
            </div>
          </li>

          <li className={itemClass('schools')}>
            <button
              type="button"
              className="nav-link"
              aria-expanded={menu === 'schools'}
              onClick={toggleMenu('schools')}
            >
              For Schools <span className="caret" aria-hidden="true">▾</span>
            </button>
            <div className="dropdown">
              <div className="dropdown-group">
                <span className="dropdown-title">🏫 Partner with us</span>
                <Link to="/schools" className="dropdown-sub" onClick={close}>School overview</Link>
                <Link to="/schools/school-partnership-program" className="dropdown-sub" onClick={close}>
                  Partnership model
                </Link>
                <Link to="/schools/annual-academic-program" className="dropdown-sub" onClick={close}>
                  Annual program
                </Link>
                <Link to="/schools/request-proposal" className="dropdown-sub" onClick={close}>
                  Request a proposal
                </Link>
              </div>
              <div className="dropdown-group">
                <span className="dropdown-title">🚀 School solutions</span>
                <Link to="/schools/ai-curriculum" className="dropdown-sub" onClick={close}>
                  AI curriculum
                </Link>
                <Link to="/schools/python-curriculum" className="dropdown-sub" onClick={close}>
                  Python curriculum
                </Link>
                <Link to="/schools/ai-and-coding-clubs" className="dropdown-sub" onClick={close}>
                  Clubs
                </Link>
                <Link to="/schools/teacher-training" className="dropdown-sub" onClick={close}>
                  Teacher training
                </Link>
              </div>
            </div>
          </li>

          <li>
            <NavLink to="/student-projects" className="nav-link" onClick={close}>
              Projects
            </NavLink>
          </li>
          <li>
            <NavLink to="/resources" className="nav-link" onClick={close}>
              Resources
            </NavLink>
          </li>
          <li>
            <NavLink to="/my-progress" className="nav-link" onClick={close}>
              My Progress
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" className="nav-link" onClick={close}>
              About
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" className="nav-link" onClick={close}>
              Contact
            </NavLink>
          </li>
          <li className="nav-mobile-cta">
            <Link to="/book-free-demo" className="btn btn-primary" onClick={close}>
              Book a free trial
            </Link>
          </li>
        </ul>

        <Link to="/book-free-demo" className="btn btn-primary nav-cta" onClick={close}>
          Book a free trial
        </Link>
      </div>
    </header>
  );
}
