import {useState} from 'react'
import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from '../../utils/firebase/firebase.utils'
import './sign-up-form.styles.scss'
import FormInput from '../form-input/form-input'

import Button from '../button/button'

const defaultFormFields={
    displayName: '',
    email: '',
    password: '',
    confirmPassword: '',
}

const SignUpForm=()=>{
    const [formFields, setFormFields]=useState(defaultFormFields)
    const {displayName, email, password, confirmPassword}=formFields;

    const resetFormFields=()=>{
        setFormFields(defaultFormFields)
    }

const handleSubmit=async(event)=>{
event.preventDefault()

if(password!==confirmPassword){
    alert('passwords ont match')
    return
}
try{
const {user}=await createAuthUserWithEmailAndPassword(email, password)

await createUserDocumentFromAuth(user, {displayName})
resetFormFields()



}catch(err){

    console.log(err + 'linsady')
    // if(err.code=='auth/email-already-in-use'){
    //     alert('cannot create use, email already in use')
    // } else{
    //     console.log(err+ 'user creation error')
    // }

}


}

    const handleChange=(event)=>{
        const {name, value}=event.target
        setFormFields({...formFields, [name]: value})
    }


return(
    <div className="sign-uo-container">
        <h2>Don't have an account?</h2>
<span>Sign up with your email an password</span> 
<form onSubmit={handleSubmit}>

    <FormInput type="text" required onChange={handleChange} 
    label="Display Name" name="displayName"
    value={displayName} />

  
    <FormInput type="email" required onChange={handleChange}
    label="Email" name="email"
     value={email}/>


    <FormInput type="password" required onChange={handleChange} 
    label="Password"
    name="password"
     value={password}/>

    <FormInput type="password" required onChange={handleChange}
    label="Confirm Password" name="confirmPassword"
     value={confirmPassword}/>

<Button type="submit">Sign Up</Button>
</form>

    </div>
)

}

export default SignUpForm