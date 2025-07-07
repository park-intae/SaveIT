import alter from '../../../../assets/pencil.svg'

export default function Current() {
    return (
        <div className='current'>
            <p>목표달성 현황</p>
            <div className='goalSummary'>
                250,000원 <span>/ 500,000원</span>
                <img className="alter" src={alter} alt="수정하기" />
            </div>
            <div className='progressBar'></div>
        </div>
    )
}