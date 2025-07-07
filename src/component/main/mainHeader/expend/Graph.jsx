import styled from "styled-components"

const StyleExpGraph = styled.article`
  flex: 1;
  width: clamp(160px, 20vw, 200px);
`

export default function Graph() {
    return (
        <article className='graph'>
            여기에 원그래프 들어갑니다
        </article>
    )
}