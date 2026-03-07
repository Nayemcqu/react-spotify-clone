import {useRef,useState,useEffect} from "react"
import { X,Check,Info} from "lucide-react"
import { validateUserName,validatePassword, validateEmail } from "../utils/validation";
export default function Register(){

const userRef=useRef();
const errRef=useRef();

const [user,setUser]=useState('');
const [validName,setValidName]=useState(false);
const [userFocus,setUserFocus]=useState(false);

const [email,setEmail]=useState('');
const [validEmail,setValidEmail]=useState(false);
const [emailFocus,setEmailFocus]=useState(false);

const [pwd,setPwd]=useState('');
const [validPwd,setValidPwd]=useState(false);
const [pwdFocus,setPwdFocus]=useState(false);


const [matchPwd,setMatchPwd]=useState('');
const [validMatch,setValidMatch]=useState(false);
const [matchFocus,setMatchFocus]=useState(false);

const [errMsg,setErrMsg]=useState('');
const [success,setSuccess]=useState(false);


useEffect(()=>{
userRef.current.focus();

},[])

useEffect(()=>{
const name=validateUserName(user)
setValidName(name);
},[user])

useEffect(()=>{
const password=validatePassword(pwd);
setValidPwd(password);
const match=pwd===matchPwd;
setValidMatch(match);

},[pwd,matchPwd])

useEffect(()=>{
const isEmail=validateEmail(email);
setValidEmail(isEmail);

},[email])
   
useEffect(()=>{
setErrMsg('');
},[user,pwd,matchPwd,email])

function HandleSubmit(e){
e.preventDefault();
if(!validName || !validPwd || !validMatch){
    setErrMsg("Invalid Entry");
return;
}

const storedUsers=JSON.parse(localStorage.getItem("users")) || [];

const userExists=storedUsers.find((u)=>u.userName===user);
if(userExists){
setErrMsg("userName Already Taken");
return;
}

const newUser={
   userName:user,
   password:pwd, 
   email:email
}

storedUsers.push(newUser);

localStorage.setItem("users",JSON.stringify(storedUsers));
setSuccess(true);

setUser("");
setPwd("");
setEmail('');
setMatchPwd("");

}


return(
<section className="min-h-screen flex items-center  justify-center bg-black text-white">
{success ? 
( 

<div className="bg-zinc-900 p-10 rounded-lg w-[400px]  text-center"> 
<h1 className="text-2xl font-bold mb-4">Success</h1>
<a href="#" className="text-green-400 underline">Sign In</a>
</div>
) : (
<div className="bg-zinc-900 p-8 rounded-lg w-[420px] space-y-6">

<p ref={errRef} className={errMsg ? "text-red-500" : "hidden"}>
{errMsg}
</p>

<h1 className="text-3xl font-bold">Register</h1>

<form onSubmit={HandleSubmit} className="space-y-4">

{/* USERNAME */}

<div>

<label className="flex items-center gap-2">
Username
{validName && <Check size={18} className="text-green-500"/>}
{!validName && user && <X size={18} className="text-red-500"/>}
</label>

<input
type="text"
ref={userRef}
value={user}
onChange={(e)=>setUser(e.target.value)}
onFocus={()=>setUserFocus(true)}
onBlur={()=>setUserFocus(false)}
autoComplete="off"
required
className="w-full mt-2 p-2 rounded bg-zinc-800 border border-zinc-700"
/>

{userFocus && user && !validName && (
<p className="text-sm text-zinc-400 flex gap-2 mt-1">
<Info size={16}/>
4–24 characters. Must start with letter.
</p>
)}

</div>

{/*Email */}
<div>

<label className="flex items-center gap-2">
Email
{validEmail && <Check size={18} className="text-green-500"/>}
{!validEmail && email && <X size={16} className="text-red-500"/> }
</label>

<input
type="email"
required
onChange={(e)=>setEmail(e.target.value)}
onFocus={()=>setEmailFocus(true)}
onBlur={()=>setEmailFocus(false)}
value={email}
className="w-full p-2 mt-2 bg-zinc-800 border border-zinc-800"
/>


</div>


{/* PASSWORD */}

<div>

<label className="flex items-center gap-2">
Password
{validPwd && <Check size={18} className="text-green-500"/>}
{!validPwd && pwd && <X size={18} className="text-red-500"/>}
</label>

<input
type="password"
value={pwd}
onChange={(e)=>setPwd(e.target.value)}
onFocus={()=>setPwdFocus(true)}
onBlur={()=>setPwdFocus(false)}
required
className="w-full mt-2 p-2 rounded bg-zinc-800 border border-zinc-700"
/>

{pwdFocus && !validPwd && (
<p className="text-sm text-zinc-400 flex gap-2 mt-1">
<Info size={16}/>
8–24 characters with upper, lower, number and !@#$%
</p>
)}

</div>


{/* CONFIRM PASSWORD */}

<div>

<label className="flex items-center gap-2">
Confirm Password
{validMatch && matchPwd && <Check size={18} className="text-green-500"/>}
{!validMatch && matchPwd && <X size={18} className="text-red-500"/>}
</label>

<input
type="password"
value={matchPwd}
onChange={(e)=>setMatchPwd(e.target.value)}
onFocus={()=>setMatchFocus(true)}
onBlur={()=>setMatchFocus(false)}
required
className="w-full mt-2 p-2 rounded bg-zinc-800 border border-zinc-700"
/>

{matchFocus && !validMatch && (
<p className="text-sm text-zinc-400 flex gap-2 mt-1">
<Info size={16}/>
Passwords must match
</p>
)}

</div>


<button
disabled={!validName || !validPwd || !validMatch}
className="w-full bg-green-500 hover:bg-green-600 text-black font-bold py-2 rounded disabled:opacity-40"
>
Sign Up
</button>

</form>

<p className="text-sm text-zinc-400">
Already registered? <a href="#" className="underline">Sign In</a>
</p>

</div>

)}


</section>

)



}
