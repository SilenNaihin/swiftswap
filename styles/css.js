import styled from "styled-components";

export const Text = styled.p`
  font-family: "Roboto Mono", monospace;
  font-style: normal;
  font-weight: ${(p) => (p.bold ? 600 : 300)};
  font-size: ${(props) => props.size || "14px"};
  line-height: 16px;
  letter-spacing: ${(props) => props.spacing || "normal"};
  color: ${(p) => p.color || "#fff"};
`;

export const Button = styled.button`
  padding: ${(p) => p.padding || "2px 4px"};
  background: ${(p) => p.color || "#ff0000"};
  border-radius: 10px;
  border: ${(p) => p.border || "none"};
  width: ${(p) => p.width || ""};
  &:focus {
    outline: none !important;
    box-shadow: 0 0 0 1pt black;
  }
`;

export const FlexRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: ${(p) => p.alignItems || "center"};
  justify-content: ${(p) => p.justifyContent || "flex-start"};
  padding: 0px;
  height: ${(p) => p.fullHeight && "100%"};
  width: ${(p) => p.fullWidth && "100%"};
`;