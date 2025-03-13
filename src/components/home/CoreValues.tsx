// const CoreValues = () => {
//   return (
//     <div className="relative mt-[-15vh] flex items-center justify-center lg:mt-[0]">
//       <div className="w-3/4 text-left">
//         <div className="font-leap text-4xl font-bold text-white sm:text-5xl lg:text-7xl">
//           Our Core Values
//         </div>
//         <p className="mt-10 font-leap text-xl text-white md:text-2xl">
//           Loving our Emotions as Asian & Pacific !slanders, otherwise known as
//           LEAP!, is a community of friends who advocate for safe spaces and
//           mental health. We strive to make a safe space for everyone of every
//           background to chat, destress, make friends, and learn about mental
//           health in the AAPI community. Come join us to hangout!
//         </p>
//       </div>
//     </div>
//   );
// };

// export default CoreValues;

"use client";

import { useEffect, useState, useRef } from "react";

const CoreValues = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.3 }, // Trigger when 30% of the section is visible
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={sectionRef}
      id="core-values"
      className={`relative mt-[-15vh] flex transform items-center justify-center transition-all duration-1000 ease-out lg:mt-0 ${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-5 opacity-0"
      }`}
    >
      <div className="w-3/4 text-left">
        <div className="font-leap text-4xl font-bold text-white sm:text-5xl lg:text-7xl">
          Our Core Values
        </div>
        <p className="mt-10 font-leap text-xl text-white md:text-2xl">
          Loving our Emotions as Asian & Pacific Islanders, otherwise known as
          LEAP!, is a community of friends who advocate for safe spaces and
          mental health. We strive to make a safe space for everyone of every
          background to chat, destress, make friends, and learn about mental
          health in the AAPI community. Come join us to hangout!
        </p>
      </div>
    </div>
  );
};

export default CoreValues;
