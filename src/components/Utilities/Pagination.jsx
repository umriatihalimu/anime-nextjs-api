const Pagination = ({ setPage, page, lastpage }) => {
  const handleNext = () => {
    setPage((page) => page + 1);
  };
  const handlePrev = () => {
    setPage((page) => page - 1);
  };

  return (
    <div className="flex flex-row justify-center text-primary gap-2 p-4">
      {page > 1 ? (
        <button
          className="bg-accent px-1 hover:bg-secondary rounded"
          onClick={handlePrev}
        >
          Prev
        </button>
      ) : null}
      <p>
        {page}/{lastpage}
      </p>
      {page >= lastpage ? null : (
        <button
          className="bg-accent px-1 hover:bg-secondary rounded"
          onClick={handleNext}
        >
          Next
        </button>
      )}
    </div>
  );
};
export default Pagination;
