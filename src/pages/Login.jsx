import styled from 'styled-components';
import axios from "axios";
import { GoogleLogin } from "@react-oauth/google";
import { useNavigate } from "react-router-dom";
import logo from '../assets/login_logo.svg';
import { ResponsiveContext } from '../context/ResponsiveProvider';
import { useContext } from 'react';

const LoginWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #212529;
`;
const LoginLogo = styled.div`
  width: 100%;
  margin: 8rem;
`
const StyleLogo = styled.img`
  display: block;
  width: ${({$isMobile})=>($isMobile ? '70%' : 'auto')};
  height: auto;
  margin: 0 auto;
`
const LoginBtn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 3rem;
`
const Quote = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 3rem 0;
`

const QuoteWrapper = styled.div`
  height: 55px;
  overflow: hidden;
`;

const QuoteTrack = styled.ul`
  display: flex;
  flex-direction: column;
  
  li {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    padding: 0 1rem;
  }
  p {
    font-size: 22px;
  }
  span {
    font-size: 13px;
    color: #999;
    margin-top: 14px;
  }
`;

const LoginFooter = styled.footer`
  max-width: 1024px;
  width: 100%;
  padding: ${({$isMobile, $isTablet})=>
    $isMobile ? "16px" : $isTablet ? "24px" : "20px 48px"};
  border-top: 1px solid #e0e0e0;
  display: flex;
  justify-content: ${({isMobile, isTablet}) =>
    isMobile || isTablet ? "center" : "space-between"};
  flex-wrap: wrap;
  font-size: 13px;
  line-height: 1.5;
  text-align: ${({$isMobile, $isTablet}) =>
    $isMobile || $isTablet ? "center" : "left"};

  p{
    padding: 10px 0; 
  }
  span {
    margin-top: 6px;
    display: block;
  }
`
const FootLeft = styled.div`
  display: ${({ $isMobile, $isTablet }) => ($isMobile || $isTablet ? "none" : "block")};
  flex: 3;
`;
const FootRight = styled.div`
  width: 100%;
  flex: 2;
  display: flex;
  flex-direction: column;
  align-items: ${({ $isMobile, $isTablet }) =>
    $isMobile || $isTablet ? "center" : "flex-end"};
  text-align: ${({ $isMobile, $isTablet }) =>
    $isMobile || $isTablet ? "center" : "right"};
  font-size: ${({$isMobile})=>($isMobile ? "9px" : "13px")};

  p{
    display: ${({ $isMobile, $isTablet }) =>
      $isMobile || $isTablet ? "none" : "block"};
  }
  span{
    display: block;
    text-align: center;
    margin-top: 8px;
  }
`
;

function Login() {
  const {isMobile, isTablet} = useContext(ResponsiveContext);
  const navigate = useNavigate();

  const handleLoginSuccess = async (credentialResponse) => {
    const idToken = credentialResponse.credential;
    console.log("idToken:", idToken);
    try {
      const res = await axios.post(
        "http://localhost:8080/auth/google",
        { token: idToken },
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );

      const jwt = res.data.jwt;
      localStorage.setItem("jwt", jwt);
      alert("로그인 성공!");

      const userRes = await axios.get("http://localhost:8080/user/info", {
        headers: {
          Authorization: `Bearer ${jwt}`,
        },
      });

      console.log("로그인한 유저:", userRes.data);

      navigate("/main"); // 페이지 이동
    } catch (error) {
      console.error("로그인 처리 중 에러:", error);
    }
  };

  return (
    <LoginWrapper>
      <LoginLogo>
          <StyleLogo $isMobile={isMobile} className="logo" src={logo} alt="로고" />
      </LoginLogo>
      <LoginBtn>
        <GoogleLogin
        ux_mode="popup"
        onSuccess={handleLoginSuccess}
        onError={() => console.log("구글 로그인 실패")}
        />
      </LoginBtn>
      <Quote>
        <QuoteWrapper>
          <QuoteTrack>
            <li><p>“ 절약은 가장 확실한 수입이다. ”</p><span>— 벤자민 프랭클린</span></li>
            <li><p>“ 오늘의 지출이 내일의 자유를 만든다. ”</p><span>— 미상</span></li>
            <li><p>“ 돈은 쓰는 것이 아니라 다루는 것이다. ”</p><span>— 워렌 버핏</span></li>
            {/* 더 추가 가능 */}
          </QuoteTrack>
        </QuoteWrapper>
      </Quote>
      <LoginFooter $isMobile={isMobile} $isTablet={isTablet}>
          <FootLeft $isMobile={isMobile} $isTablet={isTablet}>
            <p>(주)세이빗 | 대표 Thein 2Team<br />
                사업자등록번호 123-45-67890 | 통신판매업 신고 2025-서울강남-1234<br />
                서울특별시 강남구 테헤란로 123, 4층 (06123)</p>
            <p>고객센터 1588-1234 (평일 09:00~18:00) | E-mail support@saveit.co.kr</p>
          </FootLeft>
          <FootRight $isMobile={isMobile} $isTablet={isTablet}>
            <p>이용약관 | 개인정보처리방침 | 전자금융거래약관 | 청소년보호정책</p>
            <span>© 2025 SaveIT, Inc. All rights reserved.</span>
          </FootRight>
      </LoginFooter>
    </LoginWrapper>
  );
}

export default Login;