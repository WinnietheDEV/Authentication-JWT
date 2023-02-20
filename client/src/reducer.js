const reducer = (state, action) => {
  if (action.type === "DIRECT_REGISTER") {
    return { ...state, logIn: false, register: true, dashboard: false };
  }

  if (action.type === "DIRECT_LOGIN") {
    return { ...state, logIn: true, register: false, dashboard: false };
  }

  if (action.type === "DIRECT_DASHBOARD") {
    return { ...state, logIn: false, dashboard: true, register: false };
  }
};

export default reducer;
