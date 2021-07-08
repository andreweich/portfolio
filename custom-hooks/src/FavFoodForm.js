import useInputValue from './useInputValue';

const FavFoodForm = () => {
    // const [favFood, setFavFood] = useState('');

    // const handleChange = (e) => {
    //     setFavFood(e.target.value)
    // }

    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     setFavFood('')
    // }

    // has to be in same order as return in useInputValue
    const [favFood, handleFoodChange, handleFoodSubmit] = useInputValue('')

    return (
        <form onSubmit={handleFoodSubmit}>
            <label htmlFor="favFood">What is your favourite food?</label>
            <input type="text" value={favFood} onChange={handleFoodChange} id="favFood"/>
            <button>Save!</button>
        </form>
    )
}

export default FavFoodForm;