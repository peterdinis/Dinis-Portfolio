import type { BoxProps } from '@chakra-ui/react';
import type { HTMLAttributes, ReactNode } from 'react';

export interface IAnimationWrapperProps {
    children?: ReactNode;
    className?: string;
    props?: HTMLAttributes<HTMLDivElement>;
}

export interface ICircularProgressWithLabelProps {
    value: number;
}

export interface HeaderProps extends BoxProps {
    underlineColor: string;
}

export interface UnderlinedTextProps {
    color: string;
    h?: string;
    zIndex?: number;
}

export interface ILayoutProps {
    children?: ReactNode;
}

export interface MailtoProps {
    emailText: string;
    email: string;
    headers?: Record<string, string>;
    obfuscate?: boolean;
}

export interface ISecondaryHeaderProps {
    text: string;
}
