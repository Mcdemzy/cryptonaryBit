import axios from "axios";

export const getWalletBalances = async (userId: string) => {
  try {
    const response = await axios.get(`/api/user/${userId}/wallets`);
    return response.data;
  } catch (error) {
    console.error("Error fetching wallet balances:", error);
    throw error;
  }
};
