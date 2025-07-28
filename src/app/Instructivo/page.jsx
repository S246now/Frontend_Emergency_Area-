import { FetchDocuments } from '@/lib/FetchDocuments';
import ListDocuments from "@/components/ListDocuments"; /* {} para export default */

async function InstructivoPage() {
  const categoryId = 1;
  const files = await FetchDocuments(categoryId);
    
    return (
    <div>
      <h1 >Instructivos</h1>
      <ListDocuments documents={files} />
    </div>
  );
}

export default InstructivoPage