module.exports=[83705,e=>e.a(async(t,n)=>{try{var i=await e.y("openai-f0ed28f090f94724");e.n(i),n()}catch(e){n(e)}},!0),55168,(e,t,n)=>{t.exports=e.x("pg-587764f78a6c7a9c",()=>require("pg-587764f78a6c7a9c"))},32692,(e,t,n)=>{let{Pool:i}=e.r(55168),r=e.g.pgPool||new i({connectionString:process.env.DATABASE_URL});t.exports={pool:r,query:(e,t)=>r.query(e,t)}},99030,e=>e.a(async(t,n)=>{try{var i=e.i(83705),r=t([i]);[i]=r.then?(await r)():r;let c=new i.default({apiKey:process.env.OPENAI_API_KEY});async function a(e){if(!Array.isArray(e)||0===e.length)throw Error("Please provide at least one text.");let t=e.filter(e=>"string"==typeof e&&e.trim().length>0);if(t.length!==e.length)throw Error("All inputs must contain valid text.");return(await c.embeddings.create({model:"text-embedding-3-small",input:t,encoding_format:"float"})).data.map(e=>e.embedding)}e.s(["f",0,a]),n()}catch(e){n(e)}},!1),74871,(e,t,n)=>{let i=e.r(32692);t.exports={searchSimilarChunks:async function(e,t=5,n=null){if(!Array.isArray(e)||1536!==e.length)throw Error("Invalid query embedding. Expected 1536 dimensions.");let r=`[${e.join(",")}]`,a=Math.min(Math.max(Number(t)||5,1),5);return(n?await i.query(`SELECT
          c.id,
          c.document_id,
          d.filename,
          c.content,
          c.start_token,
          c.end_token,
          1 - (c.embedding <=> $1::vector) AS similarity
       FROM chunks c
       JOIN documents d ON c.document_id = d.id
       WHERE c.document_id = $2
       ORDER BY c.embedding <=> $1::vector
       LIMIT $3`,[r,n,a]):await i.query(`SELECT
          c.id,
          c.document_id,
          d.filename,
          c.content,
          c.start_token,
          c.end_token,
          1 - (c.embedding <=> $1::vector) AS similarity
       FROM chunks c
       JOIN documents d ON c.document_id = d.id
       ORDER BY c.embedding <=> $1::vector
       LIMIT $2`,[r,a])).rows.map(e=>({...e,similarity:Number(e.similarity)}))}}}];

//# sourceMappingURL=%5Broot-of-the-server%5D__0gks5vbz21cfo._.js.map