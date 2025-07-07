import styled from 'styled-components';
import logo from '../../assets/logo.svg';
import mobileLogo from '../../assets/mobile_logo.svg';
import profile from '../../assets/profile.svg'

const StyleHeader = styled.section`
  position: relative;
  padding: 22px 0;
`
const StyleLogo = styled.img`
  display: block;
  margin: 0 auto;
  width: auto;
  max-height: clamp(40px, 5vw, 56px);
  height: auto;
`
const StyleLogin = styled.div`
  display: block;
  margin: 0 auto;
  width: auto;
  max-height: clamp(40px, 5vw, 56px);
  height: auto;
`
const StyleProfile = styled.img`
  display: block;
  height: clamp(18px, 4vw, 28px);
`

export default function Header() {

    return (
        <StyleHeader>
            <picture>
                <source media="(max-width: 768px)" srcSet={mobileLogo} />
                <StyleLogo className="logo" src={logo} alt="로고" />
            </picture>
            <StyleLogin className='login'>
                <StyleProfile className='profile' src={profile}></StyleProfile>
                {/* 가지고 디자인 해보세용 */}
                {/* {isLogin === 'false' ? <button>구글 로그인</button>:<div><img className='profile'></img><p>{userName}</p></div>} */}
            </StyleLogin>
        </StyleHeader>
    )
}