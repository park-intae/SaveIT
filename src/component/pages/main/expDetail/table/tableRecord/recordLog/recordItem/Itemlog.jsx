// 정상 작동 시키려고 memo는 빼놓음
// back 연결하고 이거 주석 풀어야 됨
import { useState } from "react"
import ButtonGroup from "@component/styleComponent/ButtonGroup";
import styled from "styled-components";
import close from "@assets/close.svg";
import edit from "@assets/edit.svg";
import { deleteExpense } from "@api/expense";
import useWeeklyStore from "@stores/useWeeklyStore";

const StyleItemDetail = styled.div`
    margin: 0;
    padding: 0;
    border: 0;
    vertical-align: baseline;
    display: flex;
    flex-direction: column;
    width: 100%;
    overflow: hidden;
    transition: max-height 0.3s ease-out;

    article {
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
        padding: 15px 0;
        font-size: 13px;
    }
    
    article input{
        padding: 2px 5px;
        border: 1px solid #888;
        border-radius: 4px;
        outline: none;
    }
    
    article input::placeholder{
        color: #777777;
    }
    
    article input:focus{
        background-color: #efefef;
        border: 1.5px solid #2F80ED;
    }
    `

const StyleToggleBtn = styled.label`
    display: flex;
    justify-content: end;
    align-items: center;
    gap: 0.3rem;
    color: #777;
    cursor: pointer;

    input[type=checkbox]{
        appearance: none;
        display: flex;
        align-items: center;
        position: relative;
        border: 1.2px solid #2F80ED;
        border-radius: 20px;
        width: 1.7rem;
        height: 0.9rem;
    }

    input[type=checkbox]::before{
        top: 50%;
        transform: translateY(-50%);
        content:'';
        position: absolute;
        width: 0.6rem;
        height: 0.6rem;
        margin-left: 1.8px;
        border-radius: 100%;
        background-color: #2F80ED;
    }

    input[type=checkbox]:checked::before{
        left:0.75rem;
    }
`

export default function ItemLog({ setOnDetailMod, category, amount, expenseId, offset
    // , memo
}) {
    const [isModify, setIsModify] = useState(false);
    const { fetchExpense, fetchSave } = useWeeklyStore();

    async function deleteExpenseItem(expenseId, offset) {
        await deleteExpense(expenseId);
        await fetchExpense(offset);
    }


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
                        {/* <textarea placeholder={memo}/> */}
                    </article>
                )
            }
            <ButtonGroup>
                {isModify && <button onClick={() => setOnDetailMod('closing')} ><img src={edit} className="edit"/></button>}
                <button onClick={()=>setOnDetailMod('closing')} className="close">
                    <img src={close} onClick={() => deleteExpenseItem(expenseId, offset)} />
                </button>
            </ButtonGroup>
        </StyleItemDetail>
    )
}