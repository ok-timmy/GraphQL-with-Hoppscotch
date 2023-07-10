/**
 * Note
 * A Note
 */
declare interface Note {
    id?: number;
    userId?: number | null;
    title: string;
    content?: string | null;
    createdAt?: string | null;
    updatedAt?: string | null;
}
export { Note };
