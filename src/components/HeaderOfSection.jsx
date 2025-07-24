import { Link } from "react-router-dom";

const HeaderOfSection = ({ title, description, href }) => {
  return (
    <header className="my-5 flex justify-between items-center">
      <div>
        <h1 className="font-bold text-lg mb-1">{title}</h1>
        <p className="text-slate-400">{description}</p>
      </div>
      <div className="flex gap-3">
        <button className="flex items-center gap-2 text-slate-500 bg-transparent px-3 py-1 border border-slate-500 outline-none rounded-md duration-300 hover:bg-slate-800 hover:text-slate-100">
          <i className="ph ph-arrow-up"></i>
          <span>Export</span>
        </button>
        <Link to={href} className="flex items-center gap-2 text-white bg-indigo-500 px-3 py-1 outline-none rounded-md duration-300 hover:bg-indigo-600">
          <span className="text-lg">+</span>
          <span>Add New</span>
        </Link>
      </div>
    </header>
  );
};

export default HeaderOfSection;
