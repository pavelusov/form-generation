import React from "react";
import { v4 as uuid } from "uuid";

import JSONInput from "react-json-editor-ajrm/es";
import locale from "react-json-editor-ajrm/es/locale/en";

import formTheme from "./form-theme.json";

import { FGConsumer } from "../../context";

export default function ConfigurationForm(): JSX.Element {
  return (
    <FGConsumer>
      { ({ form, setFormState}) => (
        <JSONInput
          id={uuid()}
          placeholder ={form}
          colors={formTheme}
          locale={locale}
          height="550px"
          onChange={setFormState}
        />
      )}
    </FGConsumer>
  );
}
