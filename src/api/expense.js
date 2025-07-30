import axios from "axios";
import useTokenStore from "@stores/useTokenStore";

export async function getExpense(offset = 0) {
    const token = useTokenStore.getState().token;

    try {
        const response = await axios.get(`https://localhost:8080/api/expense?offset=${offset}`, {
        headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json'
            }
        });

        return response.data;
    } catch (error) {
    console.error("getSave 에러:", error);

    const message =
      error.response?.data?.message ||
      error.message ||
      "서버 오류";

    throw new Error(message);
    }
}

export async function postExpense(day, kind, category, amount) {
    const token = useTokenStore.getState().token;

    const response = await fetch("https://localhost:8080/api/expense?", {
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
