import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Image,
  Input,
  User,
} from "@nextui-org/react";
import React from "react";

const Profile = () => {
  return (
    <div className="flex flex-wrap justify-center">
      <Card
        shadow
        className="gradient text-white"
      >
        <CardBody className="flex flex-wrap flex-row gap-5 p-8 items-center">
          <Image
            src="https://picsum.photos/200/200"
            width={200}
            height={200}
            className="rounded-full"
          />
          <div className="space-y-2">
            <p>Name: Dharmendra Sharma</p>
            <p>Email: dharmen8980@gmail.com</p>
            <p>College: University of Louisiana at Monroe</p>
          </div>
        </CardBody>
      </Card>
    </div>
  );
};

export default Profile;
