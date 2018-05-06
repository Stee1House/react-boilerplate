import apiCaller from 'utils/api';

function call() {
  return apiCaller.call(...arguments)
}

const api = {
  call
};

export default api;