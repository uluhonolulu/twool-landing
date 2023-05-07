import React from 'react';
import Layout from './home/layout/Layout';
import Slider2 from './home/slider/Slider2';
import CTA from './CTA';
import SentCounter from './SentCounter';
import Slider1 from './home/slider/Slider1';
import Faqs from './Faqs';

const Home = (props) => {

	return (
		<Layout>
			<section className="xl:bg-[length:100vw_auto] bg-top bg-no-repeat">
				<div className="container mx-auto">
					<div className="pt-12 text-center">
						<div className="max-w-2xl mx-auto mb-8">
							<h1 className="text-3xl lg:text-4xl lg:leading-normal mb-4 font-bold font-heading wow animate__animated animate__fadeIn">
								Scale your Twitter DM outreach without losing your human touch
							</h1>
							<h2 className="text-lg lg:text-2xl text-gray-700 leading-relaxed wow animate__animated animate__fadeIn d-inline">
								Unlock the Power of Advanced Search to Find High-Quality Leads and Send Personalized Messages at Scale
							</h2>
						</div>
					</div>
				</div>
			</section>

			<section className="mt-20 mx-10" id="swiper">
				<Slider1 />
			</section>

			<section className="mt-20 mx-auto max-w-screen-sm" id="finder">
				<div className="bg-slate-100 py-8 shadow rounded-sm">
					<h1 className="text-4xl font-bold text-center mb-4">Discover More Leads on Twitter with Our AI-powered Tool</h1>
					<div className="container mx-auto px-6">
						<p className="text-lg">🔎 By analyzing data from Twitter and using advanced algorithms, we can identify potential customers who may be interested in your products or services. </p>
						<p className="text-lg mt-4">✒ For every lead, twool generates a unique message based on the lead's profile or interests. </p>
						<p className="text-lg mt-4">✅ Review your leads, add a call to action, or just click "Send" and wait for replies.</p>
					</div>
				</div>
			</section>

			<Faqs />

			<CTA/>

			<SentCounter/>


		</Layout>
	)


}

export default Home;
