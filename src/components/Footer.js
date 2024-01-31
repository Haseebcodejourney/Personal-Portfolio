import React from 'react';
import '../style/footer.css';
import saleemLogo from '../assets/images/saleemLogo.svg'

const Footer = () => {
	return (
		<>
			<section className="container inbio-wrapper">
				<figure>
					<img data-src="assets/images/Saleem Logo.svg" alt="Footer Logo" width="78" height="35" className="" src={saleemLogo} />
				</figure>
				<div className="inbio-text">
					<p>© 2024. All rights reserved by
						<a href="#" aria-describedby="name-description">Hamza Haseeb</a>
						<span id="name-description" className="sr-only">Full name: Hamza Haseeb</span>l
					</p>
				</div>
			</section>
		</>
	);
};

export default Footer;
