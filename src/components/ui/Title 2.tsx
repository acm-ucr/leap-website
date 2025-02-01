const Title: React.FC<{ title: string; color: string }> = ({
  title,
  color = "leap-dark-green",
}) => {
  return (
    <div className="m-8">
      <p
        className="text-alignment mx-auto text-center font-leap text-8xl font-semibold text-leap-dark-green"
        style={{ color }}
      >
        {/* default color is green, can be changed */}
        {title}
      </p>
    </div>
  );
};

export default Title;
