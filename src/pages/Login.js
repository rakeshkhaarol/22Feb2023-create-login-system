
import React, { Component } from 'react'


export default class Login extends Component {
  render() {
    return (
        <>
          <main className="">
            <form className="col-6 offset-3 mt-5">
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                    <input autoFocus type="email" name="email"  className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"  />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                    <input type="password" name="password" className="form-control" id="exampleInputPassword1"  />
                </div>
                <button type="button"  className="btn btn-primary">Submit</button>
            </form>

        </main>
        </>
    )
  }
}
