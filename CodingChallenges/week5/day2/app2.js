function starpattern(i,j){
  for(i=1;i<=5;i++){
    for(j=5;j<=i;j--){
      document.write("*")
    }
    document.write("<br />")
  }
  return(i,j);
}

starpattern();