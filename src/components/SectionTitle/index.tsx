export const SectionTitle: React.FC<ISectionTitleProps> = ({ children }) => {
  return (
    <div className="text-center">
      <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-700 leading-tight">{children}</h2>
      <div className="mt-1 lg:mt-1.5 w-12 md:w-24 h-0.5 md:h-1 bg-gray-700 mx-auto rounded"></div>
    </div>
  );
};
