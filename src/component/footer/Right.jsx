import styled from "styled-components"

const StyleRight = styled.article`
  text-align: right;
  font-size: 13px;
`

export default function Right() {
    return (
        <StyleRight className='footRight'>
            <p>이용약관 | 개인정보처리방침 | 전자금융거래약관 | 청소년보호정책</p>
            <span>© 2025 SaveIT, Inc. All rights reserved.</span>
        </StyleRight>
    )
}