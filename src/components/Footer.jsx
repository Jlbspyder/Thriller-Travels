import React from 'react'
import { Link as LinkRoll } from "react-scroll";
import { Link } from "react-router-dom";
import { BsInstagram } from "react-icons/bs";
import { RiTwitterXFill } from "react-icons/ri";
import { BsFacebook } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";

const Footer = () => {
  return (
    <footer>
          <div className="section-flex footer">
            <div className='footer__header'>
                <h1>MimaBooking</h1>
                <ul className='socials'>
                <li>
                    <Link to="https://www.instagram.com/jlb_me/" target="_blank">
                      <BsInstagram className="ig" />
                    </Link>
                  </li>
                  <li>
                    <Link to="https://www.twitter.com/jlbspyder/" target="_blank">
                      <RiTwitterXFill className="x" />
                    </Link>
                  </li>
                  <li>
                    <Link to="https://www.facebook.com/" target="_blank">
                      <BsFacebook className="fb" />
                    </Link>
                  </li>
                  <li>
                    <Link to="https://www.pinterest.com/" target="_blank">
                      <BsLinkedin className="ind" />
                    </Link>
                  </li>
                </ul>
            </div>
            <div>
                <h2>Top Countries</h2>
                <ul>
                    <li>Canada</li>
                    <li>New Zealand</li>
                    <li>United Kingdom</li>
                    <li>Norway</li>
                </ul>
            </div>
            <div>
            <h2>Useful Link</h2>
                <ul>
                    <li>Waitlist</li>
                    <li>Travel guide</li>
                    <li>FAQs</li>
                    <li>Referral Program</li>
                </ul>
            </div>
            <div>
            <h2>Support</h2>
                <ul>
                    <li>Help Center</li>
                    <li>Contact Us</li>
                    <li>Privacy Policy</li>
                    <li>Terms of Service</li>
                    <li>Trust and Safety</li>
                </ul>
            </div>
            <div>
            <h2>Company</h2>
                <ul>
                    <li>About Us</li>
                    <li>Career</li>
                    <li>Press</li>
                    <li>Blog</li>
                </ul>
            </div>
          </div>
    </footer>
  )
}

export default Footer
