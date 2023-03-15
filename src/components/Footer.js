import React from 'react'
import logo_1 from '../assets/logo_1.png';
import twitter from '../assets/twitter.png';
import telegram from '../assets/telegram.png';
import redit from '../assets/redit.png';
import orb from '../assets/orb.png';



export default function Footer() {
  return (
    <div className="py-5">
      <footer className='container text-gray-50 mx-auto lg:px-20 px-5'>

        <div className="grid lg:grid-cols-5 md-grdid-cols-2 grid-cols-1 justify-center mx-auto space-y-6 font-poppins py-12">

          <div className='col-span-2'>

            <a href='/'>
              <img src={logo_1} alt="Logo" />
            </a>

            <div className='my-6'>
              <p className='text-lg font-jakatra text-blue-100'>
                The New Way to Measure
              </p>
              <p className='text-lg font-jakatra text-blue-100'>
                Health Data Is Neuron Ai based.
              </p>
            </div>

            <div className='flex gap-x-4 items-center'>
              <a href='/'>
                <img src={twitter} alt="Twitter" />
              </a>
              <a href='/'>
                <img src={telegram} alt="Telegram" />
              </a>
              <a href='/'>
                <img src={orb} alt="Logo" />
              </a>
              <a href='/'>
                <img src={redit} alt="Redit" />
              </a>
            </div>

            <div>

            </div>

          </div>

          <div className='col-1'>

            <h4 className='text-xl font-jakatra text-blue-100 font-semibold'>
              Pages
            </h4>

            <div className='mt-5'>

              <ul className='space-y-5'>
                <li>
                  <a href='/'>
                    Download
                  </a>
                </li>
                <li>
                  <a href='/'>
                    How it Works
                  </a>
                </li>
                <li>
                  <a href='/'>
                    Whitepaper
                  </a>
                </li>
                <li>
                  <a href='/'>
                    About us
                  </a>
                </li>
              </ul>

            </div>

          </div>

          <div className='col-1'>
            <h4 className='text-xl font-jakatra text-blue-100 font-semibold'>
              Support
            </h4>

            <div className='mt-5'>

              <ul className='space-y-5'>
                <li>
                  <a href='/'>
                    Custommer Service
                  </a>
                </li>
                <li>
                  <a href='/'>
                    FAQ
                  </a>
                </li>
                <li>
                  <a href='/'>
                    Community
                  </a>
                </li>
              </ul>

            </div>
          </div>

          <div className='col-1'>
            <h4 className='text-xl font-jakatra text-blue-100 font-semibold'>
              About
            </h4>

            <div className='mt-5'>

              <ul className='space-y-5'>
                <li>
                  <a href='/'>
                    About us
                  </a>
                </li>
                <li>
                  <a href='/'>
                    Privacy policy
                  </a>
                </li>
                <li>
                  <a href='/'>
                    Term of use
                  </a>
                </li>
                <li>
                  <a href='/'>
                    Quick start guide
                  </a>
                </li>
                <li>
                  <a href='/'>
                    Language support
                  </a>
                </li>
                <li>
                  <a href='/'>
                    Cookie policy
                  </a>
                </li>
              </ul>

            </div>
          </div>

        </div>

      </footer>
    </div>

  )
}
