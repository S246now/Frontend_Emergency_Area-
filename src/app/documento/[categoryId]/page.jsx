async function CategoryPage({ params }) {
  // try {
    const {categoryId} = await params; //de mi ruta dinámica
    const response = await fetch(`http://127.0.0.1:8000/api/documento/${categoryId}`, {
      cache: 'no-store',
    });
    
    const data = await response.json();
    const files = Array.isArray(data) ? data : [data];
    // } catch (error) {
    //   console.log(error);
    // }
    
    return (
    <div className="p-4">
    <h1 className="text-2xl mb-4">Documentos de la categoría: {params.category}</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {files.map((doc) => (
          <div key={doc.id} className="border p-2 rounded shadow">
            <img src={doc.image_url} alt="Preview" className="h-40 object-cover w-full" />
            <h2 className="text-lg font-bold mt-2">{doc.title}</h2>
            <a
              href={doc.pdf_url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 underline"
              >
              Ver PDF
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CategoryPage