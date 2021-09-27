let _userService = null;
class CommentController {
    constructor({ CommentService }) {
        _commentService = CommentService;
    }

    async get(req, res) {
        const { commentId } = req.params;
        const comment = await _commentService.get(commentId);
        return res.send(user);
    }

    async getAll(req, res) {
        const comments = await _commentService.getAll();
        return res.send(comments)
    }


    async update(req, res) {
        const { body } = req;
        const { commentID } = req.params;
        const updatedComment = await _commentService.update(commentId, body);
        return res.send(updatedComment);
    }

    async delete(req, res) {
        const { commentID } = req.params;
        const deletedComment = await _commentService.delete(commentId);
        return res.send(deletedComment);
    }

    async getIdeaComments(req, res) {
        const commentId = req.params;
        const comments = _commentService.getIdeasComments(ideaId);
        res.send(comments);
    }

    async createComment(req, res) {
        const { body } = req;
        const { ideaId } = req.params;
        const createdComment = await _commentService.createComment(body, ideaId);
        return res.status(201).send(createdComment);
    }
}

module.exports = CommentController;