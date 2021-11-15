import axios from 'axios';

const baseUrl = process.env.NEXT_PUBLIC_IEAPI_URL;

export async function logIn(payload) {
  try {
    const response = await axios.post(`${baseUrl}/account/login`, payload);
    const { data } = response.data;
    return { data };
  } catch (error) {
    if (error.response) return { error: error.response.data };
  }
}

export async function signUp(payload) {
  try {
    const response = await axios.post(`${baseUrl}/account/register`, payload);
    const { data } = response.data;
    return { data };
  } catch (error) {
    if (error.response) return { error: error.response.data };
  }
}

export async function checkUserValidation(payload) {
  try {
    const response = await axios.post(`${baseUrl}/account/check`, payload);
    const { data } = response.data;
    return { data };
  } catch (error) {
    if (error.message) return { error };
  }
}

export async function createUserAuthPin(pin, token) {
  try {
    const response = await axios.post(`${baseUrl}/account/pin-anonymous`, pin, {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    });
    const { status } = response;
    return { status };
  } catch (error) {
    if (error.message) return { error };
  }
}

export async function getProviders() {
  try {
    const response = await axios.get(`${baseUrl}/provider`, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const { data } = response.data;
    return { data };
  } catch (error) {
    if (error.message) return { error };
  }
}
