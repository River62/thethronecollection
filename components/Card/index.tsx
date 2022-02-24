import { FC } from "react";
import styled, { css } from "styled-components";

import { colors } from "../../config/theme";

type CardProps = {
  className?: string;
  url?: string;
  imageUrl: string;
  withShadow?: boolean;
};

export const Card: FC<CardProps> = (props) => {
  const { url, imageUrl, className } = props;

  return (
    <Container as={!url ? "div" : "a"} href="url" className={className}>
      <Image
        src={imageUrl}
        alt="Yellow modern toilet NFT"
        width="769"
        height="769"
      />
    </Container>
  );
};

type ContainerProps = {
  as: string;
  withShadow?: boolean;
};

const Container = styled.a<ContainerProps>`
  aspect-ratio: 1/1;
  background: ${colors.grey};
  border-radius: 122px;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;

  ${({ withShadow }) =>
    withShadow &&
    css`
      box-shadow: 0px 5px 5px rgba(0, 0, 0, 0.25);
    `}

  ${(props) =>
    props.as === "a" &&
    css`
      transition: box-shadow 0.3s ease-in-out;
      cursor: pointer;

      &:hover {
        box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.25);
      }
    `}
`;

const Image = styled.img`
  width: 100%;
  height: auto;
  transition: transform 3s ease-in-out;
  object-fit: cover;

  ${Container}:hover > & {
    transform: scale(1.05);
  }
`;
