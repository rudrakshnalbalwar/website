import React from "react";
import { useParams } from "react-router-dom";
import img1 from "./Images/PRERNA/GramSampark/20240226_081146.jpg";
import img2 from "./Images/PRERNA/DRISHTIKON/TimePhoto_20240222_121352.jpg";
import img3 from "./Images/PRERNA/CHAKRVYUH/IMG_7741.JPG";
import img4 from "./Images/PRERNA/PRAYAS/TimePhoto_20240223_160032.jpg";
import img5 from "./Images/PRERNA/JUNOON/20240221_124242.jpg";
import img6 from "./Images/PRERNA/NAYA-SUMMIT/20240222_113602.jpg";
import gs1 from "./Images/PRERNA/GramSampark/20240226_081146.jpg";
import gs2 from "./Images/PRERNA/GramSampark/20240226_081627.jpg";
import gs3 from "./Images/PRERNA/GramSampark/20240226_083245.jpg";
import gs4 from "./Images/PRERNA/GramSampark/20240226_114003.jpg";
import gs5 from "./Images/PRERNA/GramSampark/20240226_114230.jpg";
import gs6 from "./Images/PRERNA/GramSampark/20240226_115750.jpg";
import gs7 from "./Images/PRERNA/GramSampark/20240226_115820.jpg";
import gs8 from "./Images/PRERNA/GramSampark/20240226_120956.jpg";
import gs9 from "./Images/PRERNA/GramSampark/20240226_121001.jpg";
import gs10 from "./Images/PRERNA/GramSampark/20240226_125333.jpg";
import gs11 from "./Images/PRERNA/GramSampark/20240226_125724.jpg";
import gs12 from "./Images/PRERNA/GramSampark/20240226_131601.jpg";
import gs13 from "./Images/PRERNA/GramSampark/20240226_134418.jpg";
import gs14 from "./Images/PRERNA/GramSampark/20240226_164845.jpg";
import gs15 from "./Images/PRERNA/GramSampark/20240226_171009.jpg";
import gs16 from "./Images/PRERNA/GramSampark/20240226_175711.jpg";
import gs17 from "./Images/PRERNA/GramSampark/TimePhoto_20240226_111638.jpg";
import gs18 from "./Images/PRERNA/GramSampark/TimePhoto_20240226_112755.jpg";
import gs19 from "./Images/PRERNA/GramSampark/TimePhoto_20240226_115702.jpg";
import gs20 from "./Images/PRERNA/GramSampark/TimePhoto_20240226_130038.jpg";
import gs21 from "./Images/PRERNA/GramSampark/TimePhoto_20240226_160814.jpg";
import gs22 from "./Images/PRERNA/GramSampark/TimePhoto_20240226_162151.jpg";
import gs23 from "./Images/PRERNA/GramSampark/TimePhoto_20240226_162648.jpg";
import gs24 from "./Images/PRERNA/GramSampark/TimePhoto_20240226_164523.jpg";
import gs25 from "./Images/PRERNA/GramSampark/TimePhoto_20240226_165105.jpg";
import gs26 from "./Images/PRERNA/GramSampark/TimePhoto_20240226_170500.jpg";
import gs27 from "./Images/PRERNA/GramSampark/TimePhoto_20240226_170709.jpg";
import gs28 from "./Images/PRERNA/GramSampark/TimePhoto_20240226_170711.jpg";
import gs29 from "./Images/PRERNA/GramSampark/TimePhoto_20240226_170913.jpg";
import gs30 from "./Images/PRERNA/GramSampark/TimePhoto_20240226_170916.jpg";
import gs31 from "./Images/PRERNA/GramSampark/TimePhoto_20240226_171554.jpg";
import gs32 from "./Images/PRERNA/GramSampark/TimePhoto_20240226_171827.jpg";
import ch1 from "./Images/PRERNA/CHAKRVYUH/20240218_072233.jpg";
import ch2 from "./Images/PRERNA/CHAKRVYUH/20240218_091705.jpg";
import ch3 from "./Images/PRERNA/CHAKRVYUH/20240218_092956.jpg";
import ch4 from "./Images/PRERNA/CHAKRVYUH/20240218_094859.jpg";
import ch5 from "./Images/PRERNA/CHAKRVYUH/20240218_105402.jpg";
import ch6 from "./Images/PRERNA/CHAKRVYUH/20240218_124710.jpg";
import ch7 from "./Images/PRERNA/CHAKRVYUH/20240218_124724.jpg";
import ch8 from "./Images/PRERNA/CHAKRVYUH/20240218_125547.jpg";
import ch9 from "./Images/PRERNA/CHAKRVYUH/20240218_132942.jpg";
import ch10 from "./Images/PRERNA/CHAKRVYUH/20240218_141740.jpg";
import ch11 from "./Images/PRERNA/CHAKRVYUH/IMG_7582.JPG";
import ch12 from "./Images/PRERNA/CHAKRVYUH/IMG_7629.JPG";
import ch13 from "./Images/PRERNA/CHAKRVYUH/IMG_7707.JPG";
import ch14 from "./Images/PRERNA/CHAKRVYUH/IMG_7741.JPG";
import ch15 from "./Images/PRERNA/CHAKRVYUH/IMG_7856.JPG";
import dr1 from "./Images/PRERNA/DRISHTIKON/20240222_121957.jpg";
import dr2 from "./Images/PRERNA/DRISHTIKON/20240222_124109.jpg";
import dr3 from "./Images/PRERNA/DRISHTIKON/20240222_131311.jpg";
import dr4 from "./Images/PRERNA/DRISHTIKON/20240222_132648.jpg";
import dr5 from "./Images/PRERNA/DRISHTIKON/20240222_153424.jpg";
import dr6 from "./Images/PRERNA/DRISHTIKON/TimePhoto_20240222_121316.jpg";
import dr7 from "./Images/PRERNA/DRISHTIKON/TimePhoto_20240222_121330.jpg";
import dr8 from "./Images/PRERNA/DRISHTIKON/TimePhoto_20240222_121336.jpg";
import dr9 from "./Images/PRERNA/DRISHTIKON/TimePhoto_20240222_121348.jpg";
import dr10 from "./Images/PRERNA/DRISHTIKON/TimePhoto_20240222_121352.jpg";
import dr11 from "./Images/PRERNA/DRISHTIKON/TimePhoto_20240222_121415.jpg";
import dr12 from "./Images/PRERNA/DRISHTIKON/TimePhoto_20240222_123320.jpg";
import dr13 from "./Images/PRERNA/DRISHTIKON/TimePhoto_20240222_123336.jpg";
import dr14 from "./Images/PRERNA/DRISHTIKON/TimePhoto_20240222_124334.jpg";
import dr15 from "./Images/PRERNA/DRISHTIKON/TimePhoto_20240222_124337.jpg";
import dr16 from "./Images/PRERNA/DRISHTIKON/TimePhoto_20240222_131500.jpg";
import dr17 from "./Images/PRERNA/DRISHTIKON/TimePhoto_20240222_131503.jpg";
import dr18 from "./Images/PRERNA/DRISHTIKON/TimePhoto_20240222_132505.jpg";
import dr19 from "./Images/PRERNA/DRISHTIKON/TimePhoto_20240222_132744.jpg";
import dr20 from "./Images/PRERNA/DRISHTIKON/TimePhoto_20240222_132806.jpg";
import dr21 from "./Images/PRERNA/DRISHTIKON/TimePhoto_20240222_132837.jpg";
import dr22 from "./Images/PRERNA/DRISHTIKON/TimePhoto_20240222_152352.jpg";
import dr23 from "./Images/PRERNA/DRISHTIKON/TimePhoto_20240222_152354.jpg";
import dr24 from "./Images/PRERNA/DRISHTIKON/TimePhoto_20240222_152359.jpg";
import dr25 from "./Images/PRERNA/DRISHTIKON/TimePhoto_20240222_152404.jpg";
import dr26 from "./Images/PRERNA/DRISHTIKON/TimePhoto_20240222_152422.jpg";
import dr27 from "./Images/PRERNA/DRISHTIKON/TimePhoto_20240222_152849.jpg";
import dr28 from "./Images/PRERNA/DRISHTIKON/TimePhoto_20240222_152908.jpg";
import dr29 from "./Images/PRERNA/DRISHTIKON/TimePhoto_20240222_153551.jpg";
import dr30 from "./Images/PRERNA/DRISHTIKON/TimePhoto_20240222_153554.jpg";
import dr31 from "./Images/PRERNA/DRISHTIKON/TimePhoto_20240222_153559.jpg";
import dr32 from "./Images/PRERNA/DRISHTIKON/TimePhoto_20240222_153618.jpg";
import dr33 from "./Images/PRERNA/DRISHTIKON/TimePhoto_20240222_155717.jpg";
import dr34 from "./Images/PRERNA/DRISHTIKON/TimePhoto_20240222_155720.jpg";
import dr35 from "./Images/PRERNA/DRISHTIKON/TimePhoto_20240222_155730.jpg";
import dr36 from "./Images/PRERNA/DRISHTIKON/TimePhoto_20240222_161959.jpg";
import dr37 from "./Images/PRERNA/DRISHTIKON/TimePhoto_20240222_162005.jpg";
import ju1 from "./Images/PRERNA/JUNOON/20240221_123650.jpg";
import ju2 from "./Images/PRERNA/JUNOON/20240221_123651.jpg";
import ju3 from "./Images/PRERNA/JUNOON/20240221_124242.jpg";
import ju4 from "./Images/PRERNA/JUNOON/20240221_124611.jpg";
import ju5 from "./Images/PRERNA/JUNOON/20240221_124640.jpg";
import ju6 from "./Images/PRERNA/JUNOON/20240221_124745.jpg";
import ju7 from "./Images/PRERNA/JUNOON/20240221_124953.jpg";
import ju8 from "./Images/PRERNA/JUNOON/20240221_125013.jpg";
import ju9 from "./Images/PRERNA/JUNOON/20240221_130023.jpg";
import ju10 from "./Images/PRERNA/JUNOON/20240221_133235.jpg";
import ju11 from "./Images/PRERNA/JUNOON/20240221_133643.jpg";
import ju12 from "./Images/PRERNA/JUNOON/20240221_142324.jpg";
import ju13 from "./Images/PRERNA/JUNOON/20240221_142346.jpg";
import ju14 from "./Images/PRERNA/JUNOON/20240221_142524.jpg";
import ju15 from "./Images/PRERNA/JUNOON/20240221_142526.jpg";
import ju16 from "./Images/PRERNA/JUNOON/IMG_3284.JPG";
import ju17 from "./Images/PRERNA/JUNOON/IMG_3288.JPG";
import ju18 from "./Images/PRERNA/JUNOON/IMG_3291.JPG";
import ju19 from "./Images/PRERNA/JUNOON/IMG_8355.JPG";
import ju20 from "./Images/PRERNA/JUNOON/IMG_8370.JPG";
import ju21 from "./Images/PRERNA/JUNOON/IMG_8384.JPG";
import ju22 from "./Images/PRERNA/JUNOON/IMG_8385.JPG";
import ju23 from "./Images/PRERNA/JUNOON/IMG_8407.JPG";
import ju24 from "./Images/PRERNA/JUNOON/IMG_8456.JPG";
import ju25 from "./Images/PRERNA/JUNOON/IMG_8457.JPG";
import ju26 from "./Images/PRERNA/JUNOON/IMG_8513.JPG";
import ju27 from "./Images/PRERNA/JUNOON/Screenshot 2024-05-08 160521.png";
import ju28 from "./Images/PRERNA/JUNOON/Screenshot 2024-05-08 160559.png";
import ju29 from "./Images/PRERNA/JUNOON/Screenshot 2024-05-08 160807.png";
import pr1 from "./Images/PRERNA/PRAYAS/TimePhoto_20240223_142813.jpg";
import pr2 from "./Images/PRERNA/PRAYAS/TimePhoto_20240223_142814.jpg";
import pr3 from "./Images/PRERNA/PRAYAS/TimePhoto_20240223_142900.jpg";
import pr4 from "./Images/PRERNA/PRAYAS/TimePhoto_20240223_142904.jpg";
import pr5 from "./Images/PRERNA/PRAYAS/TimePhoto_20240223_142916.jpg";
import pr6 from "./Images/PRERNA/PRAYAS/TimePhoto_20240223_142918.jpg";
import pr7 from "./Images/PRERNA/PRAYAS/TimePhoto_20240223_142949.jpg";
import pr8 from "./Images/PRERNA/PRAYAS/TimePhoto_20240223_143008.jpg";
import pr9 from "./Images/PRERNA/PRAYAS/TimePhoto_20240223_143010.jpg";
import pr10 from "./Images/PRERNA/PRAYAS/TimePhoto_20240223_143414.jpg";
import pr11 from "./Images/PRERNA/PRAYAS/TimePhoto_20240223_143441.jpg";
import pr12 from "./Images/PRERNA/PRAYAS/TimePhoto_20240223_143516.jpg";
import pr13 from "./Images/PRERNA/PRAYAS/TimePhoto_20240223_143528.jpg";
import pr14 from "./Images/PRERNA/PRAYAS/TimePhoto_20240223_143806.jpg";
import pr15 from "./Images/PRERNA/PRAYAS/TimePhoto_20240223_143810.jpg";
import pr16 from "./Images/PRERNA/PRAYAS/TimePhoto_20240223_143818.jpg";
import pr17 from "./Images/PRERNA/PRAYAS/TimePhoto_20240223_144515.jpg";
import pr18 from "./Images/PRERNA/PRAYAS/TimePhoto_20240223_144524.jpg";
import pr19 from "./Images/PRERNA/PRAYAS/TimePhoto_20240223_144900.jpg";
import pr20 from "./Images/PRERNA/PRAYAS/TimePhoto_20240223_144911.jpg";
import pr21 from "./Images/PRERNA/PRAYAS/TimePhoto_20240223_145357.jpg";
import pr22 from "./Images/PRERNA/PRAYAS/TimePhoto_20240223_145408.jpg";
import pr23 from "./Images/PRERNA/PRAYAS/TimePhoto_20240223_145453.jpg";
import pr24 from "./Images/PRERNA/PRAYAS/TimePhoto_20240223_150137.jpg";
import pr25 from "./Images/PRERNA/PRAYAS/TimePhoto_20240223_150141.jpg";
import pr26 from "./Images/PRERNA/PRAYAS/TimePhoto_20240223_150155.jpg";
import pr27 from "./Images/PRERNA/PRAYAS/TimePhoto_20240223_150642.jpg";
import pr28 from "./Images/PRERNA/PRAYAS/TimePhoto_20240223_151412.jpg";
import pr29 from "./Images/PRERNA/PRAYAS/TimePhoto_20240223_151416.jpg";
import pr30 from "./Images/PRERNA/PRAYAS/TimePhoto_20240223_151803.jpg";
import pr31 from "./Images/PRERNA/PRAYAS/TimePhoto_20240223_151810.jpg";
import pr32 from "./Images/PRERNA/PRAYAS/TimePhoto_20240223_152620.jpg";
import pr33 from "./Images/PRERNA/PRAYAS/TimePhoto_20240223_152622.jpg";
import pr34 from "./Images/PRERNA/PRAYAS/TimePhoto_20240223_152755.jpg";
import pr35 from "./Images/PRERNA/PRAYAS/TimePhoto_20240223_152908.jpg";
import pr36 from "./Images/PRERNA/PRAYAS/TimePhoto_20240223_153305.jpg";
import pr37 from "./Images/PRERNA/PRAYAS/TimePhoto_20240223_153504.jpg";
import pr38 from "./Images/PRERNA/PRAYAS/TimePhoto_20240223_153513.jpg";
import pr39 from "./Images/PRERNA/PRAYAS/TimePhoto_20240223_154544.jpg";
import pr40 from "./Images/PRERNA/PRAYAS/TimePhoto_20240223_154546.jpg";
import pr41 from "./Images/PRERNA/PRAYAS/TimePhoto_20240223_154551.jpg";
import pr42 from "./Images/PRERNA/PRAYAS/TimePhoto_20240223_154555.jpg";
import pr43 from "./Images/PRERNA/PRAYAS/TimePhoto_20240223_154603.jpg";
import pr44 from "./Images/PRERNA/PRAYAS/TimePhoto_20240223_154606.jpg";
import pr45 from "./Images/PRERNA/PRAYAS/TimePhoto_20240223_154613.jpg";
import pr46 from "./Images/PRERNA/PRAYAS/TimePhoto_20240223_154630.jpg";
import pr47 from "./Images/PRERNA/PRAYAS/TimePhoto_20240223_155835.jpg";
import pr48 from "./Images/PRERNA/PRAYAS/TimePhoto_20240223_155837.jpg";
import pr49 from "./Images/PRERNA/PRAYAS/TimePhoto_20240223_155842.jpg";
import pr50 from "./Images/PRERNA/PRAYAS/TimePhoto_20240223_160030.jpg";
import pr51 from "./Images/PRERNA/PRAYAS/TimePhoto_20240223_160032.jpg";
import pr52 from "./Images/PRERNA/PRAYAS/TimePhoto_20240223_160311.jpg";
import pr53 from "./Images/PRERNA/PRAYAS/TimePhoto_20240223_160313.jpg";
import ns1 from "./Images/PRERNA/NAYA-SUMMIT/20240222_113602.jpg";
import ns2 from "./Images/PRERNA/NAYA-SUMMIT/TimePhoto_20240222_100249.jpg";
import ns3 from "./Images/PRERNA/NAYA-SUMMIT/TimePhoto_20240222_100254.jpg";
import ns4 from "./Images/PRERNA/NAYA-SUMMIT/TimePhoto_20240222_100257.jpg";
import ns5 from "./Images/PRERNA/NAYA-SUMMIT/TimePhoto_20240222_100301.jpg";
import ns6 from "./Images/PRERNA/NAYA-SUMMIT/TimePhoto_20240222_100302.jpg";
import ns7 from "./Images/PRERNA/NAYA-SUMMIT/TimePhoto_20240222_100314.jpg";
import ns8 from "./Images/PRERNA/NAYA-SUMMIT/TimePhoto_20240222_100323.jpg";
import ns9 from "./Images/PRERNA/NAYA-SUMMIT/TimePhoto_20240222_100617.jpg";
import ns10 from "./Images/PRERNA/NAYA-SUMMIT/TimePhoto_20240222_100622.jpg";
import ns11 from "./Images/PRERNA/NAYA-SUMMIT/TimePhoto_20240222_101225.jpg";
import ns12 from "./Images/PRERNA/NAYA-SUMMIT/TimePhoto_20240222_101234.jpg";
import ns13 from "./Images/PRERNA/NAYA-SUMMIT/TimePhoto_20240222_101249.jpg";
import ns14 from "./Images/PRERNA/NAYA-SUMMIT/TimePhoto_20240222_101556.jpg";
import ns15 from "./Images/PRERNA/NAYA-SUMMIT/TimePhoto_20240222_101607.jpg";
import ns16 from "./Images/PRERNA/NAYA-SUMMIT/TimePhoto_20240222_101941.jpg";
import ns17 from "./Images/PRERNA/NAYA-SUMMIT/TimePhoto_20240222_102001.jpg";
import ns18 from "./Images/PRERNA/NAYA-SUMMIT/TimePhoto_20240222_102117.jpg";
import ns19 from "./Images/PRERNA/NAYA-SUMMIT/TimePhoto_20240222_102254.jpg";
import ns20 from "./Images/PRERNA/NAYA-SUMMIT/TimePhoto_20240222_103044.jpg";
import ns21 from "./Images/PRERNA/NAYA-SUMMIT/TimePhoto_20240222_103126.jpg";
import ns22 from "./Images/PRERNA/NAYA-SUMMIT/TimePhoto_20240222_103132.jpg";
import ns23 from "./Images/PRERNA/NAYA-SUMMIT/TimePhoto_20240222_103820.jpg";
import ns24 from "./Images/PRERNA/NAYA-SUMMIT/TimePhoto_20240222_103850.jpg";
import ns25 from "./Images/PRERNA/NAYA-SUMMIT/TimePhoto_20240222_103900.jpg";
import ns26 from "./Images/PRERNA/NAYA-SUMMIT/TimePhoto_20240222_104948.jpg";
import ns27 from "./Images/PRERNA/NAYA-SUMMIT/TimePhoto_20240222_104952.jpg";
import ns28 from "./Images/PRERNA/NAYA-SUMMIT/TimePhoto_20240222_105039.jpg";
import ns29 from "./Images/PRERNA/NAYA-SUMMIT/TimePhoto_20240222_105443.jpg";
import ns30 from "./Images/PRERNA/NAYA-SUMMIT/TimePhoto_20240222_105449.jpg";
import ns31 from "./Images/PRERNA/NAYA-SUMMIT/TimePhoto_20240222_105452.jpg";
import ns32 from "./Images/PRERNA/NAYA-SUMMIT/TimePhoto_20240222_105503.jpg";
import ns33 from "./Images/PRERNA/NAYA-SUMMIT/TimePhoto_20240222_105512.jpg";
import ns34 from "./Images/PRERNA/NAYA-SUMMIT/TimePhoto_20240222_105612.jpg";
import ns35 from "./Images/PRERNA/NAYA-SUMMIT/TimePhoto_20240222_105931.jpg";
import ns36 from "./Images/PRERNA/NAYA-SUMMIT/TimePhoto_20240222_111445.jpg";
import ns37 from "./Images/PRERNA/NAYA-SUMMIT/TimePhoto_20240222_111451.jpg";
import ns38 from "./Images/PRERNA/NAYA-SUMMIT/TimePhoto_20240222_111742.jpg";
import ns39 from "./Images/PRERNA/NAYA-SUMMIT/TimePhoto_20240222_111753.jpg";
import ns40 from "./Images/PRERNA/NAYA-SUMMIT/TimePhoto_20240222_112003.jpg";
import ns41 from "./Images/PRERNA/NAYA-SUMMIT/TimePhoto_20240222_112716.jpg";
import ns42 from "./Images/PRERNA/NAYA-SUMMIT/TimePhoto_20240222_112718.jpg";
import ns43 from "./Images/PRERNA/NAYA-SUMMIT/TimePhoto_20240222_112723.jpg";
import Navbar from "./Navbar";
import NSSFooter from "./NSSFooter";
import "./EventPage.css";

// Sample event data
const eventImages = {
  gram_sampark: [gs1, gs2, gs3, gs4, gs5, gs6, gs7, gs8, gs9, gs10, gs11, gs12, gs13, gs14, gs15, gs16, gs17, gs18, gs19, gs20, gs21, gs22, gs23, gs24, gs25, gs26, gs27, gs28, gs29, gs30, gs31, gs32],
  drishtikon: [dr1, dr2, dr3, dr4, dr5, dr6, dr7, dr8, dr9, dr10, dr11, dr12, dr13, dr14,
    dr15, dr16, dr17, dr18, dr19, dr20, dr21, dr22, dr23, dr24, dr25, dr26, dr27,
    dr28, dr29, dr30, dr31, dr32, dr33, dr34, dr35, dr36, dr37],
  chakrvyuh: [ch1, ch2, ch3, ch4, ch5, ch6, ch7, ch8, ch9, ch10, ch11, ch12, ch13, ch14, ch15],
  prayas: [pr1, pr2, pr3, pr4, pr5, pr6, pr7, pr8, pr9, pr10, pr11, pr12, pr13, pr14, pr15, pr16, pr17, pr18,
    pr19, pr20, pr21, pr22, pr23, pr24, pr25, pr26, pr27, pr28, pr29, pr30, pr31, pr32, pr33, pr34, pr35, pr36,
    pr37, pr38, pr39, pr40, pr41, pr42, pr43, pr44, pr45, pr46, pr47, pr48, pr49, pr50, pr51, pr52, pr53],
  junoon: [ju1, ju2, ju3, ju4, ju5, ju6, ju7, ju8, ju9, ju10, ju11, ju12, ju13, ju14, 
    ju15, ju16, ju17, ju18, ju19, ju20, ju21, ju22, ju23, ju24, ju25, ju26, 
    ju27, ju28, ju29],
  naya_summit: [ns1, ns2, ns3, ns4, ns5, ns6, ns7, ns8, ns9, ns10, ns11, ns12, ns13, ns14, ns15, ns16, ns17, ns18,
    ns19, ns20, ns21, ns22, ns23, ns24, ns25, ns26, ns27, ns28, ns29, ns30, ns31, ns32, ns33, ns34, ns35,
    ns36, ns37, ns38, ns39, ns40, ns41, ns42, ns43],
};

const EventPage = () => {
  const { year, eventName } = useParams(); // Get params from URL

  return (
    <div>
      <Navbar />
      <div className="event-page">
        <h2>{eventName.toUpperCase()} - {year}</h2>
        <div className="event-gallery">
          {eventImages[eventName]?.map((img, index) => (
            <a key={index} href={img} target="_blank" rel="noopener noreferrer">
              <img src={img} alt={`Event ${eventName}`} className="event-image" />
            </a>
          ))}
        </div>
      </div>
      <NSSFooter />
    </div>
  );
};

export default EventPage;