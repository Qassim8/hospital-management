const AddDepartment = () => {
  return (
    <section>
      <header>
        <h1 className="my-5 font-bold text-slate-700">Add New Department</h1>
      </header>
      <form className="mt-5 flex flex-col">
        <div className="flex gap-4">
          <FormInput label="Name" type="text" placeholder="his name" />
          <FormInput label="Doctors" type="number" placeholder="count off" />
        </div>
        <div className="flex gap-4">
          <FormInput
            label="Patients"
            type="number"
            placeholder="count of patients"
          />
          <FormInput
            label="Specialest"
            type="text"
            placeholder="his specialest"
          />
        </div>
        <div className="flex gap-4">
          <FormInput label="Degree" type="text" placeholder="his degree" />
          <FormInput label="Type" type="text" placeholder="his work type" />
        </div>
        <div className="flex gap-4">
          <FormInput label="Phone" type="number" placeholder="his number" />
          <FormInput label="Email" type="email" placeholder="his email" />
        </div>
        <button
          className="text-white bg-indigo-500 w-1/12 px-3 py-2 outline-none rounded-md duration-300 hover:bg-indigo-600"
          type="submit"
        >
          Add
        </button>
      </form>
    </section>
  );
};

export default AddDepartment;
