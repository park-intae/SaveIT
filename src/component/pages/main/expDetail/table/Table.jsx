import { ResponsiveContext } from "@context/ResponsiveContext"
import { useContext } from "react"
import { addDate, getDateString } from "@utils/dateUtil";
import { useEffect, useMemo, useState } from "react";
import TableCard from "@component/styleComponent/TableCard";
import useAddItem from "@hooks/useAddItem";
import useWeeklyStore from "@stores/useWeeklyStore";
import TableRecord from "./tableRecord/TableRecord";
import SlipDateButton from "../../../../styleComponent/SlipDateButton";

export default function Table() {
  //캘린더 반응형에 따른 갯수
  const { isMobile, isTablet } = useContext(ResponsiveContext);
  const visibleCount = isMobile ? 1 : isTablet ? 3 : 5;

  const { weeklyRecords, fetchWeeklyRecords, isLoading, error } = useWeeklyStore();

  const today = getDateString(new Date()); // 오늘 날짜 확인

  // 처음 랜더링될 때 기준 상태
  const [date, setDate] = useState(() => {
    const arr = [];
    const half = Math.floor(visibleCount / 2);
    for (let i = -half; i <= half; i++) {
      arr.push(getDateString(addDate(today, i)));
    }
    return arr;
  });

  const { addPrevDate, addNextDate } = useAddItem(date, setDate, visibleCount); // 날짜 추가/제거 상태 관리

  // 캘린더 비동기화
  useEffect(() => {
    const fetchRecords = async () => {
      try {
        await fetchWeeklyRecords();
      } catch (err) {
        console.log('데이터 불러오기 실패:', err);
      }
    };
    fetchRecords();
  }, []);

  // 반응형 캘린더 갯수 조절
  useEffect(() => {
    const half = Math.floor(visibleCount / 2);
    const newDates = [];
    for (let i = -half; i <= half; i++) {
      newDates.push(getDateString(addDate(today, i)));
    }
    setDate(newDates);
  }, [visibleCount, today]);

  // 데이터 기록 수신
  const dateRecords = useMemo(() => {
    const map = {};
    weeklyRecords.forEach((res) => {
      const { year, month, date } = res.date;
      const dateObj = new Date(year, month - 1, date);
      const key = getDateString(dateObj);
      if (!map[key]) {
        map[key] = [];
      }
      map[key].push(...res.entries);
    });
    return map;
  }, [weeklyRecords]);

  if (isLoading) return '데이터를 불러오는 중입니다';
  if (error) return <p>에러발생: {error}</p>;

  return (
    <>
      <TableCard className="table">
        <SlipDateButton onClick={addPrevDate} dir="left"></SlipDateButton>
        {date.map((dateStr) => {
          return <TableRecord key={dateStr} date={dateStr} entries={dateRecords[dateStr] || []} />;
        })}
        <SlipDateButton onClick={addNextDate} dir="right"></SlipDateButton>
      </TableCard>
    </>
  );
}
