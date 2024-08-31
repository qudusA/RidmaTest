import styled, { css } from "styled-components";

type ButtonSize = "small" | "medium" | "large";
type ButtonVariation = "primary" | "secondary";

type ButtonProps = {
  children: string;
  size: ButtonSize;
  variation: ButtonVariation;
};

const sizes = {
  small: css`
    padding: 6px 12px;
    font-size: 0.8rem;
  `,
  medium: css`
    padding: 10px 20px;
    font-size: 1rem;
  `,
  large: css`
    width: 100%;
    padding: 14px 0;
    font-size: 1.2rem;
    border-radius: 10px;
  `,
};

const variations = {
  primary: css`
    background-color: var(--color-blue-500);
    color: white;
    font-weight: 600;
  `,
  secondary: css`
    background-color: var(--color-purple-800);
    color: var(--color-gray-0);
    font-weight: 700;
    font-size: 1.7rem;
  `,
};

const ButtonComponent = styled.button<ButtonProps>`
  ${(props) => sizes[props.size]}
  ${(props) => variations[props.variation]}
  border: none;
  cursor: pointer;
`;

export default function Button({ children, size, variation }: ButtonProps) {
  return (
    <ButtonComponent size={size} variation={variation}>
      {children}
    </ButtonComponent>
  );
}
