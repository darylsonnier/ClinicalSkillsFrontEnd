const URL = "https://demoschool.edu:9000/refreshtoken";

export async function refreshToken(){

    const response = await fetch(URL, {
        body: '',
        method: 'Post',
        mode: 'cors',
        credentials: 'include',
    })
    console.log(response.status);
    clearInterval(window.interval);
    window.interval = setInterval(refreshToken, 295000);
    return;
};