import { FC, ReactNode } from "react";
import styled, { css } from "styled-components";
import { colors } from "../../config/theme";

type Props = {
  className?: string;
  variant?: "primary" | "secondary";
  children: ReactNode;
};

export const Button: FC<Props> = (props) => {
  const { variant = "primary", children } = props;
  const { className } = props;

  return (
    <Container className={className} variant={variant}>
      {children}
    </Container>
  );
};

type ContainerProps = {
  variant: "primary" | "secondary";
};

const Container = styled.button<ContainerProps>`
  background: ${colors.tradewind};
  color: ${colors.white};
  border: transparent;
  border-radius: 20px;
  padding: 10px 20px;
  margin: 20px 0;
  font-weight: 600;

  @media only screen and (min-width: 769px) {
    font-size: 1.1rem;
  }

  ${({ variant }) => {
    if (variant === "secondary") {
      return css`
        background: transparent;
        border: 1px solid ${colors.tradewind};
      `;
    }
  }};
`;
