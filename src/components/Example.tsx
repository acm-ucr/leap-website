const Example = (props: { text1: string; text2: string; text3: string }) => {
  return (
    <div className="flex flex-col w-2/3 items-center bg-red-200 p-10 gap-8  rounded-lg">
      
      {/* First Box */}
      <div className="w-1/2 bg-blue-200 p-5 text-center text-black">{props.text1}</div>

      {/* 2n row with 2 rounded Boxes */}
      <div className="flex w-1/4 justify-center items-center gap-4">

      <div className=" flex items-center justify-center w-full bg-blue-300 p-5 text-center rounded-full">{props.text2}</div>
        <div className="flex items-center justify-center w-full bg-blue-400 p-5    text-center rounded-full">{props.text2}</div>
      </div>

      {/* last bottom box  */}
      <div className="w-1/2 bg-blue-500 p-5 text-center text-white ">{props.text1}</div>
    </div>
  );
};

export default Example;
