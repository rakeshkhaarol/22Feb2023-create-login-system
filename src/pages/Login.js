
import React, { useState } from 'react'


export default function Login() {
  //1. state varible

  //state
  //useState work is a store somedata in components
  //useState
  //const [stateVaribleName,setFunction] =useState(initialvalue);
  const [email,setEmail] = useState('admin@gmail.com');
  const [password,setPassword]= useState('admin')
  
  //2. function definetion
  const savedata=()=>{
    console.log('sabmitted')

    let data = {
      "email":email,
      "password":password
    }


    //fetch('string',object).then().then().catch();
    fetch('http://65.109.113.62:3000/api/auth/login',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data) 
      })
      .then((res)=>{
        res.json()
      }).then((result) => {
        console.log('Success:', result);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }
  //every function return somthing
  //3. return statement

    return (
        <>
          <main className="">
            <form className="col-6 offset-3 mt-5">
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                    <input autoFocus type="email" name="email" value={email} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"  />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                    <input type="password" name="password" value={password} className="form-control" id="exampleInputPassword1"  />
                </div>
                <button type="button" onClick={savedata}  className="btn btn-primary">Submit</button>
            </form>

        </main>
        </>
    )
 
}
