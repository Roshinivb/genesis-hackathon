import React from 'react';
import { motion } from 'framer-motion';

const ContactSection = () => {
    const cards = [
        {
            id: 'instagram',
            icon: (
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
            ),
            label: 'MESSAGE US',
            detail: 'Reach us on Instagram',
            handle: '@rotaract_srmeaswari',
            handleLink: 'https://www.instagram.com/rotaract_srmeaswari/',
            metric: '24/7',
            metricSub: 'Support line',
            accentColor: '#FFD700',
            glowColor: 'rgba(255,215,0,0.4)',
            href: 'https://www.instagram.com/rotaract_srmeaswari/',
        },
        {
            id: 'email',
            icon: (
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                </svg>
            ),
            label: 'EMAIL',
            detail: 'Send us an email',
            handle: 'rotaracteec2526@gmail.com',
            handleLink: 'mailto:rotaracteec2526@gmail.com',
            metric: '1hr',
            metricSub: 'Response SLA',
            accentColor: '#FFA500',
            glowColor: 'rgba(255,165,0,0.4)',
            href: 'mailto:rotaracteec2526@gmail.com',
        },
        {
            id: 'venue',
            icon: (
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                </svg>
            ),
            label: 'LOCATION',
            detail: 'SRM Easwari Engineering College',
            handle: 'Chennai, Tamil Nadu',
            handleLink: 'https://maps.google.com/?q=SRM+Easwari+Engineering+College+Chennai',
            metric: 'On-site',
            metricSub: 'Venue',
            accentColor: '#D4AF37',
            glowColor: 'rgba(212,175,55,0.4)',
            href: 'https://maps.google.com/?q=SRM+Easwari+Engineering+College+Chennai',
        },
    ];

    return (
        <section
            id="contact"
            style={{
                position: 'relative',
                padding: '120px 24px',
                background: 'linear-gradient(180deg, #050300 0%, #0d0800 50%, #050300 100%)',
                overflow: 'hidden',
            }}
        >
            {/* Gold dot grid */}
            <div style={{
                position: 'absolute', inset: 0,
                backgroundImage: 'radial-gradient(rgba(255,200,0,0.08) 1.5px, transparent 1.5px)',
                backgroundSize: '30px 30px', pointerEvents: 'none',
            }} />

            {/* Ambient glow */}
            <div style={{
                position: 'absolute', top: '20%', left: '50%', transform: 'translateX(-50%)',
                width: 800, height: 400, borderRadius: '50%',
                background: 'radial-gradient(ellipse, rgba(255,200,0,0.07) 0%, transparent 70%)',
                pointerEvents: 'none',
            }} />

            <div style={{ maxWidth: 1100, margin: '0 auto', position: 'relative', zIndex: 5 }}>

                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: -30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                    style={{ textAlign: 'center', marginBottom: 72 }}
                >
                    <h2 style={{
                        fontSize: 'clamp(2.2rem, 6vw, 5rem)',
                        fontWeight: 900,
                        fontFamily: '"Racing Sans One", "Russo One", "Syncopate", sans-serif',
                        textTransform: 'uppercase',
                        letterSpacing: '0.04em',
                        color: '#ffffff',
                        margin: 0,
                        transform: 'skewX(-8deg)',
                        display: 'inline-block',
                        textShadow: [
                            '3px 3px 0 #2a1a00',
                            '6px 6px 0 #1a0e00',
                            '9px 9px 0 #100900',
                            '0 0 40px rgba(255,200,0,0.4)',
                        ].join(', '),
                        WebkitTextStroke: '1px rgba(255,220,80,0.2)',
                    }}>
                        Contact Organisers
                    </h2>
                    <p style={{
                        color: 'rgba(255,220,100,0.65)',
                        fontSize: '1.1rem',
                        marginTop: 16,
                        fontFamily: 'Outfit, Inter, sans-serif',
                        letterSpacing: '0.05em',
                    }}>
                        Got questions? We&apos;re here.
                    </p>
                    <div style={{ width: 80, height: 2, background: 'linear-gradient(90deg, transparent, #FFD700, transparent)', margin: '16px auto 0' }} />
                </motion.div>

                {/* 3 Cards */}
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                    gap: 24,
                }}>
                    {cards.map((card, i) => (
                        <motion.div
                            key={card.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: i * 0.15 }}
                        >
                            <div style={{
                                background: 'rgba(255,255,255,0.03)',
                                border: `1px solid rgba(255,200,0,0.15)`,
                                borderRadius: 16,
                                padding: '32px 28px',
                                position: 'relative',
                                overflow: 'hidden',
                                backdropFilter: 'blur(12px)',
                                transition: 'all 0.35s ease',
                                cursor: 'default',
                            }}
                                onMouseEnter={e => {
                                    e.currentTarget.style.border = `1px solid ${card.accentColor}50`;
                                    e.currentTarget.style.boxShadow = `0 0 40px ${card.glowColor}, 0 20px 40px rgba(0,0,0,0.4)`;
                                    e.currentTarget.style.transform = 'translateY(-4px)';
                                }}
                                onMouseLeave={e => {
                                    e.currentTarget.style.border = `1px solid rgba(255,200,0,0.15)`;
                                    e.currentTarget.style.boxShadow = 'none';
                                    e.currentTarget.style.transform = 'translateY(0)';
                                }}
                            >
                                {/* Corner glow */}
                                <div style={{
                                    position: 'absolute', top: 0, right: 0,
                                    width: 120, height: 120,
                                    background: `radial-gradient(circle at top right, ${card.glowColor} 0%, transparent 65%)`,
                                    pointerEvents: 'none',
                                }} />

                                {/* Icon */}
                                <div style={{
                                    color: card.accentColor,
                                    marginBottom: 16,
                                    filter: `drop-shadow(0 0 8px ${card.glowColor})`,
                                }}>
                                    {card.icon}
                                </div>

                                {/* Label */}
                                <p style={{
                                    color: card.accentColor,
                                    fontSize: 11,
                                    fontWeight: 800,
                                    letterSpacing: '0.25em',
                                    textTransform: 'uppercase',
                                    marginBottom: 6,
                                    fontFamily: 'Outfit, Inter, sans-serif',
                                }}>
                                    {card.label}
                                </p>

                                {/* Detail text */}
                                <p style={{
                                    color: 'rgba(255,255,255,0.5)',
                                    fontSize: 13,
                                    marginBottom: 10,
                                    fontFamily: 'Outfit, Inter, sans-serif',
                                    lineHeight: 1.5,
                                }}>
                                    {card.detail}
                                </p>

                                {/* Handle / address */}
                                <a
                                    href={card.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    style={{
                                        color: '#ffffff',
                                        fontSize: 14,
                                        fontWeight: 600,
                                        fontFamily: 'Outfit, Inter, sans-serif',
                                        textDecoration: 'none',
                                        display: 'block',
                                        marginBottom: 24,
                                        lineHeight: 1.4,
                                        transition: 'color 0.2s',
                                    }}
                                    onMouseEnter={e => e.currentTarget.style.color = card.accentColor}
                                    onMouseLeave={e => e.currentTarget.style.color = '#ffffff'}
                                >
                                    {card.handle}
                                </a>

                                {/* Divider */}
                                <div style={{
                                    height: 1,
                                    background: 'rgba(255,200,0,0.1)',
                                    marginBottom: 20,
                                }} />

                                {/* Metric + Open button */}
                                <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between' }}>
                                    <div>
                                        <p style={{
                                            fontSize: '2rem',
                                            fontWeight: 900,
                                            color: '#ffffff',
                                            fontFamily: 'Outfit, Inter, sans-serif',
                                            lineHeight: 1,
                                            margin: 0,
                                            textShadow: `0 0 20px ${card.glowColor}`,
                                        }}>
                                            {card.metric}
                                        </p>
                                        <p style={{
                                            color: 'rgba(255,255,255,0.4)',
                                            fontSize: 11,
                                            marginTop: 4,
                                            fontFamily: 'Outfit, Inter, sans-serif',
                                            letterSpacing: '0.1em',
                                        }}>
                                            {card.metricSub}
                                        </p>
                                    </div>

                                    <a
                                        href={card.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        style={{
                                            display: 'inline-flex',
                                            alignItems: 'center',
                                            padding: '8px 20px',
                                            borderRadius: 100,
                                            background: 'rgba(255,200,0,0.12)',
                                            border: `1px solid ${card.accentColor}40`,
                                            color: card.accentColor,
                                            fontSize: 12,
                                            fontWeight: 700,
                                            fontFamily: 'Outfit, Inter, sans-serif',
                                            letterSpacing: '0.1em',
                                            textDecoration: 'none',
                                            textTransform: 'uppercase',
                                            transition: 'all 0.25s ease',
                                        }}
                                        onMouseEnter={e => {
                                            e.currentTarget.style.background = card.accentColor;
                                            e.currentTarget.style.color = '#0a0600';
                                        }}
                                        onMouseLeave={e => {
                                            e.currentTarget.style.background = 'rgba(255,200,0,0.12)';
                                            e.currentTarget.style.color = card.accentColor;
                                        }}
                                    >
                                        Open
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ContactSection;
