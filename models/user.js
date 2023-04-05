const { Schema, model } = require('mongoose');

// Schema to create Student model
const userSchema = new Schema(
  {
    useername: {
      type: String,
      required: true,
      max_length: 50,
      
    },
    email: {
      type: String,
      required: true,
      max_length: 50,
    },
    thoughts: {
        
    },
    friends: {

    },
    assignments: [assignmentSchema],
  },
  {
    toJSON: {
      getters: true,
    },
  }
);

const User = model('user', userSchema);

module.exports = User;