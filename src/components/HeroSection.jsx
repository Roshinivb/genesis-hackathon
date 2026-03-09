import React, { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import introVideo from '../assets/rtr_logo_transition.mp4';

import aramGoldLogo from '../assets/aram_gold_logo.png';

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
   0 → video intro
   1 → hero content
───────────────────────────────────────────── */

const HeroSection = () => {
    const [phase, setPhase] = useState(0); // 0=video, 1=hero
    const [warpActive, setWarpActive] = useState(false);

    useEffect(() => {
        // Delay warp activation slightly to sync with video end if needed
    }, []);

    const videoRef = useRef(null);

    const handleVideoEnd = () => {
        setPhase(1);
        setWarpActive(true);
    };

    const handleTimeUpdate = () => {
        const video = videoRef.current;
        if (!video) return;

        // Snappier feel: Trigger transition 1.0s before video ends to overlap much sooner
        if (video.duration - video.currentTime < 1.0) {
            handleVideoEnd();
        }
    };

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

            {/* ──────────────────────────────────────
                  PHASE 0: VIDEO INTRO
            ────────────────────────────────────── */}
            <AnimatePresence>
                {phase === 0 && (
                    <motion.div
                        key="intro-video"
                        initial={{ opacity: 1 }}
                        exit={{ opacity: 0, scale: 1.02 }}
                        transition={{ duration: 0.3, ease: "circOut" }}
                        style={{
                            position: 'absolute',
                            inset: 0,
                            zIndex: 30,
                            background: '#050300',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}
                    >
                        <video
                            ref={videoRef}
                            src={introVideo}
                            autoPlay
                            muted
                            playsInline
                            onLoadedMetadata={(e) => { e.currentTarget.playbackRate = 1.5; }}
                            onTimeUpdate={handleTimeUpdate}
                            onEnded={handleVideoEnd}
                            style={{
                                width: '100%',
                                height: '100%',
                                objectFit: 'cover',
                            }}
                        />
                        {/* Skip Button */}
                        <button
                            onClick={handleVideoEnd}
                            style={{
                                position: 'absolute',
                                bottom: '40px',
                                right: '40px',
                                background: 'rgba(255,255,255,0.05)',
                                backdropFilter: 'blur(10px)',
                                border: '1px solid rgba(255,215,0,0.2)',
                                color: 'rgba(255,215,0,0.6)',
                                padding: '10px 24px',
                                borderRadius: '100px',
                                fontSize: '12px',
                                fontWeight: 700,
                                letterSpacing: '0.1em',
                                textTransform: 'uppercase',
                                cursor: 'pointer',
                                transition: 'all 0.3s ease',
                                zIndex: 40,
                            }}
                            onMouseEnter={e => {
                                e.currentTarget.style.background = 'rgba(255,215,0,0.1)';
                                e.currentTarget.style.color = '#FFD700';
                            }}
                            onMouseLeave={e => {
                                e.currentTarget.style.background = 'rgba(255,255,255,0.05)';
                                e.currentTarget.style.color = 'rgba(255,215,0,0.6)';
                            }}
                        >
                            Skip Intro
                        </button>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* ──────────────────────────────────────
                  PHASE 1: FULL HERO
            ────────────────────────────────────── */}
            <AnimatePresence>
                {phase === 1 && (
                    <motion.div
                        key="hero-content"
                        initial={{ opacity: 0, scale: 0.98 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.4, ease: "easeOut" }}
                        style={{
                            position: 'relative', zIndex: 10,
                            display: 'flex', flexDirection: 'column',
                            alignItems: 'center', justifyContent: 'center',
                            textAlign: 'center', width: '100%', padding: '80px 16px 40px',
                        }}
                    >
                        {/* ROTARACT Branding — Presents line */}
                        <motion.div
                            initial={{ opacity: 0, y: 15 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            style={{
                                display: 'flex', alignItems: 'center',
                                gap: 'clamp(8px, 2vw, 14px)',
                                marginBottom: 20, zIndex: 11,
                                maxWidth: 'min(95vw, 600px)',
                                flexWrap: 'nowrap'
                            }}
                        >
                            {/* Rotaract Logo Circle */}
                            <div style={{
                                width: 'clamp(40px, 8vw, 56px)',
                                height: 'clamp(40px, 8vw, 56px)',
                                borderRadius: '50%',
                                border: '1px solid rgba(255,215,0,0.3)',
                                background: 'rgba(0,0,0,0.7)',
                                display: 'flex', alignItems: 'center', justifyContent: 'center',
                                boxShadow: '0 0 20px rgba(255,215,0,0.2)',
                                overflow: 'hidden',
                                flexShrink: 0
                            }}>
                                <img src="/rotaract_logo.png" alt="Rotaract Logo" style={{ width: '85%', height: '85%', objectFit: 'contain' }} />
                            </div>

                            {/* Club Name Pill */}
                            <div style={{
                                background: 'rgba(10,10,10,0.75)',
                                backdropFilter: 'blur(10px)',
                                border: '1px solid rgba(255,255,255,0.06)',
                                borderRadius: '16px',
                                padding: 'clamp(6px, 1.5vw, 10px) clamp(12px, 3vw, 24px)',
                                display: 'flex', flexDirection: 'column',
                                textAlign: 'left',
                                boxShadow: '0 4px 20px rgba(0,0,0,0.4)',
                                flexShrink: 1,
                                minWidth: 0
                            }}>
                                <span style={{
                                    color: '#ffffff',
                                    fontWeight: 800,
                                    fontSize: 'clamp(0.8rem, 3vw, 1.2rem)',
                                    textTransform: 'uppercase',
                                    letterSpacing: '0.05em',
                                    whiteSpace: 'nowrap',
                                    overflow: 'hidden',
                                    textOverflow: 'ellipsis'
                                }}>
                                    Rotaract Club
                                </span>
                                <span style={{
                                    color: 'rgba(255,255,255,0.7)',
                                    fontSize: 'clamp(0.65rem, 2.2vw, 0.85rem)',
                                    fontWeight: 500,
                                    lineHeight: 1.2,
                                    whiteSpace: 'nowrap',
                                    overflow: 'hidden',
                                    textOverflow: 'ellipsis'
                                }}>
                                    of SRM EEC <span style={{ color: '#FFD700', marginLeft: 4, fontWeight: 700 }}>presents</span>
                                </span>
                            </div>
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
                                    fontSize: 'clamp(3.5rem, 15vw, 18rem)',
                                    fontFamily: '"Racing Sans One", "Russo One", "Syncopate", sans-serif',
                                    fontWeight: 900,
                                    textTransform: 'uppercase',
                                    letterSpacing: '0.04em',
                                    lineHeight: 0.85,
                                    whiteSpace: 'nowrap',
                                    transform: 'skewX(-12deg)',
                                    color: '#ffffff',
                                    WebkitTextStroke: '1px #ffffff',
                                    textShadow: [
                                        '2px 2px 0 #2a1a00',
                                        '4px 4px 0 #2a1a00',
                                        '6px 6px 0 #2a1a00',
                                        '8px 8px 0 #1a0e00',
                                        '10px 10px 0 #100900',
                                        '12px 12px 0 #000000',
                                        '0 0 30px rgba(255,200,0,0.55)',
                                        '0 0 60px rgba(255,180,0,0.2)',
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
                                padding: '14px 24px',
                                transform: 'skewX(-10deg)',
                                display: 'flex', flexDirection: 'column', alignItems: 'center',
                                boxShadow: '0 0 60px rgba(255,200,0,0.1)',
                                maxWidth: '90vw', width: 'auto',
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
