import React, { useState } from "react";
import { imageDb } from "./Config";
import { ref, uploadBytes } from "firebase/storage";
import { v4 } from "uuid";

const Firebase = () => {
  const [img, setImg] = useState("");

  const handleClick = () => {
    const imgRef = ref(imageDb, `files/${v4()}`);
    uploadBytes(imgRef, img);
  };

  return (
    <div>
      <input type="file" onChange={(e) => setImg(e.target.files[0])} />
      <button onClick={handleClick}>upload</button>
    </div>
  );
};

export default Firebase;
