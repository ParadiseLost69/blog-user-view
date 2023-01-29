import React from "react";
import Button from "../components/Button";
import Card from "../components/Card";
import Header from "../components/Header";
import Input from "../components/Input";

export default function Register() {
  return (
    <div className="mx-4">
      <Header />
      <main className="polygon-scatter h-screen">
        <Card>
          <h1 className="text-4xl border-b-2 border-black my-2 pb-2 ">
            Register
          </h1>
          <form action="#">
            <Input
              type="email"
              id={"email"}
              name={"Email"}
              placeholder={"example@domain.com"}
            />
            <Input
              id={"password"}
              name={"Password"}
              type={"password"}
              placeholder={"******"}
            />
            <Input
              type={"password"}
              id={"confirmed_password"}
              name={"Confirm Password"}
              placeholder={"********"}
            />
            <Input
              id={"username"}
              name={"Username"}
              placeholder={"SirBiscuits"}
            />
            <Input
              id={"date of birth"}
              type="date"
              name={"Date of birth"}
              placeholder={"January 23"}
            />
            <div className="mt-4">
              <Button>Register</Button>
            </div>
          </form>
        </Card>
      </main>
    </div>
  );
}
