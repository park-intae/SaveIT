import axios from "axios";
import useTokenStore from "@stores/useTokenStore";

export async function getSave(offset = 0) {
    const token = useTokenStore.getState().token;

    try {
        const response = await axios.get(`http://localhost:8080/api/save?offset=${offset}`, {
        headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json'
            }
        });

        return response.data;
    } catch (error) {
        throw new Error("서버 오류");
    }
}

export async function postSave(day, kind, category, amount) {
    const token = useTokenStore.getState().token;

    const response = await fetch("http://localhost:8080/api/save?", {
            method: "POST",
            headers: {
                "Authorization": `Bearer ${token}`,
                "Content-Type" : "application/json",
            },
            body: JSON.stringify({saveDate:day, kind, category, amount})
        })
    
        if(!response.ok) {
            throw new Error("서버 오류")
        } 
    
        return await response.json()
}