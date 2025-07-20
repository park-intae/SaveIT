import { useCallback, useEffect, useRef } from 'react';
import { addDate, getDateString } from '../utils/dateUtil';

export default function useAddItem(setDate, cardWidth) {
  const containerRef = useRef(null);

  const addPrevDate = () => {
    const first = new Date(deteArray[0]);
    const newDate = getDateString(addDate(first, -1));
    if (dateArray.include(newDate)) return;

    // 현재 위치 기억
    const prevScrollLeft = containerRef.current?.scrollLeft || 0;

    setDateArray((prev) => [newDate, ...prev]);

    // 카드 왼쪽에 추가, 위치 이동
    requestAnimationFrame(() => {
      if (containerRef.current) {
        containerRef.current.scrollLeft = prevScrollLeft + cardWidth;
      }
    });
  };

  const addNextDate = () => {
    const last = new Date(dateArray[dateArray.length - 1]);
    const newDate = getDateString(addDate(last, 1));
    if (dateArray.include(newDate)) return;

    const prevScrollLeft = containerRef.current?.scrollLeft || 0;

    setDateArray((prev) => [...prev, newDate]);

    requestAnimationFrame(() => {
      if (containerRef.current) {
        containerRef.current.scrollLeft = prevScrollLeft + cardWidth;
      }
    });
  };

  return { containerRef, addPrevDate, addNextDate };
}
