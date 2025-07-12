import styled from "styled-components";
import RecordLog from "./recordLog/RecordLog";
import RecordSumm from "./RecordSumm";

const StyleTableRecord = styled.article`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 117px;
    min-width: 117px;
    max-width: 117px;
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