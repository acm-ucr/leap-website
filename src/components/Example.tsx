const Example = (props: { text1: string; text2: string; text3: string }) => {
  return (
    <div className="flex w-2/3 flex-col items-center gap-10 rounded-lg bg-leap-yellow p-10 text-lg">
      <div className="w-1/2 bg-leap-light-green p-5 text-center font-leap">
        {props.text1}
      </div>
      <div className="flex w-1/2 flex-row gap-5">
        <div className="w-full rounded-full bg-leap-mid-green p-5 text-center font-leap text-lg">
          {props.text2}
        </div>
        <div className="w-full rounded-full bg-leap-mid-green p-5 text-center font-leap text-lg">
          {props.text2}
        </div>
      </div>
      <div className="w-1/2 bg-leap-dark-green p-5 text-center font-leap text-xl text-white">
        {props.text3}
      </div>
    </div>
  );
};

export default Example;
