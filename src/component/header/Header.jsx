import styled from 'styled-components';
import logo from '../../assets/logo.svg';
import mobileLogo from '../../assets/mobile_logo.svg';
import profile from '../../assets/profile.svg';
import { ResponsiveContext } from '../../context/ResponsiveProvider';
import { useContext } from 'react';

const StyleHeader = styled.section`
  max-width: 1024px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${({isMobile, isTablet})=>
    isMobile ? "24px 16px" : isTablet ? "22px 24px" : "22px 0"};
`
const StyleLeft = styled.section`
  flex: ${({ isMobile }) => (isMobile ? 0 : 1)};
`
const StyleCenter = styled.section`
  display: flex;
  justify-content: flex-start;
  flex: 0;
  margin-left: ${({ isMobile }) => (isMobile ? "8vw" : "0")};
`
const StyleLogo = styled.img`
  display: block;
  width: auto;
  max-height: clamp(40px, 5vw, 56px);
  height: auto;
`
const StyleRight = styled.div`
  display: flex;
  justify-content: flex-end;
  flex: ${({ isMobile }) => (isMobile ? 0 : 1)};
  cursor: pointer;
`
const StyleProfile = styled.img`
  display: block;
  height: clamp(18px, 4vw, 28px);
`

export default function Header() {
    const {isMobile, isTablet} = useContext(ResponsiveContext);

    return (
        <StyleHeader isMobile={isMobile} isTablet={isTablet}>
            <StyleLeft isMobile={isMobile}>
                {isMobile && (
                  <StyleLogo className="logo" src={mobileLogo} alt="로고" />
                )}
            </StyleLeft>
            <StyleCenter isMobile={isMobile}>
                {!isMobile && (
                  <StyleLogo className="logo" src={logo} alt="로고" />
                )}
            </StyleCenter>
            <StyleRight isMobile={isMobile} className='login'>
                <StyleProfile className='profile' src={profile}></StyleProfile>
                {/* 가지고 디자인 해보세용 */}
                {/* {isLogin === 'false' ? <button>구글 로그인</button>:<div><img className='profile'></img><p>{userName}</p></div>} */}
            </StyleRight>
        </StyleHeader>
    )
}