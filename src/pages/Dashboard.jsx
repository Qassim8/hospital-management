import ApointmentsCalender from "../components/dashboard/ApointmentsCalender";
import PatientsStatisticChart from "../components/dashboard/PatientsStatisticChart";
import PatientsVisitorChart from "../components/dashboard/PatientsVisitorChart";
import StatsBoxs from "../components/dashboard/StatsBoxs";

const Dashboard = () => {
  return (
    <section>
      <header className="my-5">
        <h1 className="font-bold text-lg">Dashboard</h1>
      </header>
      <section className="flex gap-5">
        <StatsBoxs />
        <PatientsVisitorChart />
      </section>
      <section className="flex gap-5 my-5">
              <PatientsStatisticChart />
              <ApointmentsCalender />
      </section>
    </section>
  );
};

export default Dashboard;
