import styled from "styled-components"
import { ResponsiveContext } from '../../../../context/ResponsiveProvider';
import { useContext, useEffect, useState } from 'react';
import axios from "axios";

const StyleComment = styled.article`
  flex: 2;
  min-width: 0;
  text-align: ${({ $isMobile }) => ($isMobile ? "center" : "right")};

  h3{
    font-size: 18px;
    font-weight: bold;
  }
  p{
    font-size: 15px;
    padding: 18px 0;
  }
  span{
    font-size: 13px;
  }
`

export default function AI_Comment() {
    const {isMobile} = useContext(ResponsiveContext);
    const[summary,setSummary] =useState("");

    useEffect(() => {
      axios
        .post(
          "/api/analyze", 
          {},
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("jwt")}`,
            },
          }
        )
        .then((res) => {
          setSummary(res.data.summary);
        })
        .catch((err) => {
          console.log("실패:", err);
          setSummary("분석 요청에 실패했습니다");
        });
    }, []);


    return (
        <StyleComment $isMobile={isMobile}>
            <article className='AIcomment'>
              <div>{summary}</div>

{/* 
                <h3>🍽️  이번 달 가장 많은 소비는 식비입니다</h3>
                <p>이번 달 식비가 45%로 가장 컸어요.<br />
                    주중 배달이 많았던 점이 눈에 띄네요!<br />
                    다음 주엔 하루만 줄여도 2만 원을 절약할 수 있어요.</p>
                <span>💡 1주 1회 요리 도전 → 평균 15 % 절약!</span> */}
            </article>
        </StyleComment>
    )
}