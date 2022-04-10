import './radio-btn.scss';

export const RadioBtn = (props) => {
	return (
		<span className='radioBtn'>
			<input type='radio' id={`check-${props.index}`} value={props.value} name='radio' onChange={props.handleClick} />
			<label htmlFor={`check-${props.index}`}>
				<span>{props.children}</span>
			</label>
		</span>
	)
}