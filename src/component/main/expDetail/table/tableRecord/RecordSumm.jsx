export default function RecordSumm({date, entries}) {
    const totalConsumption = entries
        .filter(ent => ent.kind == '소비')
        .reduce((sum, ent) => sum + ent.amount, 0);

    const totalSaving = entries
        .filter(ent => ent.kind == '저축')
        .reduce((sum, ent) => sum + ent.amount, 0);
    
    return (
        <header className="summary">
            <h3>{date}</h3>
            <p>총 소비: {totalConsumption.toLocaleString()}</p>
            <p>총 저축: {totalSaving.toLocaleString()}</p>
        </header>
    )
}