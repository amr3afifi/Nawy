const mongoose = require('mongoose')

const PropertySchema = new mongoose.Schema({

  title: {type: String,required: [true, 'Please provide title'],maxlength:200},
  project: {type: String,maxlength:70},
  developer: {type: String,required: [true, 'Please provide developer'],maxlength:70},
  owner: {
    name:{type: String,required: [true, 'Please provide owner\'s name'],maxlength:70},
    phone_number:{type: String,required: [true, 'Please provide owner\'s phone_number'],trim: true,minlength:5,maxlength:11}
    },

  type: {type: String,enum: ['studio', 'apartment', 'villa','duplex','twin-house','shop','mall','school'],default: 'apartment'},
  city: {type: String,required: [true, 'Please provide city'],maxlength:70},
  size: {type: Number,required: [true, 'Please provide propertiy size'],min:1,max:100000},
  price: {type: Number,required: [true, 'Please provide price'],min:1,max:1000000000000},
  bathrooms: {type: Number,required: [true, 'Please provide bathrooms number'],trim: true,min:0,max:20},
  bedrooms: {type: Number,required: [true, 'Please provide bedrooms number'],trim: true,min:0,max:30},
  details: {type: String,maxlength:300},
  delivery_date: {type: Date,min:'2023-01-01',max:'2050-01-01'},
  images :{type: Array,default:['https://images.pexels.com/photos/1500459/pexels-photo-1500459.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1']}
})

export const PropertyModel = mongoose.model('Property', PropertySchema)

export const getProperties = () => PropertyModel.find()
export const getPropertyByID = (id: string) => PropertyModel.findById(id);
export const deletePropertyByID = (id: string) => PropertyModel.deleteOne({'_id':id});
export const addProperty = (values: Record<string,any>) => new PropertyModel(values).save().then( (property: { toObject: () => any; }) => property.toObject() );
export const editProperty = (id: string,values: Record<string,any>) => PropertyModel.findByIdAndUpdate(id,values);