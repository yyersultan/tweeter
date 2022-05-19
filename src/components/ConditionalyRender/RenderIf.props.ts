import React from "react";
import { JsxElement } from "typescript";

export interface RenderIfProps {
  children: React.ReactElement,
  isTrue: boolean
}