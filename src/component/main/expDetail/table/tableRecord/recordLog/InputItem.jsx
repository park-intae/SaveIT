import styled, { keyframes } from "styled-components"
import close from '../../../../../../assets/close.svg';
import add from '../../../../../../assets/add.svg';
import { forwardRef, useEffect, useImperativeHandle, useRef, useState } from "react";

const SlideFadein = keyframes`
    from{
      opacity:0;
      transform: translateY(-20px);
    }
    
    to{
      opacity:1;
      transform: translate(0);
    }
`

const SlideFadeout = keyframes`
  from{
    opacity: 1;
    transform: translate(0);
  }

  to{
    opacity: 0;
    transform: translateY(-20px);
  }
`

const StyledInputForm = styled.form`
  animation: ${(props) => (props.$isClosing ? SlideFadeout : SlideFadein)} 0.5s ease-out;
  animation-fill-mode: forwards;

  display: flex;
  flex-direction: column;
  padding: 20px;
  border-radius: 8px;
  background-color: white;
  gap: 10px;
  width: 100%;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);

  h3 {
    font-size: 18px;
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
      border-radius: 6px;
      font-size: 12px;
      cursor: pointer;
    }

    label:first-of-type {
      border-color: #EF8479; /* 연핑크 */
    }

    label:last-of-type {
      border-color: #b0eac8; /* 연초록 */
    }

    input[type="radio"]:first-of-type:checked + label {
      background-color: #EF8479;
      color: white;
    }

    input[type="radio"]:last-of-type:checked + label {
      background-color: #A2E1BD;
      color: white;
    }
  }

  select,
  input[type="number"],
  textarea {
    border: 1px solid #b2c7f8;
    border-radius: 6px;
    padding: 5px;
    font-size: 12px;
    resize: none;
  }

  .button-group {
    display: flex;
    justify-content: center;
    gap: 5px;

    .toolkit {
      padding: 0;
      border-radius: 100%;
      width: 30px;
      height: 30px;
      cursor: pointer;
      display: flex;
      justify-content: center;
      align-content: center;
      
      img{
        margin: auto;      
      }
    }
  }
`;

const InputItem = forwardRef(function InputItem({ onReqClose, exposeDomRef }, ref) {
  const [isClosing, setIsClosing] = useState(false);
  const localRef = useRef(null);


  useImperativeHandle(ref, () => ({
    reqClose(){
      setIsClosing(true);
    }
  }));

  const handleAnimationEnd = () => {
    if (isClosing) {
      onReqClose();
    }
  };

  useEffect(() => {
    if (exposeDomRef && localRef.current) {
      exposeDomRef(localRef.current);

  console.log(localRef)

    }
  }, [exposeDomRef]);

  const handleCloseClick = () => {
    setIsClosing(true);
  }

  return (
    <StyledInputForm ref={localRef} $isClosing={isClosing} onAnimationEnd={handleAnimationEnd}>
      <h3>입력창</h3>
      <article>
        <fieldset>
          <input type="radio" id="spend" name="kind" value="소비" />
          <label htmlFor="spend">소비</label>

          <input type="radio" id="save" name="kind" value="저축" />
          <label htmlFor="save">저축</label>
        </fieldset>
        <select id="category" defaultValue="">
          <option value="" disabled>카테고리</option>
          <option value="식비">식비</option>
          <option value="교통비">교통비</option>
          <option value="의료">의료</option>
          <option value="통신비">통신비</option>
          <option value="주거/관리비">주거/관리비</option>
          <option value="경조사">경조사</option>
          <option value="기타">기타</option>
        </select>
        <input id="money" type="number" placeholder="금액 입력란"/>
        <textarea
          id="memo"
          rows={3}
          maxLength={30}
          placeholder="메모를 작성해주세요"
        />
      </article>
      <div className="button-group">
        <button type="button" className="toolkit" onClick={handleCloseClick}>
          <img src={close}></img>
        </button>
        <button type="button" className="toolkit" onClick={handleCloseClick}>
          <img src={add}></img>
        </button>
      </div>
    </StyledInputForm>
  )
});

export default InputItem;