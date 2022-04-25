const URL = "https://demoschool.edu:9000/refreshtoken";

export async function refreshToken(){
    const response = await fetch(URL, {
        method: 'Post',
        mode: 'cors',
        credentials: 'include',
    })
    console.log(response.statusText);
    return;
};