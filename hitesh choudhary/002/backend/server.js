
import express from "express"

const app = express();

// app.get("/", (req, res) => {
//     res.send("Hello, world.")
// })

app.get("/api/smth", (req, res) => {
    const smth = [
        {
            id: 1,
            title: "This is the first title",
            description: "This is the first description"
        },
        {
            id: 2,
            title: "This is the second title",
            description: "This is the second description"
        },
        {
            id: 3,
            title: "This is the third title",
            description: "This is the third description"
        },
        {
            id: 4,
            title: "This is the fourth title",
            description: "This is the fourth description"
        },
        {
            id: 5,
            title: "This is the fifth title",
            description: "This is the fifth description"
        },
    ]
    res.send(smth);
})

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Server active at http://localhost:${port}`);
})

// Notes:
// https://jsonformatter.org/