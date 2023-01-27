import React from "react";
import Header from "../components/Header";
import Card from "../components/Card";
import Input from "../components/Input";
import Button from "../components/Button";
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <div className="mx-4">
      <Header />
      <main>
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
      </main>
    </div>
  );
}
