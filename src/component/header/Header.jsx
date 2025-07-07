import styled from 'styled-components';
import logo from '../../assets/logo.svg';
import mobileLogo from '../../assets/mobile_logo.svg';
import profile from '../../assets/profile.svg'

const StyleHeader = styled.section`
  max-width: 1024px;
  margin: 0 auto;
  padding: 22px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
`
const StyleLeft = styled.section`
  flex: 1;
`
const StyleCenter = styled.section`
  display: flex;
  justify-content: center;
  flex: 1;
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
  flex: 1;
  cursor: pointer;
`
const StyleProfile = styled.img`
  display: block;
  height: clamp(18px, 4vw, 28px);
`

export default function Header() {

    return (
        <StyleHeader>
            <StyleLeft/>
            <StyleCenter>
                <picture>
                  <source media="(max-width: 768px)" srcSet={mobileLogo} />
                  <StyleLogo className="logo" src={logo} alt="로고" />
                </picture>
            </StyleCenter>
            <StyleRight className='login'>
                <StyleProfile className='profile' src={profile}></StyleProfile>
                {/* {isLogin === 'false' ? <button>구글 로그인</button>:<div><img className='profile'></img><p>{userName}</p></div>} */}
            </StyleRight>
        </StyleHeader>
    )
}