import React from "react";
import Image from "next/image";
import Link from "next/link";
import logoWhite from "../../public/assets/images/logo.png";
import logoBlack from "../../public/assets/images/logo2.png";

const Logo = ({ width, variant }) => {
  return (
    <div>
      <Link href="/" className="cursor-pointer">
        <div>
          <Image
            src={variant === "white" ? logoWhite : logoBlack}
            alt="logo"
            width={width}
          />
        </div>
      </Link>
    </div>
  );
};

export default Logo;
