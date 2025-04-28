interface SectionTitleProps {
  children?: React.ReactNode;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ children }) => {
  return (
    <div className="text-center">
      <h2 className="text-2xl sm:text-3xl font-bold text-gray-700">{children}</h2>
      <div className="mt-1 sm:mt-1.5 w-12 sm:w-24 h-1 bg-gray-700 mx-auto rounded"></div>
    </div>
  );
};

export default SectionTitle;