import TableRecord from './tableRecord/TableRecord';
import useWeeklyStore from '../../../../store/useWeeklyStore'; // weekRecord 데이터 가져옴
import { useEffect, useMemo, useState } from 'react';
import { addDate, getDateString } from '../../../../utils/dateUtil';
import TableCard from '../../../styleComponent/TableCard';
import useAddItem from '../../../../hooks/useAddItem';

export default function Table() {
  const { weeklyRecords, fetchWeeklyRecords, isLoading, error } = useWeeklyStore();

  const today = getDateString(new Date()); // 오늘 날짜 확인

  // 처음 랜더링될 때 기준 상태
  const [date, setDate] = useState(() => {
    const arr = [];
    for (let i = -3; i <= 3; i++) {
      arr.push(getDateString(addDate(today, i)));
    }
    return arr;
  });

  const { addPrevDate, addNextDate } = useAddItem(date, setDate, 7); // 날짜 추가/제거 상태 관리

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
        <button className="slipDateButton" onClick={addPrevDate}>
          &lt;
        </button>
        {date.map((dateStr) => {
          return <TableRecord key={dateStr} date={dateStr} entries={dateRecords[dateStr] || []} />;
        })}
        <button className="slipDateButton" onClick={addNextDate}>
          &gt;
        </button>
      </TableCard>
    </>
  );
}
