import jwt from "jsonwebtoken";


export const generateToken = async (payload: any) => {
	return jwt.sign(payload, process.env.JWT_SECRET as string, {
		expiresIn: "1d",
	});
};
