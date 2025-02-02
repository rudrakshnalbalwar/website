import React from "react";
import "./Teampage.css";
import Navbar from "./Navbar.js";
import NSSFooter from "./NSSFooter.js";

const teamMembers = [
  { id: "incharge", name: "Dr. Amit Anurag", role: "Program Incharge", image: "https://image.nssiitd.in/current_team/Parth_Soni_Gsecy.jpg" },
  { id: "secretary-1", name: "Yash Ghoderao", role: "Secretary", image: "https://image.nssiitd.in/current_team/Parth_Soni_Gsecy.jpg" },
  { id: "secretary-2", name: "Khushi Agrawal", role: "Secretary", image: "https://image.nssiitd.in/current_team/Parth_Soni_Gsecy.jpg" },
  { id: "joint-sec-1", name: "Aryan Puri", role: "Joint Secretary", image: "https://image.nssiitd.in/current_team/Parth_Soni_Gsecy.jpg" },
  { id: "joint-sec-2", name: "Pranjal Bajaj", role: "Joint Secretary", image: "https://image.nssiitd.in/current_team/Parth_Soni_Gsecy.jpg" },
  { id: "eventman-1", name: "Pooja Jaiswal", role: "Event Manager", image: "https://image.nssiitd.in/current_team/Parth_Soni_Gsecy.jpg" },
  { id: "eventman-2", name: "Chaitanya Talkhande", role: "Event Manager", image: "https://image.nssiitd.in/current_team/Parth_Soni_Gsecy.jpg" },
  { id: "eventman-3", name: "Priyansh Nigam", role: "Event Manager", image: "https://image.nssiitd.in/current_team/Parth_Soni_Gsecy.jpg" },
  { id: "exehead-1", name: "Aaryan Sharma", role: "Executive Head", image: "https://image.nssiitd.in/current_team/Parth_Soni_Gsecy.jpg" },
  { id: "exehead-2", name: "Archi Hundani", role: "Executive Head", image: "https://image.nssiitd.in/current_team/Parth_Soni_Gsecy.jpg" },
  { id: "exehead-3", name: "Kiran Rathi", role: "Executive Head", image: "https://image.nssiitd.in/current_team/Parth_Soni_Gsecy.jpg" },
  { id: "venuehead-1", name: "Pratik Chnadak", role: "Venue Head", image: "https://image.nssiitd.in/current_team/Parth_Soni_Gsecy.jpg" },
  { id: "venuehead-2", name: "Devendra Mahajan", role: "Venue Head", image: "https://image.nssiitd.in/current_team/Parth_Soni_Gsecy.jpg" },
  { id: "venuehead-3", name: "Arnav Ravekar", role: "Venue Head", image: "https://image.nssiitd.in/current_team/Parth_Soni_Gsecy.jpg" },
  { id: "prhead-1", name: "Devanshu Narnoliya", role: "Public Relation Head", image: "https://image.nssiitd.in/current_team/Parth_Soni_Gsecy.jpg" },
  { id: "prhead-2", name: "Sukhada Chepe", role: "Public Relation Head", image: "https://image.nssiitd.in/current_team/Parth_Soni_Gsecy.jpg" },
  { id: "prhead-3", name: "Vartesh Rote", role: "Public Relation Head", image: "https://image.nssiitd.in/current_team/Parth_Soni_Gsecy.jpg" },
  { id: "reshead-1", name: "Mohit Gupta", role: "Resource Head", image: "https://image.nssiitd.in/current_team/Parth_Soni_Gsecy.jpg" },
  { id: "reshead-2", name: "Naman Sabu", role: "Resource Head", image: "https://image.nssiitd.in/current_team/Parth_Soni_Gsecy.jpg" },
  { id: "reshead-3", name: "Ved Jaiswal", role: "Resource Head", image: "https://image.nssiitd.in/current_team/Parth_Soni_Gsecy.jpg" },
  { id: "cohead-1", name: "Nachiket Deshpande", role: "Community Outreach Head", image: "https://image.nssiitd.in/current_team/Parth_Soni_Gsecy.jpg" },
  { id: "cohead-2", name: "Suvidhi Sancheti", role: "Community Outreach Head", image: "https://image.nssiitd.in/current_team/Parth_Soni_Gsecy.jpg" },
  { id: "mediahead-1", name: "Disha Sharma", role: "Media Head", image: "https://image.nssiitd.in/current_team/Parth_Soni_Gsecy.jpg" },
  { id: "mediahead-2", name: "Nupur Gaur", role: "Media Head", image: "https://image.nssiitd.in/current_team/Parth_Soni_Gsecy.jpg"},
  { id: "systemshead-1", name: "Mahak Arora", role: "Systems Head", image: "https://image.nssiitd.in/current_team/Parth_Soni_Gsecy.jpg" },
  { id: "systemshead-2", name: "Arpit Pateriya", role: "Systems Head", image: "https://image.nssiitd.in/current_team/Parth_Soni_Gsecy.jpg" },
  { id: "inrhead-1", name: "Renuka Rane", role: "INR Head", image: "https://image.nssiitd.in/current_team/Parth_Soni_Gsecy.jpg" },
  { id: "inrhead-2", name: "Jatin Jasrotia", role: "INR Head", image: "https://image.nssiitd.in/current_team/Parth_Soni_Gsecy.jpg" },
  { id: "inrhead-3", name: "Gauri Katre", role: "INR Head", image: "https://image.nssiitd.in/current_team/Parth_Soni_Gsecy.jpg" },
  { id: "technicalhead-1", name: "Rudraksh Nalbalwar", role: "Technical Head", image: "https://image.nssiitd.in/current_team/Parth_Soni_Gsecy.jpg" },
  { id: "technicalhead-2", name: "Suhani Bajoria", role: "Technical Head", image: "https://image.nssiitd.in/current_team/Parth_Soni_Gsecy.jpg" },
  { id: "backdrophead-1", name: "Nandini Sanghi", role: "Backdrop Head", image: "https://image.nssiitd.in/current_team/Parth_Soni_Gsecy.jpg" },
  { id: "backdrophead-2", name: "Saket Karwa", role: "Backdrop Head", image: "https://image.nssiitd.in/current_team/Parth_Soni_Gsecy.jpg" },
  { id: "backdrophead-3", name: "Sanika Raut", role: "Backdrop Head", image: "https://image.nssiitd.in/current_team/Parth_Soni_Gsecy.jpg" },
  { id: "photographyhead", name: "Praharsh Bawankar", role: "Photography Head", image: "https://image.nssiitd.in/current_team/Parth_Soni_Gsecy.jpg" },
  { id: "mbahead", name: "Omkar Bayas", role: "MBA Head", image: "https://image.nssiitd.in/current_team/Parth_Soni_Gsecy.jpg" },
  { id: "rrchead", name: "Gunjan Kela", role: "RRC Head", image: "https://image.nssiitd.in/current_team/Parth_Soni_Gsecy.jpg" },
  { id: "sahyoghead", name: "Prerna Patil", role: "Sahyog Head", image: "https://image.nssiitd.in/current_team/Parth_Soni_Gsecy.jpg" },
  { id: "creathead", name: "Sumedh Khangan", role: "Creative Head", image: "https://image.nssiitd.in/current_team/Parth_Soni_Gsecy.jpg" },
];

const Teampage = () => {
  return (
    <div>
      < Navbar/>
    <div className="team-container-heading">
      <h1>Welcome To The NSS Core Team</h1>
    </div>
    <div className="team-container">
      
      <div className="team-grid">
        {teamMembers.map((member) => (
          <div className={`team-card ${member.id}`} key={member.id}>
            <img src={member.image} alt={member.name} className="profile-image" />
            <h3>{member.name}</h3>
            <p>{member.role}</p>
          </div>
        ))}
      </div>
    </div>
    < NSSFooter/>
    </div>
  );
};

export default Teampage;