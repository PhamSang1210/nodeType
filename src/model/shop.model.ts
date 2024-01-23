import { Schema, model, InferSchemaType } from "mongoose";

interface IShop {
    name: string;
    email: string;
    password: string;
}

const shopSchema = new Schema<IShop>({
    name: { type: String },
    email: { type: String },
    password: { type: String },
});

type shopSchema = InferSchemaType<typeof shopSchema>;

export default model<shopSchema>("shopSchema", shopSchema);
