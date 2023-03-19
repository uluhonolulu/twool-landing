import React from 'react';
import Layout from './home/layout/Layout';
import Slider2 from './home/slider/Slider2';
import TextEffect from "./home/elements/TextEffect"
import { useLink } from '@linked/react/lib';
import axios from 'axios';

const Home = (props) => {
	const $username = useLink('');
	const [messageCount, setMessageCount] = React.useState(0);

	React.useEffect(() => {
		getMessageCount();
	}, []);
	
	return (
		<Layout>
			<section className="xl:bg-[length:100vw_auto] bg-top bg-no-repeat -mt-24 pt-24" style={{ backgroundImage: "url('assets/imgs/backgrounds/intersect.svg')" }}>
				<div className="hidden lg:block absolute inset-0 w-1/2 ml-auto bg-gray-100 z-0" style={{ "zIndex": "-1" }}></div>
				<div className="container mx-auto">
					<div className="pt-12 text-center">
						<div className="max-w-2xl mx-auto mb-8">
							<h2 className="text-3xl lg:text-4xl lg:leading-normal mb-4 font-bold font-heading wow animate__animated animate__fadeIn">
								Send <span className="text-blue-500">cold</span> messages<br/>
								Establish <span className="text-orange-500">warm</span> relationships
							</h2>
							<div className="text-lg lg:text-2xl text-gray-700 leading-relaxed wow animate__animated animate__fadeIn d-inline">
								Unique Twitter DMs generated by AI based on your leads' profiles
							</div>
						</div>

						<div className="relative max-w-6xl mt-16 md:mt-8 mb-8 mx-auto">
							<img src="/assets/imgs/elements/pattern.png" alt="pattern" />
							<div className="absolute" style={{ top: "9%", left: "14%", width: "72%", height: "66%" }}>
								<img className="inline-block jump rounded wow animate__animated animate__fadeIn" src="/assets/imgs/screen.png" alt="screenshot" />
							</div>
						</div>
					</div>
				</div>
			</section>			

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

				<div className='max-w-2xl mx-auto text-center'>
					{!!messageCount && <><span className='font-semibold text-lg'>{messageCount}</span> DMs sent so far</>}
				</div>
			</section>			
		</Layout>
	)

	function go() {
		var username = $username.value;
		window.location.href = `https://tally.so/r/nW2M1j?username=${username}`;
	}

	async function getMessageCount() {
		const response = await axios.get('https://jolly-river-015d7ce03.2.azurestaticapps.net/api/get_sent_messages_count');
		const count = response.data;
		setMessageCount(count);
	}
}

export default Home;
