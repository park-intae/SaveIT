// 정상 작동 시키려고 memo는 빼놓음
// back 연결하고 이거 주석 풀어야 됨
import { useState } from "react"
import ButtonGroup from "@component/styleComponent/ButtonGroup";
import styled from "styled-components";
import close from "@assets/close.svg";
import edit from "@assets/pencil.svg";

const StyleItemDetail = styled.div`
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
    display: flex;
    flex-direction: column;

    article {
        display: flex;
        flex-direction: column;
        gap: 0.3rem;
    }
    
    article input{
        padding: 2px 0;
        border: none;
        outline: none;
    }
    
    article input::placeholder{
        font-color: #777777;
    }
    
    article input:focus{
        background-color: #efefef;
    }
    `

const StyleToggleBtn = styled.label`
    display: flex;
    justify-content: end;
    align-items: center;
    gap: 0.1rem;
    cursor: pointer;

    input[type=checkbox]{
        appearance: none;
        display: flex;
        align-items: center;
        position: relative;
        border: 2px solid gray;
        border-radius: 1.5rem;
        width: 1.8rem;
        height: 1rem;
    }

    input[type=checkbox]::before{
        top: 50%;
        transform: translateY(-50%);
        content:'';
        position: absolute;
        width: 0.7rem;
        height: 0.7rem;
        margin-left: 1px;
        border-radius: 100%;
        background-color: gray;
    }

    input[type=checkbox]:checked::before{
        left:0.75rem;
    }
`

export default function ItemLog({ category, amount
    // , memo
}) {
    const [isModify, setIsModify] = useState(false);

    return (
        <StyleItemDetail>
            <StyleToggleBtn className="toggleBtn">
                <span>수정</span>
                <input role="switch" type="checkbox" checked={isModify} onChange={() => setIsModify(!isModify)} />
            </StyleToggleBtn>
            {!isModify ?
                (
                    <article>
                        <p>{category}</p>
                        <p>{amount}</p>
                        {/* <span>{memo}</span> */}
                    </article>
                ) : (
                    <article>
                        <input placeholder={category} />
                        <input placeholder={amount} />
                        {/* <input type="textarea" placeholder={memo}/> */}
                    </article>
                )
            }
            <ButtonGroup>
                {isModify && <button><img src={edit}/></button>}
                <button className="close">
                    <img src={close} />
                </button>
            </ButtonGroup>
        </StyleItemDetail>
    )
}