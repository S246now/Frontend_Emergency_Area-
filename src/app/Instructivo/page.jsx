import { fetchDocuments } from '@/lib/fetchDocuments';

async function CategoryPage() {
  const categoryId = 1;
  const files = await fetchDocuments(categoryId);
    
    return (
    <div className="p-4">
    <h1 className="text-2xl mb-4">Instructivos</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {files.map((doc) => (
          <div key={doc.id} className="border p-2 rounded shadow">
            <img src={doc.url_imagen} alt="Preview" className="h-40 object-cover w-full" />
            <h2 className="text-lg font-bold mt-2">{doc.titulo}</h2>
            <a
              href={doc.url_documento}
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