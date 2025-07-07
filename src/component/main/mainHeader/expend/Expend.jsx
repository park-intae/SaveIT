import styled from "styled-components";
import StyleCard from "../../../styleComponent/StyleCard";
import AI_Comment from "./AI_Comment";
import Graph from "./Graph";

const ExpCard = styled(StyleCard)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 40px;
  width: 100%;
`

export default function Expend() {
    return (
        <ExpCard className="expend">
            <AI_Comment/>
            <Graph/>
        </ExpCard>
    )
}