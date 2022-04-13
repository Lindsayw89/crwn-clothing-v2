import {useState} from 'react'
import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth,signInWithGooglePopup, SignInAuthUserWithEmailAndPassword } from '../../utils/firebase/firebase.utils'
import './sign-in-form.styles.scss'
import FormInput from '../form-input/form-input'

import Button from '../button/button'

const defaultFormFields={
    email: '',
    password: '',
 
}

const SignInForm=()=>{
    const [formFields, setFormFields]=useState(defaultFormFields)
    const { email, password}=formFields;

    const resetFormFields=()=>{
        setFormFields(defaultFormFields)
    }

    
  const signInWithGoogle = async () => {
    const { user } = await signInWithGooglePopup();
    await createUserDocumentFromAuth(user);
  };

const handleSubmit=async(event)=>{
event.preventDefault()


try{
const response= await SignInAuthUserWithEmailAndPassword(email, password)
console.log(response)
resetFormFields()

}catch(err){


}


}

    const handleChange=(event)=>{
        const {name, value}=event.target
        setFormFields({...formFields, [name]: value})
    }


return(
    <div className="sign-uo-container">
        <h2>Already have an account?</h2>
<span>Sign in with your email and password</span> 
<form onSubmit={handleSubmit}>


  
    <FormInput type="email" required onChange={handleChange}
    label="Email" name="email"
     value={email}/>


    <FormInput type="password" required onChange={handleChange} 
    label="Password"
    name="password"
     value={password}/>

<div className="button-container">
<Button type="submit">Sign In</Button>
<Button buttonType='google' onClick={signInWithGoogle}>Sign in with Google</Button>
 </div>


</form>

    </div>
)

}

export default SignInForm