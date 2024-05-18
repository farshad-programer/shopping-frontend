import React, { useState } from "react";
import { useUploadMutation } from "../features/uploadSlice";

const PostProduct = () => {
  const [file, setFi1e] = useState(null);
  const [upload, { data, isLoading, isSuccess, isError, error }] =
    useUploadMutation();
  function handleFi1e(event) {
    console.log("object", event.target.files[0]);
    setFi1e(event.target.files[0]);
  }

  const onSaveNoteClicked = async (e) => {
    if (file) {
      e.preventDefault();
      const formData = new FormData();
      formData.append("images", file);

      await upload(formData);
    }
  };

  if (isSuccess) {
    console.log("objectss", data);
  }
  if (isError) {
    console.log("error object", error);
  }
  //   ---------------------------------------
  return (
    <div>
      <form>
        <input type="file" onChange={handleFi1e} />
        <button className="bg-slate-500" onClick={onSaveNoteClicked}>
          Up10ad
        </button>
      </form>
    </div>
  );
};

export default PostProduct;
