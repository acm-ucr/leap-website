const Title: React.FC<{ title: string; color: string }> = ({
  title,
  color = "green",
}) => {
  return (
    <div className="mb-[3%] mt-[6%]">
      <p
        className="text-alignment font-title mx-auto text-[6vw] md:text-[4vw]"
        style={{ color }}
      >
        {" "}
        {/* default color is green, can be changed */}
        {title}
      </p>
    </div>
  );
};

export default Title;
