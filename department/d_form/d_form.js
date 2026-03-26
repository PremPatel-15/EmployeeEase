const deptId = document.querySelector("#deptId");
const deptName = document.querySelector("#deptName");
const save = document.querySelector("#save");
const update = document.querySelector("#update");
const remove = document.querySelector("#remove");

save.addEventListener("click", () => {
    const jsonData = {
        deptid: parseInt(deptId.value),
        deptname: deptName.value,
    };

    fetch(`https://localhost:7253/department`, {
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
            deptId.value = "";
            deptName.value = "";
        })
        .catch((err) => {
            console.log("Error:", err);
            alert("Error adding department ❌");
        });
});

update.addEventListener("click", () => {
    const jsonData = {
        deptid: parseInt(deptId.value),
        deptname: deptName.value,
    };

    fetch(`https://localhost:7253/department`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(jsonData),
    })
        .then((res) => {
            if (!res.ok) {
                throw new Error("Failed to update data");
            }
            return res.json();
        })
        .then((data) => {
            alert("Department updated successfully ✅");
            deptId.value = "";
            deptName.value = "";
        })
        .catch((err) => {
            console.log("Error:", err);
            alert("Error updating depatment ❌");
        });
});

remove.addEventListener("click", () => {
    const deptIdVal = deptId.value;

    fetch(`https://localhost:7253/department/${deptIdVal}`, {
        method: "DELETE",
    })
        .then((data) => {
            alert("Department deleted successfully ✅");
            deptName.value = "";
        })
        .catch((err) => {
            console.log("Error:", err);
            alert("Error deleting department ❌");
        });
});
