"use client";

import Link from "next/link";
import Logo from "../logo/Logo";
import HamburgerButton from "../hamburger-button/HamburgerButton";
import MainSearchInput from "@/app/MainSearchInput";
import Avatar from "../avatar/Avatar";
import IconButton from "../icon-button/IconButton";
import MarginHorizontal from "../margin/MarginHorizontal";
import ChromeCastIcon from "@/assets/chromecast.svg";

interface Props {
  onClickHamburger: () => void;
}

const Header = ({ onClickHamburger }: Props) => {
  return (
    <div className="flex justify-between h-16 bg-black border-white-transparent-15 border-b">
      <div className="flex items-center pl-4 gap-3">
        <HamburgerButton onClick={onClickHamburger} />
        <Link href="/">
          <Logo />
        </Link>
      </div>
      <div className="flex items-center">
        <MainSearchInput />
      </div>
      <div className="flex items-center pr-14">
        <IconButton icon={<ChromeCastIcon />} onClick={() => {}} />
        <MarginHorizontal />
        <Avatar
          src="https://yt3.ggpht.com/yti/ANjgQV-g0ZNjOs4VEM5MR9fPnQOkL_FXVP5AmnQqkQ=s108-c-k-c0x00ffffff-no-rj"
          alt="profile"
          size="s"
          onClick={() => {}}
        />
      </div>
    </div>
  );
};

export default Header;
