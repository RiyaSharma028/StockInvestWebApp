import {model} from "mongoose";
import {HoldingSchema} from "../Schemas/Holdings.Schems.js"

const holdingmodel = new model("holding" , HoldingSchema)

export default holdingmodel;