var num =5;
for(var  i =1; i <= num ; i++){
  var timeStar = (i * 2) -1;
  var line = "";
  var space = (num - i) * 2;
  var spaceLine ="";
  if(i == num){
    for (var j =1; j <= timeStar ; j++){
      if(j == 1){
        line = line + "*";
        }
        else{
        line = line + "**"; 
          }
      }
    }else{
  for(var s= 1; s <= space ; s++){
    spaceLine = spaceLine + " ";
  }
  for (var j =1; j <= timeStar ; j++){
  if(j == 1){
    line= line + "*";
  } else if(j == timeStar){
    line = line + " *";
  }else{
    line = line + "  "; 
    }
  }
}  
  console.log(spaceLine + line);
}
