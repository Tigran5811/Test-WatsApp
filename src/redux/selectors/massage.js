const chatId = localStorage.getItem('chatId')
export const getMassageSelector = (state) =>  state.massage[chatId]
    
