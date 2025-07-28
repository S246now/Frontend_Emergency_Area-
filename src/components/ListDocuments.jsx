/* 
* Listar Documentos
*/
import React from 'react'

function ListDocuments({documents}) {
  return (
    <div>
      {documents.map((doc) => (
        <div key={doc.id}>
          <img
            src={doc.url_imagen}
            alt="Preview"
          />
          <h2>{doc.titulo}</h2>
          <a
            href={doc.url_documento}
            target="_blank"
            rel="noopener noreferrer"
          >
            Ver PDF
          </a>
        </div>
      ))}
    </div>
  );
}

export default ListDocuments