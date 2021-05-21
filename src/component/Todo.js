import { useState } from "react";
import "./todo.css";
import ToDoText from "./ToText";

function ToDo() {

    const [inputList, setInputList] = useState("")
    const [items, setItems] = useState([])
    const itemEvent = (e) => {
        setInputList(e.target.value)
    }

    const listOfItem = () => {
        setItems((oldItem)=>{
            return[...oldItem,inputList];
        });
        setInputList("");

    }

    const deleteItem = (id) => {
        setItems((oldItem) => {
            return oldItem.filter((arrElem,index) =>{
                return index !==id;
            })
        })
    }

    return (
        <>
            <div className="main_div">
                <div className="center_div">
                    <br />
                    <h1>ToDo List</h1>
                    <br />
                    <input type="text" placeholder="Add a Item" onChange={itemEvent} 
                    value={inputList}
                     />
                    <button className="btn" onClick={listOfItem}>+</button>

                    <ol>
                        {/* <li>{inputList}</li> */}
                        {
                            items.map((itemval,index) => {
                                return (
                                    <ToDoText key={index}
                                    id={index} 
                                    text={itemval} 
                                        onSelect={deleteItem}
                                    />
                                );
                            })

                        }

                    </ol>
                </div>

            </div>

        </>
    );
}
export default ToDo;