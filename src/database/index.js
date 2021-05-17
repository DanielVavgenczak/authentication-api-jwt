import mongoose from "mongoose";

class Database {
  constructor() {
    this.mongoConect();
  }

  mongoConect() {
    this.mongo = mongoose.connect(`${process.env.CONECT_DB}`, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }).then(res => console.log('Mongodb is running'))
      .catch(err => console.log('Mongodd is dont running', err))
  }
}

export default new Database();
