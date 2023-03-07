import { FaFacebook, FaLinkedin, FaGithub } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import socialLogo from '../../Assests/social-logo.png'

const Footer = () => {
    return (
        <div className="px-4 pt-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
            <div className="grid gap-10 row-gap-6 mb-8 sm:grid-cols-2 lg:grid-cols-4">
                <div className="sm:col-span-2">
                    <Link
                        to="/"
                        aria-label="Go home"
                        title="Own Media"
                        className="inline-flex items-center"
                    >
                        <img className="w-12" src={socialLogo} alt="" />
                        <span className="ml-2 text-xl font-bold tracking-wide text-gray-800 uppercase">
                            Own media
                        </span>
                    </Link>
                    <div className="mt-6 lg:max-w-sm">
                        <p className="text-sm text-gray-800">
                            This social media bio is one of your first opportunities to make an impression on your audience. A good bio can make the difference between whether or not a user chooses to follow you
                        </p>
                        <p className="mt-4 text-sm text-gray-800">

                        </p>
                    </div>
                </div>
                <div className="space-y-2 text-sm">
                    <p className="text-base font-bold tracking-wide text-gray-900">

                        Contact
                    </p>
                    <p className='animate-pulse text-primary'>
                        <Link
                            to="/contact"
                            aria-label="Contact Us"
                            title="Contact Us"

                        >
                            Contact Now
                        </Link>
                    </p>
                    <div className="flex">
                        <p className="mr-1 text-gray-800">Phone:</p>
                        <a
                            href="tel:+880-18434-33443"
                            aria-label="Our phone"
                            title="Our phone"
                            className="hover:text-primary transition-all duration-300 text-deep-purple-accent-400 hover:text-deep-purple-800"
                        >
                            +880-18434-33443
                        </a>
                    </div>
                    <div className="flex">
                        <p className="mr-1 text-gray-800">Email:</p>
                        <a
                            href="mailto:salmanibnakabir@gmail.com"
                            aria-label="Our email"
                            title="Our email"
                            className="hover:text-primary transition-all duration-300 text-deep-purple-accent-400 hover:text-deep-purple-800"
                        >
                            salmanibnakabir@gmail.com
                        </a>
                    </div>
                    <div className="flex">
                        <p className="mr-1 text-gray-800">Address:</p>
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
                    </div>
                </div>
                <div>
                    <span className="text-base font-bold tracking-wide text-gray-900">
                        Social
                    </span>
                    <div className="flex items-center mt-1 space-x-3">
                        <a
                            href="https://github.com/salmanibnakabir"
                            target='_blank'
                            rel="noreferrer"
                            title='Github'
                            className="text-gray-500 hover:text-primary transition-all duration-300 hover:text-deep-purple-accent-400"
                        >
                            <FaGithub className='text-xl hover:text-primary transition-all' />
                        </a>
                        <a
                            href="https://www.linkedin.com/in/salman-ibna-kabir-25b227262/"
                            target='_blank'
                            rel="noreferrer"
                            title='Linkedin'
                            className="text-gray-500 hover:text-primary transition-all duration-300 hover:text-deep-purple-accent-400"
                        >
                            <FaLinkedin className='text-xl hover:text-primary transition-all' />
                        </a>
                        <a
                            href="https://web.facebook.com/salmanibnakabir"
                            target='_blank'
                            rel="noreferrer"
                            title='Facebook'
                            className="text-gray-500 hover:text-primary transition-all duration-300 hover:text-deep-purple-accent-400"
                        >
                            <FaFacebook className='text-xl hover:text-primary transition-all' />
                        </a>
                    </div>
                    <p className="mt-4 text-sm text-gray-500">
                        Here is am always active you can nock me any time.
                    </p>
                </div>
            </div>
            <div className="flex flex-col-reverse justify-between pt-5 pb-10 border-t lg:flex-row">
                <p className="text-sm text-gray-600">
                    © Copyright 2022 <a href="/" className='font-bold italic hover:text-primary transition-all'>Programming-hero</a> student. All rights reserved.
                </p>
                <ul className="flex flex-col mb-3 space-y-2 lg:mb-0 sm:space-y-0 sm:space-x-5 sm:flex-row">
                    <li>
                        <Link
                            to="/Faq"
                            className="text-sm text-gray-600 hover:text-primary transition-all duration-300 hover:text-deep-purple-accent-400"
                        >
                            F.A.Q
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/PrivacyPolicy"
                            className="text-sm text-gray-600 hover:text-primary transition-all duration-300 hover:text-deep-purple-accent-400"
                        >
                            Privacy Policy
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/TermsConditions"
                            className="text-sm text-gray-600 hover:text-primary transition-all duration-300 hover:text-deep-purple-accent-400"
                        >
                            Terms &amp; Conditions
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Footer