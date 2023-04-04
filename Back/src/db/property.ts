const mongoose = require('mongoose')

const PropertySchema = new mongoose.Schema({

  title: {type: String,required: [true, 'Please provide title']},
  project: {type: String},
  developer: {type: String,required: [true, 'Please provide developer']},
  owner: {
    name:{type: String,required: [true, 'Please provide owner\'s name']},
    phone_number:{type: String,required: [true, 'Please provide owner\'s phone_number'],trim: true}
    },

  type: {type: String,enum: ['studio', 'apartment', 'villa','duplex','twin-house'],default: 'apartment'},
  city: {type: String,required: [true, 'Please provide city']},
  size: {type: Number,required: [true, 'Please provide propertiy size']},
  price: {type: Number,required: [true, 'Please provide price']},
  bathrooms: {type: Number,required: [true, 'Please provide bathrooms number'],trim: true},
  bedrooms: {type: Number,required: [true, 'Please provide bedrooms number'],trim: true},
  details: {type: String},
  delivery_date: {type: Date},
  images :{type: Array}
})

export const PropertyModel = mongoose.model('Property', PropertySchema)

export const getProperties = () => PropertyModel.find()
export const getPropertyByID = (id: string) => PropertyModel.findById(id);
export const deletePropertyByID = (id: string) => PropertyModel.deleteOne({'_id':id});
export const addProperty = (values: Record<string,any>) => new PropertyModel(values).save().then( (property: { toObject: () => any; }) => property.toObject() );
export const editProperty = (id: string,values: Record<string,any>) => PropertyModel.findByIdAndUpdate(id,values);