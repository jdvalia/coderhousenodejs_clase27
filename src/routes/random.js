import { Router } from 'express'
const RandomRoutes = new Router();
import * as path from 'path';
import { fork } from 'child_process';

RandomRoutes.get("/:cantidad", (req, res) => {
    let cant = req.query.cantidad ?? 100000000;
    const proceso = fork("../../random/numeros.js");
    proceso.on("message", data => {
        res.status(200).json(data);
    });
    proceso.send(cant);
});

export default RandomRoutes 