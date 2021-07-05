import React from 'react';
import './stylesheets/results.css';

class Results extends React.Component {
	constructor() {
		super();
		this.state = {};
	}

	render() {
		if (this.props.images.length === 0 && this.props.timeOut === false) {
			return (
				<div className='loader-container'>
					<div className='loader'></div>
					<p>Loading</p>
				</div>
			);
		} else if (this.props.timeOut === true && this.props.images.length === 0) {
			return (
				<div className='loader-container not-found'>
					<h2>Sorry, no results found!</h2>
					<p>Your internet may be slow.</p>
				</div>
			);
		}
		return (
			<div className='results'>
				{this.props.images.map(image => {
					return (
						<div key={image.id} className='image'>
							<img alt={image.alt_description} src={image.urls.regular}></img>
							<div className='overlay'></div>
							<button
								className='btn  btn-sm btn-light'
								onClick={() => {
									console.log('clicked!');
									window.open(image.urls.raw, '_newtab');
								}}
							>
								&darr;
							</button>
							<div className='likes badge badge-light'>{image.likes} Likes</div>
							<div className='profile'>
								<img
									alt=''
									src={image.user.profile_image.small}
									style={{ width: 30, height: 'auto', borderRadius: '50%' }}
								></img>
								<h6
									onClick={() => {
										window.open(
											'https://www.unsplash.com/@' + image.user.username,
											'_newtab'
										);
									}}
								>
									{image.user.name}
								</h6>
							</div>
						</div>
					);
				})}
			</div>
		);
	}
}

export default Results;
