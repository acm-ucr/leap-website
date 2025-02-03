const Example = (props: { text1: string; text2: string; text3: string }) => {
  return (
    <div className="flex w-2/3 flex-col items-center gap-8 rounded-lg bg-red-200 p-10">
      {/* First Box */}
      <div className="w-1/2 bg-blue-200 p-5 text-center text-black">
        {props.text1}
      </div>

      {/* 2n row with 2 rounded Boxes */}
      <div className="flex w-1/4 items-center justify-center gap-4">
        <div className="flex w-full items-center justify-center rounded-full bg-blue-300 p-5 text-center">
          {props.text2}
        </div>
        <div className="flex w-full items-center justify-center rounded-full bg-blue-400 p-5 text-center">
          {props.text2}
        </div>
      </div>

      {/* last bottom box  */}
      <div className="w-1/2 bg-blue-500 p-5 text-center text-white">
        {props.text1}
      </div>
    </div>
  );
};

export default Example;
