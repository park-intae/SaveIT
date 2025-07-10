import styled from "styled-components";
import weeklyRecords from "../../../../data/WeeklyRecords"; //나중에 서버에서 데이터 가져오면 이거 지우셈
import TableRecord from "./tableRecord/TableRecord";
import StyleCard from "../../../styleComponent/StyleCard";

const TableCard = styled(StyleCard)`
    display: flex;
    gap: 10px;
    
    li{
     list-style-type: none;
    }
`

console.log("weeklyRecords", weeklyRecords);

export default function Table() {
    // 목업 데이터임
    return (
        <>
            <TableCard>
                {weeklyRecords.map((record, index) => ( //weeklyRecords는 목업 데이터임 나중에 서버에서 데이터 받아와야됨
                    <TableRecord key={index} {...record}/>
                ))}
            </TableCard>
        </>
    )
}