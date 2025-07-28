import { ResponsiveContext } from "@context/ResponsiveContext"
import { useContext } from "react"
import styled from "styled-components"

const StyleExpension = styled.article`
  display: flex;
  flex-direction: column;
  font-size: ${({ $isMobile }) => ($isMobile ? "17px" : "18px")};
  line-height: 1.5;
  gap: 6px;

  .totalExpension, .averExpension{
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  span{
    font-weight: bold;
    font-size: 15px;
    color: #666;
  }
`

export default function Expension() {
  const {isMobile} = useContext(ResponsiveContext);

    return (
        <StyleExpension $isMobile={isMobile}>
          <div className='totalExpension'><span>이번 달 지출</span> 2,400,000원</div>
          <div className='averExpension'><span>하루 평균 소비</span> 30,000원</div>
        </StyleExpension>
    )
}