//import './App.css'
import './layout.css'
import logo from './img/logo.svg'
import mobileLogo from './img/mobile_logo.svg'
import profile from './img/profile.svg'

function App() {

  return (
    // article별로 컴포넌트 분리해야 함
    <>
      <header>
        <picture>
          <source media="(max-width: 768px)" srcSet={mobileLogo} />
          <img className="logo" src={logo} alt="로고" />
        </picture>
        <div className='login'>
          <img className='profile' src={profile}></img>
          {/* 가지고 디자인 해보세용 */}
          {/* {isLogin === 'false' ? <button>구글 로그인</button>:<div><img className='profile'></img><p>{userName}</p></div>} */}
        </div>
      </header>
      <main>
        <section className='mainHeader'>
          <article className='goal'>
            <div className='current'>
              목표 달성 현황
              <div className='goalSummary'>250,000원 <span>/ 500,000원</span></div>
              <div className='progressBar'></div>
            </div>
            <div className='expension'>
              <div className='totalExpension'><span>이번 달 지출</span> 2,400,000원</div>
              <div className='averExpension'><span>하루 평균 소비</span> 30,000원</div>
            </div>
          </article>
          <article className='expend'>
            <div className='expLayout'>{/* 레이아웃용 div 입니다 제거하셔도 됩니다 */}
              <article className='AIcomment'>
                <h3>🍽️  이번 달 가장 많은 소비는 식비입니다</h3>
                <p>이번 달 식비가 45%로 가장 컸어요.<br/>
                주중 배달이 많았던 점이 눈에 띄네요!<br/>
                다음 주엔 하루만 줄여도 2만 원을 절약할 수 있어요.</p>
                <span>💡 1주 1회 요리 도전 → 평균 15 % 절약!</span>
              </article>
              <article className='graph'>
                여기에 원그래프 들어갑니다이
              </article>
            </div>
          </article>
        </section>
        <section className='expDetail'>
          {/* <table>
            테이블이에요
            <tr>
             {날짜.map((item,index)=>(<th key={index}>{item.일자}</th>))}
              <th>
                날짜
              </th>
            </tr>
            <tr>
              <td>
              <div>
                <p className='dayExp'>일 소비 합계</p>
                <p className='daySave'>일 저축 합계</p>
              </div>
              <article>
                <div className='expLog'>어디에 0000원</div>
                <button className='addExp'>+</button>
              </article>
              </td>
            </tr>
          </table> */}
          <article>
            테이블이에요
            <div>
             {/* {날짜.map((item,index)=>(<th key={index}>{item.일자}</th>))} */}
              <div>
                날짜
              </div>
            </div>
            <div>
              <div>
              <div>
                <p className='dayExp'>일 소비 합계</p>
                <p className='daySave'>일 저축 합계</p>
              </div>
              <article>
                <div className='expLog'>어디에 0000원</div>
                <button className='addExp'>+</button>
              </article>
              </div>
            </div>
          </article>
        </section>
      </main>
      <footer>
        <div>
          <p>(주)세이빗 | 대표 Thein 2Team<br/>
          사업자등록번호 123-45-67890 | 통신판매업 신고 2025-서울강남-1234<br/>
          서울특별시 강남구 테헤란로 123, 4층 (06123)</p>
          <p>고객센터 1588-1234 (평일 09:00~18:00) | E-mail support@saveit.co.kr</p>
        </div>
        <div className='footRight'>
          <p>이용약관 | 개인정보처리방침 | 전자금융거래약관 | 청소년보호정책</p>
          <span>© 2025 SaveIT, Inc. All rights reserved.</span>
        </div>
      </footer>
    </>
  )
}

export default App
