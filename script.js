function addNweWEField(){


    let newNode=document.createElement('textarea');
    newNode.classList.add('form-control');
    newNode.classList.add('wefield');
    newNode.classList.add("mt-2");
    newNode.setAttribute("rows", 3);
    newNode.setAttribute('placeholder' ,'Enter here');


    let we=document.getElementById("we");
    let weAddButton=document.getElementById("weAddButton");

    we.insertBefore(newNode, weAddButton);
}

function addNewaqfield(){
    
    let newNode=document.createElement('textarea');
    newNode.classList.add('form-control');
    newNode.classList.add('aqField');
    newNode.classList.add("mt-2");
    newNode.setAttribute("rows", 3);
    newNode.setAttribute('placeholder' ,'Enter here');


    let aq=document.getElementById("aq");
    let weAddButton=document.getElementById("aqAddButton");

    aq.insertBefore(newNode, aqAddButton);
}

function generateCv(){
  //console.log("Genrating CV");
  //name
  let nameField=document.getElementById('nameField').value;
  let nameT1 =document.getElementById("nameT");
  nameT1.innerHTML=nameField;

  document.getElementById("nameT2").innerHTML = nameField;
  //contact
  document.getElementById("conta").innerHTML=document.getElementById("contanctField").value;
  //address
  document.getElementById("ads").innerHTML=document.getElementById("adressField").value;
  //links
  document.getElementById("li").innerHTML=document.getElementById("liField").value;
  document.getElementById("Tw").innerHTML=document.getElementById("twField").value;
  document.getElementById("In").innerHTML=document.getElementById("lnsField").value;

  //objective

  document.getElementById("objT").innerHTML=document.getElementById("objField").value;

  //we
  let wes=document.getElementsByClassName("wefield");
  let str ="";

  for(let e of wes){
    str=str +`<li> ${e.value}</li>`;
  }

  document.getElementById("weT").innerHTML=str;

  //obj
  let aqs=document.getElementsByClassName("aqField");
  let str1 ="";

  for(let e of wes){
    str1=str1 +`<li> ${e.value}</li>`;
  }

  document.getElementById("aqT").innerHTML=str1;

//setiing an image

  let file=document.getElementById("imageField").files[0];
  console.log(file);

  let reader=new FileReader();

  reader.readAsDataURL(file);
  console.log(reader.result);

  //set the image to the tamplate

 reader.onloadend =function (){
  
  document.getElementById("img-template").src=reader.result;
 };


  document.getElementById("cv-form").style.display='none';
  document.getElementById("cv-template").style.display='block';



}






//Print CV
function printCv(){

    document.getElementById("btP").style.display='none';
    //document.getElementById("cv-form").style.display='none';
    window.print();

}

