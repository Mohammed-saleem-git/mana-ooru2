import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Shops from "./Shops";
import News from "./News";
import Ads from "./Ads";
import Community from "./Community";

const Home = () => (
  <div>
    <h1>Welcome to Mana Ooru</h1>
    <p> Boppapur (also called Boppapuram), a village in Yellareddipet mandal, Rajanna Sircilla district, Telangana:


---

📜 Historical & Cultural

Administrative origins: Boppapur falls under the local Gram Panchayat of Boppapur, covering itself and Sarvaipalle, divided into 20 wards; the current Sarpanch is Kondapuram Balreddy  .

Cultural traditions: It's part of the Sircilla region, famously known for Bathukamma celebrations. Nearby villages engage deeply in Oggu Katha, Bathukamma festivals, and Telangana folk arts (e.g., Vimalakka’s activism in the district)  .



---

🌐 Geographic & Demographic

Location: Located ~3 km from Yellareddipet, ~20 km from Sircilla town; elevation is ~528 m above sea level; PIN code 505305; main languages are Telugu and Urdu  .

Population (2009–2011): Around 4,196–4,328 people in approximately 1,104 households. Gender split roughly equal, SC ~14.7%, ST ~0.6%. Literacy ~56.9%—male ~66.5%, female ~47%. Village area ~722 ha  .

Land use: 72 ha cultivated (20 ha irrigated by wells); ~589 ha rainfed; about 336 ha current fallow; 47 ha barren/un-cultivable  .



---

🏛️ Political & Administrative

Governance: Under Yellareddipet block and Rajanna Sircilla district, Boppapur has its own Gram Panchayat. It's in Sircilla assembly constituency (represented by K.T.R) and Karimnagar parliamentary seat (MP Bandi Sanjay)  .

Political landscape: Local politics sees presence of TRS/BJP/INC; active village representation and local contests through rural polls  .



---

🌾 Agricultural & Scientific

Primary economy: Completely agrarian – paddy, cotton, and notably flower cultivation ("whole village has flower gardens")  .

Agricultural support: Under schemes like PMFBY (Pradhan Mantri Fasal Bima Yojana) for paddy; crop-cutting experiments backed by AEOs  .

Extension services: Farmers engaged through DAATTC-Karimnagar awareness programmes; insights on ICT tools for boosting crop productivity  .



---

🏫 Education & Infrastructure

Schools: In-village institutions include 3 government and 2 private primary, 2 government + 2 private middle, 1 government + 2 private secondary schools  .

Higher education: No degree or technical colleges in village; nearest are in Yellareddipet (degree), Sircilla (polytechnic/ITI), Kamareddy (engineering), Karimnagar (medical/management)  .

Facilities: Community health centre >10 km away, primary health sub-center present, nearest PHC and veterinary hospital within 5 km  .

Village-level development works: Presence of compost shed, avenue plantations, Raithu Vedhika, palle prakruthi vanam, crematorium—all coordinated by the grampanchayat  .



---

🏙️ Economic & Regional Role

Proximity to textile hub: Boppapur benefits indirectly from Sircilla (“Textile City”), India’s second largest power-loom hub (~40 k looms); Sircilla's growth improves regional infrastructure  .

Market access: Close connections via bus routes to Sircilla which acts as the commercial, educational, and health center for villagers  .



---

🛣️ Transport & Connectivity

Road: Well-connected via public bus services; ~22 km to Sircilla; ~35 km from Kamareddy via NH563  .

Rail: Nearest railway station is over 10 km away, likely at Kamareddy or Sircilla  .



---

✅ Summary

Boppapur is a small, agricultural village with strong community governance and infrastructural ties to nearby hubs. It thrives on paddy, cotton, and emerging flower cultivation. Residents access education, health, and economic opportunities primarily via Yellareddipet and Sircilla, while benefiting from district-level schemes and agricultural support systems.


---

Let me know if you’d like to dive deeper into any specific area like crop data, village-level budgets, or seasonal census updates!

    </p>
  </div>
);

export default function App() {
  return (
    <Router>
      <nav style={{ padding: "10px", borderBottom: "1px solid #ccc" }}>
        <Link to="/" style={{ margin: "0 10px" }}>Home</Link>
        <Link to="/shops" style={{ margin: "0 10px" }}>Shops</Link>
        <Link to="/news" style={{ margin: "0 10px" }}>News</Link>
        <Link to="/ads" style={{ margin: "0 10px" }}>Ads</Link>
        <Link to="/community" style={{ margin: "0 10px" }}>Community</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shops" element={<Shops />} />
        <Route path="/news" element={<News />} />
        <Route path="/ads" element={<Ads />} />
        <Route path="/community" element={<Community />} />
      </Routes>
    </Router>
  );
}
