import RecordItem from "./RecordItem";

export default function RecordLog({entries = []}) {
    console.log(`entries = ${entries}`);
    return (
        <article className="log">
            {entries.length > 0 ?
                (<ul>
                    {entries.map((item, i) => (
                        <li key={i}>
                            {/* <span>{item.category}</span>
                            <span>{item.amount}</span> */}
                            <RecordItem/>
                        </li>
                    ))}
                </ul>) : (
                    <p>데이터 입력이 필요합니다</p>
                )
            }
            <button>add</button>
        </article>
    )
}