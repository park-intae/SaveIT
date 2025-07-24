import styled from "styled-components";
import weeklyRecords from "../../../../data/WeeklyRecords"; //나중에 서버에서 데이터 가져오면 이거 지우셈
import TableRecord from "./tableRecord/TableRecord";
import StyleCard from "../../../styleComponent/StyleCard";
import useWeeklyStore from "../../../../store/useWeeklyStore";
import { useEffect } from "react";

const TableCard = styled(StyleCard)`
    display: flex;
    justify-content: space-around;
    gap: 10px;
    
    li{
     list-style-type: none;
    }
`


export default function Table() {
    const {fetchExpense, expenseData, isLoading, error} = useWeeklyStore();

    useEffect( () => {
        fetchExpense();
    },[]);
    console.log("expenseData", expenseData);

    if(isLoading) return '데이터를 불러오는 중입니다';
    if(error) return <p>에러발생: {error}</p>

    return (
        <>
            <TableCard className="table">
                {expenseData.map((expense, index) => ( //weeklyRecords는 목업 데이터임 나중에 서버에서 데이터 받아와야됨
                    <TableRecord key={index} {...expense}/>
                ))}
            </TableCard>
        </>
    )
}