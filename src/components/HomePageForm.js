import React from 'react'
import HomePageInput from '../components/HomePageComponents/HomePageInput';

export default function HomePageForm(props) {

    const {formInput,setFormInput} = props;

    return (
        <div>
            <form className="form-group col-6">
                <HomePageInput 
                    formInput={formInput} 
                    setFormInput={setFormInput} 
                    type={`text`} 
                    placeholderText={`Give me the name`}/>
                <br/>
                <HomePageInput 
                    formInput={formInput} 
                    setFormInput={setFormInput} 
                    type={`number`} extraClassName={`pb-3`} 
                    placeholderText={`Give me the age`}/>
                {/*<input type="number" className="form-control pb-3" placeholder="Give me the age" value={formInput.age} onChange={(event)=>{ setFormInput({...formInput,age: event.target.value}) }}></input><br/> */}
             </form>
        </div>
    )
}
