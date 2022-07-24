document.getElementById("login").onclick = function(){
    //getting values from input 

    let useremail = document.getElementById("email").value ;
    let userpassword = document.getElementById("password").value ;
    

    firebase.auth().signInWithEmailAndPassword(useremail , userpassword).then((givenCred) =>{

        window.location.href= "dashboard.html";
    })

}
