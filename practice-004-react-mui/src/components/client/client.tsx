import axios from "axios";

import config from "../../utils/config";

const client = axios.create({ baseURL: `${config.baseUrl}${config.port}` });

export default client;
