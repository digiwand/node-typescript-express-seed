import express, { Application, Request, Response } from 'express';

// ==========================================================
//  Basic HTTP Server with an example GET endpoint
//
//  To utilize:
//      1. Generate an empty Node.js Project
//      2. Install ExpressJS as a dependency
//      3. Paste the below code into a file named `index.js`
//      4. Run `node index` in your terminal
//
// ==========================================================
const app: Application = express();
const port: Number = 3000;

app.get('/', (req: Request, res: Response) => {
	res.send('Hello World!');
});

app.listen(port, () => {
	console.log(`Basic HTTP Server listening at http://localhost:${port}`)
});