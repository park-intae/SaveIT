import styled from "styled-components"

const StyleRecordItem = styled.div`
display: flex;
overflow: hidden;
font-size: 13px;
padding: 8px;
background-color: white;
border: 1px solid;
border-radius: 8px;
box-shadow: 0 2px 6px rgba(0, 0, 0, 0.05);
transition: box-shadow 0.3s ease, transform 0.3s ease;

/* 'kind' 값에 따라 테두리 색상 동적 변경 */
border-color: ${({ kind }) =>
        kind === "소비" ? "#e74c3c" : kind === "저축" ? "#27ae60" : "#333"};

&:hover {
  box-shadow: 0 4px 10px rgba(50, 50, 50, 0.1);
  transform: translateY(-1px) translateZ(0);
}

&:hover .Ilabel span {
  transform: translateX(-100%);
}

&:hover .Ivalue span {
  transform: translateX(calc(50% - 100%));
}

/* .Ilabel과 .Ivalue에 공통 적용되는 스타일 */
.Ilabel,
.Ivalue {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  position: relative;
}

.Ilabel span,
.Ivalue span{
    display: inline-block;
    transition: transform 1s ease-out;
    }

.Ilabel {
  padding-left: 5px;
  flex: 0 0 auto;
  width: 40%;
}

.Ivalue {
  padding-right: 5px;
  flex: 1 1 auto;
  text-align: right;
  font-size: clamp(12px, 13px, 16px);
}
`
// const StyleRecordItem = styled.div`
// display: flex;
// overflow: hidden;
// font-size: 13px;
// padding: 8px;
// background-color: white;
// border: 1px solid;
// border-radius: 8px;
// box-shadow: 0 2px 6px rgba(0, 0, 0, 0.05);
// transition: box-shadow 0.3s ease, transform 0.3s ease;

// /* 'kind' 값에 따라 테두리 색상 동적 변경 */
// border-color: ${({ kind }) =>
//         kind === "소비" ? "#e74c3c" : kind === "저축" ? "#27ae60" : "#333"};

// &:hover {
//   box-shadow: 0 4px 10px rgba(50, 50, 50, 0.1);
//   transform: translateY(-1px) translateZ(0);
// }

// /* .Ilabel과 .Ivalue에 공통 적용되는 스타일 */
// .Ilabel,
// .Ivalue {
//   white-space: nowrap;
//   overflow: hidden;
//   text-overflow: ellipsis;
//   position: relative;
// }

// .Ilabel span,
// .Ivalue span{
//     display: inline-block;
//     transition: transform 1s ease-out;
//     }

// .Ilabel {
//   padding-left: 5px;
//   flex: 0 0 auto;
//   width: 40%;
//   $:hover{
//     overflow: visible;
//     text-overflow: clip;
//   }
//   &:hover span{
//     transform: translateX(-100%);
//   }
// }

// .Ivalue {
//   padding-right: 5px;
//   flex: 1 1 auto;
//   text-align: right;
//   font-size: clamp(12px, 13px, 16px);
//   $:hover{
//     overflow: visible;
//     text-overflow: clip;
//   }
//   &:hover span{
//     transform: translateX(calc(50% - 100%));
//   }
// }
// `

export default function RecordItem({ kind, category, amount }) {
    return (
        <StyleRecordItem className="RecordItem" kind={kind}>
            <div className="Ilabel"><span>{category}</span></div>
            <div className="Ivalue"><span>₩{amount.toLocaleString()}</span></div>
        </StyleRecordItem>
    )
}