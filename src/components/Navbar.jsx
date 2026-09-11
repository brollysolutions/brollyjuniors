import { useEffect, useRef, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { menuSections, menuItems } from '../data/catalog/index.js';
import { site } from '../data/site.js';

/* The mega menu.
 *
 * Every link in the five catalogue panels is generated from data/catalog/,
 * which is the same structure lib/routes.js turns into routes and the sitemap.
 * That is deliberate: the previous navbar was hand-written JSX, and a menu
 * written by hand is a menu that eventually points somewhere that does not
 * exist. Adding a class now means adding it to the catalogue, once.
 *
 * Resources is still written out here. Its items are one-off pages rather than
 * a catalogue section, and inventing a data shape for six links would cost
 * more than it saves.
 */

const RESOURCE_LINKS = [
  { to: '/resources', label: 'Guides for parents', sub: true },
  { to: '/abacus-worksheet-generator', label: 'Free abacus worksheets', sub: true },
  /* Apps is not listed here — it has its own top-level nav item. */
  { to: '/student-projects', label: 'Student projects', sub: true },
  { to: '/teaching-methodology', label: 'Teaching methodology', sub: true },
  { to: '/my-progress', label: 'My progress', sub: true },
  { to: '/faqs', label: 'FAQs', sub: true },
];

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

  /* Hover opening lives here rather than in a CSS :hover rule. The mega panel
     is positioned against .navbar, not against its own <li>, so the navbar's
     bottom padding sits between the trigger and the panel with nothing under
     the cursor — a pure CSS menu closes the moment you move down towards it.
     Opening on enter and closing on a short delay lets the pointer cross that
     strip, and forgives a near miss on the way to a link. */
  const closeTimer = useRef(null);

  const cancelClose = () => {
    if (closeTimer.current) {
      clearTimeout(closeTimer.current);
      closeTimer.current = null;
    }
  };

  // Only pointers that can hover, and only the horizontal bar — below 1200px
  // the menus are an accordion inside the drawer, where opening on hover would
  // expand a section the user is merely scrolling past.
  const hoverOpens = () =>
    typeof window !== 'undefined' &&
    window.matchMedia('(hover: hover) and (pointer: fine) and (min-width: 1201px)').matches;

  const hoverProps = (key) => ({
    onMouseEnter: () => {
      if (!hoverOpens()) return;
      cancelClose();
      setMenu(key);
    },
    onMouseLeave: () => {
      if (!hoverOpens()) return;
      cancelClose();
      closeTimer.current = setTimeout(() => setMenu(null), 220);
    },
  });

  useEffect(() => cancelClose, []);

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

  const megaClass = (key) => `has-dropdown has-mega${menu === key ? ' open' : ''}`;

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
          {menuSections.map((section) => (
            <li className={megaClass(section.key)} key={section.key} {...hoverProps(section.key)}>
              <button
                type="button"
                className="nav-link"
                aria-expanded={menu === section.key}
                onClick={toggleMenu(section.key)}
              >
                {section.navLabel || section.label} <span className="caret" aria-hidden="true">▾</span>
              </button>

              <div className="mega-panel">
                <div className="mega-head">
                  <span className="mega-title">{section.menuTitle}</span>
                  <Link to={section.hubPath} className="mega-all" onClick={close}>
                    All {section.allLabel || section.label.toLowerCase()} →
                  </Link>
                </div>
                {/* Age Groups reads as four cards, one per age, rather than one
                    card holding a list — so that section flips the layout. */}
                {section.menuItemsAsCards ? (
                  <div className="mega-grid">
                    {section.groups.flatMap((group) => menuItems(section, group)).map((item) => (
                      <Link to={item.to} className="mega-card mega-card-link" key={item.to} onClick={close}>
                        <h4>
                          <span className="mi" aria-hidden="true">{item.icon}</span>
                          {item.name}
                        </h4>
                        <strong className="mega-stage">{item.stage}</strong>
                        <small className="mega-summary">{item.summary}</small>
                      </Link>
                    ))}
                  </div>
                ) : (
                  <div className="mega-grid">
                    {section.groups.map((group) => (
                      <div className="mega-card" key={group.id}>
                        <h4>
                          <span className="mi" aria-hidden="true">{group.icon}</span>
                          {group.title}
                        </h4>
                        {menuItems(section, group).map((item) => (
                          <Link to={item.to} className="mega-link" key={item.to} onClick={close}>
                            <span>{item.name}</span>
                            {(item.stage || item.note) && <small>{item.stage || item.note}</small>}
                          </Link>
                        ))}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </li>
          ))}

          <li>
            <NavLink to="/apps" className="nav-link" onClick={close}>
              Apps
            </NavLink>
          </li>

          <li className={`has-dropdown${menu === 'resources' ? ' open' : ''}`} {...hoverProps('resources')}>
            <button
              type="button"
              className="nav-link"
              aria-expanded={menu === 'resources'}
              onClick={toggleMenu('resources')}
            >
              Resources <span className="caret" aria-hidden="true">▾</span>
            </button>
            <div className="dropdown">
              <div className="dropdown-group">
                <span className="dropdown-title">📚 Free for families</span>
                {RESOURCE_LINKS.map((l) => (
                  <Link key={l.to} to={l.to} className="dropdown-sub" onClick={close}>
                    {l.label}
                  </Link>
                ))}
              </div>
            </div>
          </li>

          <li>
            <NavLink to="/contact" className="nav-link" onClick={close}>
              Contact
            </NavLink>
          </li>
          <li className="nav-mobile-cta">
            <a href={site.appUrl} className="btn btn-outline" onClick={close}>
              Login
            </a>
          </li>
          <li className="nav-mobile-cta">
            <a
              href={site.whatsappHref}
              className="btn btn-whatsapp"
              target="_blank"
              rel="noreferrer"
              onClick={close}
            >
              <span aria-hidden="true">💬</span> WhatsApp Us
            </a>
          </li>
        </ul>

        {/* Login goes to the app on its own subdomain, so it is a plain anchor
            rather than a router Link. */}
        <div className="nav-actions">
          <a href={site.appUrl} className="btn btn-outline nav-cta" onClick={close}>
            Login
          </a>
          <a
            href={site.whatsappHref}
            className="btn btn-whatsapp nav-cta"
            target="_blank"
            rel="noreferrer"
            onClick={close}
          >
            <span aria-hidden="true">💬</span> WhatsApp Us
          </a>
        </div>
      </div>
    </header>
  );
}
