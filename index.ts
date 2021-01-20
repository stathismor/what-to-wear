import express, { Application, Request, Response, NextFunction } from 'express';
import { getWhatToWear } from "./stylist";

const app: Application = express();
const PORT = 8000;

app.get("/", async (_req: Request, res: Response, _next: NextFunction) => {
    const whatToWear = await getWhatToWear();
    res.send(whatToWear);
});

app.listen(PORT, () => {
    console.log(`⚡️[server]: Server is running at http://localhost:${PORT}`);
});
