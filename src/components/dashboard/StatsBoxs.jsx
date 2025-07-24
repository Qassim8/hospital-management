
const StatsBoxs = () => {
    const statsInfo = [
      {
        icon: "users-three",
        description: "Total Patients",
        total: "7400",
      },
      {
        icon: "notepad",
        description: "Appointment",
        total: "2850",
      },
      {
        icon: "users-three",
        description: "Total Operations",
        total: "6050",
      },
      {
        icon: "bed",
        description: "Hospital Beds",
        total: "1200",
      },
    ];
  return (
    <div className="flex-1 grid grid-cols-2 gap-5">
      {statsInfo.map(({ icon, description, total }, id) => (
        <div
          className="w-full bg-white p-5 rounded-md flex flex-col justify-evenly gap-3 group duration-300 hover:bg-indigo-500"
          key={id}
        >
          <div
            className="h-[45px] w-[45px] rounded-full shadow-md shadow-indigo-700 bg-indigo-500
             text-white flex justify-center items-center duration-300 group-hover:text-indigo-500 group-hover:bg-white"
          >
            <i className={`ph ph-${icon}`}></i>
          </div>
          <h2 className="text-slate-400 duration-300 group-hover:text-white">
            {description}
          </h2>
          <p className="font-bold text-lg text-slate-700 duration-300 group-hover:text-white">
            {total}
          </p>
        </div>
      ))}
    </div>
  );
}

export default StatsBoxs