import { useState, useEffect } from 'react';
import { Checkbox } from './checkbox';
import { RadioBtn } from './radio-btn';
import './select.scss';

export const Select = props => {
	const selectType = props.type;
	const optionsData = props.options;
	const [isCheckAll, setIsCheckAll] = useState(false);
	const [isCheck, setIsCheck] = useState([]);
	const [btnName, setBtnName] = useState('Select All');
	// const [optionsData, setOptionsData] = useState([]);

  useEffect(() => {
    if (isCheck.length === optionsData.length) {
			setIsCheckAll(true);
			setBtnName('Deselect All');
		} else {
			setIsCheckAll(false);
			setBtnName('Select All');
			
		}
		props.showAlert && msg();
  }, [isCheck]);

	const msg = () => {
		if (isCheck.length === 0) {
			alert(props.defaultMsg);
		} else {
			alert('Selected items: ' + isCheck);
		}
	}

	const handleSelectAll = () => {
		setIsCheckAll(!isCheckAll);
		setIsCheck(optionsData.map(option => option.value));
		if (isCheckAll) {
			setIsCheck([]);
		} 
	};

	const handleCheckClick = e => {
		const { value, checked } = e.target;
		setIsCheck([...isCheck, value]);
		if (!checked) {
			setIsCheck(isCheck.filter(item => item !== value));
		}
		if (isCheck.length === optionsData.length) {
			setIsCheckAll(true);
		}
	};

	const handleRadioClick = e => {
		const { value } = e.target;
		props.showAlert && alert('selected item: ' + value);
	}

	

	const options = optionsData && optionsData.map((option, index) => {
		return (
			<div className='select-item' key={index}>
				{selectType === 'multi' ?
					<Checkbox 
						value={option.value} 
						index={index} 
						handleClick={handleCheckClick} 
						isChecked={isCheck.includes(option.value)}
						>
							{option.label}
						</Checkbox>
					: <RadioBtn 
							value={option.value} 
							index={index} 
							handleClick={handleRadioClick} 
							>
								{option.label}
							</RadioBtn>
				}
			</div>
		)
	});

	return (
		<div className='select-wrapp'>
			{selectType === 'multi' && <button className='select-all-btn' onClick={handleSelectAll}>{btnName}</button>}
			{options}
		</div>
	)
}