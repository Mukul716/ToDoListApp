import React,{useState} from 'react';
import ToDoList from './ToDoList';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';

const App = () =>{

    const [inputList,setInputList]=useState();
    const [Items,setItems]=useState([])
    const itemEvent = (event) =>
    {
        setInputList(event.target.value);

    }

    const listOfItems = () =>{
        setItems((olditems) => {
            return [...olditems,inputList ]
        });
        setInputList(" ");

    }

    return (
        <>
        <div className="main_div">
            <div className="center_div">
            <br/>
            <h1>ToDo List</h1>
            <br/>
            <input type="text" placeholder="Add a Items"
            value={inputList}
             onChange={itemEvent} />
            <Button className="newBtn" onClick={listOfItems}><AddIcon/> </Button>

            <ol>
            
             { Items.map( (itemval,index) => {
                return ( <ToDoList
                 text={itemval}
                 
                 key={index}
                  />
                );


              })};
            </ol>
            </div>
        </div>


        </>
    );
};

export default App;
