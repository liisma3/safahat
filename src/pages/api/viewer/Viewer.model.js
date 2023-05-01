import mongoose from "mongoose";
import timeZone from "mongoose-timezone";

const Schema = mongoose.Schema;

//const geocoder = require('@/lib/nodeGeoCoder')

export const viewerSchema = Schema(
  {
    login: {
      type: String,
      trim: true,
      required: [true, "You must give a login "],
    },

    email: {
      type: String,
      trim: true,
      required: [true, "You must give an email address "],
    },
    password: {
      type: String,
      trim: true,
      required: [true, "You must give a password"],
      minlength: [4, "you must give at least 4 characters password length"],
    },
    stripe_account_id: {
      type: String,
      trim: true,
    },
    cardBack: {
      type: Number,
      default: 1,
    },
    stripe_seller: {
      type: String,
      trim: true,
    },
    stripe_link: {
      type: String,
      trim: true,
    },
    phone: {
      type: String,
      trim: true,
      required: false,
    },
    bio: String,
    avatar: {
      public_id: String,
      url: String,
    },
    flagAvatar: String,

    organisation: {
      type: String,
      trim: true,
      required: false,
    },
    role: [String],
    website: {
      type: String,
      trim: true,
      required: false,
    },
    instagram: String,
    liisCategories: [
      {
        title: String,
        description: String,
        price: Number,
      },
    ],
    orders: [
      {
        products: [
          {
            title: String,
            price: Number,
            promo: Number,
            quantity: Number,
          },
        ],
        quantity: Number,
        profileId: String,
        total: Number,
        delivery: {
          startDate: String,
          endDate: String,
        },
      },
    ],

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

    isAdmin: Boolean,
    cha3bi: {
      type: Number,
      default: 10,
    },
    walletId: String,
    productsPromoted: [String],
    discountProducts: [
      {
        title: String,
        stock: Number,
      },
    ],
    bookings: [
      {
        id: String,
        bookingStartDate: Date,
        bookingEndDate: Date,
      },
    ],
    selections: [String],
    products: [String],
    sales: Number,

    collaboratorpass: [
      {
        pass: String,
        flag: String,
      },
    ],
    liispass: [
      {
        pass: String,
        flag: String,
      },
    ],
    guestpass: [
      {
        pass: String,
        flag: String,
      },
    ],
    hundreddiscountspass: [
      {
        pass: String,
        flag: String,
      },
    ],
    discountProfiles: [
      {
        token: String,
        profileEmail: String,
        profileId: String,
        flag: String,
      },
    ],
    liismanagerProfiles: [
      {
        token: String,
        profileEmail: String,
        profileId: String,
        flag: String,
      },
    ],
    collaboratorProfiles: [
      {
        token: String,
        profileEmail: String,
        profileId: String,
        flag: String,
      },
    ],
    enrollmentAll: [
      {
        title: String,
        description: String,
        price: Number,
        image: {
          url: String,
          public_id: String,
        },
        max: Number,
        promo: Number,
        enrollmentStatus: [String],
        startDate: String,
        endDate: String,
      },
    ],

    coords: {
      long: Number,
      lat: Number,
    },
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

viewerSchema.plugin(timeZone);
export default mongoose.models
  ? mongoose.models.Viewer || mongoose.model("Viewer", viewerSchema)
  : mongoose.model("Viewer", viewerSchema);
