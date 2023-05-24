import { getContactInfo } from '../../api/user';
import { GET_USER } from '../reducers/user';

export const getContact = () => async (dispatch) => {
  try {
    const chatId = localStorage.getItem('chatId')
    const { data } = await getContactInfo(JSON.stringify({ chatId }))
    dispatch({ type: GET_USER, chatId: data.chatId, name: data.name, avatar: data.avatar });
  } catch (error) {
    console.log(error)
  }
};
