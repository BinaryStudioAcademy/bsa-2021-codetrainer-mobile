import express from 'express';
const app = express();

app.use(express.urlencoded({ extended: true }));

app.use(express.json());

const router = express.Router();
app.use(router);


app.listen(5001, () => {
    console.info(`Server is running on port 5001`);
});