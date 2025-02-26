fetch('electribus.json')
.then(response => response.json())
.then(data => {


    const select = document.getElementById('select')
    const calcul = document.getElementById('btn-calcul')

    data.models.forEach(element => {
        const option = document.createElement('option')
        option.value = element.basePrice
        option.textContent = element.name
        select.appendChild(option)

        let names = element.name
        console.log(`les models : ${names}`);
   
    });


    const Cost = data.costPerKm
    const resultSection = document.querySelector('.results')
    



    calcul.addEventListener('click' , ()=> {
        const autoSupp = Number(document.getElementById('autoSupp').value)
        const coutSupp = Number(document.getElementById('coutSupp').value)
        const reduction = Number(document.getElementById('reduction').value)
        const result = document.getElementById('results')
        const mySelect = Number(select.value)
        resultSection.style.display = "block" ; 

        let myAlert = document.querySelector('.alert')
        let close = document.getElementById('close')
        close.addEventListener('click' , ()=> {
            myAlert.style.display = "none"
        })
        let inputs = [
            document.getElementById('autoSupp'),
            document.getElementById('coutSupp'),
            document.getElementById('reduction'),
        ];
        
        let error = false;
        let focused = false; 
        inputs.forEach(input => { 
            if (input.value === "" || input.value == 0) {  
                console.log("Veuillez remplir tous les champs"); 
                resultSection.style.display = "none"; 
                myAlert.style.display = "block";
                input.style.outline = "1px solid red";
        
                if (!focused) { 
                    input.focus();
                    focused = true;
                }
        
                error = true;
            }
            input.addEventListener("input", function() {
                if (input.value.trim() !== "") {
                    input.style.outline = "none"; // نحيد outline إلا كان معمر
                }
            });

            
        });
        

 


        // function checkInput(){
        //     if(autoSupp == 0 || coutSupp == 0 || reduction == 0){
        //         console.log("Veuillez remplir tous les champs") ; 
        //         resultSection.style.display = "none" ; 
        //         myAlert.style.display = "block" ; 

        //     }
        // }

        // checkInput()



        console.log(`Autonomie supplémentaire (km) :    ${autoSupp}`);
        console.log(`Cout des options supplémentaire (MAD) : ${coutSupp}`);
        console.log(`Réduction ou subvention (MAD) : ${reduction}`);
        console.log(`coût par Km  : ${Cost}`);
        

        let Ac = autoSupp*Cost
        let finalResult = mySelect + Ac + coutSupp - reduction

        result.textContent = `${finalResult} MAD`
        console.log(`coût total ${finalResult}`);
    })

})

const menu = document.getElementById('menu')
const close = document.querySelector('.close')

close.addEventListener('click' , ()=> {
    menuSection.style.display = "none"
})

menu.addEventListener('click' , ()=> {
    menuSection.style.display = "block"
})


const menuSection = document.getElementById('menu-section')



menuSection.onblur = function() {
    menuSection.style.display = "none";
};









