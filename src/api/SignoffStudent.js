async function signoffStudent() {
    let sid = document.getElementById('studentselect');
    let skid = document.getElementById('skillselect');
    let stype = document.getElementById('typeselect');

    console.log(sid.value);
    console.log(skid.value);
    console.log(stype.value);

    fetch("https://demoschool.edu:9000/signoffstudent", {
        method: 'POST',
        headers: new Headers({
                   'Content-Type': 'application/x-www-form-urlencoded', // <-- Specifying the Content-Type
        }),
        credentials: 'include',
        mode:'cors',
        body: "studentid=" + sid.value + "&skillid=" + skid.value + "&signofftype=" + stype.value
      })
      .then((response) => response.text())
      .then((responseText) => {
        console.log(responseText);
      })
      .catch((error) => {
          console.error(error);
      });
}

export default signoffStudent;