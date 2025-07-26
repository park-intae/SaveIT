import TableRecord from './tableRecord/TableRecord';
import useWeeklyStore from '../../../../store/useWeeklyStore'; // weekRecord 데이터 가져옴
import { useEffect, useMemo, useState } from 'react';
import { addDate, getDateString } from '../../../../utils/dateUtil';
import TableCard from '../../../styleComponent/TableCard';
import useAddItem from '../../../../hooks/useAddItem';
import weeklyRecords from "../../../../data/WeeklyRecords"; //나중에 서버에서 데이터 가져오면 이거 지우셈


export default function Table() {
  const { fetchExpense, expenseData, fetchSave, saveData, isLoadingExpense,
  isLoadingSave, error } = useWeeklyStore();

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
  const getData = async () => {
    try {
      await fetchExpense();
    } catch (err) {
      console.error('지출 데이터 실패:', err);
    }

    try {
      await fetchSave();
    } catch (err) {
      console.error('저장 데이터 실패:', err);
    }
  };
  getData();
}, []);
  
  // console.log(expenseData)
  console.log(saveData)




  if (isLoadingExpense || isLoadingSave || expenseData.length === 0 || saveData.length === 0) return '데이터를 불러오는 중입니다';
  if (error) return <p>에러발생: {error}</p>;

    return (
        <>
            <TableCard className="table">
              <button className="slipDateButton" onClick={addPrevDate}>
                &lt;
              </button>
                {date.map((date,index) => {
                  const expenseFilter = expenseData.filter(expense => expense.expenseDate === date)
                  const saveFilter = saveData.filter(save => save.saveDate === date)


                  return  <TableRecord expense={expenseFilter} save={saveFilter} date={date} key={index}/>
                })}

              <button className="slipDateButton" onClick={addNextDate}>
                &gt;
              </button>
            </TableCard>
        </>
    )



}
