import RecordLog from "./recordLog/RecordLog";
import RecordSumm from "./RecordSumm";

export default function TableRecord({ date, entries }) {
    return (
        <article>
            <RecordSumm date={date} entries={entries} />
            <RecordLog date={date} />
        </article>
    )
}