import styled, { keyframes } from "styled-components"

const SlideFade = keyframes`
    from{
        opacity:0;
        transform: translateY(-20px);
    }
    
    to{
        opacity:1;
        transform: translate(0);
    }
`

const StyledInputForm = styled.form`
  animation: ${SlideFade} 0.5s ease-out;

  display: flex;
  flex-direction: column;
  padding: 20px;
  border-radius: 8px;
  background-color: white;
  gap: 10px;
  width: 100%;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);

  h2 {
    font-size: 24px;
    font-weight: bold;
    margin: 0;
  }

  article {
    display: flex;
    flex-direction: column;
    gap: 5px;
  }

  fieldset {
    padding: 0px;
    display: flex;
    justify-content: space-between;
    border: none;
    padding: 0;

    input[type="radio"] {
      display: none;
    }

    label {
      width: 48%;
      padding: 5px;
      text-align: center;
      border: 1px solid;
      border-radius: 8px;
      font-size: 12px;
      cursor: pointer;
    }

    label:first-of-type {
      border-color: #f4c2d7; /* 연핑크 */
    }

    label:last-of-type {
      border-color: #b0eac8; /* 연초록 */
    }
  }

  select,
  input[type="number"],
  textarea {
    border: 1px solid #b2c7f8;
    border-radius: 8px;
    padding: 5px;
    font-size: 12px;
    resize: none;
  }

  .button-group {
    display: flex;
    justify-content: flex-end;
    gap: 12px;

    button {
      border: 2px solid;
      border-radius: 12px;
      width: 48px;
      height: 48px;
      font-size: 20px;
      cursor: pointer;
    }

    button:first-of-type {
      border-color: #ccc;
    }

    button:last-of-type {
      border-color: #b2c7f8;
    }
  }
`;

export default function InputItem() {
    return (
        <StyledInputForm>
            <h3>입력창</h3>
            <article>
                <fieldset>
                    <input type="radio" id="spend" name="kind" value="소비" />
                    <label htmlFor="spend">소비</label>

                    <input type="radio" id="save" name="kind" value="저축" /><label htmlFor="save">저축</label>
                </fieldset>
                <select id="category" defaultValue="">
                    <option value="" disabled selected>카테고리</option>
                    <option value="식비">식비</option>
                    <option value="교통비">교통비</option>
                    <option value="의료">의료</option>
                    <option value="통신비">통신비</option>
                    <option value="주거/관리비">주거/관리비</option>
                    <option value="경조사">경조사</option>
                    <option value="기타">기타</option>
                </select>
                <input id="money" type="number" placeholder="금액 입력란"></input>
                <textarea
                    id="memo"
                    rows={3}
                    maxLength={30}
                    placeholder="메모를 작성해주세요"
                />
            </article>
            <div>
                <button></button>
                <button></button>
            </div>
        </StyledInputForm>
    )
}