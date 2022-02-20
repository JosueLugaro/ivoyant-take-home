import express, { Application, Request, Response } from 'express';

const app: Application = express();

const jsonDelay = 5000;
const xmlDelay = 10000

const jsonObj = {
    "person": [

        {

            "id": 10,

            "firstName": "John",

            "lastName": "Doe"

        },

        {

            "id": 5,

            "firstName": "Jack",

            "lastName": "Doe"

        },

        {

            "id": 7,

            "firstName": "James",

            "lastName": "Doe"

        }

    ]
}

const data = `<?xml version="1.0" encoding="UTF-8" ?>
                <persons>
                    <person>

                        <id>3</id>

                        <firstName>Jen</firstName>

                        <lastName>Doe</lastName>

                    </person>

                    <person>

                        <id>6</id>

                        <firstName>Stephanie</firstName>

                        <lastName>Joe</lastName>

                    </person>

                    <person>

                        <id>1</id>

                        <firstName>Victoria</firstName>

                        <lastName>Doe</lastName>

                    </person>
                </persons>
    `;

app.get('/api/json', (req: Request, res: Response) => {
    setTimeout((() => {
        res.json(jsonObj);
    }), jsonDelay);
});

app.get('/api/xml', (req: Request, res: Response) => {
    setTimeout((() => {
        res.type("application/xml");
        res.send(data);
    }), xmlDelay);
});

app.listen(5000, () => console.log("server is running"));
