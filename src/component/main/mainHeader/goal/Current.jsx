import alter from '../../../../assets/pencil.svg'
import styled from 'styled-components';

const StyleCurrent = styled.div`
    p {
        font-size: 18px;
    }
    .goalSummary {
        font-size: 28px;
        font-weight: bold;
        padding: 8px 0 15px;
    }
    span{
        font-size: 15px;
        color: #888;
    }
    .alter {
        width: 16px;
        cursor: pointer;
    }
    .progressBar {
        background-color: #eee;
        border-radius: 999px;
        height: 14px;
        position: relative;
        overflow: hidden;
        margin-bottom: 12px;
    }
    .fill {
        background-color: #2F80ED;
        height: 100%;
        border-radius: 999px;
        width: ${(250000 / 500000) * 100}%; /* 현재 값 계산해서 퍼센트 */
        transition: width 0.4s ease;
    }
    .percentText {
        position: absolute;
        right: 10px;
        top: 50%;
        transform: translateY(-50%);
        font-size: 11px;
        color: #333;
        font-weight: 500;
    }

`

import { useEffect, useRef, useState } from "react";
import { UserData } from "../../../../api/user.js";

export default function Current() {
<<<<<<< HEAD

  const [visual, setVisual] = useState(false)
  const [inputGoal, setInputGoal] = useState("")
  const focusRef = useRef(null)
  const prevGoal = useRef("")

  // 목업 데이터 가져오기
  const [user, setUser] = useState([])

  useEffect(()=> {
    UserData()
    .then((res)=> {setUser(res.data)
                   setInputGoal(res.data[0]?.finalGoal)})
    .catch((err) => console.error("데이터 불러오기 실패", err))
  }, [])

  // console.log(goals)
 
  useEffect(()=> {
    //수정 버튼 시 입력 값 포커스
    if(visual) {
        focusRef.current.focus()
        prevGoal.current = inputGoal    
    }
  }, [visual])

  //포커스 시 초기값이 비워져있어 사용
  const handleFocus = ()=> {
    setVisual(true)
  }

  // input에서 입력 값 변화 확인
  const handleChange = (e)=> {
    setInputGoal(e.target.value)
  }

  // 키보드 입력을 확인하는 함수
  const handleKeyDown = (e)=> {
    if(e.key === "Enter") {
        setVisual(false)
    }
    else if(e.key === "Escape") {
      setInputGoal(prevGoal.current)
      setVisual(false)
    }
  }

  // 클릭시 입력 값 전달
  const handleClick = async ()=> {
    setVisual(false)
    try {
        const result = await UserData(inputGoal)
        console.log("서버 응답: ", result);
    } catch (err) {
        console.error("에러 발생: ", err.message);
    }

    console.log(inputGoal)
  }

  return (
    <div className="current">
      <p>목표달성 현황</p>

      <div className="goalSummary">
        <div className="saveMoney">원</div>

        {visual ?
            <>
            <input value={inputGoal} type="number" required
            ref={focusRef} onChange={handleChange} onKeyDown={handleKeyDown}/>

            <span>원</span>
            </>
            : 
            <p>{inputGoal}원</p>
        }
        

        {visual ? 
        <button onClick={handleClick} type="button">
            <p>확인</p>
        </button>
        :
        <button onClick={handleFocus} type="button">
            <img className="alter" src={alter} alt="수정하기" />
        </button>
        }
    
        
      </div>

      <div className="progressBar"></div>
    </div>
  );
=======
    const current = 250000;
    const goal = 500000;
    const percent = Math.round((current / goal) * 100);
    
    return (
        <StyleCurrent>
            <div className='current'>
                <p>목표달성 현황</p>
                <div className='goalSummary'>
                    250,000원 <span>/ 500,000원</span>
                    <img className="alter" src={alter} alt="수정하기" />
                </div>
                <div className='progressBar'>
                    <div className='fill' style={{ width: `${percent}%` }} />
                    <div className='percentText'>{percent}%</div>
                </div>
            </div>
        </StyleCurrent>
    )
>>>>>>> origin/master
}