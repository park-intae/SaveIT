import TableRecord from './tableRecord/TableRecord';
import useWeeklyStore from '../../../../store/useWeeklyStore'; // weekRecord 데이터 가져옴
import { useEffect, useMemo, useState } from 'react';
import { addDate, getDateString } from '../../../../utils/dateUtil';
import TableCard from '../../../styleComponent/TableCard';
import useAddItem from '../../../../hooks/useAddItem';

export default function Table() {
  const { weeklyRecords, fetchWeeklyRecords, isLoading, error } = useWeeklyStore();
  const [dates, setDates] = useState(() => {
    const today = new Date();
    const formatted = getDateString(today);
    return [formatted];
  });

  const today = getDateString(new Date());

  const [date, setDate] = useState(() => {
    const arr = [];
    for (let i = -3; i <= 3; i++) {
      arr.push(getDateString(addDate(today, i)));
    }
    return arr;
  });

  const addPrevDate = () => {
    const first = date[0];
    const newDate = getDateString(addDate(first, -1));
    setDate((prev) => [newDate, ...prev]);
  };

  const addNextDate = () => {
    const last = date[date.length - 1];
    const newDate = getDateString(addDate(last, 1));
    setDate((prev) => [...prev, newDate]);
  };

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

  const CARD_WIDTH = 120;

  const containerRef = useAddItem(setDate, CARD_WIDTH);

  if (isLoading) return '데이터를 불러오는 중입니다';
  if (error) return <p>에러발생: {error}</p>;

  return (
    <>
      <TableCard ref={containerRef} className="table">
        <button className="" onClick={addPrevDate}>
          &lt;
        </button>
        {date.map((dateStr) => {
          return <TableRecord key={dateStr} date={dateStr} entries={dateRecords[dateStr] || []} />;
        })}
        <button onClick={addNextDate}>&gt;</button>
      </TableCard>
    </>
  );
}

// Error:
// Table.jsx:88 Unexpected ref object provided for article. Use either a ref-setter function or React.createRef().
// styled-component로 만든 TableCard가 가상 DOM에서 작동함 > ref가 DOM까지 전달이 안됨
// 스타일컴포넌트를 분리시키면 됨
