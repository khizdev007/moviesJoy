import { auth, googleProvider } from '../config/firebase'
import { createUserWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth'
import { useState } from "react"

// auth?.currentUser?.email     imp 

const Authentication = () => {

    console.log(auth?.currentUser?.email)
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const signIn = async () => {
        try {
            await createUserWithEmailAndPassword(auth, email, password)
        }
        catch (err) {
            console.log(err)
        }
    }


    const signInWithGoogle = async () => {
        try {
            await signInWithPopup(auth, googleProvider)
        }
        catch (err) {
            console.log(err)
        }
    }
    const logOut = async () => {
        try {
            await signOut(auth)
        }
        catch (err) {
            console.log(err)
        }
    }

    return (
        <div>
            <h1>Authenticate</h1>

            <input type="text" placeholder="username ..." onChange={(e) => setEmail(e.target.value)}></input>
            <input type="text" placeholder="password ..." onChange={(e) => setPassword(e.target.value)}></input>
            <button type='submit' onClick={e => signIn()}>Sign In</button>
            <button type='submit' onClick={e => signInWithGoogle()}>Sign In with Google</button>
            <button onClick={logOut}>Sign Out</button>
        </div>
    )
}

export default Authentication