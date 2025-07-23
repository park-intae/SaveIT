import styled from "styled-components";
import StyleCard from "../../../styleComponent/StyleCard";
import AI_Comment from "./AI_Comment";
import Graph from "./Graph";
import { ResponsiveContext } from '../../../../context/ResponsiveProvider';
import { useContext } from 'react';

const ExpCard = styled(StyleCard)`
  display: flex;
  flex-direction: ${({ $isMobile }) => ($isMobile ? "column" : "row")};
  justify-content: space-between;
  align-items: center;
  gap: 40px;
  width: 100%;
`

export default function Expend() {
    const {isMobile, isTablet} = useContext(ResponsiveContext);

    return (
        <ExpCard $isMobile={isMobile} $isTablet={isTablet} className="expend">
            <AI_Comment/>
            <Graph/>
        </ExpCard>
    )
}