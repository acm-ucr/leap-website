const Example = (props: { text1: string; text2: string; text3: string }) => {
  return (
    <div className="flex w-2/3 flex-col items-center gap-1 rounded-lg bg-red-200 p-10">
      <div className="m-3 w-1/2 bg-blue-200 p-5 text-center text-xl">
        {props.text1}
      </div>
      <div className="flex w-1/2 flex-row gap-1">
        <div className="m-2 w-full rounded-full bg-blue-400 p-5 text-center text-xl">
          {props.text2}
        </div>
        <div className="m-2 w-full rounded-full bg-blue-400 p-5 text-center text-xl">
          {props.text2}
        </div>
      </div>
      <div className="m-3 w-1/2 bg-blue-600 p-5 text-center text-xl text-white">
        {props.text3}
      </div>
      {/* Hint: Add another box/div here similarly to line 4 */}
    </div>
  );
};

export default Example;
