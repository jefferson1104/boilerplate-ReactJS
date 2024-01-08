const storage = localStorage.getItem('isAuthenticated');

const isAuthenticated = storage === 'true' ? true : false;

export { isAuthenticated };
