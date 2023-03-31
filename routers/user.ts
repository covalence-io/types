import { Router } from 'express';

export default function users() {
    const router = Router();

    router
        .get('/', (req, res, next) => {
            res.json(req.user);
        })
        .post(['/', '/:id'], (req, res, next) => {
            const params = req.params;
            const id = params.id;
            const queryParams = req.query;

        });

    return router;
}