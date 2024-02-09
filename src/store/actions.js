import axios from "axios";

export async function loginUser(username, password) {
  try {
    const response = await axios.post("http://localhost:3000/auth/login", {
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
    const response = await axios.post(
      "http://localhost:3000/auth/registration",
      {
        ...username,
        ...password,
        ...email,
      }
    );

    if (response.status === 201) {
      return {
        success: true,
        message: "Успешная регистрация",
        data: response.data,
      };
    } else {
      return {
        success: false,
        message: "Неудачная попытка регистрации",
        error: response.data,
      };
    }
  } catch (error) {
    if (error.response) {
      return {
        success: false,
        message: error.response.data.warningMessage,
        error: error.response.data,
      };
    } else {
      return {
        success: false,
        message: "Ошибка при регистрации",
        error: error,
      };
    }
  }
}
export async function getAllCloth({ commit }) {
  return await axios
    .get("http://localhost:3000/cloth/allcloth", {})
    .then((response) => {
      const data = response.data;
      commit("getAllRandom", data);
      return data;
    })
    .catch((error) => {
      console.error(error);
      throw error;
    });
}
export async function fetchClothPartDetails({ commit }, id) {
  try {
    const response = await axios.get(`http://localhost:3000/cloth/${id}`);

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
export async function searchCloth({ commit }, search) {
  try {
    const response = await axios.post("http://localhost:3000/cloth/search", {
      ...search,
    });
    console.log(search);
    const data = response.data;
    commit("searchItem", data);
    return data;
  } catch (error) {
    return { success: false, message: "Ошибка сервера", error: error };
  }
}
export async function refreshTokens(refreshToken) {
  try {
    const response = await axios.post("http://localhost:3000/auth/refresh", {
      ...refreshToken,
    });

    if (response.status === 200) {
      const { access_token, refresh_token } = response.data;

      localStorage.setItem("accessToken", access_token);
      localStorage.setItem("refreshToken", refresh_token);

      return access_token;
    } else {
      console.log("Не получилось обновить токен");
      return null;
    }
  } catch (error) {
    console.log("Не получилось обновить токен");
    return null;
  }
}
export async function addToCart(username, userId, partId) {
  try {
    const response = await axios.post("http://localhost:3000/cart/add", {
      ...username,
      ...userId,
      ...partId,
    });

    if (response.status === 201) {
      const data = response.data;

      return data;
    } else {
      console.log("Не получилось добавить в корзину");
      return null;
    }
  } catch (error) {
    console.log("Server error");
    return null;
  }
}
export async function checkPartId(userId, partId) {
  try {
    const response = await axios.post("http://localhost:3000/cart/check", {
      ...userId,
      ...partId,
    });

    if (response.status === 201) {
      const data = response.data;

      return data;
    } else {
      console.log("Не получилось найти в корзину");
      return false;
    }
  } catch (error) {
    console.log("Server error");
    return false;
  }
}
export async function removeFromCart(cartId) {
  try {
    const response = await axios.post("http://localhost:3000/cart/delete", {
      ...cartId,
    });
    console.log(props.item._id);
    if (response.status === 201) {
      const data = response.data;

      return data;
    } else {
      console.log("Не получилось удалить из корзины");
      return false;
    }
  } catch (error) {
    console.log("Server error");
    return false;
  }
}
