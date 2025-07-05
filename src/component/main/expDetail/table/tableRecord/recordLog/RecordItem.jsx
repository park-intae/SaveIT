export default function RecordItem({category, amount}) {
    return (
        <>
            <span>{category}</span>
            <span>{amount.toLocaleString()}</span>
        </>
    )
}