import styled from 'styled-components';

import RecordItem from './RecordItem';
import InputItem from './InputItem';
import { useState } from 'react';

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
    font-size: 13px;
    width: 20px;
    height: 20px;
    padding: 1px;
    border-radius: 100%;
    transition: box-shadow 0.3s ease;

    &:hover {
      box-shadow: 0 0 0 2px rgb(230, 230, 255);
    }
  }
`;

export default function RecordLog({expense, save}) {
  const [showInput, setShowInput] = useState(false);

  const toggleInput = () => setShowInput((prev) => !prev);

  return (
    <StyleLog className="log">
      {expense.length > 0 && (
        <ul>
          {expense.map((item, i) => (
            <li key={i}>
              <RecordItem item={item} />
            </li>
          ))}
        </ul>
      )}

      {save.length > 0 && (
        <ul>
          {save.map((item, i) => (
            <li key={i}>
              <RecordItem item={item} />
            </li>
          ))}
        </ul>
      )}

      <button className="addButton" onClick={toggleInput}>
        +
      </button>
      {showInput && <InputItem />}
    </StyleLog>
  );
}
