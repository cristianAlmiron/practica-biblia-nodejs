const { Router } = require('express');

module.exports = function ({ IdeaController }) {
    const router = Router();
    router.get("/:ideaId", IdeaController.get);
    router.get("/", IdeaController.getAll);
    router.get("/:userId/all", IdeaController.getUserIdeas);
    router.patch("/:ideaId", IdeaController.update);
    router.delete("/:ideaId", IdeaController.delete);
    router.post(":ideaId/upVote", IdeaController.upVoteIdea);
    router.post(":ideaId/downVote", IdeaController.downVoteIdea);
    return router;
}