import { createContext } from "react";

export const FGInitialContext: FormGeneratorContext = { form: null, setFormState: () => {} };

const FormGeneratorContext = createContext(FGInitialContext);

export const FGConsumer = FormGeneratorContext.Consumer;
export const FGProvider = FormGeneratorContext.Provider;

export default FormGeneratorContext;
