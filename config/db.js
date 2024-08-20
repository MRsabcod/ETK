import pg from 'pg'

const pool=new pg.Pool({
    user:"etk_query_handler",
    host:"93.127.202.152",
    database:"etk",
    password:"Dolphin@7463",
    port: 5432
})
export default pool