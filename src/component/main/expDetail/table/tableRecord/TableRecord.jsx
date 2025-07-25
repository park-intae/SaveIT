import styled from 'styled-components';
import RecordLog from './recordLog/RecordLog';
import RecordSumm from './recordSumm/RecordSumm';

const StyleTableRecord = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 140px;
  max-width: 140px;
  flex-shrink: 0;

  h3{
    font-size: 16px;
    font-weight: 600;
  }
`;

export default function TableRecord({ date, entries }) {
  return (
    <StyleTableRecord className="tableRecord">
      <h3>{date}</h3>
      <RecordSumm entries={entries} />
      <RecordLog entries={entries} />
    </StyleTableRecord>
  );
}
