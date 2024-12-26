// // pages/auth.js

// import { db } from "../../utilis/firebase";
// import { GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
// import { useState } from "react";

// export default function AuthPage() {
//   const [user, setUser] = useState(null);

//   const handleGoogleSignIn = async () => {
//     const provider = new GoogleAuthProvider();
//     try {
//       const result = await signInWithPopup(db, provider);
//       const credential = GoogleAuthProvider.credentialFromResult(result);
//       const token = credential.accessToken;
//       const user = result.user;
//       setUser(user);
//       console.log("User signed in:", user);
//     } catch (error) {
//       console.error("Error during Google Sign-In:", error);
//     }
//   };

//   const handleSignOut = async () => {
//     try {
//       await signOut(auth);
//       setUser(null);
//       console.log("User signed out");
//     } catch (error) {
//       console.error("Error during sign-out:", error);
//     }
//   };

//   return (
//     <div>
//       <h1>Google Sign-In</h1>
//       {!user ? (
//         <button onClick={handleGoogleSignIn}>Sign in with Google</button>
//       ) : (
//         <>
//           <p>Welcome, {user.displayName}</p>
//           <button onClick={handleSignOut}>Sign Out</button>
//         </>
//       )}
//     </div>
//   );
// }
