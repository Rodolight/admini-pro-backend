const { Schema, model } = require('mongoose');

const doctorSchema = Schema({
    name: {
        type: String,
        required: true
    },
    img: {
        type: String,
    },
    hospital: {
        required: true,
        type: Schema.Types.ObjectId,
        ref: 'Hospital'
    },
    user: {
        required: true,
        type: Schema.Types.ObjectId,
        ref: 'User'
    }
});

doctorSchema.method('toJSON', function() {
    const { __v, ...object } = this.toObject();
    return object;
});

module.exports = model('Doctor', doctorSchema);