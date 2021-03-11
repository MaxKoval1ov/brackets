function replaceAt(string, char, to) {
    return string.substring(0, char) + to + string.substring(char + 1);
}

module.exports = function check(str, bracketsConfig) {
 
    let Stack=[];
  let openElement=0;

  for (let i=0; i<str.length; i++){
    for (const [x,y] of bracketsConfig){
      if (str[i] == y) {
        if (Stack[openElement-1] == x) {
          Stack.pop();
          openElement--; 
        }else {
          Stack.push(str[i]);
          openElement++;
        }
      }else {
        if (str[i] == x){
          Stack.push(str[i]);
          openElement++;
        }        
      }
    }
  }
  return !(Stack.length);
}
