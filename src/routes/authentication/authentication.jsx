import {useEffect} from 'react'
import { auth, signInWithGooglePopup,signInWithGoogleRedirect,
  createUserDocumentFromAuth,} from '../../utils/firebase/firebase.utils';
import { getRedirectResult  } from 'firebase/auth';
import SignUpForm from '../../components/sign-up-form/sign-up-form';
import SignInForm from '../../components/sign-in-form/sign-in-form';

const Authentication = () => {



  return (
    <div>
      <h1>Sign In Page</h1>
    <SignInForm/>
    <SignUpForm/>
    </div>
  );
};

export default Authentication;
