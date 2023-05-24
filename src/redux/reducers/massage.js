export const GET_MASSAGE = 'GET_MASSAGE';
export const GET_MASSAGES = 'GET_MASSAGES';

const reducer = (state = {}, { type, stateMassage=[], chatId, person, massage }) => {
  switch (type) {
    case GET_MASSAGE:
      return { ...state, [chatId]: [...stateMassage, { person, massage }] }
      case GET_MASSAGES:
        return { ...state, [chatId]: [...stateMassage] }
    default:
      return state;
  }
};
export default reducer;
