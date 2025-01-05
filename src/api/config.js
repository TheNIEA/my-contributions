// src/api/config.js
import { API } from 'aws-amplify';

const apiName = 'bhhiAPI';

export const fetchUserDashboard = async () => {
  try {
    const response = await API.get(apiName, '/dashboard');
    return response;
  } catch (error) {
    console.error('Error fetching dashboard:', error);
    throw error;
  }
};

export const updateImpactMetric = async (metricData) => {
  try {
    const response = await API.post(apiName, '/impact-metrics', {
      body: metricData
    });
    return response;
  } catch (error) {
    console.error('Error updating impact metric:', error);
    throw error;
  }
};