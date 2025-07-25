import styled from "styled-components";
import RecordSumm from "./RecordSumm";
import RecordLog from "./recordLog/RecordLog";

const StyleTableRecord = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 120px;
  max-width: 120px;
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
