import './checkbox.scss';

export const Checkbox = (props) => {
	const {index, value, handleClick, isChecked, children} = props;
	return (
		<span className='checkbox'>
			<input 
				type='checkbox' 
				id={`check-${index}`} 
				value={value} 
				onChange={handleClick} 
				checked={isChecked} 
			/>
			<label htmlFor={`check-${index}`}>
				<span>{children}</span>
			</label>
		</span>
	)
}