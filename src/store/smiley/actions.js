
export const CHANGELIKESTATE = "CHANGELIKESTATE";

/* export const changeLikeState = () => {
    return {
        type: CHANGELIKESTATE,
        payload: true,
    }
} */

export const changeLikeState = (value) => {
    return {
        type: CHANGELIKESTATE,
        payload: value,
    }
}


/* Idk what is the better solution... so i would ask it in the class :)  */
/* export const CHANGEUNLIKESTATE = "CHANGEUNLIKESTATE";

export const changeUnLikeState = () => {
    return {
        type: CHANGEUNLIKESTATE,
        payload: false,
    }
} */