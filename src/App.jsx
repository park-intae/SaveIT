import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    // article별로 컴포넌트 분리해야 함
    <>
      <header>
        <img/>
        <div className='login'>
          {/* 가지고 디자인 해보세용 */}
          {isLogin === 'false' ? <button>구글 로그인</button>:<div><img className='profile'></img><p>{userName}</p></div>}
        </div>
      </header>
      <main>
        <section className='mainHeader'>
          <article className='goal'>
            <div className='current'>
              <div className='goalSummary'></div>
              <div className='progressBar'></div>
            </div>
            <div className='expension'>
              <div className='totalExpension'></div>
              <div className='averExpension'></div>
            </div>
          </article>
          <article className='expend'>
            <article className='comment'>
            </article>
            <article className='graph'>
            </article>
          </article>
        </section>
        <section className='expDetail'>
          <table></table>
        </section>
      </main>
      <footer>
      </footer>
    </>
  )
}

export default App
