import styled from "styled-components";
import { Text, Button, FlexRow } from "../styles/css";

export default function SwapCard() {
  return (
    <Container>
      <FlexRow fullWidth>
        <SwapButton
          padding="0"
          width="50%"
          height="24px"
          onClick={() => console.log("hey")}
        >
          <Text bold={true}>SWAP</Text>
        </SwapButton>
        <Button
          padding="0"
          color="none"
          border="1.5px solid #c5bdbf"
          width="50%"
          height="24px"
          onClick={() => console.log("hey")}
        >
          <Text bold={true}>BUY</Text>
        </Button>
      </FlexRow>
      <AmountSection>
        <Text size="18px">Amount of ETH:</Text>
        <AmountInput type="text" placeholder="0.00" />
      </AmountSection>
      <ReceiveSection>
        <Text size="18px">Recieve in:</Text>
        <FlexRow style={{marginTop: '-12px'}}>
          <ReceiveInput type="radio" />
          <Text bold size="18px">
            wETH (Polygon)
          </Text>
        </FlexRow>
        <FlexRow>
          <ReceiveInput type="radio" />
          <Text bold size="18px">
            MATIC (Polygon)
          </Text>
        </FlexRow>
      </ReceiveSection>
      <ConfirmButton
        onClick={() => console.log("hey")}
        width="100%"
        height="32px"
      >
        <Text size="16px" bold>
          CONFIRM SWAP
        </Text>
      </ConfirmButton>
      <AddButton onClick={() => console.log("hey")} width="100%" height="32px">
        <Text size="16px" bold>
          ADD POLYGON TO METAMASK
        </Text>
      </AddButton>
    </Container>
  );
}

const Container = styled.div`
  border-radius: 10px;
  background-color: rgba(0, 0, 0, 0.7);
  border: 2px solid #c5bdbf;
  padding: 24px 36px;
`;

const AmountSection = styled.div`
  margin-top: 32px;
  margin-bottom: 32px;
`;

const AmountInput = styled.input`
  width: 100%;
  border-radius: 10px;
  height: 40px;
  border: 2px solid #c5bdbf;
`;

const ReceiveSection = styled.div`
  margin-bottom: 28px;
`;

const ReceiveInput = styled.input`
  background: #c5bdbf;
  margin-right: 12px;
`;

const SwapButton = styled(Button)`
  background: linear-gradient(
    0deg,
    rgba(45, 1, 204, 1) 0%,
    rgba(137, 1, 253, 1) 86%
  );
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