import Composite = require("ojs/ojcomposite");
import * as view from "text!./graph-size-calculator-view.html";
import viewModel from "./graph-size-calculator-viewModel";
import * as metadata from "text!./component.json";
import "css!./graph-size-calculator-styles";

Composite.register("graph-size-calculator", {
  view: view,
  viewModel: viewModel,
  metadata: JSON.parse(metadata)
});