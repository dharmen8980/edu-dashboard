import React from "react";
import {
  Tabs,
  Tab,
  Card,
  Modal,
  Button,
  CardBody,
  Table,
  CardFooter,
} from "@nextui-org/react";
import { TableData } from "@/components/tableData";
import { ProfileCard } from "@/components/profileCard";
import { AddUniversity } from "@/components/addUniversity";
import { Footer } from "@/components/footer";
const Home = () => {
  return (
    <>
      {" "}
      <main className="px-6 bg-slate-200 py-8">
        <div className="mt-8 mb-12">
          <ProfileCard />
        </div>
        <Tabs fullWidth size="lg" color="primary" variant="light">
          <Tab key="Tab1" title="University">
            <Card>
              <CardBody>
                <TableData />
              </CardBody>
              <CardFooter className="justify-end">
                <AddUniversity />
              </CardFooter>
            </Card>
          </Tab>
          <Tab key="Tab2" title="Test">
            <Card shadow>
              <CardBody>
                <TableData />
              </CardBody>
            </Card>
          </Tab>
        </Tabs>
      </main>
      <Footer />
    </>
  );
};

export default Home;
