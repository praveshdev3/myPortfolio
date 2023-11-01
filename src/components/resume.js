import "../index.css";
import React, {useState,useEffect}from "react";
import MyResume from "../assets/Pravesh's Resume.pdf"
import { Document, Page, pdfjs } from "react-pdf";
import { IonIcon } from "@ionic/react";
import {
downloadOutline
} from "ionicons/icons";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;




function Resume({isActive}) {
  const [width, setWidth] = useState(1200);
    useEffect(() => {
    setWidth(window.innerWidth);
  }, []);
  return (
    <article className={isActive ? "contact active": "contact"} data-page="contact">
      <a href={MyResume} target="_blank">
       <button style={{margin:"25px", backgroundColor: "beige", padding:"10px", borderRadius:"10px"}}>
            Download
            <IonIcon icon={downloadOutline}></IonIcon>
        </button>
        </a>
    <Document file={MyResume}>
      <Page pageNumber={1} scale={width > 786 ? 1.4 : 0.5} renderAnnotationLayer={false} renderTextLayer={false}/>
    </Document>
    </article>
  );
}

export default Resume;

// function ResumeNew() {



//   return (
//     <div>
//       <Container fluid className="resume-section">
//         <Particle />
//         <Row style={{ justifyContent: "center", position: "relative" }}>
//           <Button
//             variant="primary"
//             href={pdf}
//             target="_blank"
//             style={{ maxWidth: "250px" }}
//           >
//             <AiOutlineDownload />
//             &nbsp;Download CV
//           </Button>
//         </Row>

//         <Row className="resume">
//           <Document file={pdf} className="d-flex justify-content-center">
//             <Page pageNumber={1} scale={width > 786 ? 1.7 : 0.6} />
//           </Document>
//         </Row>

//         <Row style={{ justifyContent: "center", position: "relative" }}>
//           <Button
//             variant="primary"
//             href={pdf}
//             target="_blank"
//             style={{ maxWidth: "250px" }}
//           >
//             <AiOutlineDownload />
//             &nbsp;Download CV
//           </Button>
//         </Row>
//       </Container>
//     </div>
//   );
// }

// export default ResumeNew;