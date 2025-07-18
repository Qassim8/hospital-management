import { Link } from "react-router-dom";

const LoginForm = () => {
  return (
    <section className="h-screen">
      <div className="container mx-auto h-full flex items-center justify-center gap-10 p-10">
        <div className="h-full flex-1 relative before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-gradient-to-l before:from-blue-500/40 before:to-cyan-400/50 ">
          <img
            src="https://medlearnpublishing.s3.us-east-2.amazonaws.com/wp-content/uploads/94c241200d6ca11b222be2340ae5dafa-3.jpg"
            alt="doctor"
            className="h-full"
            loading="lazy"
          />
        </div>
        {/* Form */}
        <div className="flex-1 p-16">
          <div className="mb-5">
            <h1 className="font-bold text-2xl mb-1">Login to your account</h1>
            <p className="text-slate-500">
              Enter your credentials to access your account
            </p>
          </div>
          <form className="flex flex-col">
            
            <label htmlFor="email" className="mt-3 mb-1">
              Email
            </label>
            <input
              type="email"
              name=""
              id="ema"
              className="p-2 border border-slate-200 rounded-md outline-none"
            />
            <label htmlFor="password" className="mt-3 mb-1">
              Password
            </label>
            <input
              type="password"
              name=""
              id="pass"
              className="p-2 border border-slate-200 rounded-md outline-none"
            />
            <button
              type="submit"
              className="text-white bg-gradient-to-l from-indigo-500 to-cyan-500 my-5 p-2 rounded-md outline-none "
            >
              Login
            </button>
            <p className="text-slate-500">
              don't you have an account?{" "}
              <Link to="/register" className="text-blue-500">
                Register Now!
              </Link>
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default LoginForm;
