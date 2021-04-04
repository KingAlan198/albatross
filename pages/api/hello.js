// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default (req, res) => {
  res.status(200).json({
    "data": [
      {
        "name": "team 1",
        "score": "100"
      },
      {
        "name": "team 2",
        "score": "120"
      },
      {
        "name": "team 3",
        "score": "60"
      }
    ]
  })
}
