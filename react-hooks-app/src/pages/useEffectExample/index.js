import {useEffect,useState} from 'react';
import  axios from 'axios';


function useEffectExample() {
    const  [respData, setRespData ] = useState([]);

    useEffect(() =>{
        axios.get('https://jsonplaceholder.typicode.com/todos/1')
           .then(response => {
            setRespData(response.data);

           })
           .catch(error => {
               console.log('Error in fetching data :',error)
           })
    },[]
  
    );

    console.log('respData',respData);

    return (
        <div>
            {respData.title}
        </div>
    )
}

export default useEffectExample
