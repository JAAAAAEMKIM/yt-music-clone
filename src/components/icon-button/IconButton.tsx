interface Props {
  icon: React.ReactNode;
  onClick: () => void;
}
const IconButton = ({ icon, onClick }: Props) => {
  return (
    <button
      className="flex place-content-center flex-wrap w-10 h-8 fill-white"
      onClick={onClick}
    >
      {icon}
    </button>
  );
};

export default IconButton;
