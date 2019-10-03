import * as React from 'react';
import {Link} from 'react-router-dom';
import {target} from '../../types/enums';

interface LinkButtonProps {
    link: string;
    text: React.ReactNode;
    targetPage?: target;
}

export const LinkButton: React.FC<LinkButtonProps> = ({link, text, targetPage}) => {
    return (
        <div>
            <Link to={link} target={targetPage}>
                {text}
            </Link>
        </div>
    );
};
