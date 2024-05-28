function reverseString (reverseName) {
  let reversedName = "";
  for( let i = reverseName.length -1; i>= 0; i--){
    reversedName += reverseName[i];
  }
  return reversedName;
}
console.log(reverseString("levis"));