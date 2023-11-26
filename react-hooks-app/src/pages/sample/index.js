import {useState,useEffect} from 'react';
import axios from 'axios'

const Sample = () => {
   const [response, setResponse] = useState([]);

   useState(()=>{
    axios.get('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => {
        setResponse(response.data)
        
    }).catch(
        error =>{
            console.log('error in response :',error)

        }
        
    )
   },[]);

   return(
        <>
          
        </>
   );
}
export default Sample