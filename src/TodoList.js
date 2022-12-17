import { Component } from "react";
import checkBoxEmpty from './check-box-empty.png';
import check from './check-box.png';

export class TodoList extends Component {
    constructor(){
        super();
        this.state = {
            userInput: "",
            toDoList: [],
            checkBox: []
        }

        this.crossedWord = this.crossedWord.bind(this);
    }
    

    onFormSubmit(e){
        e.preventDefault();
    }

    onChangeEvent(e){
        this.setState({userInput: e})
    }

    addItem(input) {
        if (input === '') {
            alert("Please enter an item");
        }
        else {
            let listArray = this.state.toDoList;
            listArray.push(input);

            let checkArray = this.state.checkBox;
            checkArray.push(checkBoxEmpty);

            this.setState({
                toDoList: listArray, 
                userInput: '', 
                checkBox: checkArray
            });
        }
    }

    crossedWord(event){
        const li = event.target;
        li.classList.toggle('crossed');
        
        let checkArray = this.state.checkBox;
        
        if (li.classList.value === 'crossed') {
            checkArray[li.value] = check;
        }
        else {
            checkArray[li.value] = checkBoxEmpty;
        }
        this.setState({checkBox: checkArray});
        
    }

    deleteItem(){
        let listArray = this.state.toDoList;
        listArray = [];
        let checkArray = this.state.checkBox;
        checkArray = [];
        this.setState({toDoList: listArray, checkBox: checkArray});
    }

    render() {
        return(
            <div>
                <form onSubmit={this.onFormSubmit}>
                    <div className="container">
                        <input type="text" placeholder="What are your plans?" 
                        onChange={(e) => {this.onChangeEvent(e.target.value)}}
                        value={this.state.userInput} />
                    </div>
                    <div className="container">
                        <button className="btn-add btn" onClick={() => this.addItem(this.state.userInput)}> Add </button>
                    </div>
                    <div>
                        <ul>
                            {this.state.toDoList.map((item, index) => (
                                <li onClick={this.crossedWord} key={index} value={index}> 
                                    <img src={this.state.checkBox[index]} width="15px" alt="check"/> {' '}
                                    {item}
                                </li>
                            ))}
                        </ul>
                        
                    </div>
                    <div className="container">
                        <button className="btn-delete btn" onClick={() => this.deleteItem()}> Delete all </button>
                    </div>
                </form>
            </div>
        )
    }
}