const Example = (props: { text1: string; text2: string; text3: string }) => {
  return (
    <div className="flex h-56 w-96 flex-col items-center gap-3 rounded-lg bg-red-200 p-5">
      <div className="w-2/4 bg-blue-200 p-5 py-3 text-center">
        {props.text1}
      </div>
      <div className="flex items-center gap-4">
        <div className="flex h-10 w-20 justify-center rounded-full bg-blue-500 p-2">
          {props.text2}
        </div>
        <div className="flex h-10 w-20 justify-center rounded-full bg-blue-500 p-2">
          {props.text2}
        </div>
      </div>
      <div className="w-1/2 bg-blue-600 p-5 py-3 text-center text-white">
        {props.text3}
      </div>
    </div>
  );
};

export default Example;
