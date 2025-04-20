import React from 'react';

interface TitleProps {
    text: string;
    size?: 'small' | 'medium' | 'large' | 'xlarge';
    titleForID?: string;
    otherClasses?: string[];
}

const TitleSizes = {
    small: 'text-sm',
    medium: 'text-md',
    large: 'text-lg',
    xlarge: 'text-xl',
};

const Title: React.FC<TitleProps> = ({
    text,
    size = 'medium', 
    titleForID = 'unknown',
    otherClasses = [],
    ...props 
}) => {
    return (
        <label
            htmlFor={titleForID}
            className={[TitleSizes[size], 'font-bold', ...otherClasses].join(' ')}
            {...props}
        >
            {text}
        </label>
    );
};

export default Title;