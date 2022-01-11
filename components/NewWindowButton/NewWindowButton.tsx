import React from 'react';

export const NewWindowButton = ({link}: { link: string | undefined }) => {
    return (
        <a href={link ? link : ""} target="_blank">

            <svg
                fill="none"
                height={24}
                stroke="white"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                width={24}

            >
                <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3"/>
            </svg>
        </a>

    )
}
