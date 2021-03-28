import React from "react";

import "./FormButton.scss";

const FormButtons = ({
  submitText = 'Submit',
  declineText = 'Cancel',
  onCancel = () => {},
}: FormButtonsProps) => (
  <div className="buttons-wrapper">
    <button
      className="button"
      type="submit"
    >
      {submitText}
    </button>
    <button
      onClick={onCancel}
      className="button"
      type="button"
    >
      {declineText}
    </button>
  </div>
)

export default FormButtons;
