import styled from "styled-components"

const StyleComment = styled.article`
  flex: 2;
  min-width: 0;
  text-align: right;
`

export default function AI_Comment() {
    return (
        <article className='AIcomment'>
            <h3>🍽️  이번 달 가장 많은 소비는 식비입니다</h3>
            <p>이번 달 식비가 45%로 가장 컸어요.<br />
                주중 배달이 많았던 점이 눈에 띄네요!<br />
                다음 주엔 하루만 줄여도 2만 원을 절약할 수 있어요.</p>
            <span>💡 1주 1회 요리 도전 → 평균 15 % 절약!</span>
        </article>
    )
}