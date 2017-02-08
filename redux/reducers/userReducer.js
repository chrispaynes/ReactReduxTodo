//the reducers code can become very large. It is wise to separate the reducers and then combine them into a single file using the redux library's "combine reducers". the combine file is then passed into the store config. the state tree is later split into parts and each specific part will grab a specific reducer assigned to it. The reducers verify that they have a switch case statement action that they can handle. After the action is handled they will return their data to the state tree. the
//main reducer takes the sub-reducers change and puts that into the main state tree. put the reducers in a reducer folder with the redux folder
//when the reducers are separate, the reducer does not need to be passed the whole state tree. Instead it receives a only the portions of the tree it needs.
let userReducer = function(user = {}, action){
    switch(action.type){

        case 'CREATE_USER_ID':
            console.log('a user ID has been created with a reducer action type')
            return {
                    username: user.username,
                    id: action.id
                }    

        default:
            return user;
    }
}

export default userReducer
