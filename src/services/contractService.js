// contractService.js (src/services/contractService.js)
import axios from 'axios';

const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL;

export const getContracts = async () => {
  try {
    const token = localStorage.getItem('token');
    const response = await axios.get(`${backendUrl}/api/contracts/user-contracts`, {
      headers: { Authorization: `Bearer ${token}` }
    });
    return response.data;
  } catch (error) {
    throw new Error('Error fetching contracts: ' + error.message);
  }
};

export const getUserContracts = async () => {
  try {
    const token = localStorage.getItem('token');
    const response = await axios.get(`${backendUrl}/api/contracts/user-contracts`, {
      headers: { Authorization: `Bearer ${token}` }
    });
    return response.data;
  } catch (error) {
    throw new Error('Error fetching contracts: ' + error.message);
  }
};

export const getContractById = async (contractId) => {
  try {
    const token = localStorage.getItem('token');
    const response = await axios.get(`${backendUrl}/api/contracts/${contractId}`, {
      headers: { Authorization: `Bearer ${token}` }
    });
    return response.data;
  } catch (error) {
    throw new Error('Error fetching contract: ' + error.message);
  }
};

export const signContract = async (contractId, signature) => {
  try {
    const token = localStorage.getItem('token');
    const response = await axios.post(`${backendUrl}/api/contracts/sign/${contractId}`, { signature }, {
      headers: { Authorization: `Bearer ${token}` }
    });
    return response.data;
  } catch (error) {
    throw new Error('Error signing contract: ' + error.message);
  }
};