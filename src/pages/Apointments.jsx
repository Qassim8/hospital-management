import CalendarComponent from "../components/dashboard/Calender";
import HeaderOfSection from "../components/HeaderOfSection";

const Apointments = () => {
  return (
    <section>
      <HeaderOfSection title="Appointment" description="Check your apointment list" />
      <CalendarComponent />
    </section>
  );
};

export default Apointments;
