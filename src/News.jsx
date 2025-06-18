import React from "react";

export default function News() {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold mb-4">Local News 📰</h2>
      <ul className="space-y-2">
        <li className="border p-2 rounded">🌧️ Rains expected on Sunday. Be prepared.</li>
        <li className="border p-2 rounded">🎉 Bonalu Festival date announced: July 15</li>
        <li className="border p-2 rounded">⚠️ Water supply issue in Ward 3 - complaint registered.</li>
      </ul>
    </div>
  );
}
