import db from "../../config/firestore.config";
import createRestuflFunction, { MethodEnum } from "../../utils/helpers";

const getAllUglyWords = createRestuflFunction({
  method: MethodEnum.GET,
  callback: async (req, res) => {
    try {
      const query = db.collection("ugly");
      const querySnapshot = await query.get();
      const data: { id: string; Comment: FirebaseFirestore.DocumentData }[] = [];
      querySnapshot.forEach((doc) =>
        data.push({
          id: doc.id,
          Comment: doc.data(),
        })
      );

      res.status(200).json({
        data,
      });
    } catch (err) {
      res.status(500).json({
        message: "Error",
        err,
      });
    }
  },
});

export default getAllUglyWords;

