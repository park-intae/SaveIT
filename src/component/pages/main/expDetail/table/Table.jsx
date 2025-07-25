import { addDate, getDateString } from "@utils/dateUtil";
import { useEffect, useMemo, useState } from "react";
import TableCard from "@component/styleComponent/TableCard";
import useAddItem from "@hooks/useAddItem";
import useWeeklyStore from "@stores/useWeeklyStore";
import TableRecord from "./tableRecord/TableRecord";
import SlipDateButton from "../../../../styleComponent/SlipDateButton";

export default function Table() {
  const { weeklyRecords, fetchWeeklyRecords, isLoading, error } = useWeeklyStore();

  const today = getDateString(new Date()); // 오늘 날짜 확인

  // 처음 랜더링될 때 기준 상태
  const [date, setDate] = useState(() => {
    const arr = [];
    for (let i = -2; i <= 2; i++) {
      arr.push(getDateString(addDate(today, i)));
    }
    return arr;
  });

  const { addPrevDate, addNextDate } = useAddItem(date, setDate, 5); // 날짜 추가/제거 상태 관리

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
