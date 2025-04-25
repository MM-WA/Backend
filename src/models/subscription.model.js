import mongoose, { Schema } from "mongoose";

const subscriptionSchema = new Schema(
  {
    channal: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    subscriber: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  { timestamps: true }
);

const Subscription = mongoose.model("Subscription", subscriptionSchema);

export default Subscription;
