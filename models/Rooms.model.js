const mongoose = require("mongoose");
const Schema = mongoose.Schema;

var RoomsSchema = new Schema(
  {
    roomNum: {
      type: String,
      required: true,
    },
    floor: {
      type: String,
      required: true,
    },
    people: {
      type: String,
      required: true,
    },
    rating: {
      type: String,
      required: true,
    },
    isAvailable: {
      type: Boolean,
      required: true,
    },

  },
  { timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' } },
  { strict: false }
);

const Rooms = mongoose.model("Rooms", RoomsSchema, "Rooms");

const getRooms = async () =>
  new Promise((resolve, reject) => {
    Rooms.find({ isAvailable: true }, { _id: 0 })
      .then((client) => resolve(client))
      .catch((err) => reject(err));
  });

const getRoom = async (roomNum, isAvailable) =>
  new Promise((resolve, reject) => {
    Rooms.findOne({ roomNum: roomNum, isAvailable: isAvailable }, { _id: 0 })
      .then((client) => resolve(client))
      .catch((err) => reject(err));
  });

const updateRoom = async ({ roomNumId, ...rest } = {}) =>
  new Promise((resolve, reject) => {
    Rooms.updateOne(
      { roomNum: roomNumId },
      {
        $set: {
          ...rest
        }
      },
      { upsert: true }
    ).then((client) => resolve(client))
      .catch((err) => reject(err));
  });

module.exports = {
  Rooms,
  getRooms,
  getRoom,
  updateRoom
}
