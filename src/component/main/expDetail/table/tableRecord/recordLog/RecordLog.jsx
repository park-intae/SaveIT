import styled from "styled-components";
import RecordItem from "./RecordItem";
import { pulse } from "../../../../../styleComponent/StyleEffect";

const StyleLog = styled.article`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 3px;
    width: 100%;

    ul{
    display: flex;
    flex-direction: column;
    gap: 5px;
    margin-bottom: 5px;
    width: 100%;
    }

    li{
    width: 100%;
    }

    button {
        border-radius: 50%;
        &:hover {
        animation: ${pulse} 0.5s;
         }
    }

`

export default function RecordLog({ entries = [] }) {
    return (
        <StyleLog className="log">
            {entries.length > 0 && (
                <ul>
                    {entries.map((item, i) => (
                        <li key={i}>
                            <RecordItem {...item} />
                        </li>
                    ))}
                </ul>
            )}

            <button>+</button>
        </StyleLog>
    )
}