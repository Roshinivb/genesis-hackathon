import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import ScheduleSection from './components/ScheduleSection';
import ProblemSection from './components/ProblemSection';
import PrizeSection from './components/PrizeSection';
import ContactSection from './components/ContactSection';

const navLinks = [
  { name: 'About', href: '#about' },
  { name: 'Prizes', href: '#prizes' },
  { name: 'Schedule', href: '#schedule' },
  { name: 'Problems', href: '#problems' },
  { name: 'Register', href: '#register' },
  { name: 'Contact', href: '#contact' },
];

const footerCols = [
  {
    title: 'Navigate',
    links: [
      { label: 'About', href: '#about' },
      { label: 'Prizes', href: '#prizes' },
      { label: 'Schedule', href: '#schedule' },
      { label: 'Problems', href: '#problems' },
    ],
  },
  {
    title: 'Event',
    links: [
      { label: 'Judging Criteria', href: '#about' },
      { label: 'Prize Pool', href: '#prizes' },
      { label: 'Timeline', href: '#schedule' },
      { label: 'Register', href: '#register' },
    ],
  },
  {
    title: 'Helpful Links',
    links: [
      { label: 'Contact', href: '#contact' },
      { label: 'Venue', href: 'https://maps.google.com/?q=SRM+Easwari+Engineering+College+Chennai', external: true },
      { label: 'Instagram', href: 'https://www.instagram.com/rotaract_srmeaswari/', external: true },
    ],
  },
  {
    title: 'Contact Us',
    contacts: [
      {
        icon: '✉',
        label: 'rotaracteec2526@gmail.com',
        href: 'mailto:rotaracteec2526@gmail.com',
      },
      {
        icon: '📷',
        label: '@rotaract_srmeaswari',
        href: 'https://www.instagram.com/rotaract_srmeaswari/',
      },
      {
        icon: '📍',
        label: 'SRM Easwari Engineering College, Chennai, Tamil Nadu',
        href: 'https://maps.google.com/?q=SRM+Easwari+Engineering+College+Chennai',
      },
    ],
  },
];

const linkStyle = {
  color: 'rgba(255,200,80,0.65)',
  textDecoration: 'none',
  fontSize: 14,
  fontFamily: 'Outfit, Inter, sans-serif',
  lineHeight: 2.2,
  display: 'block',
  transition: 'color 0.2s',
};

function App() {
  return (
    <div style={{ minHeight: '100vh', background: '#050300', color: 'white', fontFamily: 'Outfit, Inter, sans-serif' }}>
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <PrizeSection />
        <ScheduleSection />

        {/* Register CTA */}
        <section
          id="register"
          style={{
            padding: '120px 24px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            borderTop: '1px solid rgba(255,200,0,0.1)',
            position: 'relative',
            overflow: 'hidden',
            background: 'linear-gradient(180deg, #050300 0%, #0d0800 50%, #050300 100%)',
          }}
        >
          <div style={{ position: 'absolute', bottom: 0, left: '50%', transform: 'translateX(-50%)', width: 600, height: 300, borderRadius: '50% 50% 0 0', background: 'radial-gradient(ellipse, rgba(255,200,0,0.12) 0%, transparent 70%)', pointerEvents: 'none' }} />
          <div style={{ textAlign: 'center', position: 'relative', zIndex: 5, maxWidth: 600 }}>
            <h2 style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', fontWeight: 900, color: '#fff', textTransform: 'uppercase', letterSpacing: '-0.02em', fontFamily: 'Outfit, Inter, sans-serif', marginBottom: 12 }}>
              Ready to&nbsp;
              <span style={{ background: 'linear-gradient(135deg, #FFD700, #FFA500)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                Innovate?
              </span>
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.45)', marginBottom: 36, lineHeight: 1.7, fontSize: 15 }}>
              Join the 24-hour startup hackathon. Build, pitch, and win.
            </p>
            <a
              href="mailto:rotaracteec2526@gmail.com"
              style={{
                display: 'inline-block',
                padding: '18px 52px',
                background: 'linear-gradient(135deg, #cc7700, #FFD700, #FFA500, #cc7700)',
                backgroundSize: '200% auto',
                color: '#050300',
                fontWeight: 900,
                fontSize: '1rem',
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                textDecoration: 'none',
                borderRadius: 4,
                boxShadow: '0 0 50px rgba(255,200,0,0.55)',
                animation: 'gradient-shift 3s linear infinite',
                fontFamily: 'Outfit, Inter, sans-serif',
              }}
            >
              Register Now
            </a>
          </div>
        </section>

        <ProblemSection />

        {/* Contact Section (replaces FAQ) */}
        <ContactSection />
      </main>

      {/* ══════════════════════════════════════
          FOOTER — matches reference design
      ══════════════════════════════════════ */}
      <footer style={{
        background: '#030200',
        borderTop: '1px solid rgba(255,200,0,0.12)',
        padding: '72px 24px 0',
        fontFamily: 'Outfit, Inter, sans-serif',
      }}>
        {/* Gold top line */}
        <div style={{ width: '100%', height: 1, background: 'linear-gradient(90deg, transparent 0%, rgba(255,200,0,0.5) 30%, rgba(255,200,0,0.8) 50%, rgba(255,200,0,0.5) 70%, transparent 100%)', marginBottom: 64 }} />

        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr repeat(3, auto) 1.4fr', gap: '48px 64px', flexWrap: 'wrap' }}>

            {/* LEFT — Branding */}
            <div style={{ gridColumn: '1', minWidth: 200 }}>
              {/* Logo + Name */}
              <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 20 }}>
                <div style={{ width: 44, height: 44, borderRadius: '50%', border: '2px solid #FFD700', background: 'rgba(0,0,0,0.8)', boxShadow: '0 0 20px rgba(255,215,0,0.5)', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden', flexShrink: 0 }}>
                  <img src="/rotaract_logo.png" alt="Logo" style={{ width: '85%', height: '85%', objectFit: 'contain' }} />
                </div>
                <span style={{
                  fontFamily: '"Racing Sans One", "Russo One", sans-serif',
                  fontSize: '1.6rem',
                  fontWeight: 900,
                  color: '#fff',
                  letterSpacing: '0.05em',
                  textShadow: '2px 2px 0 #2a1a00, 4px 4px 0 #1a0e00, 0 0 20px rgba(255,200,0,0.5)',
                  WebkitTextStroke: '1px #fff',
                }}>
                  GENESIS
                </span>
              </div>
              <p style={{ color: 'rgba(255,255,255,0.45)', fontSize: 13.5, lineHeight: 1.8, maxWidth: 260 }}>
                International Hackathon organised by{' '}
                <span style={{ color: '#FFD700' }}>Rotaract Club</span> of SRM Easwari Engineering College, Chennai.
              </p>
              {/* Social icons row */}
              <div style={{ display: 'flex', gap: 12, marginTop: 24 }}>
                <a href="https://www.instagram.com/rotaract_srmeaswari/" target="_blank" rel="noopener noreferrer"
                  style={{ width: 36, height: 36, borderRadius: '50%', border: '1px solid rgba(255,200,0,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'rgba(255,200,0,0.7)', textDecoration: 'none', fontSize: 16, transition: 'all 0.25s' }}
                  onMouseEnter={e => { e.currentTarget.style.background = 'rgba(255,200,0,0.12)'; e.currentTarget.style.borderColor = '#FFD700'; }}
                  onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.borderColor = 'rgba(255,200,0,0.3)'; }}
                >
                  📷
                </a>
                <a href="mailto:rotaracteec2526@gmail.com"
                  style={{ width: 36, height: 36, borderRadius: '50%', border: '1px solid rgba(255,200,0,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'rgba(255,200,0,0.7)', textDecoration: 'none', fontSize: 16, transition: 'all 0.25s' }}
                  onMouseEnter={e => { e.currentTarget.style.background = 'rgba(255,200,0,0.12)'; e.currentTarget.style.borderColor = '#FFD700'; }}
                  onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.borderColor = 'rgba(255,200,0,0.3)'; }}
                >
                  ✉
                </a>
              </div>
            </div>

            {/* NAV COLUMNS */}
            {footerCols.slice(0, 3).map((col) => (
              <div key={col.title} style={{ minWidth: 140 }}>
                <h4 style={{ color: '#ffffff', fontSize: 15, fontWeight: 700, letterSpacing: '0.05em', marginBottom: 16, marginTop: 0 }}>
                  {col.title}
                </h4>
                {col.links.map(link => (
                  <a
                    key={link.label}
                    href={link.href}
                    target={link.external ? '_blank' : undefined}
                    rel={link.external ? 'noopener noreferrer' : undefined}
                    style={linkStyle}
                    onMouseEnter={e => e.currentTarget.style.color = '#FFD700'}
                    onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,200,80,0.65)'}
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            ))}

            {/* CONTACT COLUMN */}
            <div style={{ minWidth: 200 }}>
              <h4 style={{ color: '#ffffff', fontSize: 15, fontWeight: 700, letterSpacing: '0.05em', marginBottom: 16, marginTop: 0 }}>
                Contact Us
              </h4>
              {footerCols[3].contacts.map(c => (
                <a
                  key={c.label}
                  href={c.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ ...linkStyle, display: 'flex', alignItems: 'flex-start', gap: 10, marginBottom: 10 }}
                  onMouseEnter={e => e.currentTarget.style.color = '#FFD700'}
                  onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,200,80,0.65)'}
                >
                  <span style={{ fontSize: 14, flexShrink: 0, marginTop: 2 }}>{c.icon}</span>
                  <span style={{ lineHeight: 1.5, fontSize: 13 }}>{c.label}</span>
                </a>
              ))}
            </div>
          </div>

          {/* ── Bottom bar ── */}
          <div style={{
            marginTop: 64,
            paddingTop: 24,
            paddingBottom: 32,
            borderTop: '1px solid rgba(255,200,0,0.08)',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: 12,
          }}>
            <p style={{ color: 'rgba(255,255,255,0.3)', fontSize: 13, margin: 0 }}>
              © {new Date().getFullYear()}&nbsp;
              <span style={{ color: 'rgba(255,200,0,0.5)', fontWeight: 600 }}>GENESIS</span>
              &nbsp;· Rotaract Club of SRM Easwari Engineering College
            </p>
            <p style={{ color: 'rgba(255,200,0,0.4)', fontSize: 13, fontWeight: 600, margin: 0 }}>
              All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
