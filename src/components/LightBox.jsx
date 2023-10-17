import React, { useState } from "react";
import { IoMdClose } from "react-icons/io";

const LightBox = ({ selectedImg }) => {
  const [close, setClose] = useState(false);

  const handleClose = () => {
    setClose(!close);
  };
  return (
    <>
      {!close ? (
        <div className="lightbox">
          <IoMdClose className="close" onClick={handleClose} />
          <img src={selectedImg} alt="city" className="lightbox__img" />
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default LightBox;
