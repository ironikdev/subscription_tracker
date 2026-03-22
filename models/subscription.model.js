/*
 import mongoose from 'mongoose';
const subscriptionSchema = new mongoose.Schema({
    name: { type: String,
           required: [true,'Subcription Name is required'],
    trim: true,
    minlength: 5,
    maxlength: 100,},

    price:{
        type: Number,
        required: [true,'Subcription Price is required'],
        min:[0,'Price must be greater than 0'],
    },

    currency: {
        type: String,
        enum: ['EUR', 'USD', 'INR'],
        default: 'USD',
    },

    frequency:{
        type:String,
        enum:['daily','weekly','monthly'],
    },

    catagory:{
        type:String,
        enum:['Sports','news','entertainment','lifestyles','technology','fashion','others'],
        required: [true,'Subcription  is required'],
    },
    paymentMethod:{
        type:String,
        required:true,
        trim:true,
    },
    status:{
        type:String,
        enum:['active','cancled','expired'],
        default:'active'
    },
    StartDate:{
        type:Date,
        required:true,
        validate:{
            validator:(value) => value <= new Date(),
            message:'Start date must be from the past',

        }
    },
    renewalDate:{
        type:Date,
        validate:{
            validator: function(value) {
                return value > this.startDate;
            },
            message:' renewl date must be after the start date',

        }


    },
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',
        required:[true,'User is required'],
        index:true,
    }
}, {timestamps:true});

//auto calculate reneawl sate if missing
subscriptionSchema.pre('save',function(next){
    if(!this.renewalDate){
        const renewalPeriods={
            daily:1,
            weekly:7,
            monthly:30,
            yearly:365,
        };

        this.renewalDate=new Date(this.StartDate);
        this.renewalDate.setDate(this.renewalDate.getDate()+ renewalPeriods[this.frequency]);
    }

    if(this.renewalDate < new Date()){
        this.status='expierd';
    }
    next();

});

const Subscription=mongoose.model('subscription',subscriptionSchema);

export default Subscription; */
import mongoose from 'mongoose';

const subscriptionSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Subscription Name is required'],
        trim: true,
        minlength: 5,
        maxlength: 100,
    },

    price: {
        type: Number,
        required: [true, 'Subscription Price is required'],
        min: [0, 'Price must be greater than 0'],
    },

    currency: {
        type: String,
        enum: ['EUR', 'USD', 'INR'],
        default: 'USD',
    },

    frequency: { // ✅ FIXED
        type: String,
        enum: ['daily', 'weekly', 'monthly'],
    },

    category: { // ✅ FIXED spelling
        type: String,
        enum: ['sports','news','entertainment','lifestyle','technology','fashion','others'],
        required: [true, 'Category is required'],
    },

    paymentMethod: {
        type: String,
        required: true,
        trim: true,
    },

    status: {
        type: String,
        enum: ['active', 'canceled', 'expired'],
        default: 'active',
    },

    StartDate: {
        type: Date,
        required: true,
        validate: {
            validator: (value) => value <= new Date(),
            message: 'Start date must be from the past',
        }
    },

    renewalDate: { // ✅ FIXED
        type: Date,
        validate: {
            validator: function(value) {
                return value > this.StartDate;
            },
            message: 'Renewal date must be after the start date',
        }
    },

    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: [true, 'User is required'],
        index: true,
    }

}, { timestamps: true });


// ✅ FIXED HOOK
subscriptionSchema.pre('save', function () {

    if (!this.renewalDate) {

        const renewalPeriods = {
            daily: 1,
            weekly: 7,
            monthly: 30,
            yearly: 365
        };

        this.renewalDate = new Date(this.StartDate);

        this.renewalDate.setDate(
            this.renewalDate.getDate() + renewalPeriods[this.frequency]
        );
    }

    if (this.renewalDate < new Date()) {
        this.status = 'expired';
    }
});

const Subscription = mongoose.model('Subscription', subscriptionSchema);

export default Subscription;