import mongoose from "mongoose";
import timeZone from "mongoose-timezone";
const Schema = mongoose.Schema;
export const GuestSchema = Schema(
  {
   
    token: {
      type: String,
      trim: true,
      required: [true, "You must give a token "],
    },

    password: {
      type: String,
      trim: true,
      required: [true, "You must give a password"],
      minlength: [4, "you must give at least 4 characters password length"],
    },

    flagAvatar: String,
    organisation: {
      type: String,
      trim: true,
      required: false,
    },
    instagram: String,
    messages: [
      {
        date: String,
        sender: String,
        product: String,
        token: String,
        rec: String,
        content: String,
      },
    ],
    events: [
      {
        id: String,
        title: String,
        content: String,
        allDay: Boolean,
        start: String,
        end: String,
        status: String,
        contact: String,
      },
    ],
    conversationFeed: [
      {
        sender: String,
        product: String,
        rep: String,
        messages: [
          {
            date: String,
            rec: String,
            content: String,
          },
        ],
      },
    ],
    cha3bi: {
      type: Number,
      default: 10,
    },
    tablets: [String],
    cards: [String],
    cardsValid: [String],
    tabletsValid: [String],
    waletId: String,
    productsPromoted: [String],
    followers: {
      [String]: {
        walletId: String,
        continent: String,
      },
    },
    bookings: [
      {
        id: String,
        bookingStartDate: Date,
        bookingEndDate: Date,
      },
    ],
    addressGeo: String,
    continent: String,
    rewards: [String],
  },
  {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    timestamps: true,
  }
);

guestSchema.plugin(timeZone);
export default mongoose.models
  ? mongoose.models.Guest || mongoose.model("Guest", guestSchema)
  : mongoose.model("Guest", guestSchema);
