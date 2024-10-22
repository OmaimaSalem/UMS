import { jwtDecode } from "jwt-decode";
import { createContext, useState ,useEffect } from "react";

export let AuthContext= createContext(null)

export default function AuthContextProvider (props){
let [userData,setUserData]=useState(null)
let saveUserData=()=>{
  let encodedToken=localStorage.getItem("userToken")
  let decodedToken=jwtDecode(encodedToken)
  setUserData(decodedToken)
}

useEffect(() => {
  if (localStorage.getItem("userToken")){
    saveUserData()
  }
}, []);


return (
  <AuthContext.Provider value={{saveUserData ,userData}}>
       {props.children}
  </AuthContext.Provider>
)

}