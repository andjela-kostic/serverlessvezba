import createComment from "./comments/restful/createComment";
import getAllComments from "./comments/restful/getAllComments";
import onCommentCreated from "./comments/reactive/onCommentCreated";
import updateComment from "./comments/restful/updateComment";
import deleteComment from "./comments/restful/deleteComment";
import getAllUglyWords from "./comments/restful/getAllUglyWords";


exports.getAllComments = getAllComments;
exports.createComment = createComment;
exports.onCommentCreated = onCommentCreated;
exports.updateComment = updateComment;
exports.deleteComment = deleteComment;
exports.getAllUglyWords=getAllUglyWords;