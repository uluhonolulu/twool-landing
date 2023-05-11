import React from 'react';

const Faqs = (props) => {

	return (
		<section className='mt-8'>
		<div className="container">
			<div className="flex w-full lg:h-full">
				<div className="flex-1 lg:pr-32 py-20 lg:py-16 wow animate__animated animate__fadeInUp" data-wow-delay=".3s">
					<div className="max-w-2xl px-4 mx-auto lg:ml-0">
						<h3 className="mb-8 text-4xl font-bold font-heading wow animate__animated animate__fadeInUp">Faqs</h3>
						<div>

                            <div className="text-lg mt-6 wow animate__animated animate__fadeInUp" data-wow-delay=".1s">
                                <div className="p-6 bg-white rounded shadow">
                                    <div className="text-blue-500 mb-4">
                                        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                                        </svg>
                                    </div>
                                    <h4 className="mb-3 font-bold font-heading">I'm just starting with DMs. How will your tool help me?</h4>
                                    <div className="text-gray-700 text-sm mt-2 space-y-2">
										<p>I will personally help you find leads and set up the system for you.</p>
										<p>twool will create an initial message for every lead that maximizes the chances of being replied to.</p>
									</div>
                                </div>
                            </div>

                            <div className="text-lg mt-6 wow animate__animated animate__fadeInUp" data-wow-delay=".3s">
                                <div className="p-6 bg-white rounded shadow">
                                    <div className="text-blue-500 mb-4">
                                        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                        </svg>
                                    </div>
                                    <h4 className="mb-3 font-bold font-heading">Will I be banned from Twitter for using your tool?</h4>
                                    <div className="text-gray-700 text-sm mt-2 space-y-2">
										<p>
											Twitter provides the possibility to send messages programmatically through their API, so you won't be banned for using twool.
										</p>
										<p>
											Users are banned for sending mass messages that look spammy. Messages generated by twool are best for generating positive responses so our users never get banned.
										</p>
									</div>
                                </div>
                            </div>

                            <div className="text-lg mt-6 wow animate__animated animate__fadeInUp" data-wow-delay=".5s">
                                <div className="p-6 bg-white rounded shadow">
                                    <div className="text-blue-500 mb-4">
                                        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                                        </svg>
                                    </div>
                                    <h4 className="mb-3 font-bold font-heading">Other tools also offer advanced search and personalization. What makes your tool unique?</h4>
                                    <div className="text-gray-700 text-sm mt-2 space-y-2">
										<p>
											twool is the only tool that offers advanced search by user's topics and interests, language, country, and more.
										</p>
										<p>
											Personalization offered by other tools is often limited to inserting the lead's first name. The result is that you're sending a bleak message to everyone, meaning to no one at all.
										</p>
										<p>
											twool sends a truly unique message to every user based on their profile. This helps you to establish a connection and proceed with your sales process.
										</p>
									</div>
                                </div>
                            </div>
						</div>
					</div>
				</div>
				<div className="hidden lg:block lg:relative lg:w-1/3 bg-indigo-500 wow animate__animated animate__fadeInUp" data-wow-delay=".3s">
					<div className="absolute left-0 md:-mr-32 mt-24 flex items-center">
						<img className="jump lg:max-w-lg" src="assets/imgs/illustrations/faqs.svg" alt="" />
					</div>
				</div>
			</div>
		</div>
	</section>
	)
}

export default Faqs;