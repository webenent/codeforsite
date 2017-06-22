const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userRecommendationSchema = new Schema({
  adid: {type: String, required: true, unique: true},
  averagerating: {type: Number, default: 0},
  recommendations: [
    {
      id: String,
      recommender:{
        adid: String,
        email: String,
        name: String,
        relation: String
      },
      rating: Number,
      comments: String,
      date: String,
      status: {type: String, default: 'Pending'},
      reminder: {type: Number, default: 0}
    }
  ],
});

const UserRecommendation = mongoose.model('userrecommendation', userRecommendationSchema);

module.exports = UserRecommendation;
