import { FC, ReactNode } from "react";
import styled, { css } from "styled-components";
import { colors } from "../../config/theme";

type Props = {
  children: ReactNode;
};

export const GradientMask: FC<Props> = (props) => {
  const { children } = props;
  return <Container>{children}</Container>;
};

export const Container = styled.i`
  font-style: normal;
  white-space: pre-line;
  color: ${colors.tradewind};
  line-height: initial;
  background: -webkit-linear-gradient(222.32deg, #e8da40 4.26%, #53a5a0 100%);
  -webkit-text-fill-color: transparent;
  -webkit-background-clip: text;

  ::selection {
    -webkit-text-fill-color: initial;
    -webkit-background-clip: initial;
  }
`;
