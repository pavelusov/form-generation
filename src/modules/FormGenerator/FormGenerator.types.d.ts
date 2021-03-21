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
  form?: Objectable | null;
  setFormState: Functionable<SetFormProps>;
}
