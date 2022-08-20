const mongoose = require("mongoose");
const Schema = mongoose.Schema;

var CustomersSchema = new Schema({
  name: {
    type: String,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  roomNum: {
    type: String,
    required: true,
  }
},
  { timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' } },
  { strict: false }
);

const Customers = mongoose.model("Customers", CustomersSchema, "Customers");

const findCustomers = async (email) =>
  new Promise((resolve, reject) => {
    Customers.find({ email: email }, { _id: 0 })
      .then((client) => resolve(client))
      .catch((err) => reject(err));
  });

const addCustomer = async ({ emailId, ...rest } = {}) =>
  new Promise((resolve, reject) => {   
    Customers.updateOne(
      { email: emailId },
      {
        $set: {
          ...rest.customer
        }
      },
      { upsert: true }
    ).then((client) => resolve(client))
      .catch((err) => reject(err));
  });

module.exports = {
  Customers,
  findCustomers,
  addCustomer
}
