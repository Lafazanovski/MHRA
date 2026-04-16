import { auth, googleProvider } from "@/lib/firebase";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

const SignUpComponent = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLogin, setIsLogin] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

    useEffect(() => {
      const unsubscribe = onAuthStateChanged(auth, (user) => {
        if (user) {
          router.push("/userDashboard");
        }
      });
      return () => unsubscribe(); 
    }, [router]);

  const handleEmailSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    try {
      if (isLogin) {
        await signInWithEmailAndPassword(auth, email, password);
      } else {
        await createUserWithEmailAndPassword(auth, email, password);
      }
      router.push("/userDashboard");
    } catch (err: unknown) {
      if (err instanceof Error) {
        setError(err.message);
      }
    }
  };

  const handleGoogleSignUp = async () => {
    setError("");
    try {
      await signInWithPopup(auth, googleProvider);
      router.push("/userDashboard");
    } catch (err: unknown) {
      if (err instanceof Error) {
        setError(err.message);
      }
    }
  };

  return (
    <>
      <div className="signUpSection">
        <div className="signUpContainer wrapper">
          {/* Sign up Div */}
          <div className="signUpFormDiv">
            <h2>{isLogin ? "Најави се" : "Креирај профил"}</h2>

            {error && <p className="signUpError">{error}</p>}

            <form onSubmit={handleEmailSubmit} className="signUpForm">
              {/* Email */}
              <div className="signUpInputDiv">
                <label htmlFor="email">Е-маил</label>
                <input
                  type="email"
                  id="email"
                  placeholder="Емаил"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              {/* Password */}
              <div className="signUpInputDiv">
                <label htmlFor="password">Лозинка</label>
                <div className="passwordInputWrapper">
                  <input
                    type={showPassword ? "text" : "password"} // ← менува тип
                    id="password"
                    placeholder="Внеси лозинка"
                    className="inputPasswordField"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                  <button
                    type="button" 
                    onClick={() => setShowPassword(!showPassword)}
                    className="showPasswordBtn"
                  >
                    {showPassword ? "👁️" : "👁️‍🗨️"}
                  </button>
                </div>
              </div>
              <button type="submit" className="primaryButton SignUpButton">
                Зачлени се
              </button>
            </form>
            {/* Google */}
            <div className="signUpWithGoogleDiv">
              <button
                onClick={handleGoogleSignUp}
                className="signUpWithGoogleButton"
              >
                Продолжи со Google
              </button>
              <p className="signUpToggle">
                {isLogin ? "Немаш профил?" : "Веќе имаш профил?"}
                <button
                  onClick={() => setIsLogin(!isLogin)}
                  className="signUpToggleBtn"
                >
                  {isLogin ? "Регистрирај се" : "Најави се"}
                </button>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUpComponent;
