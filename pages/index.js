import styled from "styled-components";
import { Text, Button } from "../styles/css";
import SwapCard from "../components/SwapCard";
import logo from "../img/main_logo.png";
import graphic from "../img/swap_graphic.png";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <TopSection>
        <LogoSection>
          <LogoWrapper>
            <Image
              layout={"fill"}
              objectFit={"contain"}
              src={logo}
              alt="logo"
            />
          </LogoWrapper>
          <ByText size="20px" spacing="6px">
            BY METAPHRASE
          </ByText>
        </LogoSection>
      </TopSection>
      <Content>
        <SwapCard />
        <SwapImgSection>
          <PolygonSwapText spacing="6px" bold>
            SWAP TO POLYGON FOR $10.00
          </PolygonSwapText>
          <GraphicWrapper>
            <Image
              layout={"fill"}
              objectFit={"contain"}
              alt="swap-graphic"
              src={graphic}
            />
          </GraphicWrapper>
        </SwapImgSection>
      </Content>
      <ConnectWallet>
        <Text size="16px">CONNECT WALLET</Text>
      </ConnectWallet>
    </>
  );
}

const TopSection = styled.div`
  top: 12px;
  display: flex;
  position: absolute;
  justify-content: center;
  align-items: center;
  width: 100%;
  @media (max-width: 800px) {
    justify-content: start;
  }
  @media (max-width: 600px) {
    justify-content: center;
  }
`;

const LogoWrapper = styled.div`
  width: 350px;
  height: 50px;
  position: relative;
  margin-top: 12px;
`;

const LogoSection = styled.div`
  display: flex;
  justify-content: end;
  align-items: center;
  flex-direction: column;
  @media (max-width: 800px) {
    align-items: start;
  }
  @media (max-width: 600px) {
    align-items: center;
  }
`;

const ConnectWallet = styled.button`
  width: 164px;
  height: 32px;
  border: none;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  @media (max-width: 800px) {
    top: 136px;
    left: 0;
    right: 0;
    margin-left: auto;
    margin-right: auto;
  }
  @media (min-width: 800px) {
    right: 24px;
    top: 12px;
  }
  background: linear-gradient(
    0deg,
    rgba(1, 48, 202, 1) 0%,
    rgba(0, 212, 255, 1) 100%
  );
`;

const Content = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  padding-top: 25px;
  @media (max-height: 800px) {
    padding-top: 125px;
  }
  @media (min-height: 800px) {
    width: 100vw;
    height: 100vh;
  }
  @media (max-width: 800px) {
    flex-direction: column;
  }
`;

const ByText = styled(Text)`
  @media (max-width: 600px) {
    margin-left: 0px !important;
  }
  @media (max-width: 800px) {
    margin-left: 28px;
  }
`;

const SwapImgSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  @media (min-width: 800px) {
    margin-top: 56px;
    flex-direction: column;
  }
  @media (max-width: 800px) {
    position: absolute;
    right: 18px;
    top: 25px;
    flex-direction: row;
  }
`;

const GraphicWrapper = styled.div`
  width: 400px;
  height: 400px;
  @media (max-width: 1000px) {
    width: 350px;
    height: 350px;
  }
  @media (max-width: 900px) {
    width: 300px;
    height: 300px;
  }
  @media (max-width: 800px) {
    width: 125px;
    height: 125px;
  }
  @media (max-width: 600px) {
    display: none;
  }
  position: relative;
`;

const PolygonSwapText = styled(Text)`
  font-size: 20px;
  @media (max-width: 1000px) {
    font-size: 18px;
  }
  @media (max-width: 900px) {
    font-size: 16px;
    letter-spacing: 3px;
  }
  @media (max-width: 800px) {
    display: none;
  }
`;
