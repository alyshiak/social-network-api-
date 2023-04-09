const router = require('express').Router();
const {
  getThoughts,
  getSingleThought,
  createThought,
  updateThought,
  deleteThought,
  addReaction,
  deleteReaction,

} = require('../../controllers/thoughtController');

router.route('/').get(getThoughts).post(createThought);

router.route('/:thoughtId').get(getSingleThought).delete(deleteThought);

router.route('/:thoughtId').get(getSingleThought).put(updateThought);

router.route('/:thoughtId/reactions').post(addReaction);

router.route('/:thoughtId/reactions/:reactionId').get(getSingleThought).delete(deleteReaction);



module.exports = router;