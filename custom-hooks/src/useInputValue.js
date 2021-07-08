// our first custom hook!
import {useState} from 'react';

const useInputValue = (initialValue) => {
    const [inputValue, setInputValue] = useState(initialValue)

    // event handler to update state
    const handleChange = (e) => {
        setInputValue(e.target.value)
    }

    // event handler to clear the input after submit
    const handleSubmit = (e) => {
        e.preventDefault();
        setInputValue('')
    }

    return [inputValue, handleChange, handleSubmit]
}

export default useInputValue;