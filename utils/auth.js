// authentication middleware
import bcrypt from 'bcryptjs';

// dummy data
const users = [
  {
    id: 1,
    username: 'john',
    password: '$2b$10$Rscg.0zwfA8tBwnsrpElxOHkfvq3rtY8HvFrRD68CgIbvvFjQZd8i' // bcrypt hashed password for 'password'
  }
]

