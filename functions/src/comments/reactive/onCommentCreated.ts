import * as functions from "firebase-functions";
import { IComment } from "../models/models";

const uglyWords=["fuck","bitch","persun"]

const onCommentCreated = functions.firestore
  .document("comments/{commentId}")
  .onCreate((snapshot, context) => {

    var comment = <IComment>snapshot.data();

    var commentDesc:string = comment.desc;

    var star="";
    uglyWords.forEach(word => {
      if(commentDesc.includes(word)){
        for (let index = 0; index < word.length; index++) {
          star += "*";          
        }

        commentDesc = commentDesc.replace(new RegExp(word, "g"), star);
        return snapshot.ref.update({desc:commentDesc});
      }
      return null;
    })

    const Comment = snapshot.data();
    console.log("Created new Comment", Comment);
    return null;
  });

export default onCommentCreated;