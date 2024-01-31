import React from 'react';
import '../style/contact.css'

const Contact = () => {
	return (
		<>
			<section className="container contact-us-wrapper" id="contact-us">
				<span>Contact</span>
				<h3>Contact With Me</h3>
				<div className="inner-container">
					<div className="left">
						<figure>
							<img
								src="assets/images/contact-us-img.webp"
								alt="Contact Us"
								width="466"
								height="292"
							/>
						</figure>
						<h4>Nevine Acotanza</h4>
						<p>Chief Operating Officer</p>
						<p>
							I am available for freelance work. Connect with me via and call in to
							my account.
						</p>
						<p>
							<a href="tel:+01234567890" aria-describedby="phone-description">
								Phone: +01234567890
							</a>
							<span id="phone-description" className="sr-only">
								Phone number for contact: +01234567890
							</span>
							<a href="mailto:admin@example.com" aria-describedby="email-description">
								Email: admin@example.com
							</a>
							<span id="email-description" className="sr-only">
								Email address for contact: admin@example.com
							</span>
						</p>
						<div className="icons-wrapper">
							<strong>FIND WITH ME</strong>
							<div className="icons-wrapper-inner">
								<span>
									<a href="#" aria-label="LinkedIn">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											width="24"
											height="24"
											viewBox="0 0 24 24"
											fill="none"
											stroke="currentColor"
											strokeWidth="2"
											strokeLinecap="round"
											strokeLinejoin="round"
											className="feather feather-linkedin"
										>
											<path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
											<rect x="2" y="9" width="4" height="12"></rect>
											<circle cx="4" cy="4" r="2"></circle>
										</svg>
									</a>
								</span>
							</div>
						</div>
					</div>
					<div className="right">
						<form>
							<div className="label-wrapper">
								<div className='label-wrapper-inner-wrapper'>
									<div className="label-wrapper-inner">
										<label htmlFor="name">Your Name</label>
										<input
											type="text"
											id="name"
											name="name"
											autoComplete="off"
											required
										/>
									</div>
									<div className="label-wrapper-inner">
										<label htmlFor="phone">Phone Number</label>
										<input
											type="tel"
											id="phone"
											name="phone"
											placeholder=""
											autoComplete="off"
										/>
									</div>
								</div>
								<div className="label-wrapper-inner-full">
									<label htmlFor="email">Email</label>
									<input
										type="email"
										id="email"
										name="email"
										autoComplete="off"
										required
									/>
								</div>
								<div className="label-wrapper-inner-full">
									<label htmlFor="subject">Subject</label>
									<input
										type="text"
										id="subject"
										name="subject"
										placeholder=""
										autoComplete="off"
									/>
								</div>
								<div className="label-wrapper-inner-full">
									<label htmlFor="message">Your Message</label>
									<textarea id="message" name="message" required></textarea>
								</div>
							</div>
							<button type="submit">
								SEND MESSAGE
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="24"
									height="24"
									viewBox="0 0 24 24"
									fill="none"
									stroke="currentColor"
									strokeWidth="2"
									strokeLinecap="round"
									strokeLinejoin="round"
									className="feather feather-arrow-right"
								>
									<line x1="5" y1="12" x2="19" y2="12"></line>
									<polyline points="12 5 19 12 12 19"></polyline>
								</svg>
							</button>
						</form>
					</div>
				</div>
			</section>

		</>
	);
};

export default Contact;
