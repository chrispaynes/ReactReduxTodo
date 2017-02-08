// userReducer reduces the user object with user-associated actions.
let userReducer = (user = {}, action) => {
  switch (action.type) {
    case 'CREATE_USER_ID':
      return {
        username: user.username,
        id: action.id
      }
    default:
      return user;
  }
}

export default userReducer;
