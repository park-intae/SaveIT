import styled from "styled-components";
import StyleCard from "../../../styleComponent/StyleCard";
import Current from "./Current";
import Expension from "./Expension";

const GoalCard = styled(StyleCard)`
  flex: 0 1 35%;
  min-width: 300px;
` 

export default function Goal() {
    return (
        <GoalCard className='goal'>
            <Current/>
            <Expension/>
        </GoalCard>
    )
}