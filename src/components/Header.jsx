
const Header = () => {
  return (
    <header className="sticky top-0 w-full bg-white shadow z-50">
      <nav className="container mx-auto py-2 flex justify-between items-center">
        <form>
          <input
            type="search"
            name=""
                      id=""
                      placeholder="Search for something..."
            className="w-[250px] placeholder:text-sm py-1 px-2 border border-slate-300 rounded-md outline-none"
          />
          <i className="ph ph-magnifying-glass -ms-8 text-slate-300 text-lg"></i>
        </form>
        <div className="flex items-center gap-2 px-3 border-l border-slate-200">
          <div className="h-[40px] w-[40px] rounded-full overflow-hidden border-[5px] border-indigo-400">
            <img
              src="https://th.bing.com/th/id/OIP.EONCMUz0K0-U5DbJYj_axgAAAA?w=120&h=128&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3"
              alt=""
              className="max-w-full"
            />
          </div>
          <h3 className="text-slate-600 text-sm">Johanson Phielleps</h3>
        </div>
      </nav>
    </header>
  );
}

export default Header