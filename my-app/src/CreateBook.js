import React, {useState} from "react";

const CreateBook = (props) => {
    const {onCreate} = props;
    const [book, setBook] = useState( {
        title: "",
        description: ""
    });

    const handleChange = (e) => {
        setBook({
            ...book, [e.target.name]: e.target.value
        })
    
    }
    
    const onSubmit = (e) => {
        e.preventDefault();
        onCreate(book);
    }

    return (
        <form onSubmit={onSubmit}>
            <label>Title</label>
            <input name="title" type="text" value={book.title} 
            onChange={(e) => {handleChange(e)}} />
            <label>Description</label>
            <input name="description" type="text" value={book.description} 
            onChange={(e) => {handleChange(e)}} />
            <button type="submit" value="Submit">Submit</button>
        </form>
    );
}

export default CreateBook;