import { createContext } from "react";

export const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(
        JSON.parse(sessionStorage.getItem("user")) || false
      );
      const createUser = async (email, password) => {
        try {
          
         await createUserWithEmailAndPassword(
            auth,
            email,
            password
          );
         }
     
        } catch (error) {
         console.log(error);
        }
      };
      const values={createUser,currentUser};
      return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;



}
export default AuthContextProvider;