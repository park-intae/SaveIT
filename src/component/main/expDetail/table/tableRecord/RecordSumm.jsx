import styled from "styled-components";

const StyleSumm = styled.article`
    border-top: 1px solid #d9d9d9;
    margin: 8px 0;
    padding: 4px 0;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;

    p {
        display: flex;
        width: 100%;
        margin: 4px 0;
        font-size: 15.5px;
    }

    .label {
        padding-left: 5px;
        flex: 0 0 auto;
    }

    .value {
        padding-right: 5px;
        color: black;
        flex: 1 1 auto;
        text-align: right;
    }

    .exspand {
        color: #e74c3c; /* 빨강 */
    }

    .saving {
        color: #27ae60; /* 초록 */
    }
`
export default function RecordSumm({ entries }) {
    const totalConsumption = entries
        .filter(ent => ent.kind == '소비')
        .reduce((sum, ent) => sum + ent.amount, 0);

    const totalSaving = entries
        .filter(ent => ent.kind == '저축')
        .reduce((sum, ent) => sum + ent.amount, 0);



    return (
        <StyleSumm className="summary">
            {/* <h3>{date}</h3> */}
            <p className="exspand"><span className="label">소비</span> <span className="value">₩ {totalConsumption.toLocaleString()}</span></p>
            <p className="saving"><span className="label">저축</span> <span className="value">₩ {totalSaving.toLocaleString()}</span></p>
        </StyleSumm>
    )
}