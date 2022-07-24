//pull paymentMethod
firebase.firestore().collection("paymentMethod").get().then((querySnapshot) => {
    let content = '';
    querySnapshot.forEach((doc) => {

        let pMethod = doc.data().pMethodInput;
        let docId = doc.data().docId;

        content += '<option value="' + pMethod + '">' + pMethod + '</option>';

    })
    $("#paymentMethod").append(content);
})


//add addExpense
document.getElementById("addExpenses").onclick = function () {
    let expenseType = document.getElementById("expenseType").value;
    let exAmount = document.getElementById("exAmount").value;
    let exDate = document.getElementById("exDate").value;
    let authorisedBy = document.getElementById("authorisedBy").value;
    let paymentMethod = document.getElementById("paymentMethod").value;

    let AmountSpentOn = 0;

    let spentOn = document.getElementById("spentOn").value;
    let allBills = document.getElementById("allBills").value;



    let addExpenses = firebase.firestore().collection("expense").doc();
    addExpenses.set({
        docId: addExpenses.id,
        expenseType: expenseType,
        exAmount: exAmount,
        exDate: exDate,
        authorisedBy: authorisedBy,
        paymentMethod: paymentMethod,
        spentOn: AmountSpentOn

    }).then(() => {
        window.location.reload();
    })

}

//view expenses
firebase.firestore().collection("expense").get().then((querySnapshot) => {
    let content = '';
    querySnapshot.forEach((doc) => {

        let expenseType = doc.data().expenseType;
        let spentOn = doc.data().spentOn;
        let exDate = doc.data().exDate;
        let exAmount = doc.data().exAmount;
        let paymentMethod = doc.data().paymentMethod;
        let authorisedBy = doc.data().authorisedBy;
        let docId = doc.data().docId;

        content += '<tr>';
        content += '  <td> ' + expenseType + '</td>';
        content += '  <td> ' + spentOn + '</td>';
        content += '  <td> ' + exDate + '</td>';
        content += '  <td> ' + exAmount + '</td>';
        content += '  <td> ' + paymentMethod + '</td>';
        content += '  <td> ' + authorisedBy + '</td>';
        content += '  <td> <button class="btn btn-danger">Delete</button> </td>';
        content += '</tr>';

    })
    $("#expenselist").append(content);
})