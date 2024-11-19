import createRefresh from 'react-auth-kit/createRefresh';
import api from "../../src/api.js";

const refresh = createRefresh({
    interval: 10,
    refreshApiCallback: async (param) => {
        try {
            const response = await api.post("/auth/token/refresh/", param, {
                headers: {'Authorization': `Bearer ${param.authToken}`}
            })
            console.log("Refreshing")
            return {
                isSuccess: true,
                newAuthToken: response.data.access,
                newAuthTokenExpireIn: 10,
                newRefreshTokenExpiresIn: 60
            }
        }
        catch(error){
            console.error(error)
            return {
                isSuccess: false
            }
        }
    }
})

export default refresh;