import axios from "axios";
import { useState } from 'react';
import { clearAccessToken, clearUserInfo, setAccessToken, setLoginState, setUserInfo } from "../redux/action";
import { useDispatch ,useSelector} from 'react-redux';
import { useNavigate } from "react-router-dom";

export const useLogin = () => {
    const dispatch = useDispatch();
    // State variables
    const [formData,setFormData] =useState({
        email:'',
        password: '',
    })

    const {email,password} = formData
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
 

   // Function to handle login
    const login = async () => {
        setIsLoading(true);
        try {
            const response = await axios.post('http://localhost:8000/api/login', {
                email,
                password
            },
            {
                headers:{
                    "ngrok-skip-browser-warning": "69420",
                }
            });
            setFormData({email :'',password:''});
            setError(null);
            dispatch(setLoginState('loged'));
            dispatch(setAccessToken(response.data.access_token));
            dispatch(setUserInfo(JSON.stringify(response.data.user)));
            // navigate('/',{replace:true})
                    
        } catch (error) {
             if(error.message==="Request failed with status code 401"){

                 setError('Incorrect Email or Password')
                 setFormData({email :'',password:''});
             }
        } finally {
            setIsLoading(false);
        }
    };

    // Return values and functions to be used by components
    return {
        email,
        setFormData,
        password,
        error,
        isLoading,
        login,
        formData
    };
};
export const useLogout = (token) => {
    token = useSelector((state)=>state.token.accessToken);

    
      const navigate =useNavigate();  
      const dispatch = useDispatch();
      const handleLogout = async () => {
        console.log(token);
        try {
          const response = await axios.post(
            "http://localhost:8000/api/logout",
            null,
            {
              headers: {
                Authorization: `Bearer ${token}`,
                Accept: "application/json",
              },
            }
          );
          console.log(response.data);
          dispatch(setLoginState("notLoged"));
          dispatch(clearAccessToken());
          dispatch(clearUserInfo());
          navigate('/');
        } catch (error) {
          console.log(error.message);
        }
        console.log(localStorage.getItem("isLoged"));
       
      };
      return {
        handleLogout
      }
    };
export const useRegister = () => {
    const dispatch = useDispatch();
    // State variables
    const [formData,setFormData] =useState({
        email:'',
        password: '',
        confirmPassword:'',
        name:'',
        number:'',
    })

    const {email,password,confirmPassword,name,number} = formData
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const navigate =useNavigate();

   // Function to handle login
    const register = async () => {
        setIsLoading(true);
        try {
            const response = await axios.post('http://localhost:8000/api/register', {
                email,
                password,
                confirmPassword,
                name,
                number,
            },
            {
                headers:{
                    "ngrok-skip-browser-warning": "69420",   
                }
            });

            // Clear username and password fields
            setFormData({email :'',password:'',name:'',number:'',confirmPasword:''});
            setError(null);
            dispatch(setLoginState('loged'));
            dispatch(setAccessToken(response.data.access_token));
            dispatch(setUserInfo(JSON.stringify(response.data.user)));
            navigate('/',{replace:true})
                    
        } catch (error) {
            //Todo:modify...........
             if(error.message==="Request failed with status code 401"){
                 setError('Incorrect Email or Password')
                 setFormData({email :'',password:'',name:'',number:'',confirmPasword:''});
             }
        } finally {
            setIsLoading(false);
        }
    };

    // Return values and functions to be used by components
    return {
        email,
        setFormData,
        password,
        error,
        isLoading,
        register,
        formData,
        name,
        confirmPassword,
        number
    };
    
};


    
