import styled from "styled-components";
import weeklyRecords from "../../../../data/WeeklyRecords"; //나중에 서버에서 데이터 가져오면 이거 지우셈
import TableRecord from "./tableRecord/TableRecord";

const StyleTable = styled.section`
    display: flex;
`

export default function Table() {
    // 목업 데이터임
    return (
        <>
            <StyleTable>
                {weeklyRecords.map((record, index) => ( //weeklyRecords는 목업 데이터임 나중에 서버에서 데이터 받아와야됨
                    <TableRecord key={index} {...record}/>
                ))}
            </StyleTable>
        </>
    )
}