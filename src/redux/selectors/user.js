const chatId = localStorage.getItem('chatId')
export const getUsersSelector = (state) =>  Object.values(state.user)
export const getUserSelector = (state) => state.user[chatId]



