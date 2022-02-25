import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styled, { css } from "styled-components";
import { Button } from "../components/Button";
import { Card } from "../components/Card";
import { GradientMask } from "../components/GradientText";
import { colors, fonts } from "../config/theme";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>The Throne Collection</title>
        <meta
          name="description"
          content="The worlds first NFT collection of sol toilets!"
        />
        <meta property="og:title" content="The Throne Collection" />
        <meta property="og:image" content="/images/nft.png" />
        <meta property="twitter:title" content="The Throne Collection" />
        <meta
          property="twitter:description"
          content="The worlds first NFT collection of sol toilets!"
        />
        <meta property="twitter:image" content="/images/nft.png" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header>
          <InnerHeader>
            <Logo>
              <GradientMask>The Throne Collection</GradientMask>
            </Logo>
          </InnerHeader>
        </Header>
        <IntroSection>
          <IntroContent>
            <Title>
              <span>The worlds first</span>
              <br />
              <GradientMask>NFT collection of sol toilets!</GradientMask>
            </Title>

            <Intro>
              This one of a kind collection will contain{" "}
              <strong>unique thrones</strong> created from{" "}
              <strong>three</strong> model types and different styles.
            </Intro>

            <Button>Available soon</Button>
          </IntroContent>

          <IntroImage>
            <StyledCard imageUrl="/images/nft.png" />
          </IntroImage>
        </IntroSection>

        <Info>
          <Section>
            <SmallerContent>
              <Subtitle>Which model types are there?</Subtitle>
              <p>
                There are three model types:{" "}
                <NoBreak>
                  <strong>The Classic Throne</strong>
                </NoBreak>
                ,{" "}
                <NoBreak>
                  <strong>The Normal Throne</strong>
                </NoBreak>{" "}
                and{" "}
                <NoBreak>
                  <strong>The Modern Throne</strong>
                </NoBreak>
                . Each of these models are available in different colors and
                materials.
              </p>
            </SmallerContent>
            <Grid>
              <GridItem>
                <Image
                  alt="Classic model"
                  src="/images/nft-classic.png"
                  layout="responsive"
                  width={769}
                  height={769}
                />
              </GridItem>
              <GridItem>
                <Image
                  alt="Normal model"
                  src="/images/nft-normal.png"
                  layout="responsive"
                  width={769}
                  height={769}
                />
              </GridItem>
              <GridItem>
                <Image
                  alt="Modern model"
                  src="/images/nft-modern.png"
                  layout="responsive"
                  width={769}
                  height={769}
                />
              </GridItem>
            </Grid>
          </Section>

          <Section>
            <SmallerContent>
              <Subtitle>What does it do?</Subtitle>
              <p>
                The Throne Collection are NFTs without any utility or gaming
                functionality. They are <strong>100% pure collectibles</strong>{" "}
                that maybe someday will be integrated in the metaverse.
              </p>
            </SmallerContent>
          </Section>

          <Section>
            <SmallerContent>
              <Subtitle>Why hold it?</Subtitle>
              <p>
                The question is more like <strong>“why not?”</strong>. 🤔
              </p>
              <p>
                People are creating NFTs of everything. Everyone is looking for
                the next gem to sell at a 100x or to become part of a community
                and thats awesome!
              </p>
              <p>
                Our goal is to just have fun. Want to use it as your{" "}
                <strong>profile picture</strong>? Fine. Print it out and hang it
                as <strong>art</strong> in your bathroom? Sure. Or just let it
                sit in your wallet ready to <strong>sell it</strong> at a higher
                price? Go ahead.
              </p>
              <p>
                Still not motivated? Ok, fine, we set a crazy goal to raffle one
                &nbsp;<strong>official Bored Ape</strong> 🤩 ! Everytime a NFT
                is sold 6% of royalties will be collected, and{" "}
                <strong>💰 3% royalties 💰</strong> will go directly into a
                specific giveaway wallet. This wallet will accumulate all the
                earnings untill enough royalties are collected to buy a Bored
                Ape.
              </p>
              <p>More details later.</p>
            </SmallerContent>
          </Section>
        </Info>
        <Center>
          <Button>Available soon</Button>
        </Center>
      </main>

      <Footer>
        <Center>
          <TwitterButton href="https://twitter.com/ThroneNFTs" target="_blank">
            <Twitter
              src="/images/twitter.png"
              width="30"
              height="30"
              alt="Twitter icon"
            />{" "}
            <strong>@ThroneNFTs</strong>
          </TwitterButton>
        </Center>
        <br />
        <Center>Made with ❤️&nbsp;on Solana.</Center>
      </Footer>
    </div>
  );
};

export default Home;

const NoBreak = styled.span`
  white-space: nowrap;
`;

const TwitterButton = styled.a`
  display: flex;
  align-items: center;
  transition: transform 0.2s ease-in-out;

  &:hover {
    transform: scale(1.05);
  }
`;

const Twitter = styled(Image)``;

const Content = css`
  width: 100%;
  max-width: 1240px;
  padding: 15px;
  margin-left: auto;
  margin-right: auto;
`;

const SmallerContent = styled.div`
  width: 100%;
  max-width: 700px;
  padding: 15px;
  margin-left: auto;
  margin-right: auto;
`;

const Header = styled.header`
  padding: 15px;
  width: 100%;
  border-bottom: 1px solid #ddd;
`;

const InnerHeader = styled.div`
  display: flex;
  align-items: center;
  max-width: 1800px;
  margin-left: auto;
  margin-right: auto;
`;

const Logo = styled.div`
  font-size: 1.25rem;
  font-weight: 700;
  font-family: ${fonts.secondary};

  @media only screen and (min-width: 769px) {
    font-size: 2rem;
  }
`;

const Section = styled.section`
  ${Content}
`;

const IntroSection = styled(Section)`
  @media only screen and (min-width: 769px) {
    padding: 4rem 2rem;
    display: flex;
    align-items: center;
  }
`;

const IntroContent = styled.div`
  flex-grow: 1;
`;

const IntroImage = styled.div`
  display: flex;
  justify-content: center;
  flex-grow: 0;
  transition: margin-left 0.2s ease-in-out;

  @media only screen and (min-width: 769px) {
    margin-left: 5%;
    max-width: 50%;
    justify-content: center;
  }
`;

const Title = styled.h1`
  font-size: 1.75rem;
  font-weight: 700;
  font-family: ${fonts.secondary};

  @media only screen and (min-width: 769px) {
    font-size: 3rem;
    line-height: 3rem;
  }
`;

const Intro = styled.p``;

const Subtitle = styled.h2`
  font-size: 1.75rem;
  font-weight: 700;
  font-family: ${fonts.secondary};
`;

const StyledCard = styled(Card)`
  aspect-ratio: 1/1;
  max-width: 600px;

  @media only screen and (min-width: 769px) {
    border-radius: 55px;
  }
`;

const Center = styled.div`
  display: flex;
  justify-content: center;
`;

const Grid = styled.div`
  display: grid;
  grid-gap: 10px;
  grid-template-columns: 1fr 1fr 1fr;

  @media only screen and (min-width: 769px) {
    max-width: 850px;
    margin-left: auto;
    margin-right: auto;
  }
`;

const GridItem = styled.div`
  border-radius: 45px;
  overflow: hidden;
  aspect-ratio: 1/1;

  img {
    width: 100%;
    object-fit: contain;
  }
`;

const Footer = styled.footer`
  padding: 20px;
`;

const Info = styled.div`
  ${Content};
`;
