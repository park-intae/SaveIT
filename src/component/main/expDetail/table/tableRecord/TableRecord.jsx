import styled from "styled-components";
import RecordLog from "./recordLog/RecordLog";
import RecordSumm from "./RecordSumm";

const StyleTableRecord = styled.article`
    display: flex;
    flex-direction: column;
    align-items: center;
    min-width: 130px;
    max-width: 130px;
`


export default function TableRecord({ date, entries }) {
    return (
        <StyleTableRecord className="tableRecord">
            <h3>{date.date}</h3>
            <RecordSumm entries={entries} />
            <RecordLog entries={entries} />
        </StyleTableRecord>
    )
}