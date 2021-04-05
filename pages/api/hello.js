import dynamoDb from '../../lib/dynamodbUtils';

export default async function handler(req, res) {
  console.log("url")
  const { Item } = await dynamoDb.get({
    Key: {
      id: "23"
    }
  })

  console.log("item", JSON.stringify(Item.data))
  const temp = JSON.parse(Item.data)
  console.log("temp",temp)
  res.status(200).json(temp)
}
