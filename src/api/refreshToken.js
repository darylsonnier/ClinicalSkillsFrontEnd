const URL = "https://demoschool.edu:9000/refreshtoken";

export async function refreshToken(){
    const response = await fetch(URL, {
        method: 'Get',
        mode: 'cors',
        credentials: 'include',
    })
    let retvalue = await response.status;
    return retvalue;
};