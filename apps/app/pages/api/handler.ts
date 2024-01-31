import { NextApiRequest, NextApiResponse } from 'next';
 
export default function handler(
  request: NextApiRequest,
  response: NextApiResponse,
) {
  response.status(200).json({
    DATABASE_HOSTNAME: new URL(process.env.DATABASE_URL).hostname
  });
}
