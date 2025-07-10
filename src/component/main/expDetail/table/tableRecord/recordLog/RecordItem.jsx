import styled from "styled-components"

const StyleRecordItem = styled.div`
        display: flex;
        overflow: hidden;

        border: 1px solid;
        border-color: ${({ kind }) =>
            kind === "소비" ? "#e74c3c" : kind === "저축" ? "#27ae60" : "#333"};
        border-radius: 5px;
        box-shadow: 0 2px 6px rgba(0, 0, 0, 0.05);
        transition: box-shadow 0.3s ease, transform 0.3s ease;

        &:hover{
            box-shadow: 0 6px 16px rgba(0, 0, 0, 0.25);
            transform: translateY(-0.3px);
            }
            
        .Ilabel {
            padding-left: 5px;
            flex: 0 0 auto;

            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
            width: 40%;
        }

        .Ivalue {
            padding-right: 5px;
            flex: 1 1 auto;
            text-align: right;

            font-size: clamp(12px, 2vw, 16px);

            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
        }
`

export default function RecordItem({ kind, category, amount }) {
    return (
        <StyleRecordItem className="RecordItem" kind={kind}>
            <span className="Ilabel">{category}</span>
            <span className="Ivalue">₩{amount.toLocaleString()}</span>
        </StyleRecordItem>
    )
}