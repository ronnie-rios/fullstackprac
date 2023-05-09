import Form from '../components/Form';
import { useState } from 'react';
import { redirect  } from 'react-router-dom';

const CreatePage = () => {
    const [errState, setErrState] = useState();
    // const navigate = useNavigate();

    const postForm = async formData => {
        const response = await fetch('http://localhost:9922/todos', {
            headers: {
                'Content-Type': 'application/json'
            },
            method: 'POST',
            body: JSON.stringify(formData),
        });
        
        if(!response.ok) {
            const errorData = await response.json();
            let validator = errorData.message;
            setErrState({ msg: validator})
        } else {
            redirect('/')
        }

    }

  return (
    <div>
        <Form postForm={postForm} errorState={errState}/>
    </div>
  )
}

export default CreatePage