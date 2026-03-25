const empId = document.querySelector("#empId");
const fName = document.querySelector("#fName");
const lName = document.querySelector("#lName");
const deptId = document.querySelector("#deptId");
const email = document.querySelector("#email");
const desig = document.querySelector("#desig");
const save = document.querySelector("#save");
const update = document.querySelector("#update");
const remove = document.querySelector("#remove");

save.addEventListener("click", () => {
    const jsonData = {
        empid: parseInt(empId.value),
        fname: fName.value,
        lname: lName.value,
        email: email.value,
        designation: desig.value,
        deptid: parseInt(deptId.value),
    };

    fetch(`https://localhost:7253/employee`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(jsonData),
    })
        .then((res) => {
            if (!res.ok) {
                throw new Error("Failed to insert data");
            }
            return res.json();
        })
        .then((data) => {
            alert("Employee added successfully ✅");
            empId.value = "";
            fName.value = "";
            lName.value = "";
            email.value = "";
            desig.value = "";
            deptId.value = "";
        })
        .catch((err) => {
            console.log("Error:", err);
            alert("Error adding employee ❌");
        });
});
