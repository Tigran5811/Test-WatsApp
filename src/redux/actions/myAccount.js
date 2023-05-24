import { getSettingsInfo } from '../../api/account';
import { getContactInfo } from '../../api/user';
import { GET_ACCOUNT } from '../reducers/myAccount';


export const getSettings = () => async (dispatch) => {
  try {
    const { data } = await getSettingsInfo()
    const file = await getContactInfo(JSON.stringify({ chatId: data.wid }))
    dispatch({ type: GET_ACCOUNT, chatId: file.data.chatId, name: file.data.name, avatar: file.data.avatar });
  } catch (error) {
    console.log(error);
  }
};


