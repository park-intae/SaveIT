import { useCallback, useEffect, useRef } from "react";
import { addDate, getDateString } from "../utils/dateUtil";

export default function useInfiniteScroll(setDate, cardWidth){
    const containerRef = useRef(null);
    const scrollLeftRef = useRef(false);

    // 스크롤 이벤트 함수
    const onScroll = useCallback(()=>{
        if (!containerRef.current || scrollLeftRef.current) return;

        const scrollLeft = containerRef.current.scrollLeft;
        const maxScrollLeft = 
            containerRef.current.scrollWidth - containerRef.current.clientWidth;

        requestAnimationFrame(() =>{
            const el = containerRef.current;
        })
        })}
//         // 스크롤 변화량
//         const delta = scrollLeft - scrollLeftRef.current;
//         scrollLeftRef.current = scrollLeft;

//         // 스크롤 유연하게 넘기기
//         if(delta > scrollLeft/2 && scrollLeft > 0){
//             // 다음 날짜 가져오는 로직
//             setDate((prev) => {
//                 const lastDate = new Date(prev[prev.length - 1]);
//                 const nextDate = getDateString(addDate(lastDate, 1));
//                 // 제일 왼쪽 제거하고 오른쪽에 새로 추가
//                 const newArr = [...prev.slice(1), nextDate];
//                 return newArr;
//             })
//             // 카드 넘기기
//             containerRef.current.scrollLeft -= cardWidth;
//         } else if(delta < -cardWidth / 2 && scrollLeft < maxScrollLeft){
//             // 이전 날짜 가져오는 로직
//             setDate((prev)=>{
//                 const firstDate = new Date(prev[0]);
//                 const pastDate = getDateString(addDate(firstDate, -1));
//                 // 제일 오른쪽 제거하고 오른쪽에 새로 추가
//                 const newArr = [pastDate, ...prev.slice(0, prev.length -1)];
//                 return newArr;
//             });
//             //카드 넘기기
//             containerRef.current.scrollLeft += cardWidth;
//         }
//     },[cardWidth,setDate]);
    
//     // 컴포넌트 마운트 여부에 따라 이벤트 등록/해제
//     useEffect(()=>{
//         const container = containerRef.current;
//         if (!container) return;

//         container.addEventListener("scroll",onScroll);
//         return () => container.removeEventListener("scroll",onScroll);
//     },[onScroll]);
// }