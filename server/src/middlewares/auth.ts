import config from "../utils/config";

const auth = (req: any, res: any, next: any) => {
  const { apiKey } = config;
  if (req.headers["x-api-key"] !== apiKey) {
    res.status(401).json({ message: "Not authorized" });
  } else {
    next();
  }
};

export default auth;
