import React, { useState, useEffect, useCallback } from 'react';

interface ProjectGalleryProps {
    videoUrl?: string;
    gallery?: string[];
    title?: string;
}

export default function ProjectGallery({ videoUrl, gallery = [], title }: ProjectGalleryProps) {
    // 0 = Video (if exists), 1+ = Gallery Images
    const hasVideo = !!videoUrl;
    const [activeIndex, setActiveIndex] = useState(0);
    const [lightboxOpen, setLightboxOpen] = useState(false);

    // Helper to get total items
    const totalItems = (hasVideo ? 1 : 0) + gallery.length;

    // Helper to determine what is currently active
    const isVideoActive = hasVideo && activeIndex === 0;
    // If video exists, gallery images start at index 1. If not, they start at 0.
    const activeGalleryIndex = hasVideo ? activeIndex - 1 : activeIndex;
    const activeImage = !isVideoActive && activeGalleryIndex >= 0 ? gallery[activeGalleryIndex] : null;

    const handleThumbnailClick = (index: number) => {
        setActiveIndex(index);
    };

    const openLightbox = () => {
        if (!isVideoActive) {
            setLightboxOpen(true);
        }
    };

    const closeLightbox = () => {
        setLightboxOpen(false);
    };

    // --- NAVIGATION LOGIC ---
    // Only cycle through IMAGES in Lightbox (skip video)

    // Get the global index range for images
    const firstImageIndex = hasVideo ? 1 : 0;
    const lastImageIndex = totalItems - 1;

    const navPrev = useCallback(() => {
        setActiveIndex(prev => {
            if (prev <= firstImageIndex) return lastImageIndex;
            return prev - 1;
        });
    }, [firstImageIndex, lastImageIndex, hasVideo]); // Added hasVideo to deps just in case, though static based on props

    const navNext = useCallback(() => {
        setActiveIndex(prev => {
            if (prev >= lastImageIndex) return firstImageIndex;
            return prev + 1;
        });
    }, [firstImageIndex, lastImageIndex]);

    // Keyboard Support
    useEffect(() => {
        if (!lightboxOpen) return;

        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'ArrowLeft') navPrev();
            if (e.key === 'ArrowRight') navNext();
            if (e.key === 'Escape') closeLightbox();
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [lightboxOpen, navPrev, navNext]);


    // If no media, render nothing or a placeholder (optional)
    if (totalItems === 0) return null;

    return (
        <div className="space-y-4">
            {/* --- MAIN STAGE --- */}
            <div className="w-full aspect-video rounded-xl overflow-hidden shadow-2xl border border-forge-800 bg-black relative group">
                {isVideoActive ? (
                    <iframe
                        src={videoUrl?.replace("watch?v=", "embed/")}
                        title="Main Stage Video"
                        className="w-full h-full"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                    />
                ) : (
                    <div
                        className="w-full h-full cursor-zoom-in relative"
                        onClick={openLightbox}
                    >
                        {/* Image with subtle hover effect */}
                        <img
                            src={activeImage || ""}
                            alt={`Gallery Image ${activeGalleryIndex + 1}`}
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        {/* Overlay hint */}
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
                            <div className="bg-black/50 backdrop-blur-md text-white px-4 py-2 rounded-xl text-sm font-mono flex items-center gap-2">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" /></svg>
                                <span>Expand</span>
                            </div>
                        </div>
                    </div>
                )}
            </div>

            {/* --- FILMSTRIP (Thumbnails) --- */}
            {totalItems > 1 && (
                <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide px-1">
                    {hasVideo && (
                        <button
                            onClick={() => handleThumbnailClick(0)}
                            className={`flex-shrink-0 w-24 md:w-32 aspect-video rounded-lg overflow-hidden border-2 transition-all relative group ${activeIndex === 0 ? 'border-accent ring-2 ring-accent/20 ring-offset-2 ring-offset-forge-950 opacity-100' : 'border-forge-800 opacity-60 hover:opacity-100 hover:border-forge-600'}`}
                        >
                            <div className="w-full h-full bg-forge-900 flex items-center justify-center relative">
                                <div className="absolute inset-0 bg-black/50"></div>
                                <svg xmlns="http://www.w3.org/2000/svg" className={`h-8 w-8 text-white transition-transform ${activeIndex === 0 ? 'scale-110' : 'group-hover:scale-110'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                        </button>
                    )}

                    {gallery.map((img, index) => {
                        const realIndex = hasVideo ? index + 1 : index;
                        const isActive = activeIndex === realIndex;

                        return (
                            <button
                                key={`thumb-${index}`}
                                onClick={() => handleThumbnailClick(realIndex)}
                                className={`flex-shrink-0 w-24 md:w-32 aspect-video rounded-lg overflow-hidden border-2 transition-all ${isActive ? 'border-accent ring-2 ring-accent/20 ring-offset-2 ring-offset-forge-950 opacity-100' : 'border-forge-800 opacity-60 hover:opacity-100 hover:border-forge-600'}`}
                            >
                                <img src={img} className="w-full h-full object-cover" alt={`Thumbnail ${index}`} />
                            </button>
                        );
                    })}
                </div>
            )}

            {/* --- LIGHTBOX --- */}
            {lightboxOpen && activeImage && (
                <div className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-md flex items-center justify-center p-4 md:p-8 animate-fade-in" onClick={closeLightbox}>

                    {/* Close Button */}
                    <button
                        onClick={closeLightbox}
                        className="absolute top-6 right-6 text-white/50 hover:text-white transition-colors bg-white/10 hover:bg-white/20 rounded-xl p-2 z-10"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                    </button>

                    {/* Navigation Arrows (Only if multiple items) */}
                    {totalItems > (hasVideo ? 2 : 1) && (
                        <>
                            <button
                                onClick={(e) => { e.stopPropagation(); navPrev(); }}
                                className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 text-white/50 hover:text-white hover:bg-white/10 p-4 rounded-xl transition-all"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
                            </button>
                            <button
                                onClick={(e) => { e.stopPropagation(); navNext(); }}
                                className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 text-white/50 hover:text-white hover:bg-white/10 p-4 rounded-xl transition-all"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                            </button>
                        </>
                    )}

                    {/* Main Image */}
                    <img
                        src={activeImage}
                        alt="Fullscreen view"
                        className="max-w-full max-h-full object-contain shadow-2xl rounded-sm animate-scale-in"
                        onClick={(e) => e.stopPropagation()}
                    />

                    {/* Footer Info */}
                    <div className="absolute bottom-6 left-0 right-0 text-center pointer-events-none">
                        <div className="inline-block px-6 py-3 bg-black/50 text-white/90 rounded-xl text-sm font-mono backdrop-blur-md border border-white/10">
                            <span className="text-accent font-bold">{title || "Gallery"}</span>
                            <span className="mx-3 opacity-30">|</span>
                            <span>{activeGalleryIndex + 1} / {gallery.length}</span>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
