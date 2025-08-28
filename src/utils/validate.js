export const validateData=(email,password,name)=>
{
    if(!email || !password) 
        return "Email and Password is required";
    if(name!=null && name.trim() === "")
    {
        return "Name is required for Sign Up";
    }
    
    
const isEmailValid = /^[\w.-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);

const isPasswordValid=/^.*(?=.{8,})(?=.*[a-zA-Z])(?=.*\d)(?=.*[!#$%&? "]).*$/.test(password);
if(!isEmailValid)
    return "Enter a valid email address";
if(!isPasswordValid)
    return "Password must be at least 8 characters long, contain letters, numbers, and special characters"; 
return null;
}