import * as React from "react"

export const LoadingIcon = (props: any) => {

    return (
        <svg
            className="prefix__spinner"
            width={30}
            height={30}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 100 100"
            preserveAspectRatio="xMidYMid"
            {...props}
        >
            <path className="prefix__spinner__rect" fill="none" d="M0 0h100v100H0z"/>
            <circle
                className="prefix__spinner__circle"
                cx={50}
                cy={50}
                r={40}
                stroke="#999"
                fill="none"
                strokeWidth={6}
                strokeLinecap="round"
            />
        </svg>
    )
}



