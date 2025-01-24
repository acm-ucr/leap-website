const Title: React.FC<{ title: string; color: string }> = ({
  title,
  color = "leap-dark-green",
}) => {
  return (
    <div className="m-8">
      <p
        className="text-alignment font-leap mx-auto text-center text-8xl font-semibold text-leap-dark-green"
        style={{ color }}
      >
        {title}
      </p>
    </div>
  );
};

export default Title;
