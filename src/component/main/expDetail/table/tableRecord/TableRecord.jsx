import styled from 'styled-components';
import RecordLog from './recordLog/RecordLog';
import RecordSumm from './RecordSumm';

const StyleTableRecord = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 120px;
  max-width: 120px;
`;
export default function TableRecord({ date, expense, save }) {
  return (
    <StyleTableRecord className="tableRecord">
      <h3>{date}</h3>
      <RecordSumm expense={expense} save={save} />
      <RecordLog expense={expense} save={save} />
    </StyleTableRecord>
  );
}
