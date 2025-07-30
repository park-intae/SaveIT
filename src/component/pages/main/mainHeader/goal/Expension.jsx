import { getUserExpense } from "@api/goal";
import { useState, useEffect } from "react"
import styled from "styled-components"

const StyleExpension = styled.article`
  display: flex;
  flex-direction: column;
  font-size: 18px;
  line-height: 1.5;
  gap: 6px;

  .totalExpension, .averExpension{
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  span{
    font-weight: bold;
    font-size: 15px;
    color: #666;
  }
`

export default function Expension() {

  const [totalExpense, setTotalExpense] = useState(0);

useEffect(()=> {
    getUserExpense()
    .then((res)=> {
      // console.log(res)
          setTotalExpense(res.totalExpense)
      })
    .catch((err) => console.error("데이터 불러오기 실패", err))
  }, [])


    return (
        <StyleExpension>
                <div className='totalExpension'><span>이번 달 지출</span> {totalExpense}원</div>
                <div className='averExpension'><span>하루 평균 소비</span> {totalExpense / 30}원</div>
        </StyleExpension>
    )
}