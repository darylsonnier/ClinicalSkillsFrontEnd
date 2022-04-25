function logout() {
    document.cookie = "token=-; expires = Thu, 01 Jan 1970 00:00:00 GMT"
    document.cookie = "role=-; expires = Thu, 01 Jan 1970 00:00:00 GMT"
    const datatable = document.getElementById('datatable');
    datatable.innerHTML = '';
    clearInterval(window.interval);
}

export default logout;