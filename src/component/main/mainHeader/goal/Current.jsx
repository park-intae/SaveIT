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

`

export default function Current() {
    return (
        <StyleCurrent>
            <div className='current'>
                <p>목표달성 현황</p>
                <div className='goalSummary'>
                    250,000원 <span>/ 500,000원</span>
                    <img className="alter" src={alter} alt="수정하기" />
                </div>
                <div className='progressBar'></div>
            </div>
        </StyleCurrent>
    )
}