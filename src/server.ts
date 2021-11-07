import { serverHttp } from "./app";

const PORT = process.env.PORT || 4000;

serverHttp.listen(PORT, () => console.log(`Running on port ${PORT}`));
