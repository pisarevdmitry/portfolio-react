export const request = async(route, type, body) => {
    if(body) {
        body = JSON.stringify(body)
    }
    const response = await fetch(route,{
        method: type,
        body,
        headers: {
            "Content-Type": "application/json",
        },
    })
    const data = await response.json()
    if(response.status >= 400) {
        throw (data)
    }
    return data
    
}
