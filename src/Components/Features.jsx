import React from "react";


export default function Features(){
    return(
<section id="Features"className="bg-white py-20 px-6">
  <div className="max-w-6xl mx-auto text-center">
    <h2 className="text-3xl font-bold text-gray-800 mb-10 underline underline-offset-8">
      How We Help
    </h2>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
      {/* Feature 1: Resource Availability */}
      <div className="p-6 bg-gray-100 rounded-lg shadow hover:shadow-md transition">
        <img
          src="https://cdn-icons-png.flaticon.com/512/1121/1121065.png"
          alt="Resources"
          className="w-20 h-20 mx-auto mb-4"
        />
        <h3 className="text-xl font-semibold mb-2">Resource Availability</h3>
        <p className="text-gray-600">
          View available food, shelter, medical supplies, and other critical
          resources in real time, updated by volunteers and organizations.
        </p>
      </div>

      {/* Feature 2: Volunteer Registration */}
      <div className="p-6 bg-gray-100 rounded-lg shadow hover:shadow-md transition">
        <img
          src="https://cdn-icons-png.flaticon.com/512/295/295128.png"
          alt="Volunteer"
          className="w-20 h-20 mx-auto mb-4"
        />
        <h3 className="text-xl font-semibold mb-2">Volunteer Registration</h3>
        <p className="text-gray-600">
          Register as a volunteer and contribute your time and skills to help
          disaster-affected areas in an organized and safe way.
        </p>
      </div>

      {/* Feature 3: Real-Time Updates */}
      <div className="p-6 bg-gray-100 rounded-lg shadow hover:shadow-md transition">
        <img
          src="https://cdn-icons-png.flaticon.com/512/942/942748.png"
          alt="Updates"
          className="w-20 h-20 mx-auto mb-4"
        />
        <h3 className="text-xl font-semibold mb-2">Real-Time Updates</h3>
        <p className="text-gray-600">
          Stay informed with real-time disaster alerts, location updates,
          weather warnings, and status reports from verified coordinators.
        </p>
      </div>
    </div>
  </div>
</section>
    );
}