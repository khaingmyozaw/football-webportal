import React from "react";

const Title = ({ content, className, children }: 
            { 
                content: string;
                className?: string;
                children?: React.ReactNode
            }) => {
    return (
        <h1 className={`mb-6 text-3xl md:text-4xl lg:text-5xl font-bold text-center ${className}`}>
            {content} {children}
        </h1>
    )
}

export default Title;