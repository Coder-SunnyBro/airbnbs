import React from "react";
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import LanguageIcon from '@mui/icons-material/Language';

const Footer = () => {
  return (
    <div className="Main bg-gray-100">
      <div className="Main bg-gray-100">
        <hr />
        <div className="subdiv px-8">
          <h3 className="font-semibold text-xl mt-8">Explore other options in and around València</h3>
          <ul className="grid grid-cols-4 py-8 gap-5 text-base">
            <li className="hover:underline cursor-pointer">Déni</li>
            <li className="hover:underline cursor-pointer">Calp</li>
            <li className="hover:underline cursor-pointer">Benidorm</li>
            <li className="hover:underline cursor-pointer">Benidorm</li>
            <li className="hover:underline cursor-pointer">Ibiza</li>
            <li className="hover:underline cursor-pointer">Torrevieja</li>
            <li className="hover:underline cursor-pointer">Formentera</li>
            <li className="hover:underline cursor-pointer">Salou</li>
            <li className="hover:underline cursor-pointer">Tarragona</li>
            <li className="hover:underline cursor-pointer">Palma</li>
            <li className="hover:underline cursor-pointer">Sitges</li>
            <li className="hover:underline cursor-pointer">Majorca</li>
          </ul>
          <ul className="flex gap-4 mb-8">
            <li>
              <span className="hover:underline cursor-pointer">Airbnb</span> <span>&#62;</span></li>
            <li>
              <span className="hover:underline cursor-pointer">Spain</span> &nbsp; <span>&#62;</span></li>
            <li>
              <span className="hover:underline cursor-pointer">Valencian Community</span> &nbsp; <span>&#62;</span></li>
            <li>
              <span className="hover:underline cursor-pointer">Region Valencia</span>&nbsp; <span>&#62;</span></li>
            <li>
              <span className="hover:underline cursor-pointer">Valencia</span> &nbsp; </li>
          </ul>
        </div>
        <hr />
        <div className="Sec_Sub_div px-8 flex items-start justify-between">
          <ul className="flex flex-col my-6 gap-6">
            <li className="mt-6"><b>Support</b></li>
            <li className="hover:underline cursor-pointer">Help Center</li>
            <li className="hover:underline cursor-pointer">AirCover</li>
            <li className="hover:underline cursor-pointer">Supporting people with disabilities</li>
            <li className="hover:underline cursor-pointer">Cancellation options</li>
            <li className="hover:underline cursor-pointer">Our COVID-19 Response</li>
            <li className="hover:underline cursor-pointer">Report a neighbourhood concern</li>
          </ul>
          <ul className="flex flex-col my-6 gap-4">
            <li className="mt-6"><b>Community</b></li>
            <li className="hover:underline cursor-pointer">Airbnb.org:disaster relief</li>
            <li className="hover:underline cursor-pointer">Combating discrimination</li>
          </ul>
          <ul className="flex flex-col my-6 gap-4">
            <li className="mt-6"><b>Hosting</b></li>
            <li className="hover:underline cursor-pointer"> Airbnb your home</li>
            <li className="hover:underline cursor-pointer">Airbnb for Hosts</li>
            <li className="hover:underline cursor-pointer">Explore hosting resources</li>
            <li className="hover:underline cursor-pointer">Visit our community forum</li>
            <li className="hover:underline cursor-pointer">How to host responsibly</li>
          </ul>
          <ul className="flex-col my-6 flex gap-4">
            <li className="mt-6"><b>Airbnb</b></li>
            <li className="hover:underline cursor-pointer">Newsroom</li>
            <li className="hover:underline cursor-pointer">Learn about new features</li>
            <li className="hover:underline cursor-pointer">Letter from our founders</li>
            <li className="hover:underline cursor-pointer">Career</li>
            <li className="hover:underline cursor-pointer">Investors</li>
          </ul>
        </div>
        <hr />
        <div className="px-8 flex items-center justify-between">
            <ul className="my-5 flex">
              <li><span className="">&#169; 2023 Airbnb, Inc. &nbsp;</span>•
                <span></span></li>
              <li><span className="hover:underline cursor-pointer">&nbsp;Privacy &nbsp;</span><span>•
              </span></li>
              <li><span className="hover:underline cursor-pointer"> &nbsp;Terms &nbsp;</span><span>•
              </span></li>
              <li><span className="hover:underline cursor-pointer">&nbsp;Sitemap &nbsp;</span><span>•
              </span></li>
              <li><span className="hover:underline cursor-pointer">&nbsp;Company details </span></li>
            </ul>
            <ul className="flex my-5 gap-2">
              <li className="hover:underline cursor-pointer"><LanguageIcon/>English</li>
              <li className="hover:underline cursor-pointer"><CurrencyRupeeIcon/>&nbsp;INR</li>
              <li className="hover:underline cursor-pointer"><FacebookIcon/></li>
              <li className="hover:underline cursor-pointer"><InstagramIcon/></li>
              <li className="hover:underline cursor-pointer"><TwitterIcon/></li>
            </ul>
        </div>
      </div>
    </div>
  )
}
export default Footer