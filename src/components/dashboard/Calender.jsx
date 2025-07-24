import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import "@fullcalendar/core/locales-all"; // لدعم اللغات (لو احتجت لاحقاً)

const CalendarComponent = () => {

  const events = [
    {
      title: "Ahmed - Checkup",
      date: "2025-07-23",
      color: "#22c55e", // أخضر
    },
    {
      title: "Fatima - Follow-up",
      date: "2025-07-25",
      color: "#3b82f6", // أزرق
    },
    {
      title: "Mohamed - X-ray",
      date: "2025-07-25",
      color: "#facc15", // أصفر
    },
  ];


  return (
    <div className="p-4 mx-auto">
      <FullCalendar
        className="!rounded-md"
        plugins={[dayGridPlugin]}
        initialView="dayGridMonth"
        locale="en" // التاريخ بالإنجليزي
        headerToolbar={{
          left: "prev",
          center: "title",
          right: "next",
        }}
        height="auto"
        events={events}
        eventClick={(info) => {
          alert(`ضغطت على الحدث: ${info.event.title}`);
          // أو افتح modal، أو نفذ تنقل، أو أي شيء آخر
        }}
      />
    </div>
  );
};

export default CalendarComponent;
