import { config } from 'lib/axios'
import axios from 'axios';

const axiosInstance = axios.create(config);

export const getList = async () => {
    return await axiosInstance.get('material_api.json?key=e11e2d80').then((res) => {
		return res.data;
	});
};

//material_api.json?key=e11e2d80
//material_api.json?key=3446ea90