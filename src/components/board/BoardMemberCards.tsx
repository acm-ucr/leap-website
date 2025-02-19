import React from "react";

interface MemberProps {
  name1: string;
  role1: string;
  name2: string;
  role2: string;
  name3: string;
  role3: string;
  name4: string;
  role4: string;
  name5: string;
  role5: string;
  name6: string;
  role6: string;
}

const BoardMemberCards: React.FC<MemberProps> = ({
  name1,
  role1,
  name2,
  role2,
  name3,
  role3,
  name4,
  role4,
  name5,
  role5,
  name6,
  role6,
}) => {
  return (
    //for 2 boxes next to eachother with outside border, and inside border.
    <div className="mb-20 mt-40 flex flex-col items-center justify-center">
      <div className="mb-20 flex flex-row gap-20">
        <div className="flex h-80 w-64 justify-center rounded-3xl border-8 border-black bg-leap-dark-green">
          <div className="flex flex-col items-center">
            <div className="mt-10 flex h-40 w-40 justify-center rounded-3xl border-8 border-leap-light-green"></div>
            <p className="mt-5 flex justify-center font-leap text-lg font-bold text-white">
              {name1}{" "}
            </p>
            <p className="mt-1 flex justify-center font-leap text-lg font-bold text-white">
              {role1}{" "}
            </p>
          </div>
        </div>
        <div className="flex h-80 w-64 justify-center rounded-3xl border-8 border-black bg-leap-dark-green">
          <div className="flex flex-col items-center">
            <div className="mt-10 flex h-40 w-40 justify-center rounded-3xl border-8 border-leap-light-green"></div>
            <p className="mt-5 flex justify-center font-leap text-lg font-bold text-white">
              {name2}{" "}
            </p>
            <p className="mt-1 flex justify-center font-leap text-lg font-bold text-white">
              {role2}{" "}
            </p>
          </div>
        </div>
        <div className="flex h-80 w-64 justify-center rounded-3xl border-8 border-black bg-leap-dark-green">
          <div className="flex flex-col items-center">
            <div className="mt-10 flex h-40 w-40 justify-center rounded-3xl border-8 border-leap-light-green"></div>
            <p className="mt-5 flex justify-center font-leap text-lg font-bold text-white">
              {name3}{" "}
            </p>
            <p className="mt-1 flex justify-center font-leap text-lg font-bold text-white">
              {role3}{" "}
            </p>
          </div>
        </div>
      </div>

      <div className="mb-20 flex flex-row gap-20">
        <div className="flex h-80 w-64 justify-center rounded-3xl border-8 border-black bg-leap-dark-green">
          <div className="flex flex-col items-center">
            <div className="mt-10 flex h-40 w-40 justify-center rounded-3xl border-8 border-leap-light-green"></div>
            <p className="mt-5 flex justify-center font-leap text-lg font-bold text-white">
              {name4}{" "}
            </p>
            <p className="mt-1 flex justify-center font-leap text-lg font-bold text-white">
              {role4}{" "}
            </p>
          </div>
        </div>
        <div className="flex h-80 w-64 justify-center rounded-3xl border-8 border-black bg-leap-dark-green">
          <div className="flex flex-col items-center">
            <div className="mt-10 flex h-40 w-40 justify-center rounded-3xl border-8 border-leap-light-green"></div>
            <p className="mt-5 flex justify-center font-leap text-lg font-bold text-white">
              {name5}{" "}
            </p>
            <p className="mt-1 flex justify-center font-leap text-lg font-bold text-white">
              {role5}{" "}
            </p>
          </div>
        </div>
        <div className="flex h-80 w-64 justify-center rounded-3xl border-8 border-black bg-leap-dark-green">
          <div className="flex flex-col items-center">
            <div className="mt-10 flex h-40 w-40 justify-center rounded-3xl border-8 border-leap-light-green"></div>
            <p className="mt-5 flex justify-center font-leap text-lg font-bold text-white">
              {name6}{" "}
            </p>
            <p className="mt-1 flex justify-center font-leap text-lg font-bold text-white">
              {role6}{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BoardMemberCards;
