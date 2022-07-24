document.getElementById("savebtn").onclick = function() {
    let fullname = document.getElementById("fullName").value;
    let nationalID = document.getElementById("nationalID").value;
    let department = document.getElementById("department").value;
    let salary = document.getElementById("salary").value;
    let phoneNo = document.getElementById("phoneNo").value;
    let employmentType = document.getElementById("employmentType").value;


    let addEmployee = firebase.firestore().collection("employees").doc();
    addEmployee.set({
        docId: addEmployee.id,
        fullname: fullname,
        nationalID: nationalID,
        department: department,
        salary: salary,
        phoneNo: phoneNo,
        employmentType: employmentType

    }).then(() => {
        window.location.reload()
    })
}

//pull employee details from database
firebase.firestore().collection("employees").get().then((querySnapshot) => {
    let content = '';
    querySnapshot.forEach((doc) => {
        let docID = doc.data().docID;
        let fullname = doc.data().fullname;
        let nationalID = doc.data().nationalID;
        let department = doc.data().department;
        let salary = doc.data().salary;
        let phoneNo = doc.data().phoneNo;
        let employmentType = doc.data().employmentType;


        //use jquery to display employees from database to html page
        content += '<tr>';
        content += '<td>' + fullname + '</td>';
        content += '<td>' + nationalID + '</td>';
        content += '<td>' + department + '</td>';
        content += '<td>' + salary + '</td>';
        content += '<td>' + phoneNo + '</td>';
        content += '<td>' + employmentType + '</td>';
        content += '</tr>';

    })
    $("#employeelist").append(content);
})





