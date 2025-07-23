import styled from "styled-components";

const SlipDateButton = styled.button`
    background: transparent;
    border: 1px solid #ced4da;
    color: #666;
    border-radius: 50%;
    width: 32px;
    height: 32px;
    font-size: 14px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0;
    transition: all 0.2s ease;

    &:hover {
        background: rgba(0, 0, 0, 0.05);
        border-color: #adb5bd;
        color: #212529;
        transform: translateY(-1px);
    }
`

export default SlipDateButton;