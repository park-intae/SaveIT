import './App.css'

function App() {

  return (
    // article별로 컴포넌트 분리해야 함
    <>
      <header>
        <img className='logo' />
        <div className='login'>
          {/* 가지고 디자인 해보세용 */}
          {/* {isLogin === 'false' ? <button>구글 로그인</button>:<div><img className='profile'></img><p>{userName}</p></div>} */}
        </div>
      </header>
      <main>
        <section className='mainHeader'>
          <article className='goal'>
            <div className='current'>
              목표달성 현황
              <div className='goalSummary'>00000원/00000원</div>
              <div className='progressBar'></div>
            </div>
            <div className='expension'>
              <div className='totalExpension'>이번 달 0000원</div>
              <div className='averExpension'>지금까지 평균 0000원</div>
            </div>
          </article>
          <article className='expend'>
            <div className='expLayout'>{/* 레이아웃용 div 입니다 제거하셔도 됩니다 */}
              <article className='AIcomment'>
                여기에 ai 훈수 들어갑니다
              </article>
              <article className='graph'>
                여기에 원그래프 들어갑니다
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
        푸터임
      </footer>
    </>
  )
}

export default App
