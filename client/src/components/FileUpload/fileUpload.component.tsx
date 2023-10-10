/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @next/next/no-img-element */
"use client";

import FilePlus from "@/assets/icons/file-plus.svg";
import Image from "next/image";
import { ChangeEvent, DragEvent, useEffect, useState } from "react";
import FileUploadProps from "./fileUpload.interface";
import ButtonIcon from "../Button/buttonIcon.component";
import CloseICon from "@/assets/icons/x-close.svg";

function FileUpload(props: FileUploadProps) {
  const { maxSize, onChange, value, removeValue } = props;

  const [file, setFile] = useState<File | null>(null);

  useEffect(() => {
    if (value) {
      setFile(value);
    }
  }, []);

  const handleDragOver = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const handleDragLeave = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const handleDrop = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    const droppedFiles = Array.from(e.dataTransfer.files);
    droppedFiles.forEach((file) => {
      if (maxSize * 1024 * 1024 >= file.size) {
        setFile(file);
        onChange && onChange(file);
      }
    });
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setFile(e.target.files[0]);
      onChange && onChange(e.target.files[0]);
    }
  };

  const handleRemoveClick = () => {
    setFile(null);
    removeValue && removeValue();
  };
  return (
    <div
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
      className='w-full flex flex-col justify-center items-center gap-5 rounded-xl border border-light-300 bg-light-200 p-8'
    >
      {!file ? (
        <>
          <Image src={FilePlus} alt='file plus' className='w-6 h-auto' />
          <span className='flex flex-row gap-1 font-normal text-sm text-dark-600'>
            <label
              htmlFor='file-upload'
              className='font-semibold text-sm text-main-200'
            >
              <input
                type='file'
                className='hidden'
                id='file-upload'
                accept='image/*'
                onChange={handleChange}
              />
              Click to submit file
            </label>
            or drag and drop
          </span>
          <p className='font-normal text-xs text-dark-600'>
            File types supported: PNG, JPEG, GIF. Max size: {maxSize}MB
          </p>
        </>
      ) : (
        <>
          <div className='relative w-[150px] h-[150px]'>
            <img
              src={URL.createObjectURL(file)}
              alt={file.name}
              className='rounded-lg w-full h-auto'
            />
            <ButtonIcon
              className='absolute top-2 right-2 bg-Error-50'
              image={CloseICon}
              onClick={handleRemoveClick}
            />
          </div>
        </>
      )}
    </div>
  );
}

export default FileUpload;
