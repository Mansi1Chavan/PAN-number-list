const labelInputField = document.querySelector('#labelValue');
const emptyForm = document.querySelector('.form');
const inputType = document.querySelector('#inputType');







labelInputField.addEventListener('keyup' , (e)=>{
    const keyPressed  = e.key;
// console.log(keyPressed);

if(keyPressed === 'Enter'){
   
        const type = inputType.value;
        const label = labelInputField.value;


        const div  = document.createElement('div');
        const labelInput  = document.createElement('label');
        const input  = document.createElement('input');

        labelInput.innerHTML = label;
        input.type = type;

        console.log(labelInput);

        div.appendChild(labelInput)
        div.appendChild(input)

        emptyForm.appendChild(div);
        console.log(type);

   }
})