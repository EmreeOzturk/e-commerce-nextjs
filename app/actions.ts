'use server';
import axios from 'axios';
export async function getIPData() {
  try {
    const ipData = axios
      .get(`https://api.ipregistry.co/31.206.100.121?key=${process.env.IPREGISTRY_API_KEY}`)
      .then((response) => {
        return response.data;
      });
    return ipData;
  } catch (error) {
    console.error(error);
  }
}
