import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

import Logo from "../public/logo.svg";
import { footerLinks } from '@/constants';

const Footer = () => {
  return (
    <footer className="flex flex-col text-black-100 mt-5 border-t border-gray-100">
      <div className="flex max-md:flex-col flex-wrap justify-between gap-5 sm:px-16 px-6">
        <div className="flex flex-col justify-start items-start gap-6">
        <Image src={Logo} alt="Mcars Logo" width={118} height={18} className="object-contain"/>
        <p className="text-base text-gray-700">
          Mcars 2023 <br />
          All right reserved &copy;
        </p>
        </div>

        {/* footer Links */}
        <div className="footer__links">
            {footerLinks.map((link) => (
               <div className="footer__link" key={link.title}>
                   <h3 className="font-bold">{link.title}</h3>
                    {link.links.map((item) =>(
                       <Link 
                        key={item.title}
                        href={item.url}
                        className="text-gray-500"
                       >
                        {item.title}
                        </Link>
                    ))}
               </div>
            ))}
        </div>
      </div>

        {/* bottom footer */}
        <div className="flex justify-between items-center mt-10 border-t border-gray-100 sm:px-16 px-6 py-10">
          <p>@2023 Mcars All rights reserved</p>
            <div className="footer__copyrights-links space-x-4">
                <Link href={"/"} className="text-gray-500">
                     Privacy Policy
                </Link>
                <Link href={"/"} className="text-gray-500">
                     Terms of Use
                </Link>
            </div>
        </div>
    </footer>
  )
}

export default Footer;