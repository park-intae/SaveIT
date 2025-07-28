import styled from "styled-components";
import StyleCard from "@component/styleComponent/StyleCard";
import Expension from "./Expension";
import Current from "./Current";

const GoalCard = styled(StyleCard)`
  flex: 0 1 35%;
  min-width: 100%;
` 

export default function Goal() {
    return (
        <GoalCard className='goal'>
            <Current/>
            <Expension/>
        </GoalCard>
    )
}