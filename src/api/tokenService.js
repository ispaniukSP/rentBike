    function setRefreshToken(token){
        localStorage.setItem('refresh_token', token);
    } 

    function setAccessToken(token){
        localStorage.setItem('access_token', token);
    }

    function getAccessToken(){
        return localStorage.getItem('access_token')
    }
    
    function getRefreshToken(){
        return localStorage.getItem('refresh_token')
    }

    function clearToken(){
        localStorage.removeItem('access_token');
        localStorage.removeItem('refresh_token');
    }
    
export default {
    setAccessToken,
    setRefreshToken,
    getAccessToken,
    getRefreshToken,
    clearToken, 
}