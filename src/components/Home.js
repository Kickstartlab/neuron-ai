import React from 'react'
import Footer from './Footer'
import Menu from './Menu'
import work_1 from '../assets/work_1.png';
import work_2 from '../assets/work_2.png';
import work_3 from '../assets/work_3.png';
import work_4 from '../assets/work_4.png';
import work_5 from '../assets/work_5.png';
import work_6 from '../assets/work_6.png';
import bg_data from '../assets/bg_data.png';
import vector from '../assets/vector.png';
import vector_1 from '../assets/vector_1.png';
import data from '../assets/data.png';
import side from '../assets/side.png';
import side_1 from '../assets/side_1.png';
import top from '../assets/top.png';
import bg_circle from '../assets/bg_circle.png';
import ProgressBar from './ProgressBar';


export default function Home() {

    return (
        <div className="bg-white-50 text-gray-50 font-inter overflow-hidden">


            {/* top section */}


            <div className="lg:px-20 px-5 bg-top">
                <div className='container mx-auto'>

                    <Menu />
                    <div className="lg:flex block justify-between items-center gap-x-12 py-12">
                        <div className="lg:w-1/2 w-full">

                            <p className='text-blue-50 font-semibold font-jakarta mb-5'>
                                Neuron Ai Health Data App
                            </p>

                            <h2 className='md:text-5xl text-3xl text-blue-100 font-jakarta font-extrabold'>
                                The New Way<br></br> to Measure Health <br></br>Data Is neuron Ai based.
                            </h2>

                            <p className='py-6 font-jakarta'>Neuron Ai Health Data App is an AI-powered App enables anyone to measure a wide range of biomarkers using a smartphone or tablet.</p>

                            <div className="font-jakarta">
                                <a href="/">
                                    <button className="text-white-100 bg-blue-50 py-3 md:px-8 px-3 rounded-sm font-semibold mt-5 text-sm">
                                        Have a look inside?
                                    </button>
                                </a>
                            </div>

                        </div>

                        <div className=" md:mt-0 mt-12 lg:w-1/2">
                            <img src={top} alt="Logo" className='lg:float-right sm:flex mx-auto' />
                        </div>

                        {/* <img src={b} alt="Logo" className='absolute right-0 mr-12 -mt-44 z-20' /> */}
                    </div>

                </div>
            </div>


            {/* about us section */}


            <div id='about' className="lg:px-20 lg:py-12 py-6 px-5">
                <div className='container mx-auto'>

                    <img src={side} alt="Logo" className='absolute left-0 -mt-56 lg:block hidden' />

                    <div className="lg:flex block justify-between items-center gap-x-16 py-12 space-y-6 relative z-20">

                        <div className="w-full text-center">

                            <p className='text-blue-50 font-semibold font-jakarta mb-5'>
                                CHOOSE US?
                            </p>

                            <h2 className='md:text-5xl text-3xl text-blue-100 font-jakarta font-extrabold'>
                                Why <span className='text-purple-100'>Choose</span> us?
                            </h2>

                            <p className='py-6 font-jakarta lg:w-8/12 flex mx-auto'>
                                Neuron Ai Health Data App is an AI-powered App enables anyone to measure a wide range of biomarkers using a smartphone or tablet.
                            </p>

                            <p className='font-jakarta lg:w-8/12 mx-auto'>
                                Biomarkers include blood pressure, heart rate, heart rate variability (multiple parameters and RRI raw data), oxygen saturation, breathing rate, sympathetic stress, parasympathetic activity, pulse-respiration quotient (PRQ), and Wellness Score.
                            </p>

                        </div>

                        <img src={bg_circle} alt="Logo" className='absolute right-0 mt-20 lg:block hidden' />

                    </div>

                </div>
            </div>


            {/* Neuron Ai Health Data App */}


            <div id='data' className="">

                <img src={side_1} alt="Logo" className='absolute right-0 -mt-12 lg:block hidden' />

                <div className="lg:px-20 px-5 lg:py-20 py-5">
                    <div className='container mx-auto'>

                        <div className="lg:flex block justify-between items-center gap-x-12 py-12">
                            <div className="lg:w-1/2 w-full">

                                <p className='text-blue-50 font-semibold font-jakarta mb-5'>
                                    Neuron Ai Health Data App
                                </p>

                                <h2 className='md:text-4xl text-3xl text-blue-100 font-jakarta font-extrabold'>
                                    Neuron Ai Health Data App is an<br></br> <span className='text-purple-100'>AI-powered</span> App enables anyone to
                                    measure a wide range of <span className='text-purple-100'>biomarkers</span> using a smartphone or tablet.
                                </h2>

                                <p className='py-6 font-jakarta'>Biomarkers include blood pressure, heart rate, heart rate variability (multiple parameters and RRI raw data), oxygen saturation, breathing rate, sympathetic stress, parasympathetic activity, pulse-respiration quotient (PRQ), and Wellness Score.</p>

                                <div className="font-jakarta">
                                    <a href="/">
                                        <button className="text-white-100 bg-blue-50 py-3 md:px-8 px-3 rounded-sm font-semibold mt-5 text-sm">
                                            Learn More
                                        </button>
                                    </a>
                                </div>

                            </div>

                            <div className=" md:mt-0 mt-12 lg:w-1/2 bg-circle z-20">
                                <img src={data} alt="Logo" className='w-8/12 flex mx-auto' />
                            </div>

                            <img src={bg_data} alt="Logo" className='absolute right-0 mr-20 mt-12 lg:block hidden' />
                        </div>

                    </div>
                </div>

            </div>


            {/* the tech behind Neuron Ai health parameters */}

            <div id='' className="">

                <img src={side} alt="Logo" className='absolute left-0 -mt-56 lg:block hidden' />

                <img src={side_1} alt="Logo" className='absolute right-0 mt-16 lg:block hidden' />

                <div className="lg:pb-20 py-5 lg:px-20 px-5 container mx-auto relative z-20">

                    <h2 className='md:text-4xl text-3xl text-center text-blue-100 font-jakarta font-extrabold capitalize'>
                        the tech behind Neuron <span className='text-purple-100'>Ai health</span> parameters
                    </h2>

                    <div className='grid lg:grid-cols-3 grid-cols-1 items-center gap-x-6 lg:space-y-0 space-y-6 my-16'>

                        <div className='font-poppins text-center bg-seagreen-100 text-white-100 rounded-xl px-5 py-8'>

                            <div className='space-y-4'>
                                <img src={work_1} alt="work" className='flex mx-auto' />

                                <p className='text-white-100'>
                                    Neuron Ai's technology applies a unique mix of signal processing and AI technologies, combined with a proprietary mathematical back-end to analyze a signal taken from exposed skin on the surface of a human face. It applies motion compensation and illumination normalization and supports any gender and skin color. The health parameters extraction is based on a remote photoplethysmography rPPG or PPG signal (using the touch of a finger on the smartphone or tablet’s rear camera for challenging environmental conditions like complete darkness).
                                </p>
                            </div>
                        </div>

                        <div className='font-poppins text-center bg-white-100 text-blue-100 rounded-xl px-5 py-8'>
                            <div className='space-y-4'>
                                <img src={work_2} alt="work" className='flex mx-auto' />

                                <p className='text-blue-100'>
                                    Neuron Ai's blood pressure monitoring technology extracts blood pressure using an optical technique called remote photoplethysmography (rPPG), which analyzes light that reflects off exposed skin on a human face. The technology uses advanced AI and deep learning algorithms, including computer vision technology and signal processing.
                                </p>
                            </div>
                        </div>

                        <div className='font-poppins text-center bg-white-100 text-blue-100 rounded-xl px-5 py-8'>
                            <div className='space-y-4'>

                                <img src={work_3} alt="work" className='flex mx-auto' />

                                <p className='text-blue-100'>
                                    Neuron Ai's sympathetic stress level measurement is based on the internationally approved Baevsky Stress Index as well as additional parameters. The technology does not require the analysis of any identifiable personal feature (e.g., eyes).
                                </p>
                            </div>
                        </div>

                    </div>

                </div>

            </div>


            {/* how it works */}

            <div id='working' className="py-5 lg:px-20 px-5 container mx-auto">
                <h2 className='md:text-4xl text-3xl text-center text-blue-100 font-jakarta font-extrabold capitalize'>
                    How it <span className='text-purple-100'>Works</span>
                </h2>

                <div className='w-10/12 flex flex-col justify-center lg:space-y-0 space-y-6 mx-auto my-12'>

                    <div className='lg:flex justify-left gap-x-8 '>

                        <img src={work_4} alt="Logo" className='lg:flex mx-auto' />

                        <div className='pt-6 lg:text-left text-center'>
                            <p className='text-seagreen-100 text-lg font-bold font-jakarta mb-uppercase'>
                                Step 1
                            </p>
                            <h2 className='md:text-4xl text-2xl text-blue-100 font-jakarta font-extrabold capitalize'>
                                Seamlessly <span className='text-purple-100'>download</span><br></br> Neuron Ai App to your Sphone or tablet
                            </h2>
                        </div>

                        <img src={vector} alt="Logo" className='absolute ml-96 mt-72 lg:block hidden' />

                    </div>

                    <div className='lg:flex justify-end items-end lg:space-y-0 space-y-6 gap-x-8 lg:-translate-y-44 -translate-y-0'>
                        <div className='pt-6 lg:text-right text-center'>
                            <p className='text-seagreen-100 text-lg font-bold font-jakarta mb-uppercase'>
                                Step 2
                            </p>
                            <h2 className='md:text-4xl text-2xl text-blue-100 font-jakarta font-extrabold capitalize'>
                                <span className='text-purple-100'>Empower</span> end-users anywhere
                                to measure and share an extensive
                                range of health parameters
                            </h2>
                        </div>
                        <img src={work_5} alt="Logo" className='lg:flex mx-auto' />

                    </div>

                    <div className='lg:flex items-end mt-12 lg:space-y-0 space-y-6 gap-x-8 lg:-translate-y-40 -translate-y-0'>

                        <img src={vector_1} alt="Logo" className='absolute right-0 mr-60 lg"-translate-y-0 -translate-y-96 lg:block hidden' />

                        <img src={work_6} alt="Logo" className='lg:mx-0 mx-auto' />

                        <div className='lg:text-left text-center'>
                            <p className='text-seagreen-100 text-lg font-bold font-jakarta mb-uppercase'>
                                Step 3
                            </p>
                            <h2 className='md:text-4xl text-2xl text-blue-100 font-jakarta font-extrabold capitalize'>
                                <span className='text-purple-100'>Enhance</span>  your services with <br></br>
                                real-time health data <br></br>
                                shared by end-users
                            </h2>
                        </div>
                    </div>
                </div>
            </div>

            {/* tokenomics */}

            <div id='tokenomics' className="lg:px-20 px-5 lg:pb-20 py-5 relative z-20">
                <div className='container mx-auto'>
                    <h2 className='md:text-5xl text-3xl text-purple-100 text-center font-extrabold'>
                        Tokenomics
                    </h2>

                    <div className='mt-8'>
                        <h3 className='md:text-4xl text-2xl text-blue-50 mb-5 text-center font-poppins font-bold'>
                            Total Supply: 1,000,000,000 $NAI
                        </h3>
                        <h3 className='md:text-4xl text-2xl text-blue-50 text-center font-poppins font-bold'>
                            TAX: 5/5
                        </h3>
                    </div>


                    <div className='lg:pt-12 pt-6'>
                        <ProgressBar />
                    </div>

                </div>
            </div>

            {/* get started */}

            <img src={side} alt="Logo" className='absolute left-0 -mt-72 lg:block hidden' />

            <div className="lg:px-20 px-5 lg:pb-20 py-5 relative z-20">
                <div className='container mx-auto'>
                    <div className='bg-white-100 rounded-md lg:p-12 p-6 shadow-md font-poppins text-center lg:w-10/12 flex flex-col mx-auto'>

                        <h2 className='md:text-4xl text-3xl text-gradient font-extrabold'>
                            Get started with <span className='font-medium'>NEURON AI</span>
                        </h2>

                        {/* <p className='py-6 lg:w-1/2 flex mx-auto leading-loose'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sodales morbi tristique libero urna sem vitae. Viverra facilisis rhoncus et, nibh nullam vitae laoreet.
                        </p> */}

                        <button className='rounded-full mt-5 px-6 py-3 bg-gradient text-white-100 w-44 flex mx-auto'>
                            Lets Get Started
                        </button>
                    </div>
                </div>
            </div>

            <Footer />

        </div>
    )
}
