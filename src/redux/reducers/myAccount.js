export const GET_ACCOUNT = 'GET_ACCOUNT';

const reducer = (state = {}, { type, chatId, name, avatar }) => {
  switch (type) {
    case GET_ACCOUNT:
      return { ...state,  name, avatar, chatId  }
    default:
      return state;
  }
};
export default reducer;
