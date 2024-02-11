'use client'
import Image from "next/image"
import { useState } from "react";
export default function Home() {
  const [uploadImage, setImage] = useState("/remove.svg");
  const onFileInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return;
    const file = e.target.files[0];
    setImage(window.URL.createObjectURL(file));
  };

  return (
    <div className="flex flex-row p-5">
      <div className="flex flex-col">
        <p>アップロード用のページ</p>
        <input type="file"
          id="r2" name="r2"
          accept="image/png, image/jpeg"
          className="file-input w-full max-w-xs"
          onChange={onFileInputChange} />
        <button className="btn btn-primary flex-0">アップロード</button>
      </div>
      <div className="divider lg:divider-horizontal h-full"></div>
      <div className="flex flex-1">
        <Image src={uploadImage} width={500} height={500} alt="upload image"></Image>
        <div className="flex-1"></div>
      </div>
    </div>
  )
}
