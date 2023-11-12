import mongoose from 'mongoose'
import bcrypt from 'bcrypt'
import validator from 'validator'

const UserSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: [true, "Account already exists"],
    validate: [validator.isEmail, 'Please enter a valid email'],
    maxlength: [200, 'email cannot be more than 200 characters'],
  },
  password: {
    type: String,
    required: true,
    maxlength: [200, 'password cannot be more than 200 characters'],
    select: false, //dont send back password after request
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
});

// ENCRYPTION 
userSchema.pre('save', async function(next){
  if(!this.isModified('password')){
      next()
  }
  this.password = await bcrypt.hash(this.password, 10)
  next()
})

userSchema.methods.comparePassword = async function(enteredPassword){
  return await bcrypt.compare(enteredPassword, this.password)
}

export default mongoose.models.User || mongoose.model('User', UserSchema);