import axios from "axios";

export function searchCloth({ commit }) {
  axios
    .get("http://localhost:3000/products")
    .then((response) => {
      const data = response.data;

      commit("searchRandom", data);
    })
    .catch((error) => {
      console.log(error);
    });
}

export async function loginUser(username, password) {
  try {
    const response = await axios.post('http://localhost:3000/auth/login', {
      username: username,
      password: password,
    });

    if (response.status === 200) {
      // Успешный вход
      console.log('Успешный вход:', response.data);
      return true;
    } else {
      // Неудачная попытка входа
      console.log('Неудачная попытка входа');
      return false;
    }
  } catch (error) {
    // Обработка ошибок
    console.error('Ошибка при входе:', error);
    return false;
  }
}

export async function registerUser(username, password, email) {

  try {
    const response = await axios.post('http://localhost:3000/user/register', {
      ...username,
      ...password,
      ...email, 
    });
    

    if (response.status === 201) {
      return { success: true, message: 'Успешная регистрация', data: response.data };
    } else {
      return { success: false, message: 'Неудачная попытка регистрации' };
    }
  } catch (error) {
    return { success: false, message: 'Ошибка при регистрации', error: error };
  }
}
