# Calculation-enabled Field

![Calc field](./images/MathRenderer.gif)

Attaching [this](MathRendering.js) snippet to a field as a custom field renderer will turn it into a calculation-enabled field, signified by the calculator icon, providing the library used ([math.js](http://mathjs.org))
is uploaded and made available as a static resource named "math" in the organization.

Calculation-enabled fields will validate expressions as input is given, and will evaluate the current expression when the tab or enter keys are clicked.

Because it leverages math.js, anything that the library can parse (docs can be found [here](http://mathjs.org/docs/index.html))
can be evaluated by the field, including expressions that should obey BEDMAS.