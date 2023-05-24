export const GET_USER = 'GET_USER';

const reducer = (state = {}, { type, chatId, name, avatar }) => {
  switch (type) {
    case GET_USER:
      return { ...state, [chatId]: { name, avatar, chatId } }
    default:
      return state;
  }
};
export default reducer;
