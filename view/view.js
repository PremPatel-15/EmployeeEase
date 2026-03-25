const empId = document.querySelector("#empId");
const empName = document.querySelector("#empName");
const deptId = document.querySelector("#deptId");
const deptName = document.querySelector("#deptName");
const email = document.querySelector("#email");
const desig = document.querySelector("#desig");
const showbtn = document.querySelector("#showbtn");

showbtn.addEventListener("click", () => {
    const empIdVal = empId.value;
    fetch(`https://localhost:7253/employee/${empIdVal}`)
        .then((res) => res.json())
        .then((data) => {
            if (data.ok) {
                empName.innerHTML = data.full_name;
                deptId.innerHTML = data.deptid;
                deptName.innerHTML = data.dept;
                email.innerHTML = data.email;
                desig.innerHTML = data.designation;
            } else {
                empName.innerHTML = "No Employee Found";
                deptId.innerHTML = "";
                deptName.innerHTML = "";
                email.innerHTML = "";
                desig.innerHTML = "";
            }
        })
        .catch((err) => {
            console.error("Error: ", err);
            empName.innerHTML = "No Employee Found";
            deptId.innerHTML = "";
            deptName.innerHTML = "";
            email.innerHTML = "";
            desig.innerHTML = "";
        });
});

empId.addEventListener("keydown", (e) => {
    const empIdVal = empId.value;
    if (e.key === "Enter") {
        fetch(`https://localhost:7253/employee/${empIdVal}`)
            .then((res) => res.json())
            .then((data) => {
                empName.innerHTML = data.full_name;
                deptId.innerHTML = data.deptid;
                deptName.innerHTML = data.dept;
                email.innerHTML = data.email;
                desig.innerHTML = data.designation;
            })
            .catch((err) => {
                console.log("Error: ", err);
            });
    }
});
