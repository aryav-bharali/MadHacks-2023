import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true],
    unique: false,
    trim: true,
    maxlength: [40, 'Name cannot be more than 40 characters'],
  },
  email: {
    type: String,
    required: true,
    maxlength: [200, 'email cannot be more than 200 characters'],
  },
  password: {
    type: String,
    required: true,
    maxlength: [200, 'password cannot be more than 200 characters'],
  },
});

export default mongoose.models.User || mongoose.model('User', UserSchema);