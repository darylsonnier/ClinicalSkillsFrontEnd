const URL = "https://demoschool.edu:9000/";

export async function fetchData(endPoint){
    const response = await fetch(URL + endPoint, {
        method: 'Get',
        mode: 'cors',
        credentials: 'include',
    })
    let retvalue = await response.json();
    return retvalue;
};