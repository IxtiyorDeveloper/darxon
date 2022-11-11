import { Schema, model } from "mongoose";

const objectSchema = new Schema(
  {
    Nomi: { type: "string", required: true },
    Ummumiy: { type: "string", required: true },
    Bino: { type: "string" },
    QurilishniBoshlanishSanasi: { type: "string", required: true },
    QurilishniBitishSanasi: { type: "string", required: true },
    Tip: { type: Number, required: true },
  },
  { timestamps: true }
);

export default model("Object", objectSchema);
