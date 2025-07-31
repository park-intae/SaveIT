import axios from "axios";
import useTokenStore from "@stores/useTokenStore";

export async function getExpense(offset = 0) {
    const token = useTokenStore.getState().token;

    try {
        const response = await axios.get(`http://localhost:8080/api/expense?offset=${offset}`, {
        headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json'
            }
        });
        // console.log(response.data)
        return response.data;
    } catch (error) {
        throw new Error("서버 오류");
    }
}

export async function postExpense(day, kind, category, amount) {
    const token = useTokenStore.getState().token;

    const response = await fetch("http://localhost:8080/api/expense?", {
            method: "POST",
            headers: {
                "Authorization": `Bearer ${token}`,
                "Content-Type" : "application/json",
            },
            body: JSON.stringify({expenseDate:day, kind, category, amount})
        })
    
        if(!response.ok) {
            throw new Error("서버 오류")
        } 
    
        return await response.json()

        
}


export async function deleteExpense(expenseId) {
    const token = useTokenStore.getState().token;

    try {
        const response = await axios.delete(`http://localhost:8080/api/expense/delete`, {
            params: { expenseId },
            headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/json"
            }
        });
        return response.data;
    } catch (error) {
        console.error("DELETE 요청 실패", error);
        throw new Error("삭제 실패");
    }
}