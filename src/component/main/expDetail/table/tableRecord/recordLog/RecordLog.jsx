import styled from "styled-components";
import RecordItem from "./RecordItem";
// import { pulse } from "../../../../../styleComponent/StyleEffect";

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
    margin-bottom: 15px;
    }

    li{
    width: 100%;
    }

    button {
        font-size: 13px;
        width: 20px;
        height: 20px;
        padding: 1px;
        border-radius: 100%;
        transition: box-shadow 0.3s ease;

        &:hover {
        box-shadow: 0 0 0 2px rgb(230, 230, 255);
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