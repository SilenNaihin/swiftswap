import styled from "styled-components";
import { Text, Button, FlexRow } from "../styles/css";
import { useState } from "react";

export default function SwapCard() {
  const [clicked, setClicked] = useState(false);
  const [swapType, setSwapType] = useState(false);

  return (
    <Container>
      <FlexRow fullWidth>
        <SwapButton
          padding="0"
          color="none"
          shadow={!clicked ? "none" : "inset 0 0 0 1.5pt #c5bdbf"}
          width="50%"
          clicked={clicked}
          onClick={() => setClicked(false)}
        >
          <Text bold={true}>SWAP</Text>
        </SwapButton>
        <BuyButton
          padding="0"
          color="none"
          shadow={clicked ? "none" : "inset 0 0 0 1.5pt #c5bdbf"}
          width="50%"
          clicked={clicked}
          onClick={() => setClicked(true)}
        >
          <Text bold={true}>BUY</Text>
        </BuyButton>
      </FlexRow>
      <AmountSection>
        <Text>Amount of ETH:</Text>
        <AmountInput type="text" />
      </AmountSection>
      <ReceiveSection>
        <Text>Recieve in:</Text>
        <FlexRow style={{ marginTop: "-12px" }}>
          <ReceiveInput
            type="radio"
            checked={!swapType}
            onChange={() => setSwapType(false)}
          />
          <Text bold>wETH (Polygon)</Text>
        </FlexRow>
        <FlexRow>
          <ReceiveInput
            type="radio"
            checked={swapType}
            onChange={() => setSwapType(true)}
          />
          <Text bold>MATIC (Polygon)</Text>
        </FlexRow>
      </ReceiveSection>
      <ConfirmButton
        onClick={() => console.log("hey")}
        width="100%"
        height="32px"
      >
        <Text bold>CONFIRM SWAP</Text>
      </ConfirmButton>
      <AddButton onClick={() => console.log("hey")} width="100%" height="32px">
        <Text bold>ADD POLYGON TO METAMASK</Text>
      </AddButton>
    </Container>
  );
}

const Container = styled.div`
  border-radius: 10px;
  background-color: rgba(0, 0, 0, 0.25);
  border: 2px solid #c5bdbf;
  padding: 24px 36px;
`;

const AmountSection = styled.div`
  margin-top: 40px;
  margin-bottom: 40px;
`;

const AmountInput = styled.input`
  width: 100%;
  border-radius: 10px;
  height: 40px;
  border: 2px solid #c5bdbf;
  background: none;
  color: white;
  font-size: 18px;
  font-family: "Roboto Mono", monospace;
  padding-left: 6px;
  &:focus {
    outline: none !important;
  }
`;

const ReceiveSection = styled.div`
  margin-bottom: 28px;
`;

const ReceiveInput = styled.input`
  color: #c5bdbf;
  width: 18px;
  height: 18px;
  border: 1px solid #c5bdbf;
  margin-right: 12px;
`;

const BuyButton = styled(Button)`
  background: ${(props) =>
    props.clicked
      ? "linear-gradient(0deg,rgba(45, 1, 204, 1) 0%,rgba(137, 1, 253, 1) 86%)"
      : "none"};
`;

const SwapButton = styled(Button)`
  background: ${(props) =>
    !props.clicked
      ? "linear-gradient(0deg,rgba(45, 1, 204, 1) 0%,rgba(137, 1, 253, 1) 86%)"
      : "none"};
  margin-right: 24px;
`;

const ConfirmButton = styled(Button)`
  background: linear-gradient(
    0deg,
    rgba(45, 1, 204, 1) 0%,
    rgba(137, 1, 253, 1) 86%
  );
`;

const AddButton = styled(Button)`
  border: 2px solid #ce830f;
  margin-top: 12px;
  background-color: rgba(255, 255, 255, 0.15);
`;
