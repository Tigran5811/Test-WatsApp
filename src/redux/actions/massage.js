import { GET_MASSAGE, GET_MASSAGES } from '../reducers/massage';
import { deleteNotification, getChatHistory, getNotification, postNotification } from '../../api/massage';

export const getMassage = () => async (dispatch, getState) => {
  try {
    const { massage } = getState()
    const { data } = await getNotification()
    if (data !== null) {
      const { body, receiptId } = data
      if (body?.messageData?.textMessageData?.textMessage) {
        dispatch({ type: GET_MASSAGE, stateMassage: massage[body.senderData.chatId], chatId: body.senderData.chatId, person: "incoming", massage: body.messageData.textMessageData.textMessage });
        const file = await deleteNotification(receiptId)
        if (file) {
          return dispatch(getMassage())
        }
      } else if (body?.messageData?.extendedTextMessageData?.text) {
        dispatch({ type: GET_MASSAGE, stateMassage: massage[body.senderData.chatId], chatId: body.senderData.chatId, person: "outgoing", massage: body.messageData.extendedTextMessageData.text });
        const file = await deleteNotification(receiptId)
        if (file) {
          return dispatch(getMassage())
        }
      } else {
        const file = await deleteNotification(receiptId)
        if (file) {
          return dispatch(getMassage())
        }
      }

    }

  } catch (error) {
    console.log(error)
  }
};

export const createMassage = (massage) => async (dispatch) => {
  try {
    const chatId = localStorage.getItem('chatId')
    
    const data = JSON.stringify({ chatId: chatId, message: massage, })
    await postNotification(data)
    dispatch(getMassage())
  } catch (error) {
    console.log(error)
  }
};


export const getHistory = () => async (dispatch) => {
  try {
    const chatId = localStorage.getItem('chatId')
    const { data } = await getChatHistory(JSON.stringify({ chatId, count: 100 }))
    const newData = data.reverse().map(item => {
      if (item.type === 'outgoing') {
        return {
          massage: item.textMessage,
          person: item.type
        }
      }
      if (item.type === "incoming") {
        return {
          massage: item.textMessage,
          person: item.type
        }
      }
    })
    dispatch({ type: GET_MASSAGES, chatId: chatId, stateMassage: newData });
  } catch (error) {
    console.log(error)
  }
};


