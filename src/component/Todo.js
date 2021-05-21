import { useState } from "react";
import "./todo.css";


function ToDo() {

    const [inputList, setInputList] = useState("buy a mango")

    const itemEvent = () => {

    }

    return (
        <>
            <div className="main_div">
                <div className="center_div">
                    <br />
                    <h1>ToDo List</h1>
                    <br />
                    <input type="text" placeholder="Add a Item" onChange={itemEvent} />
                    <button>+</button>

                    <ol>
                        <li>{inputList}</li>
                    </ol>
                </div>

            </div>

        </>
    );
}
export default ToDo;