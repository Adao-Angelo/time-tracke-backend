import Express from "express";
import { router } from "./routers/index.router";

const app = Express();
const port = 2000;
app.use(router);
app.use(Express.json());

app.listen(port, () => {
  console.log(`Server running at port: ${port}`);
});
