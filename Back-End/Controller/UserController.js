import prisma from "../DB/db.config.js"

export const createUser = async (req, res) => {
    const { Username, Refereename, Useremail, Refereeemail } = req.body
    const findUser = await prisma.referral.findUnique({
        where: {
            Refereeemail: Refereeemail
        }
    })

    if (findUser) {
        return res.json({ status: 400, message: "Email Already Referred, enter any other user." })
    }

    const newUser = await prisma.referral.create({
        data: {
            Username: Username,
            Refereename: Refereename,
            Useremail: Useremail,
            Refereeemail: Refereeemail
        }
    })
    return res.json({ status: 200, data: newUser, msg: "Referral sent." })
}