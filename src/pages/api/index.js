/* eslint-disable no-undef */

import fs from "fs";
import path from "path";
import { ApolloServer } from "@apollo/server";
import { InMemoryLRUCache } from "@apollo/utils.keyvaluecache";
import { startServerAndCreateNextHandler } from "@as-integrations/next";
import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import { mergeTypeDefs, mergeResolvers } from "@graphql-tools/merge";
import absoluteUrl from "next-absolute-url";

import { viewerDefs } from "./viewer/viewer.graphql.js";

import { domainDefs } from "./domain/domain.graphql.js";
import { coranDefs } from "./coran/coran.graphql.js";
import { tabletDefs } from "./tablet/tablet.graphql.js";
import { cardDefs } from "./card/card.graphql.js";
import { bookingDefs } from "./booking/booking.graphql.js";
import { cartDefs } from "./cart/cart.graphql.js";

import BookingModel from "./booking/Booking.model";
import DomainModel from "./domain/Domain.model";
import CoranModel from "./coran/Coran.model";
import TabletModel from "./tablet/Tablet.model";
import CardModel from "./card/Card.model";
import ViewerModel from "./viewer/Viewer.model";
import CartModel from "./cart/Cart.model";

import viewerResolver from "./viewer/viewer.resolver";
import domainResolver from "./domain/domain.resolver";
import cardResolver from "./card/card.resolver";
import coranResolver from "./coran/coran.resolver";
import tabletResolver from "./tablet/tablet.resolver";
import cartResolver from "./cart/cart.resolver";
import bookingResolver from "./booking/booking.resolver";
import _lodash from "lodash";
import { v2 as cloudinary } from "cloudinary";
import connectMongoose from "@/lib/mongoose-db";
import { Mode} from 'mongoose'
//import runCoranDb from './coran/database'
import { createSourasSectionsFile } from "@/lib/fs-tools";
import slug from "slug";
import moment from "moment";

import {
  createToken,
  getDatePlusOneWeek,
  getRefreshToken,
  hashPassword,
  verifyPassword,
  storeRefreshToken,
  oneWeek,
  deleteToken,
  sortSouras,
} from "./util";

import { createHundredLiis, createTenLiis, genRandomFlag } from "./tools";

const typesArray = [
  viewerDefs,

  domainDefs,
  coranDefs,
  tabletDefs,
  cardDefs,
  bookingDefs,
  cartDefs,
];
const resolversArray = [
  viewerResolver,

  domainResolver,
  coranResolver,
  tabletResolver,
  cardResolver,
  bookingResolver,
  cartResolver,
];

// eslint-disable-next-line new-cap
const typeDefs = mergeTypeDefs(typesArray);
const resolvers = mergeResolvers(resolversArray);
const dynamoDbClient = new DynamoDBClient({ region: "eu-central-1" });
//const parseOptions = { noLocation: true };
const apolloServer = new ApolloServer({
  typeDefs,
  resolvers,
  // eslint-disable-next-line no-undef
  introspection: process.env.NODE_ENV !== "production",
  plugins: [
    {
      async serverWillStart() {
        console.log("Server starting up!");
      },
    },
    {
      async didResolveSource() {
        console.log("didResolveSource!");
      },
    },
    {
      async parsingDidStart() {
        console.log("!parsingDidStart");
      },
    },
    {
      async validationDidStart() {
        console.log("!parsingDidStart");
      },
    },
    {
      async didResolveOperation() {
        console.log("validationDidStart");
      },
    },
    {
      async responseForOperation() {
        console.log("!responseForOperation");
      },
    },
    {
      async executionDidStart() {
        console.log("!executeDidStart");
      },
    },
    {
      async didEncounterErrors(error) {
        console.log({ error });
      },
    },
    {
      async willSendResponse(response) {
        console.log({ response });
      },
    },

    //ApolloServerPluginCacheControl({ calculateHttpHeaders: 'if-cacheable' })
  ],
  cache: new InMemoryLRUCache({ ttl: 300_000 }),
  /* plugins: [responseCachePlugin()],
   */
  includeStacktraceInErrorResponses: true,
});
/* 
export const config = {
  api: {
    bodyParser: false,
  },
};
 */
export default startServerAndCreateNextHandler(apolloServer, {
  context: async (req, res) => {
    const stripe = require("stripe")(process.env.STRIPE_TEST_S_KEY);
    cloudinary.config({
      cloud_name: process.env.CLOUDINARY_NAME,
      api_key: process.env.CLOUDINARY_API_KEY,
      api_secret: process.env.CLOUDINARY_API_SECRET,
      secure: true,
    });
    const mongoose = await connectMongoose();
    return {
      path,
      fs,
      _lodash,
      createSourasSectionsFile,
      absoluteUrl,
      genRandomFlag,
      cloudinary,
      slug,
      DomainModel,
      CoranModel,
      TabletModel,
      CardModel,
      ViewerModel,
      BookingModel,
      CartModel,
      req,
      res,
      mongoose,
      dynamoDbClient,
      atlasUrl: process.env.NEXT_PUBLIC_DB_ATLAS,
      createToken,
      getDatePlusOneWeek,
      getRefreshToken,
      storeRefreshToken,
      hashPassword,
      verifyPassword,
      deleteToken,
      sortSouras,
      oneWeek,
      moment,
      stripe,
    };
  },
});
//export default graphqlHandler.createHandler({ path: '/api' });
