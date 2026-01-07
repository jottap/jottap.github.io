import React from "react";

interface CategoryIconProps {
    type: string;
    className?: string;
}

export const CategoryIcon: React.FC<CategoryIconProps> = ({
    type,
    className = "w-4 h-4",
}) => {
    // Mapping logic based on taxonomy (enterprise, tooling, labs)
    // Also supports legacy types for robustness if needed

    switch (type) {
        case "enterprise":
        case "commercial":
        case "industry":
        case "production":
            // Symbol: Building / Briefcase -> Choosing Building for 'Enterprise' feel
            return (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className={className}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                >
                    <rect x="4" y="2" width="16" height="20" rx="2" ry="2"></rect>
                    <line x1="9" y1="22" x2="9" y2="22.01"></line>
                    <line x1="15" y1="22" x2="15" y2="22.01"></line>
                    <line x1="12" y1="22" x2="12" y2="22.01"></line>
                    <line x1="12" y1="2" x2="12" y2="22"></line>
                    <line x1="4" y1="10" x2="20" y2="10"></line>
                    <line x1="4" y1="18" x2="20" y2="18"></line>
                </svg>
            );

        case "tooling":
        case "tools":
            // Symbol: Wrench / Hammer -> Choosing Hammer/Wrench combo or Box. Wrench/Hammer is more "Tooling".
            // Let's go with a Wrench for clarity.
            return (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className={className}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                >
                    <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path>
                </svg>
            );

        case "labs":
        case "demos":
        case "rnd":
        case "jam":
            // Symbol: Test Tube / Flask -> Labs
            return (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className={className}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                >
                    <path d="M10 2v7.31"></path>
                    <path d="M14 2v7.31"></path>
                    <path d="M8.5 2h7"></path>
                    <path d="M14 9.3a6.5 6.5 0 1 1-4 0"></path>
                </svg>
            );

        default:
            // Fallback: Box
            return (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className={className}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                >
                    <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
                    <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
                    <line x1="12" y1="22.08" x2="12" y2="12"></line>
                </svg>
            );
    }
};
