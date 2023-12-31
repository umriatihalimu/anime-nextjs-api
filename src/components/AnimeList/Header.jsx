import Link from "next/link";

const Header = ({ title, linkHref, titleRef }) => {
  return (
    <header>
      <div className="flex text-primary pt-6 justify-between p-4 pb-1 mx-3">
        <h2 className="font-semibold text-xl">{title}</h2>
        {linkHref && titleRef ? (
          <Link
            className="text-sm underline hover:text-secondary "
            href={linkHref}
          >
            {titleRef}
          </Link>
        ) : null}
      </div>
    </header>
  );
};
export default Header;
