export const LabelWrapper = () => {
  const labelText = 'Full Stack Dev'.split('');

  return (
    <span className="label-wrapper inline-block">
      <h2 className="bg-gradient-to-r from-nord-accent to-nord-green bg-clip-text text-transparent mb-5 text-3xl font-bold">
        {labelText.map((item, index) => (
          <span key={index}>{item}</span>
        ))}
      </h2>
    </span>
  );
};
