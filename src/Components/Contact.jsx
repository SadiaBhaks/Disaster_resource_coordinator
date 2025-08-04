import React from "react";


export default function Contact(){

return(

<footer id="Contact"className="bg-gray-800 text-white py-10 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">

        {/* Left: Logo / Description */}
        <div>
          <h2 className="text-2xl font-bold mb-2">Disaster Coordination</h2>
          <p className="text-sm text-gray-300">
            Empowering communities with fast, efficient disaster response. We bridge the gap between those in need and those ready to help.
          </p>
        </div>

        {/* Middle: Contact Info */}
        <div>
          <h3 className="text-xl font-semibold mb-2">Contact Us</h3>
          <ul className="text-gray-300 text-sm space-y-1">
            <li>📍 123 Relief Street, Dhaka, Bangladesh</li>
            <li>📞 +880 1234 567 890</li>
            <li>✉️ support@disastercoordination.org</li>
          </ul>
        </div>

       
          </div>
      {/* Bottom Line */}
      <div className="mt-10 border-t border-gray-600 pt-4 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} Disaster Resource Coordination System. All rights reserved.
      </div>
    </footer>

);

}