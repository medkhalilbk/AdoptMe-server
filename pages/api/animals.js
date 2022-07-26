// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
    res.status(200).json({ animal: 'lina', category: 'cat', sex: "F", age: '12' })
}
