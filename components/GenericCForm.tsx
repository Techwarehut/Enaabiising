import React from "react";

interface GenericCFormProps {
  isBFormComplete: boolean;
}

const GenericCForm: React.FC<GenericCFormProps> = ({ isBFormComplete }) => {
  return (
    <div className="flex border border-black rounded-md shadow-3xl shadow-black md:min-h-[600px] p-12 items-center justify-center">
      {!isBFormComplete ? (
        <div>Please complete the B Form.</div>
      ) : (
        <div>
          Scroll down to make your C Form selection. Don't forget to EXPORT your
          work once complete.
        </div>
      )}
    </div>
  );
};

export default GenericCForm;
