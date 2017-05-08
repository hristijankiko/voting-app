import mongoose from 'mongoose';
import bcrypt from 'bcrypt';
const SALT_WORK_FACTOR = 10;

let userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        index: {unique: true},
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true
    }
});

userSchema.pre('save', function(next) {
    let user = this;

    // Only hash if the password is modified or new
    if(!user.isModified('password')) return next();

    // Generate a salt
    bcrypt.genSalt(SALT_WORK_FACTOR, function(err, salt) {
        if(err) return next(err);

        // Hash the password along with the new salt
        bcrypt.hash(user.password, salt, function(err, hash) {
            if(err) return next(err);

            // Override the cleartext password with the hashed one
            user.password = hash;
            next();
        });
    });
});

userSchema.methods.comparePassword = function(candidatePassword, cb) {
    bcrypt.compare(candidatePassword, this.password, function(err, isMatch) {
        if(err) return cb(err);
        cb(null, isMatch);
    });
}

userSchema.methods.validPassword = function(candidatePassword) {
    bcrypt.compare(candidatePassword, this.password, function(err, isMatch) {
        if(err) return err;
        console.log(isMatch);
        return isMatch;
    });
    return true;
}

mongoose.model('User', userSchema);