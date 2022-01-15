import styled from "styled-components";
import { Text, Button } from "../styles/css";
import SwapCard from "../components/SwapCard";
import logo from "../img/main_logo.png";
import graphic from "../img/swap_graphic.png";
import Image from "next/image";

export default function Home() {
  return (
    <GlobalContainer>
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
          <Text size="20px" spacing="6px">
            BY METAPHRASE
          </Text>
        </LogoSection>
      </TopSection>
      <Content>
        <SwapCard />
        <SwapImgSection>
          <Text spacing="6px" size="20px" bold>SWAP TO POLYGON FOR $10.00</Text>
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
    </GlobalContainer>
  );
}

const GlobalContainer = styled.div`
  width: 100%;
  height: 100%;
`;

const TopSection = styled.div`
  padding-top: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding-left: 24px;
  padding-right: 24px;
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
  top: 24px;
  right: 24px;
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
  padding: 56px 32px;
`;

const SwapImgSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const GraphicWrapper = styled.div`
  width: 400px;
  height: 400px;
  position: relative;
`;
