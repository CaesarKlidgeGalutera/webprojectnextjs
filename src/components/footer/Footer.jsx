import React from "react";
import Image from "next/image";

const Footer = () => {
  return (
    <div className="h-12 flex items-center justify-between">
      <p>©2023 Caesar Klidge Galutera. All rights reserved</p>
      <div className="flex items-center gap-[0.625rem] opacity-60 cursor-pointer">
        <Image src="/facebook.svg" alt="footer_icon" width={15} height={15} />
        <Image src="/instagram.svg" alt="footer_icon" width={15} height={15} />
        <Image src="/twitter.svg" alt="footer_icon" width={15} height={15} />
        <Image src="/youtube.svg" alt="footer_icon" width={15} height={15} />
      </div>
    </div>
  );
};

export default Footer;
