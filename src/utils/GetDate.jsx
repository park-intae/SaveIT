export default function GetDate(days) {
    //날짜 보정 용
    const offset = new Date().getTimezoneOffset() * 60000;
    const today = new Date(Date.now() - offset);

    return (
        Array.from({ length: days }, (_, idx) => {
            const day = new Date(today);
            day.setDate(today.getDate() + idx);
            return (day.toISOString().slice(0, 10))
        })
    )
}