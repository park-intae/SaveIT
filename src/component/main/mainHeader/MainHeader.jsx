import styled from "styled-components";
import Expend from "./expend/Expend";
import Goal from "./goal/Goal";

const StyleMainHeader = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: stretch;
  width: 100%;
  max-width: 1024px;
  margin: 0 auto;
  gap: 24px;
`

export default function MainHeader() {
    return (
        <StyleMainHeader className='mainHeader'>
            <Goal />
            <Expend />
        </StyleMainHeader>
    )
}