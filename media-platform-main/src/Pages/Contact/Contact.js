import React from 'react';

const Contact = () => {
    return (
        <section className='mt-5 lg:mt-16'>
            <div className='flex justify-center items-center  '>
                <div className="py-6 w-full">
                    <div className="grid max-w-6xl grid-cols-1 px-2 mx-auto lg:px-8 md:grid-cols-2 md:divide-x divide-primary">
                        <div className="py-6 md:py-0 md:px-6">
                            <h1 className="text-4xl font-bold">Get in touch</h1>
                            <p className="pt-2 pb-4">Fill in the form to start a conversation</p>
                            <div className="space-y-4">
                                <p className="flex items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 mr-2 sm:mr-6">
                                        <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"></path>
                                    </svg>
                                    <a
                                        href="https://www.google.com/maps/place/Feni+District/@23.0210445,91.413633,10z/data=!4m6!3m5!1s0x37536821ff0c2e39:0xf094eed60ba43331!8m2!3d22.9408784!4d91.4066646!16zL20vMDF0MHli"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label="Our address"
                                        title="Our address"
                                        className="  hover:text-primary transition-all duration-300 text-deep-purple-accent-400 hover:text-deep-purple-800"
                                    >
                                        Feni,Chittagong. Bangladesh
                                    </a>
                                </p>
                                <p className="flex items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 mr-2 sm:mr-6">
                                        <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path>
                                    </svg>
                                    <a href="tel:+880-18434-33443" className='hover:text-primary transition-all'>    <span>+880-18434-33443</span></a>
                                </p>
                                <p className="flex items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 mr-2 sm:mr-6">
                                        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                                        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                                    </svg>
                                    <a
                                        href="mailto:salmanibnakabir@gmail.com"
                                        aria-label="Our email"
                                        title="Our email"
                                        className="hover:text-primary transition-all duration-300 text-deep-purple-accent-400 hover:text-deep-purple-800"
                                    >
                                        salmanibnakabir@gmail.com
                                    </a>
                                </p>
                            </div>
                        </div>
                        <form className="flex flex-col py-6 space-y-6 md:py-0 md:px-6 ng-untouched ng-pristine ng-valid">
                            <label className="block">
                                <span className="mb-1">Full name</span>
                                <input type="text" required placeholder="Leroy Jenkins" className="input input-bordered input-primary w-full  block rounded-md" />
                            </label>
                            <label className="block">
                                <span className="mb-1">Email address</span>
                                <input type="email" required placeholder="leroy@jenkins.com" className="input input-bordered input-primary w-full  block rounded-md" data-temp-mail-org="0" />
                            </label>
                            <label className="block">
                                <span className="mb-1">Message</span>
                                <textarea rows="3" required className="block w-full rounded-md textarea textarea-primary" placeholder='Type your message here---'></textarea>
                            </label>
                            <button type="submit" className="self-center px-8 py-3 text-lg rounded focus:ring hover:ring focus:ring-opacity-75 dark:bg-primary dark:text-gray-900 focus:ring-primary hover:ring-primary">Submit</button>
                        </form>
                    </div>
                </div>

            </div>
            <div>
                

                <iframe className='w-full md:h-[550px] sm:h-[500px] h-[350px]' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d470024.16514817416!2d91.1334300660029!3d23.0214299185402!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x37536821ff0c2e39%3A0xf094eed60ba43331!2sFeni%20District!5e0!3m2!1sen!2sbd!4v1676729271841!5m2!1sen!2sbd" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </section>
    );
};

export default Contact;