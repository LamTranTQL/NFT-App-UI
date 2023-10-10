export default interface FileUploadProps {
  maxSize: number;
  value: File | null;
  onChange?: (value: File) => void;
  removeValue?: () => void;
}
