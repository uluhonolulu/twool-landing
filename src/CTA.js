import { useLink } from '@linked/react/lib';
import React from 'react';

const CTA = (props) => {

	const $username = useLink('');


	return (
		<React.Fragment>
			<section className="bg-top bg-no-repeat pb-4" style={{ backgroundImage: "url('assets/imgs/elements/blob.svg')" }}>
				<div className="container px-4 mx-auto">
					<div className="relative py-10 px-4 lg:p-10">
						<div className="max-w-lg mx-auto text-center">
							<h2 className="mb-4 text-3xl lg:text-4xl font-bold font-heading wow animate__animated animate__fadeIn">
								Start sending Twitter DMs today
							</h2>
							<p className="mb-8 text-gray-400 wow animate__animated animate__fadeIn" data-wow-delay=".3s">
								Join closed beta and get a lifetime discount
							</p>

							<div className="flex flex-wrap justify-center space-x-4">
								<div className='bg-white p-5 py-6 shadow'>
									<div>Regular price</div>
									<div className="mt-3 text-gray-700 text-base lg:text-base font-bold font-heading price--line-through">$49/mo</div>
								</div>

								<div className='bg-white p-5 py-6 shadow'>
									<div>Early bird price</div>
									<div className="mt-3 text-gray-700 text-base lg:text-lg font-bold font-heading price--line-through">$30/mo</div>
								</div>

								<div className='bg-white p-5 py-6 shadow'>
									<div className='font-bold'>Your price</div>
									<div className="mt-3 text-gray-700 text-2xl lg:text-3xl font-bold font-heading">$20/mo</div>
								</div>
							</div>

							<div className="mt-4 p-4 bg-white rounded-lg shadow flex flex-wrap max-w-md mx-auto wow animate__animated animate__fadeIn" data-wow-delay=".5s">
								<div className="flex w-full md:w-2/3 px-3 mb-3 md:mb-0 md:mr-6 bg-gray-100 rounded">
									<img src="/assets/imgs/icons/twitter-blue.svg" alt="Twitter icon" />
									<input {...$username.props} className="w-full pl-3 py-4 text-xs text-gray-400 font-semibold leading-none bg-gray-100 outline-none" type="text" placeholder="Enter your Twitter handle" />
								</div>

								<button onClick={go} className="w-full md:w-auto py-4 px-8 text-xs text-white font-semibold leading-none bg-orange-400 hover:bg-orange-500 rounded" type="submit">
									Sign Up
								</button>
							</div>

							<div className="mt-8 text-gray-700 text-xs wow animate__animated animate__fadeIn" data-wow-delay=".7s">
								When you click "Sign up", you'll be redirected to take a short survey. I'll contact you on Twitter when I get the results of the survey.
							</div>
						</div>
					</div>
				</div>
			</section>
		</React.Fragment>
	)

	function go() {
		var username = $username.value;
		window.location.href = `https://tally.so/r/nW2M1j?username=${username}`;
	}

}

export default CTA;
