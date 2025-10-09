function generatePassword(length, Lowercasechars, Uppercasechars, allnos, allSymbols)
{
const includeLowercase="abcdefghijklmnopqrstuvwxyz";
const includeUppercase="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const includenos="0123456789";
const includeSymbols="!@#$%^&*()_+*/-+";

let allowedchars="";
let password="";


allowedchars += Lowercasechars ? includeLowercase : "";
allowedchars += Uppercasechars ? includeUppercase : "";
allowedchars += allnos ? includenos : "";
allowedchars += allSymbols ? includeSymbols : "";

if(length<=0)
{
    return "INVALID LENGTH INPUT";
}
if (allowedchars.length === 0) 
return "Please select at least one character type.";

    for (let i = 0; i < length; i++) 
    {
        password += allowedchars.charAt(Math.floor(Math.random() * allowedchars.length));
    }

return password;

}

Submit.onclick=function()
{
const Lowercasechars = document.getElementById("includeLowercase").checked;
const Uppercasechars = document.getElementById("includeUppercase").checked;
const allnos = document.getElementById("includenos").checked;
const allSymbols = document.getElementById("includeSymbols").checked;
const length = document.getElementById("length").value;

const password = generatePassword(length,
                                Lowercasechars,
                                Uppercasechars,
                                allnos,
                                allSymbols);
document.getElementById("password").textContent=password;
}
