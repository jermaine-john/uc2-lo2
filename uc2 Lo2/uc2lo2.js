var age = prompt("Enter Age");
var i=0;

while(age < 18){
   i=i+1;
   ++age;
   
  
}
if(i===0){

    document.write('congratulations!!!!');
}
else{

    document.write('WARNING!!you are still a minor!! You still have ' + i + 'year(s) to wait!!!'); 
}



