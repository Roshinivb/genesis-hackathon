import React, { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

/* ─────────────────────────────────────────────
   WARP SPEED CANVAS  (gold / amber streaks)
───────────────────────────────────────────── */
const WarpCanvas = ({ active }) => {
    const canvasRef = useRef(null);
    const animRef = useRef(null);
    const starsRef = useRef([]);
    const speedRef = useRef(0);

    const GOLD_PALETTE = [
        '#FFD700', '#FFC200', '#FFA500', '#FFB300',
        '#FFCC00', '#E8A000', '#FF8C00', '#FFE066',
        '#D4AF37', '#F0C040', '#FFAA00',
    ];

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        let W, H;

        const resize = () => {
            W = canvas.width = window.innerWidth;
            H = canvas.height = window.innerHeight;
        };
        resize();
        window.addEventListener('resize', resize);

        // Init stars
        const STAR_COUNT = 280;
        starsRef.current = Array.from({ length: STAR_COUNT }, () => makestar(W, H));

        function makestar(W, H) {
            const angle = Math.random() * Math.PI * 2;
            return {
                x: W / 2, y: H / 2,
                vx: Math.cos(angle) * (0.5 + Math.random() * 3),
                vy: Math.sin(angle) * (0.5 + Math.random() * 3),
                color: GOLD_PALETTE[Math.floor(Math.random() * GOLD_PALETTE.length)],
                thickness: 0.5 + Math.random() * 1.5,
                life: 0, maxLife: 0.5 + Math.random() * 0.5,
                trail: [],
            };
        }

        let lastTime = performance.now();

        const draw = (now) => {
            const dt = Math.min((now - lastTime) / 16, 3);
            lastTime = now;

            // Target speed: ramp up when active
            const targetSpeed = active ? 14 : 1.2;
            speedRef.current += (targetSpeed - speedRef.current) * 0.035 * dt;
            const spd = speedRef.current;

            // Fade trail
            ctx.fillStyle = `rgba(5, 3, 0, ${0.18 + 0.08 * (spd / 14)})`;
            ctx.fillRect(0, 0, W, H);

            starsRef.current.forEach((s, i) => {
                s.life += dt * 0.02 * spd;
                s.trail.push({ x: s.x, y: s.y });
                if (s.trail.length > Math.ceil(spd * 3)) s.trail.shift();

                s.x += s.vx * spd * dt * 0.6;
                s.y += s.vy * spd * dt * 0.6;

                // Draw streak
                if (s.trail.length > 1) {
                    const grad = ctx.createLinearGradient(
                        s.trail[0].x, s.trail[0].y, s.x, s.y
                    );
                    grad.addColorStop(0, 'transparent');
                    grad.addColorStop(1, s.color);

                    ctx.beginPath();
                    ctx.strokeStyle = grad;
                    ctx.lineWidth = s.thickness * (0.5 + spd / 10);
                    ctx.shadowColor = s.color;
                    ctx.shadowBlur = spd > 4 ? 8 : 0;
                    ctx.moveTo(s.trail[0].x, s.trail[0].y);
                    for (const p of s.trail) ctx.lineTo(p.x, p.y);
                    ctx.stroke();
                    ctx.shadowBlur = 0;
                }

                // Reset when out of screen
                if (
                    s.life > s.maxLife ||
                    s.x < -100 || s.x > W + 100 ||
                    s.y < -100 || s.y > H + 100
                ) {
                    starsRef.current[i] = makestar(W, H);
                }
            });

            animRef.current = requestAnimationFrame(draw);
        };

        animRef.current = requestAnimationFrame(draw);
        return () => {
            cancelAnimationFrame(animRef.current);
            window.removeEventListener('resize', resize);
        };
    }, [active]);

    return (
        <canvas
            ref={canvasRef}
            style={{
                position: 'absolute', inset: 0,
                width: '100%', height: '100%',
                zIndex: 0, display: 'block',
            }}
        />
    );
};

/* ─────────────────────────────────────────────
   INTRO SEQUENCE PHASES
   0 → logo only (centered, grows in)
   1 → logo shrinks/blurs, GENESIS flies in
   2 → full hero (persistent)
───────────────────────────────────────────── */
const PHASE_DURATION = [2200, 1000]; // ms each

const HeroSection = () => {
    const [phase, setPhase] = useState(0); // 0=logo, 1=transition, 2=hero
    const [warpActive, setWarpActive] = useState(false);

    useEffect(() => {
        // Start warp immediately
        setWarpActive(true);

        const t1 = setTimeout(() => setPhase(1), PHASE_DURATION[0]);
        const t2 = setTimeout(() => setPhase(2), PHASE_DURATION[0] + PHASE_DURATION[1]);
        return () => { clearTimeout(t1); clearTimeout(t2); };
    }, []);

    return (
        <section
            id="home"
            style={{
                position: 'relative',
                minHeight: '100vh',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                overflow: 'hidden',
                background: '#050300',
            }}
        >
            {/* ── WARP CANVAS BACKGROUND ── */}
            <WarpCanvas active={phase >= 1} />

            {/* ── Dark vignette overlay ── */}
            <div style={{
                position: 'absolute', inset: 0, zIndex: 1, pointerEvents: 'none',
                background: 'radial-gradient(ellipse 80% 80% at 50% 50%, transparent 30%, rgba(5,3,0,0.75) 100%)',
            }} />

            {/* ── TOP CENTER GLOW ── */}
            <div style={{
                position: 'absolute', top: '20%', left: '50%', transform: 'translateX(-50%)',
                width: 600, height: 600, borderRadius: '50%',
                background: 'radial-gradient(circle, rgba(255,200,0,0.12) 0%, transparent 70%)',
                zIndex: 1, pointerEvents: 'none',
                filter: 'blur(40px)',
            }} />

            {/* ──────────────────────────────────────
          PHASE 0 & 1 LOGO (intro only)
      ────────────────────────────────────── */}
            <AnimatePresence>
                {phase < 2 && (
                    <motion.div
                        key="intro-logo"
                        initial={{ scale: 0, opacity: 0, y: 0 }}
                        animate={
                            phase === 0
                                ? { scale: 1.15, opacity: 1, y: 0, filter: 'drop-shadow(0 0 60px rgba(255,215,0,1))' }
                                : { scale: 8, opacity: 0, y: -40, filter: 'blur(20px) drop-shadow(0 0 80px rgba(255,215,0,0))' }
                        }
                        exit={{ opacity: 0 }}
                        transition={
                            phase === 0
                                ? { duration: 1.0, type: 'spring', bounce: 0.4 }
                                : { duration: 0.9, ease: [0.4, 0, 1, 1] }
                        }
                        style={{
                            position: 'absolute',
                            zIndex: 20,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: 'center',
                            top: '50%', left: '50%',
                            transform: 'translate(-50%, -50%)',
                        }}
                    >
                        {/* Pulsing ring */}
                        {phase === 0 && (
                            <motion.div
                                animate={{ scale: [1, 1.5, 1], opacity: [0.6, 0, 0.6] }}
                                transition={{ duration: 1.6, repeat: Infinity, ease: 'easeOut' }}
                                style={{
                                    position: 'absolute',
                                    width: 160, height: 160,
                                    borderRadius: '50%',
                                    border: '2px solid rgba(255,215,0,0.6)',
                                    pointerEvents: 'none',
                                }}
                            />
                        )}

                        {/* Logo circle */}
                        <div style={{
                            width: 120, height: 120,
                            borderRadius: '50%',
                            border: '3px solid #FFD700',
                            background: 'rgba(0,0,0,0.85)',
                            boxShadow: '0 0 60px rgba(255,215,0,0.8), 0 0 120px rgba(255,180,0,0.4)',
                            display: 'flex', alignItems: 'center', justifyContent: 'center',
                            overflow: 'hidden',
                        }}>
                            <img
                                src="/rotaract_logo.png"
                                alt="Rotaract Club Logo"
                                style={{
                                    width: '85%', height: '85%', objectFit: 'contain',
                                    filter: 'drop-shadow(0 0 12px rgba(255,215,0,1))'
                                }}
                            />
                        </div>

                        {/* Org name under logo during phase 0 */}
                        {phase === 0 && (
                            <motion.p
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.6, duration: 0.6 }}
                                style={{
                                    marginTop: 20,
                                    color: '#FFD700',
                                    fontSize: 12,
                                    fontWeight: 700,
                                    letterSpacing: '0.25em',
                                    textTransform: 'uppercase',
                                    textShadow: '0 0 20px rgba(255,215,0,0.8)',
                                    whiteSpace: 'nowrap',
                                    fontFamily: 'Outfit, Inter, sans-serif',
                                }}
                            >
                                Rotaract Club · SRM EEC
                            </motion.p>
                        )}
                    </motion.div>
                )}
            </AnimatePresence>

            {/* ──────────────────────────────────────
          PHASE 2 — FULL HERO (persistent)
      ────────────────────────────────────── */}
            <AnimatePresence>
                {phase === 2 && (
                    <motion.div
                        key="hero-content"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5 }}
                        style={{
                            position: 'relative', zIndex: 10,
                            display: 'flex', flexDirection: 'column',
                            alignItems: 'center', justifyContent: 'center',
                            textAlign: 'center', width: '100%', padding: '80px 16px 40px',
                        }}
                    >
                        {/* Small logo in corner-ish area */}
                        <motion.div
                            initial={{ scale: 0, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ duration: 0.7, type: 'spring', bounce: 0.5 }}
                            style={{
                                marginBottom: 24,
                                width: 80, height: 80,
                                borderRadius: '50%',
                                border: '2.5px solid #FFD700',
                                background: 'rgba(0,0,0,0.8)',
                                boxShadow: '0 0 40px rgba(255,215,0,0.7)',
                                display: 'flex', alignItems: 'center', justifyContent: 'center',
                                overflow: 'hidden',
                            }}
                        >
                            <img
                                src="/rotaract_logo.png"
                                alt="Rotaract Club Logo"
                                style={{
                                    width: '85%', height: '85%', objectFit: 'contain',
                                    filter: 'drop-shadow(0 0 8px rgba(255,215,0,1))'
                                }}
                            />
                        </motion.div>

                        {/* ── GENESIS GIANT TITLE ── */}
                        <motion.div
                            initial={{ opacity: 0, scaleX: 0.4, skewX: -20, y: 60 }}
                            animate={{ opacity: 1, scaleX: 1, skewX: 0, y: 0 }}
                            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
                            style={{ position: 'relative', width: '100%', lineHeight: 0.85, marginBottom: 8 }}
                        >

                            {/* ── WHITE 3D EXTRUSION — the classic NxtGen style ── */}
                            <h1
                                style={{
                                    position: 'relative',
                                    margin: 0, padding: 0,
                                    fontSize: 'clamp(5rem, 18vw, 18rem)',
                                    fontFamily: '"Racing Sans One", "Russo One", "Syncopate", sans-serif',
                                    fontWeight: 900,
                                    textTransform: 'uppercase',
                                    letterSpacing: '0.04em',
                                    lineHeight: 0.85,
                                    whiteSpace: 'nowrap',
                                    transform: 'skewX(-12deg)',
                                    color: '#ffffff',
                                    WebkitTextStroke: '2px #ffffff',
                                    textShadow: [
                                        '3px 3px 0 #2a1a00',
                                        '6px 6px 0 #2a1a00',
                                        '9px 9px 0 #2a1a00',
                                        '12px 12px 0 #1a0e00',
                                        '15px 15px 0 #100900',
                                        '18px 18px 0 #000000',
                                        '0 0 40px rgba(255,200,0,0.55)',
                                        '0 0 80px rgba(255,180,0,0.2)',
                                    ].join(', '),
                                    zIndex: 2,
                                }}
                            >
                                GENESIS
                            </h1>

                            {/* Horizontal light-streak glow behind text */}
                            <div style={{
                                position: 'absolute', top: '50%', left: '50%',
                                transform: 'translate(-50%, -50%) skewX(-10deg)',
                                width: '110%', height: '35%',
                                background: 'linear-gradient(90deg, transparent 0%, rgba(255,180,0,0.15) 30%, rgba(255,220,0,0.25) 50%, rgba(255,180,0,0.15) 70%, transparent 100%)',
                                filter: 'blur(20px)',
                                pointerEvents: 'none', zIndex: 0,
                            }} />
                        </motion.div>

                        {/* ── Subtitle / tagline slanted bar ── */}
                        <motion.div
                            initial={{ opacity: 0, y: 30, scaleX: 0.8 }}
                            animate={{ opacity: 1, y: 0, scaleX: 1 }}
                            transition={{ duration: 0.8, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
                            style={{
                                marginTop: 28,
                                background: 'rgba(255,255,255,0.03)',
                                backdropFilter: 'blur(20px)',
                                borderTop: '1px solid rgba(255,215,0,0.35)',
                                borderBottom: '1px solid rgba(255,215,0,0.35)',
                                padding: '18px 48px',
                                transform: 'skewX(-10deg)',
                                display: 'flex', flexDirection: 'column', alignItems: 'center',
                                boxShadow: '0 0 60px rgba(255,200,0,0.1)',
                                maxWidth: 700, width: '100%',
                            }}
                        >
                            <p style={{
                                transform: 'skewX(10deg)',
                                color: '#ffffff',
                                fontSize: 'clamp(1rem, 2.5vw, 1.6rem)',
                                fontFamily: '"Racing Sans One", "Russo One", sans-serif',
                                fontWeight: 700,
                                letterSpacing: '0.25em',
                                textTransform: 'uppercase',
                                textShadow: '0 0 20px rgba(255,215,0,0.7)',
                                margin: 0,
                            }}>
                                International Hackathon
                            </p>
                            <div style={{
                                transform: 'skewX(10deg)',
                                width: '50%', height: 2, margin: '14px 0',
                                background: 'linear-gradient(90deg, transparent, #FFD700, transparent)',
                            }} />
                            <p style={{
                                transform: 'skewX(10deg)',
                                color: '#FFD700',
                                fontSize: 'clamp(0.85rem, 1.8vw, 1.2rem)',
                                fontWeight: 600,
                                letterSpacing: '0.2em',
                                textShadow: '0 0 16px rgba(255,215,0,0.8)',
                                margin: 0,
                                fontFamily: 'Outfit, Inter, sans-serif',
                            }}>
                                4th &amp; 5th April 2026
                            </p>
                        </motion.div>

                        {/* ── CTA Button ── */}
                        <motion.div
                            initial={{ opacity: 0, y: 24 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.75 }}
                            style={{ marginTop: 36 }}
                        >
                            <a
                                href="#about"
                                style={{
                                    display: 'inline-flex', alignItems: 'center', gap: 12,
                                    padding: '18px 44px',
                                    background: 'linear-gradient(135deg, #cc7700 0%, #FFD700 40%, #FFA500 70%, #cc7700 100%)',
                                    backgroundSize: '200% auto',
                                    color: '#0a0600',
                                    fontFamily: '"Racing Sans One","Russo One", sans-serif',
                                    fontWeight: 800,
                                    fontSize: '1rem',
                                    letterSpacing: '0.2em',
                                    textTransform: 'uppercase',
                                    textDecoration: 'none',
                                    transform: 'skewX(-10deg)',
                                    boxShadow: '0 0 50px rgba(255,200,0,0.55)',
                                    transition: 'all 0.3s ease',
                                    animation: 'heroGradientShift 3s linear infinite',
                                }}
                                onMouseEnter={e => {
                                    e.currentTarget.style.transform = 'skewX(-10deg) scale(1.08)';
                                    e.currentTarget.style.boxShadow = '0 0 70px rgba(255,200,0,0.85)';
                                }}
                                onMouseLeave={e => {
                                    e.currentTarget.style.transform = 'skewX(-10deg) scale(1)';
                                    e.currentTarget.style.boxShadow = '0 0 50px rgba(255,200,0,0.55)';
                                }}
                            >
                                <span style={{ transform: 'skewX(10deg)', display: 'flex', alignItems: 'center', gap: 10 }}>
                                    Explore
                                    <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor"
                                        style={{ animation: 'heroBounce 1.2s ease-in-out infinite' }}>
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                                    </svg>
                                </span>
                            </a>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* keyframes injected inline */}
            <style>{`
        @keyframes heroGradientShift {
          0%   { background-position: 0% center; }
          100% { background-position: 200% center; }
        }
        @keyframes heroBounce {
          0%, 100% { transform: translateY(0); }
          50%       { transform: translateY(5px); }
        }
      `}</style>
        </section>
    );
};

export default HeroSection;
