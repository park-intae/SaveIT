import { useEffect, useRef, useState } from "react";
import styled from "styled-components"

const StyleRecordItem = styled.div`
display: flex;
overflow: hidden;
font-size: 13px;
padding: 8px;
background-color: white;
border: 1px solid;
border-radius: 8px;
box-shadow: 0 2px 6px rgba(0, 0, 0, 0.05);
transition: box-shadow 0.3s ease, transform 0.3s ease;
width: 95%;

/* 'kind' 값에 따라 테두리 색상 동적 변경 */
border-color: ${({ kind }) =>
    kind === "소비" ? "#e74c3c" : kind === "저축" ? "#27ae60" : "#333"};

&:hover {
  box-shadow: 0 4px 10px rgba(50, 50, 50, 0.1);
  transform: translateY(-1px) translateZ(0);
}

@keyframes slideLeft {
  0% { transform: translateX(0%); }
  100% { transform: translateX(-150%); }
}

&:hover .Ilabel.overflowed span {
  transform: translateX(-100%);
}

&:hover .Ivalue.overflowed span {
  transform: translateX(calc(-100%));
}

/* .Ilabel과 .Ivalue에 공통 적용되는 스타일 */
.Ilabel,
.Ivalue {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  position: relative;
}

.Ilabel span,
.Ivalue span{
    display: inline-block;
    min-width: 0;
    max-width: 100%;
    transition: transform 1s ease-out;
    }

.Ilabel {
  padding-left: 5px;
  flex: 0 0 auto;
  width: 40%;
}

.Ivalue {
  padding-right: 5px;
  flex: 1 1 auto;
  width: 60%;
  text-align: right;
  font-size: clamp(12px, 13px, 16px);
}
`

export default function RecordItem({ kind, category, amount }) {
  // 인터렉션 애니메이션 관리를 위한 길이 판단
  const labelRef = useRef(null);
  const valueRef = useRef(null);
  const [isLabelOverflow, setIsLabelOverflow] = useState(false);
  const [isValueOverflow, setIsValueOverflow] = useState(false);

  useEffect(() => {
    const id = requestAnimationFrame(() => {
      if (labelRef.current) {
        setIsLabelOverflow(labelRef.current.scrollWidth > labelRef.current.offsetWidth);
      }
      if (valueRef.current) {
        setIsValueOverflow(valueRef.current.scrollWidth > valueRef.current.offsetWidth);
      }
    });
    return () => cancelAnimationFrame(id);
  }, [category, amount]);

  return (
    <StyleRecordItem className="RecordItem" kind={kind}>
      <div className={`Ilabel ${isLabelOverflow ? 'overflowed' : ''}`}>
        <span ref={labelRef}>
          {category}
        </span>
      </div>
      <div className={`Ivalue ${isValueOverflow ? 'overflowed' : ''}`}>
        <span ref={valueRef}>
          ₩{amount.toLocaleString()}
        </span>
      </div>
    </StyleRecordItem>
  )
}