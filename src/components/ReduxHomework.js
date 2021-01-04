import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {changeLikeState, changeUnLikeState} from '../store/smiley/actions';
import {selectIsLiked, selectMessege, selectImg} from '../store/smiley/selectors'

export default function ReduxHomework() {
    const dispatch = useDispatch();
    const isLiked = useSelector(selectIsLiked);
    const message = useSelector(selectMessege);
    const img = useSelector(selectImg);
    let imgBackground = isLiked ? {backgroundColor: 'unset'} : { backgroundColor: '#ff8906'};

    return (
        <div>
              <h1 className="pt-5"><u>Redux homework!</u></h1>
               <div>
                    <img src={img} width="200" style={imgBackground} alt=""/>
                    <br/>
                    <p>{message}</p>
        
                    <button 
                        className="btn btn-success mt-2" 
                        disabled={isLiked} 
                        onClick={() => {dispatch(changeLikeState(true))}}
                        >Like</button>
                    {isLiked ? <button 
                    className="btn btn-danger mt-2 ml-3"
                    onClick= {() => {dispatch(changeLikeState(false))}}
                    >Unlike</button> : ''}
                    
                </div>
        </div>
    )
}
