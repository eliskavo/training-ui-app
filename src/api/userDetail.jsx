import axios from "axios";
import { TESKALABS_API_URL } from "../utils/config";

export const getUserDetail = async (id) => {
  try {
    const { data } = await axios.get(`${TESKALABS_API_URL}/detail/${id}`);
    return data;
  } catch (error) {
    console.error("Error fetching user detail:", error);
    return null;
  }
};
