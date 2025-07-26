import { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import ItemLog from './Itemlog';
import useHandleClickOutside from '@hooks/useHandleClickOutside';

const StyleRecordItem = styled.div`
  display: flex;
  flex-direction: ${({ onDetailMode }) => (onDetailMode ? 'column' : 'row')};
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
  border-color: ${({ kind }) => (kind === '소비' ? '#e74c3c' : kind === '저축' ? '#27ae60' : '#333')};

  &:hover {
    box-shadow: 0 4px 10px rgba(50, 50, 50, 0.1);
    transform: translateY(-1px) translateZ(0);
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
  .Ivalue span {
    display: inline-block;
    min-width: 0;
    max-width: 100%;
    transition: transform 1s ease-out;
  }

  &:hover .Ilabel.overflowed span {
    transform: translateX(calc(-1 * var(--labelSlide, 0px)));
  }

  &:hover .Ivalue.overflowed span {
    transform: translateX(calc(-1 * var(--valueSlide, 0px)));
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
`;

// memo 주석 효과 지워야됨
export default function RecordItem({ kind, category, amount
  //, memo
}) {
  //상세보기 길이판단
  const [onDetailMode, setOnDetailMode] = useState(false);

  const detailRef = useRef(null);

  function closeDetail() {
    setOnDetailMode(false)
  }
  useHandleClickOutside(detailRef, () => {
    if (onDetailMode) closeDetail();  // 밖을 클릭했을 때만 끄기
  }, onDetailMode);

  // marquee 애니메이션 관리를 위한 길이 판단
  const [isLabelOverflow, setIsLabelOverflow] = useState(false);
  const [isValueOverflow, setIsValueOverflow] = useState(false);

  const [labelSlide, setLabelSlide] = useState(0);
  const [valueSlide, setValueSlide] = useState(0);

  const labelRef = useRef(null);
  const valueRef = useRef(null);

  useEffect(() => {
    const id = requestAnimationFrame(() => {
      if (labelRef.current) {
        const label = labelRef.current;
        const isOverflow = label.scrollWidth > label.offsetWidth;
        setIsLabelOverflow(isOverflow);
        setLabelSlide(isOverflow ? label.scrollWidth - label.offsetWidth : 0);
      }
      if (valueRef.current) {
        const value = valueRef.current;
        const isOverflow = value.scrollWidth > value.offsetWidth;
        setIsValueOverflow(isOverflow);
        setValueSlide(isOverflow ? value.scrollWidth - value.offsetWidth : 0);
      }
    });
    return () => cancelAnimationFrame(id);
  }, [category, amount]);


  return (
    <StyleRecordItem
      className="RecordItem"
      kind={kind}
      onDetailMode={onDetailMode}
      style={{
        '--labelSlide': `${labelSlide}px`,
        '--valueSlide': `${valueSlide}px`,
      }}
      onClick={() => setOnDetailMode(true)}
      ref={detailRef}
    >
      {!onDetailMode ? (
        <>
          <div className={`Ilabel ${isLabelOverflow ? 'overflowed' : ''}`}>
            <span ref={labelRef}>{category}</span>
          </div>
          <div className={`Ivalue ${isValueOverflow ? 'overflowed' : ''}`}>
            {typeof amount === 'number' ? `₩${amount.toLocaleString()}` : '데이터 없음'}
          </div>
        </>
      ) :
        <ItemLog
          category={category}
          amount={amount}
        />
      }
    </StyleRecordItem>
  );
}