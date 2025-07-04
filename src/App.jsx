import './App.css'
import Header from './component/header/Header'
import Main from './component/main/Main'

function App() {

  return (
    // article별로 컴포넌트 분리해야 함
    <>
      <header>
        <Header/>
      </header>
      <main>
        <Main/>
      </main>
      <footer>
        푸터임
      </footer>
    </>
  )
}

export default App
