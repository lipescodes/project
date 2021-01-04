import sad from '../../assets/imgs/sad.png';
import happy from '../../assets/imgs/happy.png';

import {CHANGELIKESTATE, CHANGEUNLIKESTATE} from './actions';

const initialSate = {
    liked: false,
    likeMessage: 'Please Like me!!!',
    img: sad
}

export default (state = initialSate, {type, payload}) => {
    switch(type){
    
    /* case CHANGELIKESTATE: {
        
        return {
            liked: true,
            likeMessage: 'Thanks the like! PLS follow and dont unlike me!',
            img: happy
        }
    } */
    case CHANGELIKESTATE: {
        
        if (payload) {
            return {
                liked: true,
                likeMessage: 'Thanks the like! PLS follow and dont unlike me!',
                img: happy
            }
        }else{
            return {   
                liked: false,
                likeMessage: 'Please Like me!!!',
                img: sad
            } 
        }
    }

  /*   case CHANGEUNLIKESTATE: {
        return {   
            liked: false,
            likeMessage: 'Please Like me!!!',
            img: sad
        }
    } */
    
    default:
        return state;
    }
}