


export const createNotification = content => {
  return {
    type: 'SET_NOTIFICATION',
    data: content 
  };
};

 


const notificationReducer = (state = '', action) => {
   // console.log(action)
  switch (action.type) {
    case 'SET_NOTIFICATION':
      return action.data;
    default:
      return state;
  }
};

export default notificationReducer;