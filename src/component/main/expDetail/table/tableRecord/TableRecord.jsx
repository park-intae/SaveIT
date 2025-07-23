import styled from "styled-components";
import RecordLog from "./recordLog/RecordLog";
import RecordSumm from "./RecordSumm";

const StyleTableRecord = styled.article`
    display: flex;
    flex-direction: column;
    align-items: center;
    min-width: 116px;
    max-width: 116px;

    h3{
        font-size: 16px;
    }
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