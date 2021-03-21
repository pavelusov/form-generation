type ConfiguredField = {
  type: "button" | "checkbox" | "file" | "hidden" | "image" | "password" | "radio" | "reset" | "submit" | "text" | "number";
  component: "input" | "textarea"
}

type FormGeneratorState = {
  formTitle?: string | null;
  items?: ConfiguredField[] | null;
}

interface Functionable<P extends any | null> {
  (props: P): void;
}

type Objectable = {
  [key:string]: any;
}

type SetFormProps = {
  jsObject?: Objectable;
  json?: string;
}

type FormGeneratorContext = {
  form: string | FormGeneratorState | null;
  setFormState: Functionable<SetFormProps>;
}
