import axios from "axios";

export async function loginUser(username, password) {
  try {
    const response = await axios.post("http://localhost:3000/user/login", {
      ...username,
      ...password,
    });

    if (response.status === 200) {
      return { success: true, message: "Успешный вход", data: response.data };
    } else {
      return { success: false, message: "Неудачная попытка входа" };
    }
  } catch (error) {
    return { success: false, message: "Ошибка сервера", error: error };
  }
}
export async function registerUser(username, password, email) {
  try {
    const response = await axios.post("http://localhost:3000/user/register", {
      ...username,
      ...password,
      ...email,
    });

    if (response.status === 201) {
      return {
        success: true,
        message: "Успешная регистрация",
        data: response.data,
      };
    } else {
      return { success: false, message: "Неудачная попытка регистрации" };
    }
  } catch (error) {
    return { success: false, message: "Ошибка при регистрации", error: error };
  }
}
export async function getAllCloth({ commit }) {
  return await axios
    .get("http://localhost:3000/cloth/allcloth", {
    })
    .then((response) => {
      const data = response.data;
      commit("getllRandom", data);
      return data;
    })
    .catch((error) => {
      console.error(error);
      throw error;
    });
}
export async function fetchClothPartDetails({ commit }, id) {
  try {
    const response = await axios.get(
      `http://localhost:3000/cloth/${id}`
    );

    if (response.status === 200) {
      commit("setClothPartDetails", response.data);
      return {
        success: true,
        message: "Успешно получен товар",
        data: response.data,
      };
    } else {
      return { success: false, message: "Не удалось получить товар" };
    }
  } catch (error) {
    return {
      success: false,
      message: "Ошибка при запросе товара",
      error: error,
    };
  }
}
export async function selectCloth({ commit }, value) {

  let url = `http://localhost:3000/cloth/${value}`;

  return await axios
    .get(url)
    .then((response) => {
      const data = response.data;
      console.log(data);
      commit("selectCloth", data);
      return data;
    })
    .catch((error) => {
      console.error(error);
      throw error;
    });
}


