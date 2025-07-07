import styled from "styled-components"

const StyleExpension = styled.article`
  display: flex;
  flex-direction: column;
`

export default function Expension() {
    return (
        <article className='expension'>
            <div className='totalExpension'><span>이번 달 지출</span> 2,400,000원</div>
            <div className='averExpension'><span>하루 평균 소비</span> 30,000원</div>
        </article>
    )
}