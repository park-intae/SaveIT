// 정상 작동 시키려고 memo는 빼놓음
// back 연결하고 이거 주석 풀어야 됨
import { useState } from "react"

export default function ItemLog({ category, amount
    // , memo
}) {
    const [isModify, setIsModify] = useState(false);

    return (
        <>
            <div className="toggleBtn">
                <input role="switch" type="checkbox" checked={isModify} onChange={() => setIsModify(!isModify)} />
                <span>수정</span><br />
            </div>
            {!isModify ?
                (
                    <>
                        <span>{category}</span>
                        <span>{amount}</span>
                        {/* <span>{memo}</span> */}
                    </>
                ) : (
                    <>
                        <input placeholder={category} />
                        <input placeholder={amount} />
                        {/* <input placeholder={memo}/> */}
                    </>
                )
            }
            <button>닫기</button>
            {isModify && <button>수정</button>}
        </>
    )
}