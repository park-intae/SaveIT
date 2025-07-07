import styled from "styled-components"
import Right from "./Right"

const StyleFooter = styled.footer`
  border-top: 1px solid #e0e0e0;
  padding: 24px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 13px;
  line-height: 1.5;

  p{
    padding: 10px 0;  
  }
`

export default function Footer() {
    return (
        <StyleFooter>
            <article class='info'>
                <p>(주)세이빗 | 대표 Thein 2Team<br />
                    사업자등록번호 123-45-67890 | 통신판매업 신고 2025-서울강남-1234<br />
                    서울특별시 강남구 테헤란로 123, 4층 (06123)</p>
                <p>고객센터 1588-1234 (평일 09:00~18:00) | E-mail support@saveit.co.kr</p>
            </article>
            <Right/>
            
        </StyleFooter>
    )
}