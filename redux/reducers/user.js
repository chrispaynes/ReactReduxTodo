// userReducer reduces the user object with user-associated actions.
export default function users(user = {}, action) {
  switch (action.type) {
    case 'CREATE_USER_ID':
      return {
        name: action.name,
        id: action.id
      }
    default:
      return user;
  }
}
