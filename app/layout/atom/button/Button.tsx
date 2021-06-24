import React from "react";
import styled from "styled-components";

const ButtonFrame = styled.button<{ isSecondary?: boolean }>`
    padding: 1rem 2rem;
    border-radius: 20rem;
    color: ${p => (p.isSecondary ? p.theme.gray900 : p.theme.gray50)};
    background-color: ${p => !p.isSecondary && p.theme.gray900};
    border: ${p => p.isSecondary && `0.1rem solid ${p.theme.gray900}`};
    transition: background-color 0.1s;
    will-change: background-color;
    font-weight: 600;
    line-height: 1;

    @media (hover: hover) {
        &:hover {
            color: ${p => (p.isSecondary ? p.theme.gray50 : p.theme.gray900)};
            background-color: ${p => (p.isSecondary ? p.theme.gray900 : p.theme.gray50)};
        }
    }
`;

interface ButtonProps {
    isSecondary?: boolean;
}

export const Button: React.FC<ButtonProps> = ({ isSecondary, children }) => {
    return <ButtonFrame isSecondary={isSecondary}>{children}</ButtonFrame>;
};
