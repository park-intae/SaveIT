import styled from "styled-components";
import TableRecord from "./tableRecord/TableRecord";
import StyleCard from "../../../styleComponent/StyleCard";
import useWeeklyStore from "../../../../store/useWeeklyStore"; // weekRecord 데이터 가져옴
import { useEffect, useMemo, useState } from "react";
import { addDate, getDateString } from "../../../../utils/dateUtil";
import useInfiniteScroll from "../../../../hooks/useInfiniteScroll";

const TableCard = styled(StyleCard)`
    display: flex;
    justify-content: space-around;
    gap: 10px;
    overflow-x: auto;
    overflow-y: hidden;
    white-space: nowrap;
    scroll-behavior: smooth;
    
    li{
     list-style-type: none;
    }

    
`

export default function Table() {
    const { weeklyRecords, fetchWeeklyRecords, isLoading, error } = useWeeklyStore();
    const today = getDateString(new Date());

    const [date, setDate] = useState(()=>{
        const arr = [];
        for (let i = -3; i <= 3; i++){
            arr.push(getDateString(addDate(today,i)));
        }
        return arr;
    })

    useEffect(() => {
        const fetchRecords = async () => {
            try {
                await fetchWeeklyRecords();
            } catch (err) {
                console.log("데이터 불러오기 실패:",err);
            }
        };
        fetchRecords();
    },[]);

    const dateRecords = useMemo(()=>{
        const map = {};
        weeklyRecords.forEach((res)=>{
            const {year,month,date} = res.date;
            const dateObj = new Date(year, month - 1, date);
            const key = getDateString(dateObj);
            if (!map[key]){
                map[key] = [];
            }
            map[key].push(...res.entries);
        });
        return map;
    },[weeklyRecords])

    const CARD_WIDTH = 140;

    const containerRef = useInfiniteScroll(date, setDate, CARD_WIDTH);

    if (isLoading) return '데이터를 불러오는 중입니다';
    if (error) return <p>에러발생: {error}</p>

    return (
        <>
            <TableCard ref={containerRef} className="table">
                {date.map((dateStr) => {
                    return (<TableRecord key={dateStr} date={dateStr} entries={dateRecords[dateStr] || []} />);
                })}
            </TableCard>
        </>
    )
}

// 다 적용하고 css 조절하셈, 고정값이 아니라 가변값으로
// 지금은 f12누르면 걍 테이블 다 삐져나오고 난리도 아님
// overflow 히든을 주던가 해야됨