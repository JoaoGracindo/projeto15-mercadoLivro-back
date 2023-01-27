import { sessionsCollection } from "../database.js";

export async function authUserMiddleware(req, res, next) {
    const token = req.headers.authorization?.replace('Bearer ', '');
    if (!token) return res.status(422).send("Você não tem autorização");

    try {
        const session = await sessionsCollection.findOne({ token });
        if (!session) return res.status(422).send("Você não tem autorização");

        res.locals.session = session;

        next()

    } catch (err) {
        return res.status(500).send(err);
    }
}