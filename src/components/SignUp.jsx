import React from "react";
const obj={
    name:"",
    age:"",
    gender:"",
    email:"",
    phoneNumber:""
}
export const SignUpForm=()=>{
const [inputData, setInputData]=React.useState(obj);

const {name, age, gender, email, phoneNumber} =inputData;


const handleChange=(e)=>{
const { name,value}=e.target;
setInputData({...inputData,[name]:value})
console.log(inputData)

}
const handleClick =()=>{
    console.log(inputData)
    setInputData(obj)
}
    return (
        <div>
            <input placeholder="Name" type="text" name="name" value={name} onChange={(e)=>handleChange(e)}/>
            <input placeholder="Age" type="text" name="age" value={age} onChange={(e)=>handleChange(e)}/>
            <input placeholder="gender" type="text" name="gender" value={gender} onChange={(e)=>handleChange(e)}/>
            <input placeholder="email" type="text" name="email" value={email} onChange={(e)=>handleChange(e)}/>
            <input placeholder="phoneNumber" type="text" name="phoneNumber" value={phoneNumber} onChange={(e)=>handleChange(e)}/>
            <button onClick={handleClick}>ADD</button>
        </div>
    )
}