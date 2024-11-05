// const mongoose = require('mongoose');

// const DoctorSchema = new mongoose.Schema({
//     name: { type: String, required: false },
//     qualification: { type: String, required: false },
//     gender: { type: String, required: false },
//     profileImage: { type: String, required: false },
//     signatureImage: { type: String, required: false },
//     profilePublicId: { type: String, required: false },
//     signaturePublicId: { type: String, required: false },
//     specialtyType: { type: String, required: false },
//     workOn: { type: String, required: false },
//     workingTime: { type: String, required: false },
//     checkUpTime: { type: String, required: false },
//     breakTime: { type: String, required: false },
//     experience: { type: String, required: false },
//     phoneNumber: { type: String, required: false },
//     age: { type: String, required: false },
//     email: { type: String, required: false, unique: false },
//     country: { type: String, required: false },
//     state: { type: String, required: false },
//     city: { type: String, required: false },
//     zipCode: { type: String, required: false },
//     doctorAddress: { type: String, required: false },
//     description: { type: String, required: false },
//     onlineConsultationRate: { type: String, required: false },
//     currentHospital: { type: mongoose.Schema.Types.ObjectId, ref: 'Hospital', required: false },
//     hospital: { type: mongoose.Schema.Types.ObjectId, ref: 'Hospital', required: false },
//     hospitalAddress: { type: mongoose.Schema.Types.ObjectId, ref: 'Hospital', required: false },
//     hospitalWebsiteLink: { type: String, required: false },
//     emergencyPhoneNumber: { type: String, required: false },
//     password: { type: String, required: false },
// });

// module.exports = mongoose.model('Doctor', DoctorSchema);


const mongoose = require('mongoose');

const DoctorSchema = new mongoose.Schema({
    name: { type: String, required: false },
    qualification: { type: String, required: false },
    gender: { type: String, required: false },
    profileImage: { type: String, required: false },
    signatureImage: { type: String, required: false },
    profilePublicId: { type: String, required: false },
    signaturePublicId: { type: String, required: false },
    specialtyType: { type: String, required: false },
    workOn: { type: String, required: false },
    workingTime: { type: String, required: false }, // e.g., "09:00 AM - 05:00 PM"
    checkUpTime: { type: String, required: false }, // Duration in minutes, e.g., 30
    breakTime: { type: String, required: false }, // e.g., "12:00 PM - 01:00 PM, 03:00 PM - 03:30 PM"
    experience: { type: String, required: false },
    phoneNumber: { type: String, required: false },
    age: { type: String, required: false },
    email: { type: String, required: false, unique: false },
    country: { type: String, required: false },
    state: { type: String, required: false },
    city: { type: String, required: false },
    zipCode: { type: String, required: false },
    doctorAddress: { type: String, required: false },
    description: { type: String, required: false },
    onlineConsultationRate: { type: Number, required: false }, // Changed to Number for easier calculations

    // currentHospital: { type: mongoose.Schema.Types.ObjectId, ref: 'Hospital', required: false },
    // hospital: { type: mongoose.Schema.Types.ObjectId, ref: 'Hospital', required: false },
    // hospitalAddress: { type: mongoose.Schema.Types.ObjectId, ref: 'Hospital', required: false },

    currentHospital: { type: String, required: false},
    hospital: { type: String, required: false },
    hospitalAddress: { type: String, required: false },

    hospitalWebsiteLink: { type: String, required: false },
    emergencyPhoneNumber: { type: String, required: false },
    password: { type: String, required: false },
    scheduledAppointments: [{
        appointmentId: { type: mongoose.Schema.Types.ObjectId, ref: 'Appointment' },
        appointmentDate: { type: Date, required: false },
        appointmentTime: { type: String, required: false },
    }],
});

// Add indexes for optimized queries
DoctorSchema.index({ email: 1 });

const Doctor = mongoose.model('Doctor', DoctorSchema);
module.exports = Doctor;
