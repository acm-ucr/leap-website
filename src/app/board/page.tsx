"use client";
import BoardWrapper from "@/components/board/Wrapper";
import BoardDecorationsBottom from "@/components/board/DecorationsBottom";
import BoardDecorationsTop from "@/components/board/DecorationsTop";
import BackgroundImg from "@/public/assets/about/bg-about-us.webp";
import Header from "@/components/Header";

const OurBoard = () => {
  return (
    <div
      className="relative flex min-h-screen w-full flex-col items-center bg-cover bg-center bg-no-repeat text-center"
      style={{ backgroundImage: `url(${BackgroundImg.src})` }}
    >
      <BoardDecorationsTop />
      <Header
        title="Board"
        subtitle="Individuals dedicated to helping students overcome mental health issues."
      />

      <BoardWrapper />
      <BoardDecorationsBottom />
    </div>
  );
};

export default OurBoard;
