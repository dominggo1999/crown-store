import React from 'react'
import './MenuItem.scss'

const MenuItem = (props) =>{
	console.log(props);
	return (
		<div className = "menu-item">
			
			<div 
				className="background-image" 
				style = {{backgroundImage :`url(${props.imageUrl})`}}>
			</div>

			<div className="text-content">
				<h1>{props.title}</h1>
				<p>Shop Now</p>
			</div>
		</div>
	)
}

export default MenuItem