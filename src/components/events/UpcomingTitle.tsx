const UpcomingTitle: React.FC<{ title: string }> = ({ title }) => {
  return (
    <div className="md:mt-30 relative m-5 mt-20 lg:mt-40">
      <p className="text-alignment mx-auto text-center font-leap text-5xl font-semibold text-leap-dark-green">
        {title}
      </p>
      <div className="relative m-2 mx-auto w-1/6 border-b-4 border-leap-mid-green p-2" />
    </div>
  );
};

export default UpcomingTitle;
