// import React

import React,{useState} from "react";
import {Link} from "react-router-dom";
import "./HomePage.css";

// make a function component

function HomePage () {

    const initialState = "";
    const [input,setInput] = useState(initialState);
    // add a new key called isLiked and make a like button to the form, if the like button is liked then say liked if the like button is not liked, then say like me
    const formInitialState = {name: "", age: "", isLiked: false};
    
    const [formInput, setFormInput] = useState(formInitialState);

    console.log("every render",formInput)


    const handleClick = (e) => {
        e.preventDefault();
        console.log("name",formInput.name);
        console.log("age",formInput.age);
        console.log("isLiked", formInput.isLiked);

    }
    const handleLikeClick = (e) => {
       e.preventDefault();
        console.log(e.target.value);
       // (e) => { setFormInput({...formInput, isLiked: formInput.isLiked})}
       //setFormInput({...formInput,isLiked: e.target.value});
       setFormInput(state => ({
        ...formInput,
        isLiked: !state.isLiked
      }));
    }


    return <div>
                <h1 className="pb-3">Homepage is this page! :D</h1>
                    
                <br/>
                <div className="d-flex justify-content-center row">
                    <form className="form-group col-6">
                        <input type="text" className="form-control" placeholder="Give me the name" value={formInput.name} onChange={(event)=>{ setFormInput({...formInput,name: event.target.value}) }}></input><br/>
                        <input type="number" className="form-control pb-3" placeholder="Give me the age" value={formInput.age} onChange={(event)=>{ setFormInput({...formInput,age: event.target.value}) }}></input><br/>
                        <button className="btn btn-primary col-4" onClick={(e)=>{handleClick(e)}}> Console Log input</button>
                    </form>
                    <div className="col-12 d-flex justify-content-center pb-3">
                        <div className={`reaction ${formInput.isLiked ? "happy" : "sad"}`}></div>
                    </div>
                    <div className="like-buttons">
                        <button 
                            className={` btn btn-success btn-lg mb-2`} 
                            value={formInput.isLiked} 
                            onClick={(e)=>handleLikeClick(e)}
                            disabled={formInput.isLiked}
                        >
                                {`${formInput.isLiked ? "Liked" : "Like me"}`}
                        </button> 
                        
                        <button 
                            className={`btn btn-danger btn-lg ${formInput.isLiked ? '' : 'd-none'}`} 
                            value={formInput.isLiked} 
                            onClick={(e)=>handleLikeClick(e)}
                        >Unlike</button> 
                    </div>
                </div>

                <Link to="/products">
                        <button className="btn btn-light goto_button"> {`>> Products`}</button>
                </Link>
            </div>
       
}

// export function component
export default HomePage;