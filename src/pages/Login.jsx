import React, { useEffect } from "react";
import Header from "../components/Header";
import Card from "../components/Card";
import Input from "../components/Input";
import Button from "../components/Button";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";

export default function Login() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="mx-4 splotch">
      <Header />
      <main className="mx-auto">
        <Card>
          <form className="space-y-4">
            <Input
              name={"Email"}
              id={"email"}
              placeholder={"name@domain.com"}
            />
            <Input
              id={"password"}
              name={"Password"}
              type={"password"}
              placeholder={"**********"}
              required={true}
            />
            <div className="flex items-center justify-center ">
              <div className="flex flex-col items-center space-y-1">
                <Button>Login</Button>

                <p>Forgot your password?</p>
                <p>
                  Not a member?{" "}
                  <Link to="/register" className="text-blue-600">
                    Register
                  </Link>
                </p>
              </div>
            </div>
          </form>
        </Card>
        <div className="splotch h-96 w-auto float-animation-reversed"></div>
      </main>
      <Footer />
    </div>
  );
}
