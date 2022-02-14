let inputnumbers = document.getElementById("inputnumbers");
let buttonnumbers = document.getElementById("buttonnumbers");
let lines = document.getElementById("lines");
let lists = document.querySelector(".lists");
let please = document.getElementById("please")

let myList1 = [];
let myList2 = [];
let myList3 = [];
let myList4 = [];
let myList5 = [];
let myList6 = [];

let mygeneralArray = []




for(let i = 0; i < 20; i++) {
    myList1.push(i)
};

for (let i = 20; i < 30; i++) {
    myList2.push(i)
};

for (let i = 30; i < 40; i++) {
    myList3.push(i);
};


for (let i = 40; i < 55; i++) {
    myList4.push(i)
}

for (let i = 55; i < 70; i++) {
    myList5.push(i)
}
 
for (let i = 70; i <= 90; i++) {
    myList6.push(i)
}


buttonnumbers.addEventListener("click", adding);


function adding() {
    for(let i = 0; i < inputnumbers.value; i++) {
        let line1 = document.createElement("div");
        line1.classList.add("line1");

        let parag = document.createElement("h2");
        let number1 = myList1[Math.floor(Math.random()*myList1.length)];
        parag.innerHTML += ` ${number1} -`;

        let number2 = myList2[Math.floor(Math.random()*myList2.length)]
        parag.innerHTML += ` ${number2} -`

        let number3 = myList3[Math.floor(Math.random()*myList3.length)]
        parag.innerHTML += ` ${number3} -`

        let number4 = myList4[Math.floor(Math.random()*myList4.length)]
        parag.innerHTML += ` ${number4} -`

        let number5 = myList5[Math.floor(Math.random()*myList5.length)]
        parag.innerHTML += ` ${number5} -`

        let number6 = myList6[Math.floor(Math.random()*myList6.length)]
        parag.innerHTML += ` ${number6} |`

        for(let i = 0; i < 90; i++) {
            mygeneralArray.push(i)
        }
        
        


        for(let i = 0; i < mygeneralArray.length; i++) {
            if(mygeneralArray[i] === number1) {
                mygeneralArray.splice(i, 1);
                i--
            }
        }

        for(let i = 0; i < mygeneralArray.length; i++) {
            if(mygeneralArray[i] === number2) {
                mygeneralArray.splice(i, 1);
                i--
            }
        }

        for(let i = 0; i < mygeneralArray.length; i++) {
            if(mygeneralArray[i] === number3) {
                mygeneralArray.splice(i, 1);
                i--
            }
        }

        for(let i = 0; i < mygeneralArray.length; i++) {
            if(mygeneralArray[i] === number4) {
                mygeneralArray.splice(i, 1);
                i--
            }
        }

        for(let i = 0; i < mygeneralArray.length; i++) {
            if(mygeneralArray[i] === number5) {
                mygeneralArray.splice(i, 1);
                i--
            }
        }

        for(let i = 0; i < mygeneralArray.length; i++) {
            if(mygeneralArray[i] === number6) {
                mygeneralArray.splice(i, 1);
                i--
            }
        }
        
        
        
        let bonus = mygeneralArray[Math.floor(Math.random()*mygeneralArray.length)];
        parag.innerHTML += ` ${bonus} |`
        
        let supernumber = Math.floor(Math.random()*90);
        parag.innerHTML += " " + supernumber
            
        line1.appendChild(parag);
        lists.appendChild(line1);


        
    }
    
    inputnumbers.value = ""
    
    please.innerHTML = ""
}




