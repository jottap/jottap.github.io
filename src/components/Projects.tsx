import React, { useState } from 'react';
import { ui } from '../i18n/ui';
import { CategoryIcon } from './CategoryIcon';

type ProjectType = 'industry' | 'tools' | 'demos' | 'production' | 'tooling' | 'rnd' | 'enterprise' | 'labs';

export interface ProjectData {
    slug: string;
    data: {
        title: string;
        category: string;
        type: ProjectType;
        image?: string;
        cover_image?: string;
        desc: string;
        tech: string[];
    };
}

interface ProjectsProps {
    projects: ProjectData[];
    lang?: string;
}

const Projects: React.FC<ProjectsProps> = ({ projects, lang = 'en' }) => {
    const t = ui[lang as 'en' | 'pt'];
    const [activeTab, setActiveTab] = useState<'industry' | 'tools' | 'demos'>('industry');

    // Mapping for backward compatibility
    const filterMap = {
        industry: ['industry', 'production', 'enterprise'],
        tools: ['tools', 'tooling'],
        demos: ['demos', 'rnd', 'labs']
    };

    const filteredProjects = projects.filter(p => filterMap[activeTab].includes(p.data.type));

    const getProjectLink = (slug: string) => {
        // If legacy slug already includes lang (old structure), use it directly?
        // But we want to enforce structure.
        // Unified slug is just "poikilingo".
        // Legacy slug is "en/project".
        // If unified, we construct based on current Lang.

        const cleanSlug = slug.split('/').pop(); // "en/foo" -> "foo", "foo" -> "foo"
        const prefix = lang === 'pt' ? '/pt/projects' : '/projects';
        return `${prefix}/${cleanSlug}`;
    };

    return (
        <section id="projects" className="scroll-mt-24 py-20 bg-surface px-6 md:px-4 print:py-4">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-8 text-center print:text-black print:mb-4">
                    <span className="border-b-4 border-accent pb-2 print:border-black">{t['section.projects.title']}</span>
                </h2>

                {/* Filters */}
                <div className="relative group md:static mb-12 print:hidden -mx-6 md:mx-0">
                    <div className="flex flex-nowrap gap-3 px-4 py-2 pr-12 overflow-x-auto snap-x snap-mandatory touch-pan-x scrollbar-hide [mask-image:linear-gradient(to_right,black_85%,transparent)] md:[mask-image:none] md:flex-wrap md:justify-center md:overflow-visible">
                        <button
                            onClick={() => setActiveTab('industry')}
                            className={`whitespace-nowrap flex-shrink-0 snap-start h-10 px-6 rounded-xl font-medium text-sm transition-all duration-300 border ${activeTab === 'industry'
                                ? 'bg-accent !text-white border-accent font-bold shadow-lg'
                                : 'bg-transparent text-forge-300 border-white/10 hover:text-white hover:border-white/20'
                                }`}
                        >
                            {t['section.projects.filter.industry']}
                        </button>
                        <button
                            onClick={() => setActiveTab('tools')}
                            className={`whitespace-nowrap flex-shrink-0 snap-start h-10 px-6 rounded-xl font-medium text-sm transition-all duration-300 border ${activeTab === 'tools'
                                ? 'bg-accent !text-white border-accent font-bold shadow-lg'
                                : 'bg-transparent text-forge-300 border-white/10 hover:text-white hover:border-white/20'
                                }`}
                        >
                            {t['section.projects.filter.tools']}
                        </button>
                        <button
                            onClick={() => setActiveTab('demos')}
                            className={`whitespace-nowrap flex-shrink-0 snap-start h-10 px-6 rounded-xl font-medium text-sm transition-all duration-300 border ${activeTab === 'demos'
                                ? 'bg-accent !text-white border-accent font-bold shadow-lg'
                                : 'bg-transparent text-forge-300 border-white/10 hover:text-white hover:border-white/20'
                                }`}
                        >
                            {t['section.projects.filter.demos']}
                        </button>
                    </div>
                </div>

                {/* Grid */}
                <div className={`grid gap-8 ${activeTab === 'industry' ? 'grid-cols-1 md:grid-cols-2' : 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3'} print:grid-cols-2 print:gap-4 md:px-0`}>
                    {filteredProjects.map((project, index) => (
                        <a
                            href={getProjectLink(project.slug)}
                            key={project.slug}
                            className={`group relative rounded-xl overflow-hidden bg-primary border border-forge-800 hover:border-accent transition-all duration-500 hover:transform hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(234,88,12,0.2)] animate-fadeIn block print:border-black print:shadow-none print:transform-none`}
                            style={{ animationDelay: `${index * 100}ms` }}
                        >
                            <div className={`${activeTab === 'industry' ? 'aspect-video' : 'aspect-[4/3]'} overflow-hidden relative`}>
                                <img
                                    src={project.data.image}
                                    alt={project.data.title}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 print:grayscale"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-primary via-transparent to-transparent opacity-80 print:hidden"></div>
                            </div>

                            <div className="p-6 relative print:p-4">
                                <div className="absolute top-0 right-0 -mt-10 mr-4 bg-accent text-black text-xs font-bold px-3 py-1.5 rounded-xl shadow-lg print:border print:border-black print:bg-white print:text-black flex items-center gap-2">
                                    <CategoryIcon type={project.data.type} className="w-3.5 h-3.5" />
                                    {project.data.category}
                                </div>

                                <h3 className={`${activeTab === 'industry' ? 'text-3xl' : 'text-2xl'} font-display font-bold text-white mb-2 group-hover:text-accent transition-colors print:text-black`}>
                                    {project.data.title}
                                </h3>

                                <p className="text-forge-300 text-sm mb-4 line-clamp-3 print:text-black">
                                    {project.data.desc}
                                </p>

                                <div className="flex flex-wrap gap-2 mt-4">
                                    {project.data.tech.map((t) => (
                                        <span key={t} className="text-xs font-mono text-accent-light bg-surface/50 border border-forge-700 px-2 py-1 rounded print:text-black print:border-black print:bg-white">
                                            #{t}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </a>
                    ))}
                </div>

                <div className="mt-16 print:hidden flex justify-center">
                    <a
                        href={lang === 'pt' ? '/pt/archive' : '/archive'}
                        className="group inline-flex items-center gap-3 px-8 py-3 bg-transparent border border-forge-700 rounded-xl hover:border-accent hover:text-white transition-all duration-300"
                    >
                        <span className="font-mono text-sm font-bold text-forge-300 group-hover:text-white uppercase tracking-widest">
                            {t['section.projects.view_all']}
                        </span>
                        <svg
                            className="w-5 h-5 text-forge-400 group-hover:text-accent transition-colors transform group-hover:translate-x-1"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </a>
                </div>
            </div>
            <style>{`
                @keyframes fadeIn {
                    from { opacity: 0; transform: translateY(10px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                .animate-fadeIn {
                    animation: fadeIn 0.5s ease-out forwards;
                }
            `}</style>
        </section>
    );
};

export default Projects;
