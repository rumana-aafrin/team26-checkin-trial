/* eslint-disable */
const express = require('express');
const router = express.Router();
const teams = require('./teams.router');
const teamMembersRouter = require('./teamMembers.router');
const checkinQuestionsRouter = require('./checkinQuestions.router');
const checkinResponsesRouter = require('./checkinResponses.router');

// Home route
router.get('/', (req, res) => {
  res.send('Welcome to the home page!');
});

// Include your teams router
router.use('/teams', teams);
router.use('/teamMembers', teamMembersRouter);
router.use('/checkinQuestions', checkinQuestionsRouter);
router.use('/checkinResponses', checkinResponsesRouter);

module.exports = router;
