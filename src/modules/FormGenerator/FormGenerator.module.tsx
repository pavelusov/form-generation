import React, { Component }  from "react";
import Form from "@rjsf/material-ui";
import { JSONSchema7 } from "json-schema";

import './FromGenerator.scss';
import { FGProvider } from "./context"
import ConfigurationForm from "./components/ConfigurationForm";
import configurationExample from "./components/ConfigurationForm/configuration-example.json";

class FormGenerator extends Component<any, FormGeneratorContext> {
  setFormState: Functionable<SetFormProps>;

  constructor(props: any) {
    super(props);

    this.setFormState = (props: SetFormProps): void => {
      const form = props?.jsObject;
      if (form) this.setState({ form });
    }

    this.state = {
      form: configurationExample,
      setFormState: this.setFormState,
    }
  }

  render() {
    const { form } = this.state;
    return (
      <FGProvider
        value={this.state}
      >
        <div className="form-wrapper">
          <ConfigurationForm />
          <Form schema={form as JSONSchema7} />
        </div>
      </FGProvider>
    );
  }
}

export default FormGenerator;
