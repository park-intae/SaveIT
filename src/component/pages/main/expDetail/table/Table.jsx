import { addDate, getDateString } from "@utils/dateUtil";
import { useEffect, useMemo, useState } from "react";
import TableCard from "@component/styleComponent/TableCard";
import useAddItem from "@hooks/useAddItem";
import useWeeklyStore from "@stores/useWeeklyStore";
import TableRecord from "./tableRecord/TableRecord";
import SlipDateButton from "../../../../styleComponent/SlipDateButton";

export default function Table() {
  const { fetchSave, fetchExpense, isLoadingExpense,
    isLoadingSave, error } = useWeeklyStore();
  const expenseData = useWeeklyStore((state) => state.expenseData);
  const saveData = useWeeklyStore((state) => state.saveData);

  const today = getDateString(new Date()); // 오늘 날짜 확인

  // 날짜 기준 세팅
  const [offset, setOffset] = useState(0);

  // 처음 랜더링될 때 기준 상태
  const [date, setDate] = useState(() => {
    const arr = [];
    for (let i = -2; i <= 2; i++) {
      arr.push(getDateString(addDate(today, i)));
    }
    return arr;
  });

  const { addPrevDate, addNextDate } = useAddItem(date, setDate, 5, offset, setOffset); // 날짜 추가/제거 상태 관리

  // 캘린더 비동기화
  useEffect(() => {  

    const getData = async () => {
      try {
        await fetchExpense(offset);
      } catch (err) {
        console.error('지출 데이터 실패:', err);
      }

      try {
        await fetchSave(offset);
      } catch (err) {
        console.error('저장 데이터 실패:', err);
      }
    };
    getData();
  }, [offset]);


  if (isLoadingExpense || isLoadingSave ) return '데이터를 불러오는 중입니다';
  if (error) return <p>에러발생: {error}</p>;

  return (
    <>
      <TableCard className="table">
        <SlipDateButton onClick={addPrevDate} dir="left"></SlipDateButton>
        {date.map((date,index) => {
          const expenseFilter = expenseData.filter(expense => expense.expenseDate === date)
          const saveFilter = saveData.filter(save => save.saveDate === date)


          return  <TableRecord expense={expenseFilter} save={saveFilter} date={date} key={index} offset={offset}/>
        })}
        <SlipDateButton onClick={addNextDate} dir="right"></SlipDateButton>
      </TableCard>
    </>
  );
}
