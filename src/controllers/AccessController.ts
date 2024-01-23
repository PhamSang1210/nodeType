import { Request, Response } from "express";

class AccessController {
    static register(req: Request, res: Response) {
        res.json("ok");
    }
}

export default AccessController;
