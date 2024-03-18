import { RxHamburgerMenu } from "react-icons/rx";

interface Props {
  onClick: () => void;
}

const HamburgerButton = ({ onClick }: Props) => {
  return (
    <button
      onClick={onClick}
      className="inline-flex flex-wrap place-content-center h-10 w-10 p-1 rounded-full hover:bg-opacity-10 hover:bg-white cursor-pointer"
    >
      <RxHamburgerMenu className="text-2xl" />
    </button>
  );
};

export default HamburgerButton;
