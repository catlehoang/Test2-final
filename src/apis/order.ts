import { config } from 'lib/axios';
import axios from 'axios';

const axiosInstance = axios.create(config);

export const getList = async () => {
	return await axiosInstance.get('order_list.json?key=3446ea90').then((res) => {
		//order_list_api.json?key=e11e2d80
		//order_list.json?key=3446ea90
		return res.data;
	});
};

export const getDetail = async () => {
	return await axiosInstance.get('order_detail.json?key=3446ea90').then((res) => {
		//order_detail_api.json?key=e11e2d80
		//order_detail.json?key=3446ea90
		return res;
	});
};
