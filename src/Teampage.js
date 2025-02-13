import React from "react";
import "./Teampage.css";
import Instagram from './Images/Instagram.png'; // Custom Instagram icon
import LinkedIn from './Images/Linkedin.png';
import Navbar from "./Navbar.js";
import NSSFooter from "./NSSFooter.js";

const teamMembers = [
  { id: "incharge", name: "Dr. Amit Anurag", role: "Program Incharge", image: "https://www.rknec.edu/wp-content/uploads/2023/10/Prof.Anurag-Thakur.png" },

  { id: "secretary-1", name: "Yash Ghoderao", role: "Secretary", image: "https://image.nssiitd.in/current_team/Parth_Soni_Gsecy.jpg",instagram: "https://www.instagram.com/ghoderao_yash?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
    linkedin: "https://www.linkedin.com/in/yash-ghoderao-243597289/" },
  { id: "secretary-2", name: "Khushi Agrawal", role: "Secretary", image: "https://image.nssiitd.in/current_team/Parth_Soni_Gsecy.jpg",instagram: "https://www.instagram.com/khush___eeeeee?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
    linkedin: "https://www.linkedin.com/in/khushi-agrawal9970/" },
  { id: "joint-sec-1", name: "Aryan Puri", role: "Joint Secretary", image: "https://image.nssiitd.in/current_team/Parth_Soni_Gsecy.jpg",instagram: "https://www.instagram.com/aryanpuri_09?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
    linkedin: "https://www.linkedin.com/in/aryan-puri-a5ba95298/" },
  { id: "joint-sec-2", name: "Pranjal Bajaj", role: "Joint Secretary", image: "https://github.com/himanshusalve16/website/blob/main/src/Images/Pranjal.jpg?raw=true",instagram: "https://www.instagram.com/_pranjal_bajaj/?utm_source=ig_web_button_share_sheet",
    linkedin: "" },
  { id: "eventman-1", name: "Pooja Jaiswal", role: "Event Manager", image: "https://github.com/himanshusalve16/website/blob/main/src/Pooja-Jaiswal.jpg?raw=true",instagram: "https://www.instagram.com/pooja.jaiswal18/?utm_source=ig_web_button_share_sheet",
    linkedin: "https://www.linkedin.com/in/pooja-jaiswal-45776b229/" },
  { id: "eventman-2", name: "Chaitanya Talkhande", role: "Event Manager", image: "https://image.nssiitd.in/current_team/Parth_Soni_Gsecy.jpg",instagram: "https://www.instagram.com/chaitanya_talkhande/?utm_source=ig_web_button_share_sheet",
    linkedin: "" },
  { id: "eventman-3", name: "Priyansh Nigam", role: "Event Manager", image: "https://github.com/himanshusalve16/website/blob/main/src/Priyansh.jpg?raw=true",instagram: "https://www.instagram.com/priyansh_235/?utm_source=ig_web_button_share_sheet",
    linkedin: "https://www.linkedin.com/in/priyansh-nigam-994751205/" },
  { id: "exehead-1", name: "Aaryan Sharma", role: "Executive Head", image: "https://github.com/himanshusalve16/website/blob/main/src/Aaryan.jpg.jpg?raw=true",instagram: "https://www.instagram.com/a.sharma0215/?utm_source=ig_web_button_share_sheet",
    linkedin: "" },
  { id: "exehead-2", name: "Archi Hundani", role: "Executive Head", image: "https://github.com/himanshusalve16/website/blob/main/src/Archi%20Hundani%20.jpg?raw=true",instagram: "https://www.instagram.com/archihundani?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
    linkedin: "https://www.linkedin.com/in/archi-hundani-a19391247/" },
  { id: "exehead-3", name: "Kiran Rathi", role: "Executive Head", image: "https://github.com/himanshusalve16/website/blob/main/src/Kiran.jpg?raw=true" ,instagram: "https://www.instagram.com/kiran.0905?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
    linkedin: ""},
  { id: "venuehead-1", name: "Pratik Chnadak", role: "Venue Head", image: "https://github.com/himanshusalve16/website/blob/main/src/Pratik.JPG?raw=true",instagram: "https://www.instagram.com/pratik_chandak_08/?utm_source=ig_web_button_share_sheet",
    linkedin: "" },
  { id: "venuehead-2", name: "Devendra Mahajan", role: "Venue Head", image: "https://github.com/himanshusalve16/website/blob/main/src/Devendra.jpg?raw=true",instagram: "https://www.instagram.com/devendra_mahajan_/?utm_source=ig_web_button_share_sheet",
    linkedin: "https://www.linkedin.com/in/devendra-mahajan-24424321a/" },
  { id: "venuehead-3", name: "Arnav Ravekar", role: "Venue Head", image: "https://image.nssiitd.in/current_team/Parth_Soni_Gsecy.jpg",instagram: "https://www.instagram.com/______arnav___17?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
    linkedin: "https://www.linkedin.com/in/arnav-ravekar-a000bb2b3/" },
  { id: "prhead-1", name: "Devanshu Narnoliya", role: "Public Relation Head", image: "https://github.com/himanshusalve16/website/blob/main/src/Devanshu.jpg?raw=true",instagram: "https://www.instagram.com/devanshu_narnoliya_/?utm_source=ig_web_button_share_sheet",
    linkedin: "https://www.linkedin.com/in/devanshu-narnoliya-86907b2a3/" },
  { id: "prhead-2", name: "Sukhada Chepe", role: "Public Relation Head", image: "https://github.com/himanshusalve16/website/blob/main/src/Sukhada%20Chepe%20.jpg?raw=true",instagram: "https://www.instagram.com/sukhada_13/?utm_source=ig_web_button_share_sheet",
    linkedin: "https://www.linkedin.com/in/sukhada-chepe-3b3513281/" },
  { id: "prhead-3", name: "Vartesh Rote", role: "Public Relation Head", image: "https://image.nssiitd.in/current_team/Parth_Soni_Gsecy.jpg",instagram: "https://www.instagram.com/varteshhhh/?utm_source=ig_web_button_share_sheet",
    linkedin: "" },
  { id: "reshead-1", name: "Mohit Gupta", role: "Resource Head", image: "https://github.com/himanshusalve16/website/blob/main/src/Mohit.jpg?raw=true",instagram: "https://www.instagram.com/mohitgupta11104/?utm_source=ig_web_button_share_sheet",
    linkedin: "https://www.linkedin.com/in/mohit-gupta-345311342/" },
  { id: "reshead-2", name: "Naman Sabu", role: "Resource Head", image: "https://image.nssiitd.in/current_team/Parth_Soni_Gsecy.jpg" ,instagram: "https://www.instagram.com/naman_sabu/?utm_source=ig_web_button_share_sheet",
    linkedin: "https://www.linkedin.com/in/naman-sabu-7780532a6/"},
  { id: "reshead-3", name: "Ved Jaiswal", role: "Resource Head", image: "https://github.com/himanshusalve16/website/blob/main/src/Ved%20jaiswal.jpg?raw=true",instagram: "https://www.instagram.com/vedjaiswal_3110/?utm_source=ig_web_button_share_sheet",
    linkedin: "https://www.linkedin.com/in/ved-jaiswal-8aaab122a/" },
  { id: "cohead-1", name: "Nachiket Deshpande", role: "Community Outreach Head", image: "https://github.com/himanshusalve16/website/blob/main/src/Nachiket_Deshpande.jpg?raw=true" ,instagram: "https://www.instagram.com/nachiket.j.deshpande?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
    linkedin: "https://www.linkedin.com/in/nachiket-j-deshpande/"},
  { id: "cohead-2", name: "Suvidhi Sancheti", role: "Community Outreach Head", image: "https://github.com/himanshusalve16/website/blob/main/src/Suvidhi%20Sancheti%20.jpg?raw=true",instagram: "https://www.instagram.com/suvidhi_227?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
    linkedin: "https://www.linkedin.com/in/suvidhisancheti/" },
  { id: "mediahead-1", name: "Disha Sharma", role: "Media Head", image: "https://github.com/himanshusalve16/website/blob/main/src/Disha%20Sharma.jpeg?raw=true",instagram: "https://www.instagram.com/di_venatrix?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
    linkedin: "https://www.linkedin.com/in/disha-sharma-b90600297/" },
  { id: "mediahead-2", name: "Nupur Gaur", role: "Media Head", image: "https://github.com/himanshusalve16/website/blob/main/src/Nupur.jpg?raw=true",instagram: "https://www.instagram.com/nupur.gour06?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
    linkedin: "https://www.linkedin.com/in/nupur-singh-gour-987b0528b/"},
  { id: "systemshead-1", name: "Mahak Arora", role: "Systems Head", image: "https://image.nssiitd.in/current_team/Parth_Soni_Gsecy.jpg",instagram: "https://www.instagram.com/mahak_arora.16/?utm_source=ig_web_button_share_sheet",
    linkedin: "https://www.linkedin.com/in/mahak-arora-28ba52310/" },
  { id: "systemshead-2", name: "Arpit Pateriya", role: "Systems Head", image: "https://github.com/himanshusalve16/website/blob/main/src/Arpit%20Pateriya.jpg?raw=true",instagram: "https://www.instagram.com/arpitpateriya18/?utm_source=ig_web_button_share_sheet",
    linkedin: "https://www.linkedin.com/in/arpit-pateriya-9230972bb/" },
  { id: "inrhead-1", name: "Renuka Rane", role: "INR Head", image: "https://github.com/himanshusalve16/website/blob/main/src/Renuka%20Rane%20.jpg?raw=true" ,instagram: "https://www.instagram.com/rane04renuka/?utm_source=ig_web_button_share_sheet",
    linkedin: "https://www.linkedin.com/in/renuka-rane-bb2919257/"},
  { id: "inrhead-2", name: "Jatin Jasrotia", role: "INR Head", image: "https://image.nssiitd.in/current_team/Parth_Soni_Gsecy.jpg",instagram: "https://www.instagram.com/jt_jasrotia?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
    linkedin: "https://www.linkedin.com/in/jatin-jasrotia-688253230/" },
  { id: "inrhead-3", name: "Gouri Katre", role: "INR Head", image: "https://image.nssiitd.in/current_team/Parth_Soni_Gsecy.jpg",instagram: "https://www.instagram.com/gouri_k28/?utm_source=ig_web_button_share_sheet",
    linkedin: "https://www.linkedin.com/in/gouri-katre-051b29257/"},
  { id: "technicalhead-1", name: "Rudraksh Nalbalwar", role: "Technical Head", image: "https://github.com/himanshusalve16/website/blob/main/src/Rudraksh.jpg?raw=true",instagram: "https://www.instagram.com/nalbalwar_rudraksh?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
    linkedin: "https://www.linkedin.com/in/rudraksh-nalbalwar-b32289226/" },
  { id: "technicalhead-2", name: "Suhani Bajoria", role: "Technical Head", image: "https://github.com/himanshusalve16/website/blob/main/src/Suhani.jpg?raw=true",instagram: "https://www.instagram.com/suhani_bajoria18/?utm_source=ig_web_button_share_sheet",
    linkedin: "https://www.linkedin.com/in/suhani-bajoria-90274b2a5/" },
  { id: "backdrophead-1", name: "Nandani Sanghi", role: "Backdrop Head", image: "https://github.com/himanshusalve16/website/blob/main/src/Nandani.jpg?raw=true",instagram: "https://www.instagram.com/_nandani_sanghi__?hl=en",
    linkedin: "" },
  { id: "backdrophead-2", name: "Saket Karwa", role: "Backdrop Head", image: "https://github.com/himanshusalve16/website/blob/main/src/Saket.jpg?raw=true",instagram: "https://www.instagram.com/saket.karwa/?utm_source=ig_web_button_share_sheet",
    linkedin: "https://www.linkedin.com/in/saket-karwa-880920268/" },
  { id: "backdrophead-3", name: "Sanika Raut", role: "Backdrop Head", image: "https://github.com/himanshusalve16/website/blob/main/src/Sanika.jpg?raw=true",instagram: "https://www.instagram.com/sanikaa_raut_?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
    linkedin: "https://www.linkedin.com/in/sanika-raut-a34808345" },
  { id: "photographyhead", name: "Praharsh Bawankar", role: "Photography Head", image: "https://image.nssiitd.in/current_team/Parth_Soni_Gsecy.jpg",instagram: "https://www.instagram.com/praharsh52kar/?utm_source=ig_web_button_share_sheet",
    linkedin: "https://www.linkedin.com/in/praharsh04/"},
  { id: "mbahead", name: "Omkar Bayas", role: "MBA Head", image: "https://image.nssiitd.in/current_team/Parth_Soni_Gsecy.jpg" ,instagram: "https://www.instagram.com/omkarsingh_bayas/?utm_source=ig_web_button_share_sheet",
    linkedin: "https://www.linkedin.com/in/omkar-bayas-36795a224/"},
  { id: "rrchead", name: "Gunjan Kela", role: "RRC Head", image: "https://github.com/himanshusalve16/website/blob/main/src/Gunjann.jpg?raw=true" ,instagram: "https://www.instagram.com/im_gunjan_kela/?utm_source=ig_web_button_share_sheet",
    linkedin: "https://www.linkedin.com/in/gunjan-kela-89511b254/"},
  { id: "sahyoghead", name: "Prerna Patil", role: "Sahyog Head", image: "https://image.nssiitd.in/current_team/Parth_Soni_Gsecy.jpg",instagram: "",
    linkedin: "" },
  { id: "creathead", name: "Sumedh Khangan", role: "Creative Head", image: "https://image.nssiitd.in/current_team/Parth_Soni_Gsecy.jpg" ,instagram: "https://www.instagram.com/sumedh_khangan/?utm_source=ig_web_button_share_sheet",
    linkedin: "https://www.linkedin.com/in/sumedh-khangan/"},
];

const Teampage = () => {
  return (
    <div>
      <Navbar />
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
              <div className="social-icons">
                <a href={member.instagram} target="_blank" rel="noopener noreferrer">
                  <img src={Instagram} className="social-icon insta" />
                </a>
                <a href={member.linkedin} target="_blank" rel="noopener noreferrer">
                  <img src={LinkedIn} className="social-icon linkedin" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
      <NSSFooter />
    </div>
  );
};

export default Teampage;