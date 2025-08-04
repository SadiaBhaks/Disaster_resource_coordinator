import React from "react";

export default function Preview(){

return(
    <>
    <section id="Preview" className="bg-gray-600 py-20 px-6">
  <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10">
    {/* Text Side */}
    <div className="md:w-1/2">
      <h2 className="text-3xl font-bold text-white mb-6 underline underline-offset-8">
        About Our Mission
      </h2>
      <p className="text-white text-lg leading-relaxed">
        In the face of natural disasters and emergencies, coordination saves lives. Our platform
        brings together volunteers, relief teams, donors, and affected individuals under one roof
        to enable rapid, efficient, and organized disaster response.
      </p>
      <p className="text-white text-lg leading-relaxed mt-4">
        We provide real-time updates, resource tracking, and volunteer support to ensure help
        reaches where it's needed most — without delays, confusion, or miscommunication.
      </p>
    </div>

    {/* Image Side */}
    <div className="md:w-1/2">
      <img
        src="https://www.ignitec.com/wp-content/uploads/2022/09/Environmental-monitoring-and-natural-disaster-management-POST.jpg"
        alt="Disaster relief coordination"
        className="w-full rounded-lg shadow-lg"
      />
    </div>
  </div>
</section>
<section className="bg-white py-20 px-6">
  <div className="max-w-3xl mx-auto text-center">
    <h2 className="text-3xl font-bold text-gray-800 mb-12 underline underline-offset-8">
      How It Works
    </h2>

    {/* Steps */}
    <div className="space-y-10 text-left">
      {/* Step 1 */}
      <div className="flex items-start gap-4">
        <div className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center text-lg font-bold">
          1
        </div>
        <div>
          <h3 className="text-xl font-semibold">Sign Up</h3>
          <p className="text-gray-600">
            Sign up as a first-time participant and set your details.
          </p>
        </div>
      </div>

      {/* Step 2 */}
      <div className="flex items-start gap-4">
        <div className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center text-lg font-bold">
          2
        </div>
        <div>
          <h3 className="text-xl font-semibold">Set Up Your Profile</h3>
          <p className="text-gray-600">
            Complete your profile to get matched with disaster relief needs.
          </p>
        </div>
      </div>

      {/* Step 3 */}
      <div className="flex items-start gap-4">
        <div className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center text-lg font-bold">
          3
        </div>
        <div>
          <h3 className="text-xl font-semibold">Get Involved</h3>
          <p className="text-gray-600">
            Volunteer, donate, or coordinate to support disaster-affected areas.
          </p>
        </div>
      </div>
    </div>

  </div>
</section>

</>



);

}