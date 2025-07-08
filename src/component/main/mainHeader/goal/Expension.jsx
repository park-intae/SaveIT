import styled from "styled-components"

const StyleExpension = styled.article`
  display: flex;
  flex-direction: column;

  span{
    font-weight: bold;
    font-size: 15px;
    color: #666;
    padding-right: 30px;
  }
`

export default function Expension() {
    return (
        <StyleExpension>
            <article className='expension'>
                <div className='totalExpension'><span>이번 달 지출</span> 2,400,000원</div>
                <div className='averExpension'><span>하루 평균 소비</span> 30,000원</div>
            </article>
        </StyleExpension>
    )
}