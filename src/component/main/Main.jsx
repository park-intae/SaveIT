import styled from 'styled-components';
import ExpDetail from "./expDetail/ExpDetail";
import MainHeader from "./mainHeader/MainHeader";
import Header from '../header/Header'
import Footer from '../footer/Footer'

const StyleMain = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #212529;
`

export default function Main() {
    return (
        <StyleMain className="main">
            <Header/>
            <MainHeader />
            <ExpDetail />
            <Footer/>
        </StyleMain>
    )
}