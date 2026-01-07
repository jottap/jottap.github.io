import React, { useMemo, useState } from 'react';
import {
    useReactTable,
    getCoreRowModel,
    getSortedRowModel,
    getFilteredRowModel,
    flexRender,
    createColumnHelper,
    type SortingState,
    type ColumnDef,
} from '@tanstack/react-table';
import { ui } from '../i18n/ui';
import { CategoryIcon } from './CategoryIcon';

export interface ArchiveProject {
    year: string;
    title: string;
    category: string;
    type: string; // 'industry', 'tools', etc.
    tech: string[];
    link?: string;
    slug: string;
}

const columnHelper = createColumnHelper<ArchiveProject>();

const ArchiveTable: React.FC<{ projects: ArchiveProject[]; lang?: 'en' | 'pt' }> = ({ projects, lang = 'en' }) => {
    const t = ui[lang];
    const [sorting, setSorting] = useState<SortingState>([{ id: 'year', desc: true }]);
    const [globalFilter, setGlobalFilter] = useState('');
    const [activeFilter, setActiveFilter] = useState<'All' | 'Enterprise' | 'Tooling' | 'Labs'>('All');

    // Filter Logic
    const filteredData = useMemo(() => {
        let data = projects;

        // 1. Tag Filter
        if (activeFilter !== 'All') {
            const map: Record<string, string[]> = {
                'Enterprise': ['enterprise', 'production', 'industry'],
                'Tooling': ['tooling', 'tools'],
                'Labs': ['labs', 'rnd', 'demos']
            };
            const allowedTypes = map[activeFilter] || [];
            data = data.filter(p => allowedTypes.includes(p.type));
        }

        return data;
    }, [projects, activeFilter]);


    const columns = useMemo<ColumnDef<ArchiveProject, any>[]>(() => [
        columnHelper.accessor('year', {
            header: t['archive.col.year'],
            cell: info => <span className="font-mono text-sm text-forge-500">{info.getValue()}</span>,
        }),
        columnHelper.accessor('title', {
            header: t['archive.col.project'],
            cell: info => (
                <a href={`/projects/${info.row.original.slug}?from=archive`} className="font-bold text-white hover:text-accent transition-colors flex items-center gap-2 group">
                    {info.getValue()}
                    <svg className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity -translate-x-1 group-hover:translate-x-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                </a>
            ),
        }),
        columnHelper.accessor('category', {
            header: t['archive.col.category'],
            cell: info => (
                <span className="flex items-center gap-1.5 text-[10px] uppercase tracking-wider font-bold px-2 py-1 rounded-xl bg-forge-900/50 text-forge-400 border border-forge-800/50">
                    <CategoryIcon type={info.row.original.type} className="w-3 h-3" />
                    {info.getValue()}
                </span>
            ),
        }),
        columnHelper.accessor('tech', {
            header: t['archive.col.built_with'],
            cell: info => (
                <div className="flex flex-wrap gap-2 items-center">
                    {info.getValue().slice(0, 3).map((t: string) => (
                        <div key={t} className="flex items-center gap-1.5 text-xs text-forge-400">
                            <span className="w-1 h-1 rounded-full bg-accent/50"></span>
                            {t}
                        </div>
                    ))}
                    {info.getValue().length > 3 && (
                        <span className="text-xs text-forge-600">+{info.getValue().length - 3}</span>
                    )}
                </div>
            ),
        }),
        columnHelper.accessor('link', {
            header: '',
            id: 'actions',
            cell: info => info.getValue() ? (
                <a href={info.getValue()} target="_blank" rel="noopener noreferrer" className="text-forge-500 hover:text-white transition-colors">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path></svg>
                </a>
            ) : null,
        }),
    ], [lang, t]);

    const table = useReactTable({
        data: filteredData,
        columns,
        state: {
            sorting,
            globalFilter,
        },
        onSortingChange: setSorting,
        onGlobalFilterChange: setGlobalFilter,
        getCoreRowModel: getCoreRowModel(),
        getSortedRowModel: getSortedRowModel(),
        getFilteredRowModel: getFilteredRowModel(),
    });

    return (
        <div className="w-full space-y-8 animate-fade-in">
            {/* Toolbar */}
            <div className="flex flex-col md:flex-row justify-between items-end md:items-center gap-4">
                {/* Tabs */}
                <div className="relative group md:static w-full md:w-auto">
                    <div className="flex flex-nowrap gap-3 px-4 py-2 pr-12 overflow-x-auto snap-x snap-mandatory touch-pan-x scrollbar-hide [mask-image:linear-gradient(to_right,black_85%,transparent)] md:[mask-image:none] md:flex-wrap md:gap-2 md:p-1 md:bg-forge-900/30 md:rounded-lg md:border md:border-forge-800/50 -mx-4 md:mx-0">
                        {[
                            { id: 'All', label: 'All' },
                            { id: 'Enterprise', label: 'Commercial & Enterprise' },
                            { id: 'Tooling', label: 'Tools & Tech' },
                            { id: 'Labs', label: 'Labs & Demos' }
                        ].map((tab) => (
                            <button
                                key={tab.id}
                                onClick={() => setActiveFilter(tab.id as any)}
                                className={`whitespace-nowrap flex-shrink-0 snap-start px-3 py-1.5 rounded-xl text-xs font-mono transition-all ${activeFilter === tab.id
                                    ? 'bg-white/10 text-white shadow-sm'
                                    : 'text-forge-500 hover:text-forge-300'
                                    }`}
                            >
                                {/* Map ID into localized specific label keys */}
                                {tab.id === 'All' ? t['archive.filter.all'] :
                                    tab.id === 'Enterprise' ? t['archive.filter.commercial'] :
                                        tab.id === 'Tooling' ? t['archive.filter.tools'] :
                                            t['archive.filter.labs']}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Search */}
                <div className="relative group w-full md:w-64">
                    <input
                        value={globalFilter ?? ''}
                        onChange={e => setGlobalFilter(e.target.value)}
                        placeholder={t['archive.search_placeholder']}
                        className="w-full bg-transparent border-b border-forge-800 text-white px-0 py-2 focus:outline-none focus:border-accent transition-colors placeholder:text-forge-600 font-mono text-base md:text-sm"
                    />
                    <svg className="absolute right-0 top-2.5 w-4 h-4 text-forge-600 group-focus-within:text-accent transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                </div>
            </div>

            {/* Mobile Card View (Hidden on Desktop) */}
            <div className="md:hidden space-y-4">
                {table.getRowModel().rows.map(row => (
                    <div key={row.id} className="w-full max-w-md mx-auto p-4 rounded-lg border border-white/5 bg-white/5 flex flex-col gap-3">
                        {/* Line 1: Year & Category */}
                        <div className="flex justify-between items-center text-sm">
                            <span className="font-mono text-forge-500">{row.getValue('year')}</span>
                            <span className="flex items-center gap-1.5 text-[10px] uppercase tracking-wider font-bold px-2 py-1 rounded-xl bg-forge-900/50 text-forge-400 border border-forge-800/50">
                                <CategoryIcon type={row.original.type} className="w-3 h-3" />
                                {row.getValue('category')}
                            </span>
                        </div>

                        {/* Line 2: Title */}
                        <a href={`/projects/${row.original.slug}?from=archive`} className="flex items-center gap-2 group">
                            <h3 className="text-xl font-bold text-white group-hover:text-accent transition-colors">
                                {row.getValue('title')}
                            </h3>
                            <svg className="w-5 h-5 text-forge-400 group-hover:text-accent transition-colors opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </a>

                        {/* Line 3: Tech & Action */}
                        <div className="flex justify-between items-end mt-1">
                            <div className="flex flex-wrap gap-2 items-center text-xs text-forge-400">
                                <span className="text-muted mr-1">{t['archive.col.built_with']}:</span>
                                {(row.getValue('tech') as string[]).slice(0, 3).map((tech: string) => (
                                    <span key={tech} className="flex items-center gap-1">
                                        <span className="w-1 h-1 rounded-full bg-accent/50"></span>
                                        {tech}
                                    </span>
                                ))}
                                {(row.getValue('tech') as string[]).length > 3 && (
                                    <span>+{(row.getValue('tech') as string[]).length - 3}</span>
                                )}
                            </div>

                            {row.original.link && (
                                <a href={row.original.link} target="_blank" rel="noopener noreferrer" className="p-2 bg-forge-800 rounded-xl text-white hover:bg-accent transition-colors">
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path></svg>
                                </a>
                            )}
                        </div>
                    </div>
                ))}
            </div>

            {/* Desktop Table View */}
            <div className="hidden md:block overflow-hidden">
                <table className="w-full text-left border-collapse">
                    <thead>
                        {table.getHeaderGroups().map(headerGroup => (
                            <tr key={headerGroup.id} className="border-b border-white/5">
                                {headerGroup.headers.map(header => (
                                    <th key={header.id} className="py-4 pl-4 pr-8 text-xs font-mono text-forge-500 uppercase tracking-widest font-normal cursor-pointer select-none group" onClick={header.column.getToggleSortingHandler()}>
                                        <div className="flex items-center gap-2 group-hover:text-forge-300 transition-colors">
                                            {flexRender(header.column.columnDef.header, header.getContext())}
                                        </div>
                                    </th>
                                ))}
                            </tr>
                        ))}
                    </thead>
                    <tbody>
                        {table.getRowModel().rows.map(row => (
                            <tr key={row.id} className="group hover:bg-white/[0.02] transition-colors border-b border-white/[0.02] last:border-0 relative">
                                {row.getVisibleCells().map(cell => (
                                    <td key={cell.id} className="py-4 px-4 align-middle">
                                        {flexRender(cell.column.columnDef.cell, cell.getContext())}
                                    </td>
                                ))}
                            </tr>
                        ))}
                    </tbody>
                </table>

                {table.getRowModel().rows.length === 0 && (
                    <div className="py-12 text-center text-forge-600 font-mono text-sm">
                        No projects found.
                    </div>
                )}
            </div>

            <div className="text-right text-xs text-forge-600 font-mono">
                {t['archive.count'].replace('{count}', table.getRowModel().rows.length.toString())}
            </div>
        </div>
    );
};

export default ArchiveTable;
