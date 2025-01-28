import Data from "../model/fetch.model.js";

export const createUser = async (req, res) => {

    try {
        const { name, age, email, job } = req.body;

        if (!name || !age || !email || !job) {
            return res.status(400).json({ error: "fill all the fields" })
        }

        const user = new Data({
            name,
            age,
            email,
            job,
        })

        if (user) {
            await user.save();

            res.status(201).json({
                _id: user._id,
                name: user.name,
                age: user.age,
                email: user.email,
                job: email.job,
            })
        }
    } catch (error) {
        res.status(500).json({ error: "Internal Server error in Create Function" });
        console.log("Create error");
    }
}

export const fetch = async (req, res) => {

    // const { fetch: name } = req.params;

    try {
        const User = await Data.find().limit(1000);

        res.status(200).json(User)
    } catch (error) {

        console.log("error in fetch", error)

    }

}