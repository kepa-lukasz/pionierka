import React from 'react';
import { PDFDownloadLink } from '@react-pdf/renderer';
import ProjectPdf from './pdfgenerator'; // ← ścieżka do Twojego pliku PDF

export default function CreatePDF() {
    const base = window.location.origin + '/models/prycz_zwykla';
  
    const project = {
      title: 'Prycza harcerska',
      mainImage: `${base}/podglad.jpg`,
      images: [
        `${base}/front.jpg`,
        `${base}/side.jpg`,
        `${base}/top.jpg`,
      ],
      materials: [
        '200x5x5 cm',
        '2 belki poprzeczne 90x5x5 cm',
      ],
      description:
        'Prycza harcerska wykonana z kantówek i linek naciągających belki od zewnątrz. Konstrukcja łatwa do montażu i demontażu.',
    };
  
    return (
      <div className='mb-3' >
        <PDFDownloadLink
          document={
            <ProjectPdf
              title={project.title}
              mainImage={project.mainImage}
              images={project.images}
              materials={project.materials}
              description={project.description}
            />
          }
          fileName="prycza-harcerska.pdf"
          className="btn btn-primary mt-3"
        >
          {({ loading }) => (loading ? 'Generowanie PDF...' : 'Pobierz PDF')}
        </PDFDownloadLink>
      </div>
    );
  }
  