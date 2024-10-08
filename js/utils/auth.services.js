import { BASE_URL } from "../constants/services.contanst.js"

export async function login(loginData) {
    
    const response = await fetch(`${BASE_URL}/login`,{
        method : 'POST',
        headers: {
            'Content-Type': 'application/json'
          },
        body: JSON.stringify(loginData)
    })

    return await response.json()
}