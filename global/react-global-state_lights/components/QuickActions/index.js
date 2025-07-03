import styled from "styled-components";
import Button from "../Button";

const StyledQuickActions = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export default function QuickActions(props) {
  return (
    <StyledQuickActions>
      <Button
        type="button"
        onClick={() => {
          props.onAllTurnOff();
          console.log("turnoff", props.lightsArr);
        }}
      >
        Turn all lights off
      </Button>
      <Button
        type="button"
        onClick={() => {
          props.onAllTurnOn();
          console.log("Turn all lights on", props.lightsArr);
        }}
      >
        Turn all lights on
      </Button>
    </StyledQuickActions>
  );
}
