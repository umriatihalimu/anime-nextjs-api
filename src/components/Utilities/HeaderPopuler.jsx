const HeaderPopuler = ({ title, page }) => {
  return (
    <div className="flex text-primary justify-center text-xl font-semibold p-5">
      <h3>
        {title} #{page}
      </h3>
    </div>
  );
};
export default HeaderPopuler;
