function isLetter(char){
if(char.toUpperCase()!==char.toLowerCase()){
    return true;
}
}

export function validateEmail(email){

    if(!email.includes("@")){
    return false;
  }
const parts=email.split("@");

if(parts[0].length===0){
return false;
}
if(!parts[1].includes(".")){
return false;
}
return true;

}

export function validateUserName(userName){

if(userName.length <4 || userName.length>24){
    return false;
}

if(!isLetter(userName.at(0))){
return false;
 } 
 
for(let i=1;i<userName.length;i++){

const char=userName[i];

if(!isLetter(char) && !(char >= '0' && char <= '9') && char !== "_" && char !== "-"){
return false;
}

}

return true;

}

export function validatePassword(password){
if(password.length<8 ||  password.length>24){
    return false;
}
let hasLowerCase=false;
let hasUpperCase=false;
let hasNumber=false;
let hasSpecial=false;
for(let char of password ){

if(char>="a" && char<="z"){
    hasLowerCase=true;
}
else if(char>="A" && char<="Z"){
    hasUpperCase=true;
}
else if(char >= "0" && char <= "9"){
    hasNumber = true;
}
else if("!@#$%".includes(char)){
    hasSpecial=true;
}

}
if(hasLowerCase && hasUpperCase && hasNumber && hasSpecial){
return true;
}
return false;

}

