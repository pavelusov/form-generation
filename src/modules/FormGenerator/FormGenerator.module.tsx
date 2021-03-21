import React, { Component }  from "react";

import './FromGenerator.scss';

import { FGProvider } from "./context"
import ConfigurationForm from "./components/ConfigurationForm";
import configurationExample from "./components/ConfigurationForm/configuration-example.json";

class FormGenerator extends Component<any, FormGeneratorContext> {
  setFormState: Functionable<SetFormProps>;

  constructor(props: any) {
    super(props);

    this.setFormState = (props: SetFormProps): void => {

      let form: FormGeneratorState = {};

      if (props?.jsObject?.formTitle) form.formTitle = props.jsObject.formTitle;

      this.setState({ form })
    }

    this.state = {
      form: configurationExample,
      setFormState: this.setFormState,
    }
  }

  render() {
    return (
      <FGProvider
        value={this.state}
      >
        <div className="form-wrapper">
          <ConfigurationForm />
          {JSON.stringify(this.state.form)}
        </div>
      </FGProvider>
    );
  }
}

export default FormGenerator;
