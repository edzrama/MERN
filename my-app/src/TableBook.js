import React, {useState} from "react";

const TableBook = (props) => {
const {books, onDelete, onUpdate} = props;

return(
    <table>
    <thead>
        <tr>
            <th>Title</th>
            <th>Description</th>
        </tr>
    </thead>
    <tbody>
        {
            books.map(book => {
                return (
                    <tr key={book._id}>
                        <td>{book.title}</td>
                        <DescriptionForm book={book} onUpdate={onUpdate}/>
                        <td><button onClick={() => onDelete(book._id)}> Delete</button></td>
                    </tr>
                )
            })
        }
    </tbody>
    </table>

)
}

const DescriptionForm = (props) =>{
    const {book, onUpdate} = props;
    const [description, setDescription] = useState(book.description);
    const handleChange = (e) => {
        setDescription(e.target.value);
    }
    return (
        <>
            <td> <input name="description" type="text" 
            value={description} onChange={(e) => {handleChange(e)}} /></td>
            <td><button onClick={ () => onUpdate({_id: book._id, description: description})}>Update</button></td>
        </>
    )
}


export default TableBook