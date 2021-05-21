import react from "react"
// import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';

const ToDoText = (props) => {



    return (
        <>
            <div className="todo_style">
                <button className="fa fa-times" 
                aria-hidden="true" 
                onClick={()=>{
                    props.onSelect(props.id)
                }}>
                <HighlightOffIcon /></button>
                <li>{props.text}</li>
            </div>
        </>
    );
}
export default ToDoText;