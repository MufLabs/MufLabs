import { createServer } from "./server";
const app = createServer();
const PORT = 3000;
app.listen(PORT, () => {
    console.log();
    console.log("================================");
    console.log(`AIOS API listening on ${PORT}`);
    console.log("================================");
    console.log();
});
//# sourceMappingURL=main.js.map