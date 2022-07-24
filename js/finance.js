
firebase.firestore().collection("income").get().then((querySnapshot) => {
    let content = '';
    let income = 0;
    let janIncome = 0;
    let febIncome = 0;
    let marIncome = 0;
    let aprIncome = 0;
    let mayIncome = 0;
    let junIncome = 0;
    let julIncome = 0;
    let augIncome = 0;
    let septIncome = 0;
    let octIncome = 0;
    let novIncome = 0;
    let decIncome= 0;

    querySnapshot.forEach((doc) => {
        //get today's date,month,year
        let todaysDate = new Date();
        let thisYear = todaysDate.getFullYear();
        let thisMonth = todaysDate.getMonth();
        let thisDate = todaysDate.getDate();

        thisMonth = thisMonth + 1;

        if (thisMonth < 10) {

            thisMonth = "0" + thisMonth
            console.log(thisMonth)
        }

        let todaysFullDate = thisYear + "-" + thisMonth + "-" + thisDate;


        //fetch data from database
        let incDate = doc.data().incDate;
        let inAmount = doc.data().inAmount;
        let docId = doc.data().docId;

        //parsing amount
        let newIncAmount = parseInt(inAmount);


        //splitting expense time from date
        let splitDate = incDate.split("T");
        let firstIndex = splitDate[0]
        console.log(firstIndex)


        if (todaysFullDate == firstIndex) {

            document.getElementById("todaysIncome").innerText = "KES." + newIncAmount;

        }


        //getting income month
        let incMonth1 = firstIndex[5]
        
        let incMonth2 = firstIndex[6]
        
        let incMonth = incMonth1 + incMonth2;
       

       
            //compare current month with expense month
            if (thisMonth == incMonth) {

                //calculating total income
                income = newIncAmount + income;
            

            if (incMonth == 01) {
                janIncome = income;
                console.log (janIncome)
            } else if (incMonth == 02) {
                 febIncome = income;
                console.log (febIncome)
            } else if (incMonth == 03) {
                marIncome = income;
            
                console.log (marIncome)
            } else if (incMonth == 04) {
                aprIncome = income;
              
                console.log (aprIncome)
            }
            else if (incMonth == 05) {
                mayIncome = income;
                console.log (mayIncome)
            } else if (incMonth == 06) {
                junIncome = income;
                console.log (junIncome)
            }
            else if (incMonth == 07) {
                
                julIncome = income;
                console.log (julIncome)
            } else if (incMonth == 08) {
                augIncome = income;
                console.log (augIncome)
            } else if (incMonth == 09) {
                septIncome = income;
                console.log (septIncome)
            } else if (incMonth == 10) {
                octIncome = income;
                console.log (octIncome)
            } else if (incMonth == 11) {
                novIncome = income;
                console.log (novIncome)
            } else if (incMonth == 12) {
                decIncome = income;
                console.log (decIncome)
            }
        }


    })

    document.getElementById("thismonthsincome").innerText = "KES." + income;

    const data = {

        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'],
        datasets: [{
            label: 'Income',
            data: [janIncome, febIncome, marIncome, aprIncome, junIncome, julIncome,augIncome, septIncome, octIncome, novIncome, decIncome],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        },
        {
            label: 'Expenses',
            data: [1500, 1900, 10000, 5000, 2000, 3000, 1000, 6000, 10000, 4000, 1000],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }


        ]



    };

    const config = {
        type: 'line',
        data: data,
        options: {}
      };

      const myChart = new Chart(
        document.getElementById('myChart').getContext('2d'),
        config

      );
       
      


})

/*
//expense

firebase.firestore().collection("expense").get().then((querySnapshot) => {
    let content = '';
    querySnapshot.forEach((doc) => {
        //get today's date,month,year
        let todaysDate = new Date();
        let thisYear = todaysDate.getFullYear();
        let thisMonth = todaysDate.getMonth();
        let thisDate = todaysDate.getDate();

        let todaysFullDate = thisYear + "-" +  thisMonth + "-" + thisDate;
        console.log(todaysFullDate)

        //fetch data from database
        let exDate = doc.data().exDate;
        let exAmount = doc.data().exAmount;
        let docId = doc.data().docId;

        //parsing amount
        let newAmount = parseInt(exAmount);

        //splitting expense time from date
        let splitDate = exDate.split("T");
        let firstIndex = splitDate[0]

        console.log(firstIndex)

        if( todaysFullDate == firstIndex) {
            console.log("hey")
            console.log(newAmount)
           // content += '<h4>' + exAmount + '</h4>';
        }


    })
    //$("#todaysIncome").append(content);
})

*/
/*
const ctx = document.getElementById('myChart').getContext('2d');
const myChart = new Chart(ctx,
    firebase.firestore().collection("income").get().then((querySnapshot) => {
        let content = '';
        let income = 0;
        let janIncome = 0;
        let febIncome = 0;
        let marIncome = 0;
        let aprIncome = 0;
        let junIncome = 0;
        let julIncome = 0;
        let augIncome = 0;
        let septIncome = 0;
        let octIncome = 0;
        let novIncome = 0;
        let decIncome= 0;

    
        querySnapshot.forEach((doc) => {

            //get today's date,month,year
            let todaysDate = new Date();
            let thisYear = todaysDate.getFullYear();
            let thisMonth = todaysDate.getMonth();
            let thisDate = todaysDate.getDate();

            thisMonth = thisMonth + 1;

            if (thisMonth < 10) {

                thisMonth = "0" + thisMonth

            }

            //combinr year, date and month
            let todaysFullDate = thisYear + "-" + thisMonth + "-" + thisDate;


            //fetch data from database
            let incDate = doc.data().incDate;
            let inAmount = doc.data().inAmount;
            let docId = doc.data().docId;

            //parsing amount
            let newIncAmount = parseInt(inAmount);


            //splitting expense time from date
            let splitDate = incDate.split("T");
            let firstIndex = splitDate[0]


            //display income if incDate is today's date 
            if (todaysFullDate == firstIndex) {

                document.getElementById("todaysIncome").innerText = "KES." + newIncAmount;

            }


            //getting income month
            let incMonth1 = firstIndex[5]
          
            let incMonth2 = firstIndex[6]
           
            let incMonth = incMonth1 + incMonth2;
            

            //compare current month with expense month
            if (thisMonth == incMonth) {

                //calculating total income
                income = newIncAmount + income;
            

            if (incMonth == 01) {
                janIncome = income;
                console.log (janIncome)
            } else if (incMonth == 02) {
                let month = " feb"
                let febIncome = income;
                console.log(month)
                console.log (febIncome)
            } else if (incMonth == 03) {
                let month = "mar"
                let marIncome = income;
                console.log(month)
                console.log (marIncome)
            } else if (incMonth == 04) {
                let month = " apr"
                let aprIncome = income;
                console.log(month)
                console.log (aprIncome)
            }
            else if (incMonth == 05) {
                let month = "may"
                let mayIncome = income;
                console.log(month)
                console.log (mayIncome)
            } else if (incMonth == 06) {
                let month = " jun"
                let junIncome = income;
                console.log(month)
                console.log (junIncome)
            }
            else if (incMonth == 07) {
                let month = " jul"
                julIncome = income;
                console.log(month)
                console.log (julIncome)
            } else if (incMonth == 08) {
                let month = " aug"
                let augIncome = income;
                console.log(month)
                console.log (augIncome)
            } else if (incMonth == 09) {
                let month = " sept"
                let septIncome = income;
                console.log(month)
                console.log (septIncome)
            } else if (incMonth == 10) {
                let month = " oct"
                let octIncome = income;
                console.log(month)
                console.log (octIncome)
            } else if (incMonth == 11) {
                let month = "nov"
                let novIncome = income;
                console.log(month)
                console.log (novIncome)
            } else if (incMonth == 12) {
                let month = " dec"
                let decIncome = income;
                console.log(month)
                console.log (decIncome)
            }
        }


        })
        

        document.getElementById("thismonthsincome").innerText = "KES." + income;


    }),
     {
        type: 'line',
        data: {

            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'],
            datasets: [{
                label: 'Income',
                data: [, 19000, 30000, 50000, 20000, 30000, 10000, 60000, 100000, 40000, 10000],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 1
            },
            {
                label: 'Expenses',
                data: [1500, 1900, 10000, 5000, 2000, 3000, 1000, 6000, 10000, 4000, 1000],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 1
            }


            ]



        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
    */