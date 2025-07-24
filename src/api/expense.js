import axios from "axios";
import useTokenStore from "../store/useTokenStore";

export async function getExpense() {
    const token = useTokenStore.getState().token;

    try {
        const response = await axios.get('http://localhost:8080/api/expense', {
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
