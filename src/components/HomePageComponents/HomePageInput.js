import React from 'react'

export default function HomePageInput(props) {

    const {formInput,setFormInput,type, placeholderText, extraClassName} = props;

    return (
        <input type={type} className={(extraClassName ? `form-control ` + extraClassName : 'form-control')} placeholder={placeholderText} value={formInput.name} onChange={(event)=>{ setFormInput({...formInput,name: event.target.value}) }}></input>
    )
}
