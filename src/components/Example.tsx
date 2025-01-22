const Example = (props: { text1: string; text2: string; text3: string }) => {
  return (
    <div className="flex w-2/3 flex-col items-center gap-1 rounded-lg bg-leap-grey p-10 font-leap text-xl font-medium">
      <div className="m-4 flex w-1/2 justify-center bg-leap-light-green p-5 text-left">
        {props.text1}
      </div>
      <div className="flex w-1/2 flex-row gap-1">
        <div className="m-2 flex w-full justify-center rounded-full bg-leap-mid-green p-5 text-black">
          {props.text2}
        </div>
        <div className="m-2 flex w-full justify-center rounded-full bg-leap-mid-green p-5 text-black">
          {props.text2}
        </div>
      </div>
      <div className="m-4 flex w-1/2 justify-center bg-leap-dark-green p-5 text-white">
        {props.text3}
      </div>
    </div>
  );
};

export default Example;
