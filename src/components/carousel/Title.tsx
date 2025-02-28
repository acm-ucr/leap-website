const Title: React.FC<{ title: string; color: string }> = ({
  title,
  color = "leap-dark-green",
}) => {
  return (
    <div className="m-4">
      <p
        className={`text-alignment mx-auto text-center font-leap text-8xl font-semibold text-${color}`}
      >
        {title}
      </p>
    </div>
  );
};

export default Title;
