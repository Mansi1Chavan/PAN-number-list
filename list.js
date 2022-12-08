// const input = document.querySelectorAll('input');
const inputText = document.querySelector('#inputText');
const cardNumber = document.querySelector('#cardNumber');
const education = document.querySelector('#education');
const addButton = document.querySelector('#addButton');
const degree = document.querySelector('#degree');
const alerts = document.querySelector('.alerts');
const searchBtn = document.querySelector('.searchBtn');
const searchInput = document.querySelector('#searchInput');
const actionForm = document.querySelector('#actionForm');


function resetForm(){
    inputText.value =  '';
    cardNumber.value = '';
    degree.value = '';
}

let newObj = [];
let count = 0;


function createEle(obj){
    
    document.querySelector('tbody').innerHTML += 
                                                `<tr>
                                                    <td>${obj.text}</td>
                                                    <td class='num'>${obj.number}</td>
                                                    <td>${obj.qualify}</td>
                                                    <td> <button class='delete'>Delete</button></td>                         
                                                </tr> `


     document.querySelector('tbody').style=`
        border:2px solid black;
        padding:15px;
        background-color:gray;
        color:white;
        font-size:20px;
        text-align:center;
        `
     }

alerts.style=`color:red;
            font-size: 40px;
            text-align:center;`



function addFunction(e){
e.preventDefault();
if(inputText.value == ""){
    alerts.textContent = 'Please Enter Name!!!';

    setTimeout(() => alerts.textContent ='',2000 );

}
else if(cardNumber.value == ""){
    alerts.textContent = 'Please Enter Number!!!';

    setTimeout(() => alerts.textContent ='',2000 );

}
else if(degree.value == ""){
    alerts.textContent = 'Please Enter Education!!!';

    setTimeout(() => alerts.textContent ='',2000 );

}
else{
    const obj = {
        id:count++,
        text:inputText.value,
        number: cardNumber.value,
        qualify:degree.value
       }
    newObj.push(obj);
    createEle(obj);
    resetForm();
    }

}

obj = {
    id:count++,
    text:inputText.value,
    number: cardNumber.value,
    qualify:degree.value,
   }


//    searchBtn.addEventListener('click' , (e) => {
//       //  if(e.target.indexOf(Number(searchInput.value)) == -1){
//       //   alerts.textContent = '*Not Found';
//       //  }
//       //  else{
//       //   document.querySelector('tbody').innetHTML += e.target.indexOf(Number(searchInput.value));
//       //  }

//       //  });
// if(document.querySelector('tbody').classList.contains('num')){
  
// }

   

addButton.addEventListener('click' , addFunction);

document.querySelector('tbody').addEventListener('click' , (e)=>{
     if(e.target.classList.contains('delete')){
            e.target.parentNode.parentNode.remove();
      }
    
});








/////////for removing element when using local storage//////
 // if(e.target.classList.contains('delete')){
    //     console.log(e.path[2]);
    //     newObj.forEach((ele,idx)=>{
    //         if(ele.id == parseInt(e.path[2].id))       todos.splice(idx,1);
    //     })
    //     e.path[2].remove();
    // }
