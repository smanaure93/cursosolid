(() => {
  //* Aplicar el principio de responsabilidad única
  //* Priorizar la composición frente a la herencia

  type HtmlType = "input" | "select" | "textarea" | "radio";

  class HtmlElement {
    constructor(public id: string, public type: HtmlType) {}
  }

  class InputAttributes {
    constructor(public value: string, public placeholder: string) {}
  }

  class InputEvents {
    constructor() {}

    setFocus() {}
    getValue() {}
    isActive() {}
    removeValue() {}
  }

  class InputElement {
    constructor(
      public htmlElement: HtmlElement,
      public inputAttributes: InputAttributes,
      public inputEvents: InputEvents
    ) {}
  }

  const htmlElement = new HtmlElement("txtName", "input");
  const inputAttributes = new InputAttributes(
    "Sócrates",
    "Enter first name..."
  );
  const inputEvents = new InputEvents();

  const nameField = new InputElement(htmlElement, inputAttributes, inputEvents);

  console.log({ nameField });
})();
