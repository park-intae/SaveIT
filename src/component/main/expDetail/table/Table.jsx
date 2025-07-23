import styled from "styled-components";
import weeklyRecords from "../../../../data/WeeklyRecords"; //나중에 서버에서 데이터 가져오면 이거 지우셈
import TableRecord from "./tableRecord/TableRecord";
import StyleCard from "../../../styleComponent/StyleCard";
import useWeeklyStore from "../../../../store/useWeeklyStore";
import { useEffect } from "react";

const TableCard = styled(StyleCard)`
    display: flex;
    justify-content: space-around;
    gap: 8px;
    cursor: default;
    
    li{
     list-style-type: none;
    }
`

console.log("weeklyRecords", weeklyRecords);

export default function Table() {
    const {weeklyRecords, fetchWeeklyRecords, isLoading, error} = useWeeklyStore();

    useEffect( () => {
        fetchWeeklyRecords();
    },[]);

    if(isLoading) return '데이터를 불러오는 중입니다';
    if(error) return <p>에러발생: {error}</p>

    return (
        <>
            <TableCard className="table">
                {weeklyRecords.map((record, index) => ( //weeklyRecords는 목업 데이터임 나중에 서버에서 데이터 받아와야됨
                    <TableRecord key={index} {...record}/>
                ))}
            </TableCard>
        </>
    )
}