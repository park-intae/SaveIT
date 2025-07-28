import StyleQuote from '@component/styleComponent/StyleQuote';
import CallQuote from '@utils/callQuote';
import { useEffect, useRef, useState } from 'react';
import styled, { keyframes } from 'styled-components';

const slideLeft = keyframes`
    0%{transform: translateX(100%);}
    100%{transform: translateX(-100%);}
`;

const TickerWrapper = styled.div`
  width: 100%;
  overflow: hidden;
  white-space: nowrap;
  height: 40px;
  margin: 2rem 0;
`;

const TickerText = styled.p`
  display: inline-block;
  padding-left: 100%;
  animation: ${slideLeft} 15s linear infinite;
  font-size: 1rem;
  white-space: nowrap;
`

export default function Quote() {
  const [quotes, setQuotes] = useState([]);
  const [currentIdx, setCurrentIdx] = useState(0);
  const timerRef = useRef(null);

  const fetchQuotes = async () => {
    const results = await CallQuote(['business', 'success', 'famous'], 5);
    setQuotes(results);
    setCurrentIdx(0);
  };

  useEffect(() => {
    fetchQuotes();

    // 번역 버전인데 cors 오류 있어서 백단이랑 같이 처리해야됨
    // (async () => {
    //   const raw = await CallQuote(['business', 'success', 'famous-qutes']); // 명언 api 호출
    //   const translated = await translateText(raw.content); // 번역 api 호출
    //   setQuote({
    //     original: raw.content,
    //     translated,
    //     author: raw.author,
    //   });
    // })(); // 즉시 시행;
  }, []);

  useEffect(() => {
    if (quotes.length === 0) return;

    timerRef.current = setInterval(() => {
      setCurrentIdx((prevIdx) => {
        const nextIdx = prevIdx + 1;
        if (nextIdx >= quotes.length) {
          fetchQuotes();
          return 0;
        }
        return nextIdx;
      });
    }, 13000);
    return () => clearInterval(timerRef.current);
  }, [quotes]);

  const quote = quotes[currentIdx];
  if (!quote) return null;

  return (
    <StyleQuote>
      <TickerWrapper>
        <TickerText>
          {quote ? (
            <p>
              "{quote.content}" — {quote.author}
            </p>
          ) : (
            <p>명언을 불러오는 중...</p>
          )}
        </TickerText>
      </TickerWrapper>
    </StyleQuote>
  );
}
