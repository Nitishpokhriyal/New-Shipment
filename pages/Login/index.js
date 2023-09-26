import React from "react";
import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import {abc} from "../../pages/index"

const index = () => {
  const router = useRouter();
  // const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3000/api/login", { email, password })
      .then((res) => {
        console.log(res);
        if(res.statusText=="OK"){
          if(res.data.users.role==="admin"){
            router.push("/Home");
          }
          else{
            router.push("/Visitor");
          }
        }
        // router.push("/Login");
      })
      .catch((err) => console.log(err));
  };
  return (


    <div className="h-screen bg-white bg-bottom-white">

          <div className="container h-full px-6 py-15">
              <div
                  className="g-6 flex h-full flex-wrap items-center justify-center lg:justify-between">

                  <div className="mb-12 md:mb-0 md:w-8/12 lg:w-6/12">
                  <h1 className="text-4xl font-bold tracking-wider antialiased font-sans	italic position-relative">SHIPSHOP</h1>
                      <img
                          src="https://images.pexels.com/photos/6169662/pexels-photo-6169662.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                          className="w-full"
                          alt="Phone image" />
                  </div>

                  <div className="md:w-8/12 lg:ml-6 lg:w-5/12">
                      
                      <div>
                      <div className="h-screen flex bg-white-bg1">
                        <div className="w-full max-w-md m-auto bg-white rounded-lg border border-primaryBorder shadow-default py-10 px-16 shadow-[0_7px_35px_-2px_rgba(,0,0,0.3)]">
                          <h1 className="text-2xl font-medium text-primary mt-4 mb-12 text-center ">
                            Login in to your account 
                          </h1>
                
                          <form onSubmit={handleSubmit}>
                           
                            <div>
                              <label htmlFor="email">Email</label>
                              <input
                                type="email"
                                className={`w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4`}
                                id="email"
                                autoComplete="off"
                                name="email"
                                onChange={(data) => setEmail(data.target.value)}
                                placeholder="Your Email"
                              />
                            </div>
                            <div>
                              <label htmlFor="password">Password</label>
                              <input
                                type="password"
                                className={`w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4`}
                                id="password"
                                name="password"
                                autoComplete="off"
                                onChange={(data) => setPassword(data.target.value)}
                                placeholder="Your Password"
                              />
                            </div>
                
                            <div className="flex justify-center items-center mt-6">
                              <button
                                className={`bg-blue-400 py-2 px-4 text-sm text-white rounded border border-green focus:outline-none focus:border-green-dark`}
                              >
                                Login
                              </button>
                            </div>
                            <div className="flex mt-6">
                            <div>Already Registered ?</div>
                            <div> <a href="/Signup" className="text-blue-800 ml-3 justify-arround">SignUp</a></div>
                            </div>
                           
                          </form>
                        </div>
                      </div>
                    </div>
                    
                  </div>
              </div>
          </div>
      </div>

    
   
  );
};

export default index;
