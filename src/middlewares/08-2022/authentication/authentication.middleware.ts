// export const authenticateMiddleware = async (
//     req: express.Request,
//     res: express.Response,
//     next: express.NextFunction
// ) => {
//     try {
//         const signature = req.get('signature');
//         const userWalletAddress = (req.get('publicAddress') || "");
//         if (!signature || !userWalletAddress) return res.status(403).json("Authorization required");
//         const session = await sessionManager.getSessionByWalletAddressAsync(userWalletAddress);
//         if (!session) throw {message: "Session not found"};
//         session.setSignature(signature);
//         if (!await session.isAuthenticatedAsync(userWalletAddress)) throw {message: "Invalid session. Please refresh your browser."};
//         req.session = session;
//         return next();
//     } catch (e) {
//         console.log(e);
//         return res.status(403).json({error: {message: e.message || "Authorization required"}});
//     }
// };

// export default authenticateMiddleware;
