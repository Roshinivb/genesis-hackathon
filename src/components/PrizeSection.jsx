import React, { useState, useCallback, useEffect } from 'react';
import { motion } from 'framer-motion';

/* ─── SVG Trophy (inline so no external deps needed) ─── */
const TrophyGold = ({ size = 72, color = '#FFD700', glowColor = 'rgba(255,215,0,0.8)' }) => (
    <svg width={size} height={size} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg"
        style={{ filter: `drop-shadow(0 0 14px ${glowColor}) drop-shadow(0 0 6px ${glowColor})` }}>
        <path d="M32 4C24 4 18 10 18 18H14C14 26 18 32 26 34V38H22V42H42V38H38V34C46 32 50 26 50 18H46C46 10 40 4 32 4Z" fill={color} />
        <path d="M14 18H10C10 28 16 34 22 35V34C16 32 14 26 14 18Z" fill={color} opacity="0.7" />
        <path d="M50 18H54C54 28 48 34 42 35V34C48 32 50 26 50 18Z" fill={color} opacity="0.7" />
        <rect x="28" y="42" width="8" height="6" fill={color} />
        <rect x="22" y="48" width="20" height="4" rx="2" fill={color} />
        <ellipse cx="32" cy="20" rx="8" ry="4" fill="white" opacity="0.2" />
    </svg>
);

const TrophySilver = ({ size = 64 }) => (
    <TrophyGold size={size} color="#D0D0D0" glowColor="rgba(220,220,220,0.8)" />
);

const TrophyBronze = ({ size = 64 }) => (
    <TrophyGold size={size} color="#E8905A" glowColor="rgba(205,127,50,0.8)" />
);

const CertIcon = ({ size = 64 }) => (
    <svg width={size} height={size} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg"
        style={{ filter: 'drop-shadow(0 0 14px rgba(192,132,252,0.9)) drop-shadow(0 0 6px rgba(192,132,252,0.7))' }}>
        <rect x="8" y="10" width="48" height="38" rx="4" fill="#7C3AED" />
        <rect x="8" y="10" width="48" height="38" rx="4" stroke="#c084fc" strokeWidth="2" />
        <rect x="14" y="18" width="28" height="2.5" rx="1.2" fill="#c084fc" />
        <rect x="14" y="24" width="22" height="2" rx="1" fill="#c084fc" opacity="0.6" />
        <rect x="14" y="30" width="18" height="2" rx="1" fill="#c084fc" opacity="0.4" />
        <circle cx="44" cy="30" r="8" fill="#4C1D95" stroke="#c084fc" strokeWidth="2" />
        <path d="M40 30l3 3 5-5" stroke="#c084fc" strokeWidth="2" strokeLinecap="round" />
        <path d="M28 52l-4-4 8-2-4 6z" fill="#c084fc" />
        <path d="M36 52l4-4-8-2 4 6z" fill="#7C3AED" />
        <circle cx="32" cy="46" r="3" fill="#FFD700" />
    </svg>
);

const VCIcon = ({ size = 64 }) => (
    <svg width={size} height={size} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg"
        style={{ filter: 'drop-shadow(0 0 14px rgba(212,175,55,0.9)) drop-shadow(0 0 6px rgba(212,175,55,0.7))' }}>
        <circle cx="32" cy="20" r="10" fill="#D4AF37" />
        <path d="M18 44c0-7.7 6.3-14 14-14s14 6.3 14 14" stroke="#D4AF37" strokeWidth="3" strokeLinecap="round" />
        <circle cx="14" cy="20" r="7" fill="#D4AF37" opacity="0.5" />
        <path d="M4 40c0-5.5 4.5-10 10-10" stroke="#D4AF37" strokeWidth="2.5" strokeLinecap="round" opacity="0.5" />
        <circle cx="50" cy="20" r="7" fill="#D4AF37" opacity="0.5" />
        <path d="M60 40c0-5.5-4.5-10-10-10" stroke="#D4AF37" strokeWidth="2.5" strokeLinecap="round" opacity="0.5" />
        <path d="M32 10l1.5 4.5H38l-3.8 2.8 1.5 4.5L32 19l-3.8 2.8 1.5-4.5L26 14.5h4.5z" fill="white" opacity="0.6" />
    </svg>
);

/* ─── Prize Data ─── */
const prizes = [
    {
        id: 0,
        trophyEl: <TrophyGold size={90} />,
        label: 'TOTAL PRIZE POOL',
        amount: '₹17,000',
        sub: 'Grand Prize Package',
        tag: '🏆 CHAMPION',
        perks: [
            '🥇  First Prize — ₹10,000',
            '🥈  Second Prize — ₹7,000',
            '📜  Participation Certificate',
            '💼  VC Pitch Opportunity',
            '🚀  Investment for Best Project',
        ],
        cardBg: 'linear-gradient(160deg, #7d4e00 0%, #c8860a 25%, #FFD700 55%, #f0a500 80%, #7a4800 100%)',
        shimmer: 'linear-gradient(135deg, rgba(255,255,255,0.35) 0%, transparent 60%)',
        borderColor: '#FFE066',
        glowColor: '#FFD700',
        glowRgba: 'rgba(255,215,0,0.9)',
        amountColor: '#fff',
        labelColor: '#fff8cc',
        ribbonColor: '#B8860B',
        tagBg: 'rgba(0,0,0,0.35)',
        sparkBg: 'rgba(255,220,0,0.12)',
    },
    {
        id: 1,
        trophyEl: <TrophyGold size={78} color="#E2E2E2" glowColor="rgba(210,210,210,0.9)" />,
        label: 'FIRST PRIZE',
        amount: '₹10,000',
        sub: "Winner's Crown",
        tag: '🥇 WINNER',
        perks: [
            '⭐  Highest overall score',
            '📊  VC-style judging criteria',
            '🎯  Innovation & Impact award',
            '🏅  Official Winner Certificate',
            '💡  Mentor session with judges',
        ],
        cardBg: 'linear-gradient(160deg, #1a1a1a 0%, #555 25%, #C8C8C8 55%, #eee 80%, #888 100%)',
        shimmer: 'linear-gradient(135deg, rgba(255,255,255,0.4) 0%, transparent 60%)',
        borderColor: '#E0E0E0',
        glowColor: '#C8C8C8',
        glowRgba: 'rgba(200,200,200,0.8)',
        amountColor: '#fff',
        labelColor: '#e8e8e8',
        ribbonColor: '#888',
        tagBg: 'rgba(0,0,0,0.4)',
        sparkBg: 'rgba(220,220,220,0.1)',
    },
    {
        id: 2,
        trophyEl: <TrophyBronze size={78} />,
        label: 'SECOND PRIZE',
        amount: '₹7,000',
        sub: 'Runner-Up Excellence',
        tag: '🥈 RUNNER-UP',
        perks: [
            '🔥  Strong Execution & Innovation',
            '🛠️  Top-tier prototype & pitch',
            '📈  Scalability demonstrated',
            '🏅  Official Runner-Up Certificate',
            '🌐  Featured in event highlights',
        ],
        cardBg: 'linear-gradient(160deg, #2a0e00 0%, #7a3010 25%, #C8722A 55%, #e8905a 80%, #7a3010 100%)',
        shimmer: 'linear-gradient(135deg, rgba(255,200,150,0.3) 0%, transparent 60%)',
        borderColor: '#E09050',
        glowColor: '#CD7F32',
        glowRgba: 'rgba(205,127,50,0.85)',
        amountColor: '#fff',
        labelColor: '#ffe0c0',
        ribbonColor: '#7a3010',
        tagBg: 'rgba(0,0,0,0.4)',
        sparkBg: 'rgba(200,120,50,0.12)',
    },
    {
        id: 3,
        trophyEl: <CertIcon size={80} />,
        label: 'PARTICIPATION',
        amount: 'Certificate',
        sub: 'For All Teams',
        tag: '📜 ALL TEAMS',
        perks: [
            '✅  All registered teams receive one',
            '🖋️  Digitally signed & official',
            '🎓  Recognized by faculty & industry',
            '🌟  Portfolio-ready credential',
            '📧  Delivered via email post-event',
        ],
        cardBg: 'linear-gradient(160deg, #1a0035 0%, #4a0090 25%, #9B59B6 55%, #c084fc 80%, #5B1FA8 100%)',
        shimmer: 'linear-gradient(135deg, rgba(200,150,255,0.3) 0%, transparent 60%)',
        borderColor: '#c084fc',
        glowColor: '#9B59B6',
        glowRgba: 'rgba(155,89,182,0.85)',
        amountColor: '#fff',
        labelColor: '#e8ccff',
        ribbonColor: '#4a0090',
        tagBg: 'rgba(0,0,0,0.4)',
        sparkBg: 'rgba(155,89,182,0.12)',
    },
    {
        id: 4,
        trophyEl: <VCIcon size={80} />,
        label: 'INVESTOR ACCESS',
        amount: 'VC Pitch',
        sub: 'Investor Demo Day',
        tag: '💎 EXCLUSIVE',
        perks: [
            '🏦  Invited VCs evaluate projects',
            '💰  Real investment on the table',
            '🤝  Network with top investors',
            '📣  Pitch to industry leaders',
            '🚀  Potential seed-stage funding',
        ],
        cardBg: 'linear-gradient(160deg, #0a0500 0%, #2d1e00 30%, #5a3c00 55%, #D4AF37 85%, #8B6914 100%)',
        shimmer: 'linear-gradient(135deg, rgba(255,215,80,0.25) 0%, transparent 60%)',
        borderColor: '#D4AF37',
        glowColor: '#D4AF37',
        glowRgba: 'rgba(212,175,55,0.9)',
        amountColor: '#FFD700',
        labelColor: '#ffe8a0',
        ribbonColor: '#3a2800',
        tagBg: 'rgba(0,0,0,0.5)',
        sparkBg: 'rgba(212,175,55,0.12)',
    },
];

/* ─── Sparkle Dots (decorative) ─── */
const Sparkles = ({ color }) => {
    const dots = [
        { top: '10%', left: '8%', size: 4, delay: 0 },
        { top: '18%', right: '10%', size: 5, delay: 0.4 },
        { top: '70%', left: '12%', size: 3, delay: 0.8 },
        { top: '80%', right: '8%', size: 4, delay: 0.2 },
        { top: '55%', left: '5%', size: 3, delay: 1 },
        { top: '35%', right: '6%', size: 4, delay: 0.6 },
    ];
    return (
        <>
            {dots.map((d, i) => (
                <motion.div
                    key={i}
                    animate={{ opacity: [0.3, 1, 0.3], scale: [0.7, 1.3, 0.7] }}
                    transition={{ duration: 2.2, delay: d.delay, repeat: Infinity, ease: 'easeInOut' }}
                    style={{
                        position: 'absolute',
                        top: d.top,
                        left: d.left,
                        right: d.right,
                        width: d.size,
                        height: d.size,
                        borderRadius: '50%',
                        background: color,
                        boxShadow: `0 0 8px ${color}`,
                        pointerEvents: 'none',
                    }}
                />
            ))}
        </>
    );
};

/* ─── Coin Row ─── */
const CoinRow = ({ color }) => (
    <div style={{ display: 'flex', justifyContent: 'center', gap: 6, marginBottom: 8 }}>
        {[1, 2, 3, 2, 1].map((h, i) => (
            <div key={i} style={{
                width: 16 + h * 4, height: 16 + h * 4,
                borderRadius: '50%',
                background: `radial-gradient(circle at 35% 35%, #fff8 0%, ${color} 60%)`,
                border: `1.5px solid rgba(255,255,255,0.5)`,
                boxShadow: `0 0 8px ${color}`,
                flexShrink: 0,
            }} />
        ))}
    </div>
);

/* ─── Card positions ─── */
const getProps = (rel) => {
    const abs = Math.abs(rel);
    if (abs > 2) return null;
    return {
        scale: abs === 0 ? 1 : abs === 1 ? 0.78 : 0.58,
        x: rel * 290,
        rotateY: rel * -18,
        rotateZ: rel * 4,        // physical card tilt!
        z: abs === 0 ? 0 : abs === 1 ? -130 : -280,
        opacity: abs === 0 ? 1 : abs === 1 ? 0.82 : 0.42,
        zIndex: 10 - abs * 3,
        blur: abs > 1 ? 2 : 0,
    };
};

/* ─── Single Card ─── */
const PrizeCard = ({ prize, relIdx, onClick }) => {
    const p = getProps(relIdx);
    if (!p) return null;
    const isCenter = relIdx === 0;

    return (
        <motion.div
            onClick={onClick}
            animate={{
                scale: p.scale, x: p.x,
                rotateY: p.rotateY, rotateZ: p.rotateZ,
                z: p.z, opacity: p.opacity,
                filter: `blur(${p.blur}px)`,
            }}
            transition={{ type: 'spring', stiffness: 260, damping: 28, mass: 0.85 }}
            style={{
                position: 'absolute', zIndex: p.zIndex,
                cursor: isCenter ? 'default' : 'pointer',
                transformStyle: 'preserve-3d', userSelect: 'none',
                width: 300,
            }}
        >
            {/* ── Outer ornate frame ── */}
            <div style={{
                borderRadius: 20,
                padding: 3,
                background: `linear-gradient(135deg, rgba(255,255,255,0.6) 0%, ${prize.borderColor} 40%, rgba(255,255,255,0.2) 100%)`,
                boxShadow: isCenter
                    ? `0 0 70px ${prize.glowRgba}, 0 0 140px ${prize.glowRgba.replace('0.9', '0.25')}, 0 30px 60px rgba(0,0,0,0.5)`
                    : `0 0 20px ${prize.glowRgba.replace('0.9', '0.25')}, 0 10px 30px rgba(0,0,0,0.4)`,
                transition: 'box-shadow 0.4s ease',
            }}>
                <div style={{
                    borderRadius: 18,
                    background: prize.cardBg,
                    minHeight: 480,
                    position: 'relative',
                    overflow: 'hidden',
                    padding: '28px 22px 24px',
                }}>
                    {/* Shimmer highlight */}
                    <div style={{
                        position: 'absolute', top: 0, left: 0, right: 0, bottom: 0,
                        background: prize.shimmer, pointerEvents: 'none', borderRadius: 18,
                    }} />

                    {/* Sparkle dots */}
                    <Sparkles color={prize.glowColor} />

                    {/* Horizontal stripe pattern (ticket look) */}
                    <div style={{
                        position: 'absolute', top: 0, left: 0, right: 0, bottom: 0,
                        backgroundImage: `repeating-linear-gradient(0deg, transparent, transparent 28px, ${prize.sparkBg} 28px, ${prize.sparkBg} 30px)`,
                        borderRadius: 18, pointerEvents: 'none',
                    }} />

                    {/* TOP TAG BADGE */}
                    <div style={{ textAlign: 'center', marginBottom: 6, position: 'relative', zIndex: 5 }}>
                        <span style={{
                            display: 'inline-block',
                            background: prize.tagBg,
                            border: `1px solid ${prize.borderColor}90`,
                            borderRadius: 100,
                            padding: '4px 14px',
                            color: prize.labelColor,
                            fontSize: 10,
                            fontWeight: 800,
                            letterSpacing: '0.2em',
                            backdropFilter: 'blur(8px)',
                        }}>{prize.tag}</span>
                    </div>

                    {/* TROPHY */}
                    <div style={{ display: 'flex', justifyContent: 'center', margin: '4px 0 6px', position: 'relative', zIndex: 5 }}>
                        {prize.trophyEl}
                    </div>

                    {/* COIN DECORATION */}
                    <div style={{ position: 'relative', zIndex: 5 }}>
                        <CoinRow color={prize.glowColor} />
                    </div>

                    {/* DIVIDER */}
                    <div style={{
                        height: 1.5, margin: '8px 12px 12px',
                        background: `linear-gradient(90deg, transparent, ${prize.borderColor}, transparent)`,
                        position: 'relative', zIndex: 5,
                    }} />

                    {/* LABEL */}
                    <p style={{
                        textAlign: 'center', fontSize: 11, fontWeight: 800,
                        letterSpacing: '0.22em', color: prize.labelColor,
                        textTransform: 'uppercase', marginBottom: 4,
                        position: 'relative', zIndex: 5,
                        textShadow: `0 0 12px ${prize.glowColor}`,
                    }}>{prize.label}</p>

                    {/* AMOUNT */}
                    <h3 style={{
                        textAlign: 'center',
                        fontSize: prize.amount.length > 7 ? '2.6rem' : '3.2rem',
                        fontWeight: 900, color: prize.amountColor,
                        lineHeight: 1.05, marginBottom: 2,
                        textShadow: `0 0 30px ${prize.glowRgba}, 0 2px 6px rgba(0,0,0,0.7)`,
                        fontFamily: 'Outfit, Inter, sans-serif',
                        letterSpacing: '-0.02em',
                        position: 'relative', zIndex: 5,
                    }}>{prize.amount}</h3>

                    <p style={{
                        textAlign: 'center', fontSize: 11, color: 'rgba(255,255,255,0.7)',
                        fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase',
                        marginBottom: 14, position: 'relative', zIndex: 5,
                    }}>{prize.sub}</p>

                    {/* PERKS */}
                    <div style={{
                        background: 'rgba(0,0,0,0.28)', borderRadius: 12,
                        padding: '12px 14px', position: 'relative', zIndex: 5,
                        border: `1px solid ${prize.borderColor}30`,
                        backdropFilter: 'blur(6px)',
                    }}>
                        {prize.perks.map((perk, i) => (
                            <div key={i} style={{
                                display: 'flex', alignItems: 'center',
                                padding: '5px 0',
                                borderBottom: i < prize.perks.length - 1 ? '1px solid rgba(255,255,255,0.07)' : 'none',
                            }}>
                                <span style={{
                                    fontSize: 12,
                                    color: 'rgba(255,255,255,0.88)',
                                    fontWeight: 500,
                                    lineHeight: 1.4,
                                    fontFamily: 'Outfit, Inter, sans-serif',
                                }}>{perk}</span>
                            </div>
                        ))}
                    </div>

                    {/* Bottom glow strip */}
                    <div style={{
                        position: 'absolute', bottom: 0, left: 0, right: 0, height: 4,
                        background: `linear-gradient(90deg, transparent, ${prize.borderColor}, ${prize.glowColor}, ${prize.borderColor}, transparent)`,
                        borderRadius: '0 0 18px 18px',
                    }} />
                </div>
            </div>
        </motion.div>
    );
};

/* ─── Main Section ─── */
const PrizeSection = () => {
    const [active, setActive] = useState(0);

    const goNext = useCallback(() => setActive(p => (p + 1) % prizes.length), []);
    const goPrev = useCallback(() => setActive(p => (p - 1 + prizes.length) % prizes.length), []);

    useEffect(() => {
        const h = (e) => { if (e.key === 'ArrowRight') goNext(); if (e.key === 'ArrowLeft') goPrev(); };
        window.addEventListener('keydown', h);
        return () => window.removeEventListener('keydown', h);
    }, [goNext, goPrev]);

    return (
        <section
            id="prizes"
            style={{
                position: 'relative',
                minHeight: '100vh',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '100px 24px 80px',
                /* ── VIBRANT GOLD BACKGROUND ── */
                background: 'linear-gradient(180deg, #0d0900 0%, #1a1000 10%, #2a1800 25%, #3d2200 40%, #4a2b00 55%, #3d2200 70%, #1a1000 88%, #0d0900 100%)',
                overflow: 'hidden',
            }}
        >
            {/* ── Big warm radial glow ── */}
            <div style={{
                position: 'absolute', top: '30%', left: '50%', transform: 'translateX(-50%)',
                width: '900px', height: '500px', borderRadius: '50%',
                background: 'radial-gradient(ellipse, rgba(255,180,0,0.22) 0%, rgba(200,120,0,0.08) 50%, transparent 75%)',
                pointerEvents: 'none',
            }} />
            <div style={{
                position: 'absolute', top: 0, left: 0, right: 0, bottom: 0,
                background: 'radial-gradient(ellipse 80% 60% at 50% 0%, rgba(255,200,50,0.10) 0%, transparent 60%)',
                pointerEvents: 'none',
            }} />

            {/* Gold particle dots grid */}
            <div style={{
                position: 'absolute', inset: 0,
                backgroundImage: 'radial-gradient(rgba(255,200,0,0.12) 1.5px, transparent 1.5px)',
                backgroundSize: '32px 32px', pointerEvents: 'none',
            }} />

            {/* Gold horizontal lines */}
            {[15, 35, 55, 75, 90].map(top => (
                <div key={top} style={{
                    position: 'absolute', top: `${top}%`, left: 0, right: 0, height: 1,
                    background: `linear-gradient(90deg, transparent 0%, rgba(255,200,0,0.08) 30%, rgba(255,200,0,0.18) 50%, rgba(255,200,0,0.08) 70%, transparent 100%)`,
                    pointerEvents: 'none',
                }} />
            ))}

            {/* ── SECTION HEADER ── */}
            <motion.div
                initial={{ opacity: 0, y: -40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                style={{ textAlign: 'center', marginBottom: 70, position: 'relative', zIndex: 10 }}
            >
                {/* Ornate top line */}
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 12, marginBottom: 14 }}>
                    <div style={{ width: 60, height: 1.5, background: 'linear-gradient(90deg, transparent, #FFD700)' }} />
                    <span style={{ color: '#FFD700', fontSize: 22, filter: 'drop-shadow(0 0 8px #FFD700)' }}>🏆</span>
                    <div style={{ width: 60, height: 1.5, background: 'linear-gradient(90deg, #FFD700, transparent)' }} />
                </div>

                <h2 style={{
                    fontSize: 'clamp(2.4rem, 7vw, 6rem)',
                    fontWeight: 900,
                    letterSpacing: '-0.03em',
                    lineHeight: 1,
                    textTransform: 'uppercase',
                    fontFamily: 'Outfit, Inter, sans-serif',
                    margin: 0,
                    background: 'linear-gradient(135deg, #fff8cc 0%, #FFD700 30%, #FFA500 60%, #FFD700 80%, #fff8cc 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                    filter: 'drop-shadow(0 0 40px rgba(255,200,0,0.5))',
                    textShadow: 'none',
                }}>
                    Rewards &amp; Prizes
                </h2>

                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10, marginTop: 12 }}>
                    <div style={{ width: 40, height: 1, background: 'rgba(255,200,0,0.4)' }} />
                    <p style={{ color: 'rgba(255,220,100,0.75)', fontSize: 14, fontWeight: 500, letterSpacing: '0.15em', textTransform: 'uppercase', margin: 0 }}>
                        Genesis Hackathon 2026
                    </p>
                    <div style={{ width: 40, height: 1, background: 'rgba(255,200,0,0.4)' }} />
                </div>
            </motion.div>

            {/* ── CAROUSEL ── */}
            <motion.div
                initial={{ opacity: 0, scale: 0.88 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.9, delay: 0.15 }}
                style={{
                    position: 'relative',
                    width: '100%', maxWidth: 1100,
                    height: 560,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    perspective: '1300px', perspectiveOrigin: '50% 50%',
                    zIndex: 10,
                }}
            >
                {prizes.map((prize, i) => {
                    let rel = i - active;
                    if (rel > Math.floor(prizes.length / 2)) rel -= prizes.length;
                    if (rel < -Math.floor(prizes.length / 2)) rel += prizes.length;
                    return (
                        <PrizeCard
                            key={prize.id}
                            prize={prize}
                            relIdx={rel}
                            onClick={() => { if (rel !== 0) setActive(i); }}
                        />
                    );
                })}
            </motion.div>

            {/* ── NAVIGATION ── */}
            <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.35 }}
                style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 22, marginTop: 44, zIndex: 10 }}
            >
                {/* Dots */}
                <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
                    {prizes.map((_, i) => (
                        <button
                            key={i}
                            id={`prize-dot-${i}`}
                            onClick={() => setActive(i)}
                            aria-label={`Prize ${i + 1}`}
                            style={{
                                width: i === active ? 36 : 8,
                                height: 8, borderRadius: 100, border: 'none', padding: 0,
                                background: i === active
                                    ? 'linear-gradient(90deg, #FFD700, #FFA500)'
                                    : 'rgba(255,200,0,0.25)',
                                cursor: 'pointer',
                                transition: 'all 0.45s cubic-bezier(0.34,1.56,0.64,1)',
                                boxShadow: i === active ? '0 0 14px rgba(255,200,0,0.8)' : 'none',
                            }}
                        />
                    ))}
                </div>

                {/* Prev / Counter / Next */}
                <div style={{ display: 'flex', alignItems: 'center', gap: 20 }}>
                    <NavBtn id="prize-prev" onClick={goPrev} label="←" />
                    <div style={{ textAlign: 'center', minWidth: 80 }}>
                        <span style={{
                            fontWeight: 900, fontFamily: 'Outfit,sans-serif',
                            background: 'linear-gradient(135deg, #FFD700, #FFA500)',
                            WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
                            fontSize: 26,
                        }}>{String(active + 1).padStart(2, '0')}</span>
                        <span style={{ color: 'rgba(255,200,0,0.35)', fontSize: 16, fontWeight: 300 }}> / </span>
                        <span style={{ color: 'rgba(255,200,0,0.45)', fontSize: 16, fontWeight: 600 }}>
                            {String(prizes.length).padStart(2, '0')}
                        </span>
                    </div>
                    <NavBtn id="prize-next" onClick={goNext} label="→" />
                </div>
            </motion.div>

            {/* Active label */}
            <motion.p
                key={active}
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35 }}
                style={{
                    marginTop: 18, color: 'rgba(255,210,80,0.45)',
                    fontSize: 11, letterSpacing: '0.22em', textTransform: 'uppercase',
                    zIndex: 10, textAlign: 'center',
                }}
            >
                {prizes[active].label} · {prizes[active].sub}
            </motion.p>
        </section>
    );
};

const NavBtn = ({ id, onClick, label }) => {
    const [hov, setHov] = useState(false);
    return (
        <button
            id={id}
            onClick={onClick}
            onMouseEnter={() => setHov(true)}
            onMouseLeave={() => setHov(false)}
            aria-label={label === '←' ? 'Previous prize' : 'Next prize'}
            style={{
                width: 52, height: 52, borderRadius: '50%',
                border: `2px solid ${hov ? '#FFD700' : 'rgba(255,200,0,0.35)'}`,
                background: hov ? 'rgba(255,200,0,0.18)' : 'rgba(20,13,0,0.75)',
                backdropFilter: 'blur(12px)',
                color: '#FFD700', fontSize: 20, cursor: 'pointer',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                transition: 'all 0.28s ease',
                boxShadow: hov ? '0 0 28px rgba(255,200,0,0.45)' : '0 0 10px rgba(255,200,0,0.1)',
                transform: hov ? 'scale(1.12)' : 'scale(1)',
            }}
        >
            {label}
        </button>
    );
};

export default PrizeSection;
