import axios from "axios";
import { GoogleLogin } from "@react-oauth/google";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const handleLoginSuccess = async (credentialResponse) => {
    const idToken = credentialResponse.credential;
    console.log("idToken:", idToken);
    try {
      const res = await axios.post(
        "http://localhost:8080/auth/google",
        { token: idToken },
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );

      const jwt = res.data.jwt;
      localStorage.setItem("jwt", jwt);
      alert("로그인 성공!");

      const userRes = await axios.get("http://localhost:8080/user/info", {
        headers: {
          Authorization: `Bearer ${jwt}`,
        },
      });

      console.log("로그인한 유저:", userRes.data);

      navigate("/main"); // 페이지 이동
    } catch (error) {
      console.error("로그인 처리 중 에러:", error);
    }
  };

  return (
    <GoogleLogin
      ux_mode="popup"
      onSuccess={handleLoginSuccess}
      onError={() => console.log("구글 로그인 실패")}
    />
  );
}

export default Login;
