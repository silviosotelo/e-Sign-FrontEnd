// src/pages/dashboard.js
import React, { useEffect, useState } from 'react';
import { getContracts, getUserIdContracts } from '../services/contractService';
import ContractList from '../components/ContractList';
import Layout from '../components/Layout';

const DashboardPage = () => {
  const [contracts, setContracts] = useState([]);

  useEffect(() => {
    const fetchContracts = async () => {
      try {
        //const contractsData = await getContracts();
        const contractsData = await getUserIdContracts();
        setContracts(contractsData);
      } catch (error) {
        console.error('Error fetching contracts:', error);
      }
    };
    fetchContracts();
  }, []);

  return (
    <Layout pageTitle="Hola 👋, bienvenido!">
      <ContractList contracts={contracts} />
    </Layout>
  );
};

export default DashboardPage;
