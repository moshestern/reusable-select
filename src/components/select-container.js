import { Select } from './select';
import { optionsMock } from '../utils/options-mock';

export const SelectContainer = () => {
	const data = optionsMock;
	return (
		<>
			{/* <Search /> */}
			<Select 
				options={data.options} 
				type={data.type}
			/>
		</>
	)
};