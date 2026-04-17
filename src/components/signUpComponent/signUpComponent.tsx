import { auth, googleProvider } from "@/lib/firebase";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import { useRouter } from "next/router";
import { useEffect, useState, FormEvent } from "react";

const SignUpComponent = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLogin, setIsLogin] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
      if (!router.isReady) return;
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user && router.query.from !== "dashboard")  {
        router.push("/userDashboard");
      } else {
        setLoading(false);
      }
    });
    return () => unsubscribe();
  }, [router, router.isReady, router.query]);

  if (loading) return null;

  const handleEmailSubmit = async (e: FormEvent) => {
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
        googleProvider.setCustomParameters({ prompt: "select_account" });
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
          <div className="signUpBoxDiv">
            {/* Sign up Form Div  */}
            <div className="signUpFormDiv">
              {error && <p className="signUpError">{error}</p>}
              <h2>
                Најави се <span>или</span> Регистрирај се
              </h2>
              {/* Google */}
              <div className="signUpWithGoogleDiv">
                <button
                  onClick={handleGoogleSignUp}
                  className="signUpWithGoogleButton"
                >
                  Продолжи со Google
                </button>
                {/* Or */}
                <div className="orDiv">
                  <p>Или</p>
                </div>
                {/* Toggle Div */}
                <div className="toggleDiv">
                  <p className="signUpToggle">
                    {isLogin ? "Немаш профил?" : "Веќе имаш профил?"}
                    <button
                      onClick={() => setIsLogin(!isLogin)}
                      className="signUpToggleBtn"
                    >
                      {isLogin ? "Регистрирај се" : "Најави се"}
                    </button>
                  </p>
                <h3>{isLogin ? "Најави се:" : "Креирај нов профил:"}</h3>
                </div>
              </div>
              {/* Form */}
              <form onSubmit={handleEmailSubmit} className="signUpForm">
                <div className="signUpInputDiv">
                  {/* Email */}
                  <label htmlFor="email">e-маил</label>
                  <input
                    type="email"
                    id="email"
                    placeholder="mhra@primer.com"
                    className="emailInputField"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                {/* Password */}
                <div className="signUpInputDiv">
                  <label htmlFor="password">лозинка</label>
                  <div className="passwordInputWrapper">
                    <input
                      type={showPassword ? "text" : "password"}
                      id="password"
                      placeholder="внеси лозинка"
                      className="inputPasswordField"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="showPasswordBtn">
                      {showPassword ? "👁️" : "👁️‍🗨️"}
                    </button>
                  </div>
                </div>
                <button type="submit" className="primaryButton signUpButton continueWithMailButton">
                  Продолжи со овој email
                </button>
              </form>
            </div>
            {/* Checkbox div */}
            <div className="checkDiv">
              <p>
                Со кликнување на “Продолжжи со Google/Email“, се согласувате со
                нашите <span>Услови на користење</span> и{" "}
                <span>Политика за приватност</span>
              </p>
              {/* 1 */}
              <div className="mhraMemberDiv">
                <input type="checkbox" id="mhraMember" name="mhraMember" />
                <label htmlFor="mhraMember">Сакам да станам член на МАЧР</label>
              </div>
              {/* 2 */}
              <div className="mhraNotificationsDiv">
                <input
                  type="checkbox"
                  id="mhraNotifications"
                  name="mhraNotifications"
                />
                <label htmlFor="mhraMember">
                  Сакам редовно да добивам информации на е-маил
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUpComponent;
