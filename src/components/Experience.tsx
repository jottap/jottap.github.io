import React from 'react';
import { ui } from '../i18n/ui';

export interface ExperienceData {
    slug: string;
    data: {
        company: string;
        role: string;
        period: string;
        tech: string[];
        logo?: string; // Optional logo path
    };
    body: string;
}

interface ExperienceProps {
    experiences: any[];
    lang?: 'en' | 'pt';
}

const SpotlightCard: React.FC<{ children: React.ReactNode; className?: string; href?: string }> = ({ children, className = "", href }) => {
    const divRef = React.useRef<HTMLDivElement>(null);
    const [position, setPosition] = React.useState({ x: 0, y: 0 });
    const [opacity, setOpacity] = React.useState(0);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!divRef.current) return;

        const div = divRef.current;
        const rect = div.getBoundingClientRect();

        setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
    };

    const handleMouseEnter = () => {
        setOpacity(1);
    };

    const handleMouseLeave = () => {
        setOpacity(0);
    };

    const content = (
        <div
            ref={divRef}
            onMouseMove={handleMouseMove}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className={`relative overflow-hidden ${className}`}
        >
            <div
                className="pointer-events-none absolute -inset-px opacity-0 transition duration-300"
                style={{
                    opacity,
                    background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(234,88,12,0.1), transparent 40%)`,
                }}
            />
            <div className="relative z-10 flex items-center h-full">{children}</div>
        </div>
    );

    if (href) {
        return (
            <a href={href} className="block h-full">
                {content}
            </a>
        );
    }

    return content;
};

const CompanyLogo: React.FC<{ logo?: string; company: string }> = ({ logo, company }) => {
    const [error, setError] = React.useState(false);

    if (!logo || error) {
        return (
            <div className="w-full h-full flex items-center justify-center text-forge-400 group-hover:text-accent transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
                    <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
                </svg>
            </div>
        );
    }

    return (
        <img
            src={logo}
            alt={company}
            className="w-10 h-10 object-contain"
            onError={() => setError(true)}
        />
    );
};

const Experience: React.FC<ExperienceProps> = ({ experiences, lang = 'en' }) => {
    const t = ui[lang];
    return (
        <section id="experience" className="py-20 bg-surface text-main print:text-black print:py-0 relative">
            {/* Background Connector Line - Central Spine for larger screens, Left for mobile */}
            <div className="absolute left-8 md:left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-px bg-forge-800/30 block"></div>

            <div className="max-w-6xl mx-auto px-6 md:px-4 relative z-10">
                <h2 className="text-3xl md:text-4xl font-display font-bold text-main dark:text-white mb-16 text-center print:text-black print:mb-4">
                    <span className="border-b-4 border-accent pb-2 print:border-black">{t['section.experience.title']}</span>
                </h2>

                <div className="flex flex-col gap-6 print:block print:gap-4 px-6 md:px-0">
                    {experiences.map((exp, index) => {
                        const basePath = lang === 'pt' ? '/pt/experience' : '/experience';
                        const cleanSlug = exp.slug.split('.')[0];

                        return (
                            <SpotlightCard
                                key={index}
                                href={`${basePath}/${cleanSlug}`}
                                className="bg-[#D1D5DB] dark:bg-[#262626] rounded-xl border-2 border-transparent hover:border-orange-500 transition-all duration-300 shadow-sm hover:shadow-xl hover:shadow-accent/5 dark:shadow-none hover:-translate-y-1"
                            >
                                <div className="p-6 w-full flex flex-col md:flex-row items-start md:items-center">
                                    {/* Logo (Left) */}
                                    <div className="flex-shrink-0 w-16 h-16 bg-stone-100 dark:bg-forge-900 rounded-lg flex items-center justify-center mb-4 md:mb-0 md:mr-6 border border-stone-200 dark:border-forge-700 group-hover:border-accent transition-colors print:border-black print:bg-gray-100 overflow-hidden relative z-10">
                                        <CompanyLogo logo={exp.data.logo} company={exp.data.company} />
                                    </div>

                                    {/* Info (Middle) */}
                                    <div className="flex-grow min-w-0 flex flex-col justify-center w-full">
                                        {/* Mobile Date */}
                                        <span className="md:hidden text-xs text-stone-500 dark:text-stone-400 mb-1 font-mono uppercase tracking-wider print:hidden">
                                            {exp.data.period}
                                        </span>

                                        <h3 className="text-xl font-bold text-main dark:text-white group-hover:text-accent transition-colors truncate pr-2 print:text-black mb-1">
                                            {exp.data.role}
                                        </h3>
                                        <p className="text-accent text-base font-medium print:text-black">{exp.data.company}</p>

                                        <div className="flex flex-wrap gap-2 mt-2">
                                            {exp.data.tech.slice(0, 5).map((t: string) => (
                                                <span key={t} className="text-xs text-stone-200 dark:text-forge-500 bg-stone-800 dark:bg-primary/80 px-2 py-0.5 rounded border border-stone-700 dark:border-forge-800/50 print:text-black print:border-black print:bg-white">
                                                    {t}
                                                </span>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Date Badge (Right - Desktop) */}
                                    <div className="ml-auto pl-4 flex-shrink-0 hidden md:flex flex-col items-end">
                                        <span className="text-sm font-mono bg-stone-100 dark:bg-primary text-muted dark:text-forge-400 px-3 py-1 rounded border border-stone-200 dark:border-forge-800 print:text-black print:border-black print:bg-white whitespace-nowrap">
                                            {exp.data.period}
                                        </span>
                                    </div>

                                    <div className="hidden md:block ml-6 opacity-0 group-hover:opacity-100 transition-opacity text-accent print:hidden">
                                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
                                    </div>
                                </div>
                            </SpotlightCard>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Experience;
