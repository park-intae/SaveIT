// import axios from "/node_modules/.vite/deps/axios.js?v=a717f434"

import  useTokenStore  from "../store/useTokenStore"


export async function getUserGoal() {
  const token = useTokenStore.getState().token;

  
  const response = await fetch("http://localhost:8080/api/goal", {
    method: "GET",
    headers: {
      "Authorization": `Bearer ${token}`,
      "Content-Type": "application/json"
    }
  });
  
  if (!response.ok) throw new Error("서버 오류");
  return await response.json();
}

export async function postUserGoal(goal_amount) {
    const token = useTokenStore.getState().token;

    const response = await fetch("http://localhost:8080/api/goal", {
        method: "POST",
        headers: {
            "Authorization": `Bearer ${token}`,
            "Content-Type" : "application/json",
        },
        body: JSON.stringify({goalAmount : goal_amount})
    })

    if(!response.ok) {
        throw new Error("서버 오류")
    } 

    return await response.json()
} 

