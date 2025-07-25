import { ErrorRequestHandler } from 'express';

const ErrorRequestHandler: ErrorRequestHandler = (err, req, res, next) => {
    res.status(500).json({ error: err.message });
}

export default ErrorRequestHandler;