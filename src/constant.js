export const createUrl = () => {
    const idInstance = localStorage.getItem('idInstance')
    const apiTokenInstance = localStorage.getItem('apiTokenInstance')
    return {
        urlPost: `https://api.green-api.com/waInstance${idInstance}/SendMessage/${apiTokenInstance}`,
        urlGet: `https://api.green-api.com/waInstance${idInstance}/ReceiveNotification/${apiTokenInstance}`,
        urlDelete: `https://api.green-api.com/waInstance${idInstance}/DeleteNotification/${apiTokenInstance}`,
        urlHistory: `https://api.green-api.com/waInstance${idInstance}/GetChatHistory/${apiTokenInstance}`,
        urlContactInfo: `https://api.green-api.com/waInstance${idInstance}/getContactInfo/${apiTokenInstance}`,
        urlGetSettings: `https://api.green-api.com/waInstance${idInstance}/getSettings/${apiTokenInstance}`,

    }
}

export const changeChatId = (chatId) => chatId.slice(0, -5)


