import * as React from "react";

import Validator, { FormFields } from "../validator";
import Alert from "../components/alert";
import Input from "../components/input";
import Form from "../components/form";
import SubmitButton from "../components/submit-button";

function App() {
  const [submitted, setSubmited] = React.useState(false);
  const [hasPeakAndPlate, setHasPeakAndPlate] = React.useState(false);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmited(true);

    const validator = new Validator();
    const formData = Object.fromEntries(
      new FormData(event.target as HTMLFormElement)
    );

    setHasPeakAndPlate(
      validator.hasPeakAndPlate((formData as unknown) as FormFields)
    );
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Input
        id="plate"
        pattern="\D{3}-\d{3,4}"
        label="Placa (XXX-999, XXX-9999)"
        placeholder="ABC-1234"
      />
      <Input
        id="date"
        pattern="\d{4}-(0[1-9]|1[012])-(0[1-9]|[12][0-9]|3[01])"
        label="Día (AAAA-MM-DD)"
        placeholder="2020-06-30"
      />
      <Input
        id="time"
        pattern="([0-1]?[0-9]|2[0-3]):[0-5][0-9]"
        label="Hora (HH:MM)"
        placeholder="20:00"
      />
      <SubmitButton label="Consultar" />
      {submitted &&
        (hasPeakAndPlate ? (
          <Alert label="Sí tiene pico y placa" type="restricted" />
        ) : (
          <Alert label="No tiene pico y placa" type="allowed" />
        ))}
    </Form>
  );
}

export default App;
