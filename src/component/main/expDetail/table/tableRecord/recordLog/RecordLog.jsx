import styled from 'styled-components';

import RecordItem from './RecordItem';
import InputItem from './InputItem/InputItem';
import { useState } from 'react';
import add from '../../../../../../assets/add.svg';

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
  const [showInput, setShowInput] = useState(false);

  const toggleInput = () => setShowInput((prev) => !prev);

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
        <img className="buttonImg" src={add}/>
      </button>
      {showInput && <InputItem />}
    </StyleLog>
  );
}
