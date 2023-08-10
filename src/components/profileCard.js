import {
    Card,
    CardBody,
    Image,
  } from "@nextui-org/react";
  import React from "react";
  
  export const ProfileCard = () => {
    return (
      <div className="flex flex-wrap justify-center">
        <Card
          shadow
          className="gradient text-white"
        >
          <CardBody className="flex flex-wrap flex-row gap-5 p-6 items-center justify-center">
            <Image
              src="https://picsum.photos/200/200"
              width={200}
              height={200}
              className="rounded-full"
            />
            <div className="space-y-2">
              <p>Name: Dharmendra Sharma</p>
              <p>Email: dharmen8980@gmail.com</p>
              <p>Semester: Fall</p>
              <p>Major: Computer Science</p>
              <p>Date: Aug 7, 2023</p>
            </div>
          </CardBody>
        </Card>
      </div>
    );
  };
  