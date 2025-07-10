// import axios from "/node_modules/.vite/deps/axios.js?v=a717f434"

export async function UserData(finalGoal) {
    const response = await fetch("http://localhost:8080/api/user", {
        method: "POST",
        headers: {
            "Content-Type" : "application/json",
        },
        body: JSON.stringify({finalGoal})
    })

    if(!response.ok) {
        throw new Error("서버 오류")
    } 

    return await response.json()
} 

