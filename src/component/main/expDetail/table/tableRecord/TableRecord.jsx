import RecordLog from "./recordLog/RecordLog";
import RecordSumm from "./RecordSumm";

export default function TableRecord({ date, entries }) {
    console.log("📅 date:", date);
    console.log("📄 entries:", entries);
    return (
        <article>
            <RecordSumm date={date} entries={entries} />
            <RecordLog entries={entries} />
        </article>
    )
}