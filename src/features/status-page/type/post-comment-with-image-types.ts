interface CommentForm {
  content: string;
  imageUrl?: FileList;
}

export interface CommentType {
  id: number; // perbaikan: 'number' ditulis dengan benar
  content: string; // perbaikan: tipe data 'string' untuk content
  imageUrl: string | null; // perbaikan: imageUrl bisa string atau null
  createdAt: string; // perbaikan: createdAt adalah string format tanggal
  updatedAt: string; // perbaikan: updatedAt adalah string format tanggal
  threadId: number; // perbaikan: 'number' ditulis dengan benar
  authorId: number; // perbaikan: 'number' ditulis dengan benar
}


export default CommentForm