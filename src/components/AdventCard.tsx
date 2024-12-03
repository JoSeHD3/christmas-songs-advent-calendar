const AdventCard = ({ index }: { index: number }) => {
  return (
    <div className='min-w-64 min-h-36 bg-red-900 rounded border-4 border-dashed border-gray-500 flex items-center justify-center'>
      <p className='text-6xl font-bold'>{index + 1}</p>
    </div>
  );
};

export default AdventCard;
