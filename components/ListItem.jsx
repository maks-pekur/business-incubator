const ListItem = ({ title }) => {
  return (
    <div className="w-full text-center relative">
      <div className="font-bold flex space-x-10 py-4 ml-8">
        <div className="h-5 w-5 rounded-full bg-[#4B8765]"></div>
        <div
          className={`border-[1px] border-black border-dashed absolute left-0 -z-10 ${""}`}
        ></div>
        <div>{title}</div>
      </div>
    </div>
  );
};

export default ListItem;
