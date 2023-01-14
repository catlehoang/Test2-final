import { Button, Filters, Page } from '@shopify/polaris';
import { useCallback, useEffect, useState } from 'react';

import { getList } from 'apis/order';
import GridView from 'pages/Order/List/GridView';
import Loading from 'components/Loading';

const OrderPage = () => {
	const [data, setData] = useState<any[]>();
	const [loading, setLoading] = useState(true);
	const [queryValue, setQueryValue] = useState('');

	useEffect(() => {
		const fetchData = async () => {
			const data = await getList().then((data) => setData(data));
			setLoading(false);
			return data;
		};
		fetchData().catch(console.error);
	}, []);

	const handleFiltersQueryChange = useCallback((value: string) => {
		setQueryValue(value);
	}, []);

	const handleOnSearch = () => {
		let newArr = data && [...data];
		newArr = newArr && newArr.filter((x) => x.client_name === queryValue);
		setData(newArr);
	};

	return (
		<Page fullWidth title="Order List" compactTitle>
			<div className="mb-5">
				<Filters
					queryPlaceholder="Search by name"
					queryValue={queryValue}
					filters={[]}
					onQueryClear={() => setQueryValue('')}
					onClearAll={() => setQueryValue('')}
					onQueryChange={handleFiltersQueryChange}
				>
					<div className="ml-5">
						<Button onClick={handleOnSearch}>Search</Button>
					</div>
				</Filters>
			</div>

			<GridView data={data} />
			<Loading loading={loading} />
		</Page>
	);
};

export default OrderPage;
