import { ResponsiveContext } from "@context/ResponsiveContext"
import { useContext } from "react"
import alter from '@assets/pencil.svg'
import styled from 'styled-components';

const StyleCurrent = styled.div`
    p {
        font-size: ${({ $isMobile, $isTablet }) => ($isMobile ? "16px" : $isTablet ? "16px" : "18px")};
    }
    .goalSummary {
        font-size: ${({ $isMobile, $isTablet }) => ($isMobile ? "24px" : $isTablet ? "24px" : "28px")};
        font-weight: bold;
        padding: 8px 0 15px;
        display: flex;
        align-items: baseline;
        gap: 5px;
    }
    span{
        font-size: 15px;
        color: #888;
    }
    .alter {
        display: inline-block;
        width: 20px;
        cursor: pointer;
        margin: auto 0;
    }
    .progressBar {
        background-color: #eee;
        border-radius: 999px;
        height: 18px;
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

export default function Current() {
    const {isMobile, isTablet} = useContext(ResponsiveContext);

    const current = 250000;
    const goal = 500000;
    const percent = Math.round((current / goal) * 100);
    
    return (
        <StyleCurrent $isMobile={isMobile} $isTablet={isTablet}>
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
}