import { serverHttp } from "./app";

const PORT = process.env.PORT;

serverHttp.listen(PORT, () => console.log(`Running on port ${PORT}`));
