import React from "react";

export default function Hero() {
  const scrollToForm = () => {
    const form = document.getElementById("volunteer-registration");
    if (form) form.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <section
        id="Hero"
        className="relative pt-20 min-h-screen flex items-center justify-center text-center w-full"
      >
        {/* Background Image */}
        <div
          className="absolute top-0 left-0 w-full h-full z-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1569060368645-4ab30c8d8b0e?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
          }}
        ></div>

        {/* Content */}
        <div className="relative px-4 flex flex-col items-center z-10">
          <h1 className="text-blue-600 text-4xl md:text-5xl font-bold underline decoration-blue underline-offset-8">
            WHAT WE DO?
          </h1>
          <p className="text-black p-6 font-semibold text-lg md:text-xl">
            "In times of crisis, coordination saves lives. Our Disaster
            Management Coordinator platform connects volunteers, organizations,
            and affected communities to ensure fast, efficient, and organized
            disaster response. Whether it's providing shelter, distributing
            resources, or offering critical updates, we help bridge the gap
            between help and those who need it most."
          </p>
          <div className="p-6">
            <button
              onClick={scrollToForm}
              className="bg-white text-black font-semibold text-xl px-6 py-3 rounded-lg hover:bg-gray-200 transition duration-300"
            >
              Register as a Volunteer
            </button>
          </div>
        </div>
      </section>

      {/* Volunteer Registration Section */}
      <section
        id="volunteer-registration"
        className="pt-20 pb-10 bg-gray-50 min-h-screen"
      >
        <div className="max-w-xl mx-auto p-6 bg-white shadow rounded">
          <h2 className="text-2xl font-bold mb-4 text-center">
            Volunteer Registration
          </h2>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Full Name"
              className="w-full border px-4 py-2 rounded"
            />
            <input
              type="email"
              placeholder="Email Address"
              className="w-full border px-4 py-2 rounded"
            />
            <input
              type="text"
              placeholder="Location"
              className="w-full border px-4 py-2 rounded"
            />
            <textarea
              placeholder="Why do you want to volunteer?"
              className="w-full border px-4 py-2 rounded"
              rows={4}
            ></textarea>
            <button
              type="submit"
              className="bg-gray-800 text-white text-xl px-6 py-2 rounded w-full hover:bg-black transition"
            >
              Submit
            </button>
          </form>
        </div>
      </section>
    </>
  );
}
