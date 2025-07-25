import styled from 'styled-components';

import RecordItem from './RecordItem';

import { useEffect, useRef, useState } from 'react';
import add from '../../../../../../assets/add.svg';
import InputItem from './InputItem';

const StyleLog = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 3px;
  min-width: 100%;
  max-width: 100%;

  ul {
    display: flex;
    flex-direction: column;
    gap: 5px;
    margin-bottom: 5px;
    width: 100%;
    margin-bottom: 15px;
  }

  li {
    width: 100%;
  }

  .addButton {
    width: 20px;
    height: 20px;
    padding: 1px;
    border-radius: 100%;
    transition: box-shadow 0.3s ease;
    display: flex;
    justify-content: center;
    align-content: center;

    &:hover {
      box-shadow: 0 0 0 2px rgb(230, 230, 255);
    }
  
    .buttonImg{
      margin: auto;
    }
  }
`;

export default function RecordLog({ entries = [] }) {
  // 입력창 여닫기를 위한 판단
  const [showInput, setShowInput] = useState(false);

  const inputComponentRef = useRef(null);
  const domRef = useRef(null);

  const toggleInput = () => setShowInput((prev) => !prev);
  const closeInput = () => setShowInput(false);

  const handleExposeDomRef = (node) => {
    domRef.current = node;
  };

  // 입력창 외부 클릭 감지 후 동작
  useEffect(() => {
    function handleClickOut(e) {
      if (domRef.current && !domRef.current.contains(e.target)) {
        // 애니메이션 닫기 요청 메서드 호출
        if (inputComponentRef.current?.reqClose) {
          inputComponentRef.current.reqClose();
        }
      }
    }

    if (showInput) {
      document.addEventListener('mousedown', handleClickOut);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOut);
    }
  }, [showInput])

  return (
    <StyleLog className="log">
      {entries.length > 0 && (
        <ul>
          {entries.map((item, i) => (
            <li key={i}>
              <RecordItem {...item} />
            </li>
          ))}
        </ul>
      )}

      <button className="addButton" onClick={toggleInput}>
        <img className="buttonImg" src={add} />
      </button>
      {showInput && 
        <InputItem ref={inputComponentRef}
          exposeDomRef={handleExposeDomRef}
          onReqClose={closeInput}
        />
      }
    </StyleLog>
  );
}
