import { defineMongooseModel } from "#nuxt/mongoose";

export const User = defineMongooseModel({
  name: "User",
  schema: {
    username: {
      type: String,
      required: true,
      unique: true,
      min: 3,
      max: 20,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    img: {
      type: String,
    },
    isAdmin: {
      type: Boolean,
    },
    isActive: {
      type: Boolean,
    },
    phone: {
      type: String,
    },
    address: {
      type: String,
    },
  },
  options: { timestamps: true },
});

export const Product = defineMongooseModel({
  name: "Product",
  schema: {
    title: {
      type: String,
      required: true,
      unique: true,
    },
    desc: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
      min: 0,
    },
    stock: {
      type: Number,
      required: true,
      min: 0,
    },
    img: {
      type: String,
    },
    color: {
      type: String,
    },
    size: {
      type: String,
    },
  },
  options: { timestamps: true },
});
