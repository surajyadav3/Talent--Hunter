import { SignedOut, SignInButton ,SignedIn , UserButton ,SignOutButton} from '@clerk/clerk-react'
import React from 'react'
import toast from 'react-hot-toast';
import axiosInstance from '../lib/axios';

function HomePage() {
 

  return (
  <div>
    <button className='btn btn-secondary' onClick ={() => toast.success("This is a success toast")}>Click Me</button>

    <SignedOut>
      <SignInButton mode= "modal" >
        <button className='btn btn-primary'>Login</button>
      </SignInButton>
    </SignedOut>

    <SignedIn>
      <SignOutButton> 
        <button className='btn btn-secondary'>Logout</button>
      </SignOutButton>
    </SignedIn>

    <UserButton />

    
  </div>
  );
}

export default HomePage