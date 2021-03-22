import React, { useState }  from "react";
import Form from "@rjsf/material-ui";
import { JSONSchema7 } from "json-schema";

import './FromGenerator.scss';
import { FGProvider } from "./context"
import Tabs from "./components/Tabs/Tabs";
import ConfigurationForm from "./components/ConfigurationForm";
import configurationExample from "./components/ConfigurationForm/configuration-example.json";

function FormGenerator() {
  const [form, setForm] = useState<Objectable>(configurationExample);
  const contextValue: FormGeneratorContext = {
    form,
    setFormState: (props: SetFormProps): void => {
      const formData: Objectable | undefined = props?.jsObject ;
      if (formData) setForm(formData);
    }
  }

  const tabContent: FormGeneratorTab[] = [
    {
      id: "tab_0",
      title: "Config",
      component: <ConfigurationForm />,
    },
    {
      id: "tab_1",
      title: "Result",
      component: <Form schema={form as JSONSchema7} />,
    }
  ];
  const defaultTab = tabContent[0];
  const [tabId, setTabId] = useState(defaultTab.id);

  const currentTab = tabContent.find(item => item.id === tabId);
  return (
    <FGProvider
      value={contextValue}
    >
      <div className="form-wrapper">
        <Tabs
          data={tabContent}
          onSetTab={setTabId}
          activeTabId={tabId}
        />
        <div className="content">
          { currentTab?.component }
        </div>
      </div>
    </FGProvider>
  );
}
export default FormGenerator;
