var multipli5="";
var multipli7="";
var altri="";

for (var i = 0; i < 100; i++) {
  if (i%5==0) {
    multipli5+=i;
  } else if (i%7==0) {
    multipli7+=i;
  }else {
   altri+=i;
  }
}

document.getElementById('mul5').innerHTML = multipli5 ;
document.getElementById('mul7').innerHTML = multipli7;
document.getElementById('others').innerHTML = altri ;
