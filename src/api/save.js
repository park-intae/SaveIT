import axios from "axios";
import useTokenStore from "../store/useTokenStore";

export async function getSave() {
    const token = useTokenStore.getState().token;

    try {
        const response = await axios.get('http://localhost:8080/api/save', {
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
