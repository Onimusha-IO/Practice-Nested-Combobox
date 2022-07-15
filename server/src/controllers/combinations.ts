import * as CombinationsModel from "../models/combinations";

const Combinations = async (req: any, res: any) => {
  const result = await CombinationsModel.getCombinations();
  if (result.succes) {
    res.status(200).json(result.data);
  } else {
    res.status(500).json({ error: result.error });
  }
};

export { Combinations };
