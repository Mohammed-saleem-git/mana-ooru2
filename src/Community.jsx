import React from "react";

export default function Community() {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold mb-4">Community Services 🙋</h2>
      <form className="space-y-4">
        <div>
          <label className="block mb-1">Name</label>
          <input className="w-full p-2 border rounded" type="text" placeholder="Your Name" />
        </div>
        <div>
          <label className="block mb-1">Issue / Message</label>
          <textarea className="w-full p-2 border rounded" placeholder="Type your complaint or message..." />
        </div>
        <button className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">Submit</button>
      </form>
    </div>
  );
}
