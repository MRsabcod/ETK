import express from 'express'
import pool from '../config/db.js'
const custQueriesRouter = express.Router()
custQueriesRouter.get('/', async (req, res) => {
    try {
        const data=await pool.query('SELECT * FROM cust_queries ')
        res.status(200).send(data.rows)
    } catch (e) {
        console.error(e)

     }
})
custQueriesRouter.get('/:id', async (req, res) => {
    try {
        const {id}=req.params
        const data=await pool.query('SELECT * FROM cust_queries WHERE id=$1',[id])
        res.status(200).send(data.rows)
    } catch (e) {
        console.error(e)

     }
})
custQueriesRouter.post('/insert', async (req, res) => {
    const { email, company_name, phone_number, question } = req.body
    try {
       const newData= await pool.query('INSERT INTO cust_queries (email, company_name, phone_number, question) VALUES ($1, $2, $3, $4) RETURNING *', [email, company_name, phone_number, question])
        res.status(200).send({ rows:newData.rows[0],message: "Successfully added child" })
    } catch (err) {
        console.log(err)
        res.sendStatus(500)
    }
})
custQueriesRouter.put('/update/:id',async (req,res)=>{
    const {id}=req.params
    const {email,company_name,phone_number,question}=req.body
    try{
      await pool.query('UPDATE cust_queries SET email=$1,company_name=$2,phone_number=$3, question=$4 WHERE id=$5',[email, company_name, phone_number, question,id])
res.status(200).send('updated')
    }catch(e){
    console.error(e)
}}
)
export default custQueriesRouter