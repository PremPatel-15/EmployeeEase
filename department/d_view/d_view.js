const deptId = document.querySelector("#deptId");
const deptName = document.querySelector("#deptName");
const showbtn = document.querySelector("#showbtn");

showbtn.addEventListener("click", () => {
    const deptIdVal = deptId.value;
    fetch(`https://localhost:7253/department/${deptIdVal}`)
        .then((res) => {
            if (!res.ok) {
                throw new Error(`HTTP error! Status: ${res.status}`);
            }
            return res.json();
        })
        .then((data) => {
            if (data) {
                deptName.innerHTML = data.dept;
            } else {
                deptName.innerHTML = "No Department Found";
            }
        })
        .catch((err) => {
            console.error("Error: ", err);
            deptName.innerHTML = "No Employee Found";
        });
});

deptId.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        const deptIdVal = deptId.value;
        fetch(`https://localhost:7253/department/${deptIdVal}`)
            .then((res) => {
                if (!res.ok) {
                    throw new Error(`HTTP error! Status: ${res.status}`);
                }
                return res.json();
            })
            .then((data) => {
                if (data) {
                    deptName.innerHTML = data.dept;
                } else {
                    deptName.innerHTML = "No Department Found";
                }
            })
            .catch((err) => {
                console.error("Error: ", err);
                deptName.innerHTML = "No Department Found";
            });
    }
});
