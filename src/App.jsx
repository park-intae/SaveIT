import './App.css'
import Footer from './component/footer/Footer'
import Header from './component/header/Header'
import Main from './component/main/Main'
import { ResponsiveProvider } from './context/ResponsiveProvider'

function App() {

  return (
    // article별로 컴포넌트 분리해야 함
    <>
      <ResponsiveProvider>
        <Header />
        <Main />
        <Footer/>
      </ResponsiveProvider>
      {/* <footer>
        <article>
          <p>(주)세이빗 | 대표 Thein 2Team<br />
            사업자등록번호 123-45-67890 | 통신판매업 신고 2025-서울강남-1234<br />
            서울특별시 강남구 테헤란로 123, 4층 (06123)</p>
          <p>고객센터 1588-1234 (평일 09:00~18:00) | E-mail support@saveit.co.kr</p>
        </article>
        <article className='footRight'>
          <p>이용약관 | 개인정보처리방침 | 전자금융거래약관 | 청소년보호정책</p>
          <span>© 2025 SaveIT, Inc. All rights reserved.</span>
        </article>
      </footer> */}
    </>
  )
}

export default App
