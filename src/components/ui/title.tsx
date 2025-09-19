const Title = ({ content, className }: 
            { 
                content: string;
                className?: string;
            }) => {
    return (
        <h1 className={`mb-6 text-3xl md:text-4xl lg:text-5xl font-bold text-center ${className}`}>
            {content}
        </h1>
    )
}

export default Title;