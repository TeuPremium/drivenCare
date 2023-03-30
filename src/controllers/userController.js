import db from "../config/databaseConfig.js"

async function create (req, res){
    try{
    const {username, email, password} = req.body
    console.log(username)

    const create = await db.query(`
        INSERT INTO users
        (username, email, password)
        VALUES ($1,$2,$3)
        `, [username, email]
    )

    // const create = await db.query(`
    // select * from users
    // `)
    console.log(create.rows)
    return res.sendStatus(201)
    }catch(error){
        return res.status(500).send(error.message)
    }
}





export default{
    create
}