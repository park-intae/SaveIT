import styled from 'styled-components';
import ExpDetail from "./expDetail/ExpDetail";
import MainHeader from "./mainHeader/MainHeader";

const StyleMain = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 38px;
`

export default function Main() {
    return (
        <StyleMain className="main">
            <MainHeader />
            <ExpDetail />
        </StyleMain>
    )
}