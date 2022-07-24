
//add payment method
document.getElementById("savePayment").onclick = function(){
  
    let paymentVal = document.getElementById("selectPayment").value;
   
    let addMethod = firebase.firestore().collection("paymentMethod").doc();
    addMethod.set({
        pMethodInput:paymentVal,
        docId: addMethod.id
    }).then(()=>{
        window.location.reload();
    })


} 
console.log("successful")

//view payment method
firebase.firestore().collection("paymentMethod").get().then((querySnapshot)=>{
    let content = '';
    querySnapshot.forEach((doc)=>{

        let pMethod = doc.data().pMethodInput;
        let docId = doc.data().docId;

        content+=    '<tr>';
        content+=    '  <td> ' + pMethod +'</td>';
        content+=    '  <td> <button class="btn btn-danger">Delete</button> </td>';                    
        content+=    '</tr>';

    })
    $("#paymentMethodList").append(content);
})