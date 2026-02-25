import axios from "axios";
import { TESKALABS_API_URL } from "../utils/config";

export const getUsers = async ({ params }) => {
  try {
    const { data } = await axios.get(`${TESKALABS_API_URL}/data`, { params });
    return {
      count: data.count,
      rows: data.data,
    };
  } catch (error) {
    console.error("Error fetching users:", error);
    return { count: 0, rows: [] };
  }
};
