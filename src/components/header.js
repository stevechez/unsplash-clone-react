import React from 'react';
import './stylesheets/header.css';

class searchHeader extends React.Component {
	constructor() {
		super();
		this.state = {
			value: 'dog'
		};
	}

	handleChange = event => {
		this.setState({ value: event.target.value });
	};

	getButtonClasses = () => {
		let classes = 'btn  ml-4  btn-';
		classes += this.state.value ? 'secondary bg-dark' : 'light';
		return classes;
	};
	render() {
		return (

			<>
				<nav className="navbar navbar-light bg-light navbar-expand-sm" style={{ 'position': 'sticky', 'top': '1px', 'zIndex': '999' }}>

					<svg width="32" height="32" class="_1Jlgk" version="1.1" viewBox="0 0 32 32" aria-labelledby="unsplash-home" aria-hidden="false"><title id="unsplash-home">Unsplash Home</title><path d="M10 9V0h12v9H10zm12 5h10v18H0V14h10v9h12v-9z"></path></svg>
				</nav>

				<div className='formGroup headerHero'>
					<input
						type='text'
						value={this.state.value}
						onChange={this.handleChange}
						onKeyUp={e => {
							if (e.keyCode === 13) {
								this.props.onSubmit(this.state.value);
							}
						}}
					></input>
					<button
						onClick={() => this.props.onSubmit(this.state.value)}
						className={this.getButtonClasses()}
						disabled={this.state.value ? false : true}
					>
						Search
					</button>
				</div>
			</>
		);
	}
}

export default searchHeader;
