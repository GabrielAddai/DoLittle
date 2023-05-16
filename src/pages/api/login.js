import jwt from 'jsonwebtoken';



const secret = process.env.JWT_SECRET;

export default async function handler(req, res) {
    if (req.method !== 'POST') {
      return res.status(405).json({ message: 'Method not allowed' })
    }
  
    const { email, password } = req.body
  
    // Authenticate user
    const user = await authenticateUser(email, password)
  

    if(user){
      //JWT token
      const token = jwt.sign({ userId: user.id, username: user.email }, secret, { expiresIn: '1d' })
  
      res.status(200).json({ token })
    } else {
      res.status(401).json({ message: 'Invalid credentials' })
    }
  }