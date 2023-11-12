
import dbConnect from '../../lib/dbConnect';
import Post from '../../models/User';

export async function POST(request) {

    await dbConnect();

    const user = await User.create(request.body);
    
    res.status(201).json({ success: true, data: user });

}