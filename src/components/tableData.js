import React from "react";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  getKeyValue,
} from "@nextui-org/react";

const rows = [
  {
    key: "1",
    university: "University of Toronto",
    semester: "Fall 2024",
    fee: "100",
    username: "admin",
    password: "admin",
    status: "Pending",
  },
  {
    key: "2",
    university: "University of Toronto",
    semester: "Fall 2024",
    fee: "100",
    username: "admin",
    password: "admin",
    status: "Pending",
  },
  {
    key: "3",
    university: "University of Toronto",
    semester: "Fall 2024",
    fee: "100",
    username: "admin",
    password: "admin",
    status: "Received",
  },
  {
    key: "4",
    university: "University of Toronto",
    semester: "Fall 2024",
    fee: "100",
    username: "admin",
    password: "admin",
    status: "Pending",
  },
  {
    key: "5",
    university: "University of Toronto",
    semester: "Fall 2024",
    fee: "100",
    username: "admin",
    password: "admin",
    status: "Active",
  },
];

const columns = [
  {
    key: "university",
    label: "UNIVERSITY",
  },
  {
    key: "semester",
    label: "SEMESTER",
  },
  {
    key: "fee",
    label: "FEE ($)",
  },
  {
    key: "username",
    label: "USERNAME",
  },
  {
    key: "password",
    label: "PASSWORD",
  },
  {
    key: "status",
    label: "STATUS",
  },
];

export const TableData = () => {
  return (
    <Table removeWrapper>
      <TableHeader columns={columns}>
        {(column) => (
          <TableColumn className="bg-sky-600 text-white" key={column.key}>
            {column.label}
          </TableColumn>
        )}
      </TableHeader>
      <TableBody items={rows}>
        {(item) => (
          <TableRow key={item.key}>
            <TableCell><p>{getKeyValue(item, "university")}</p></TableCell>
            <TableCell><p>{getKeyValue(item, "semester")}</p></TableCell>
            <TableCell><p>${getKeyValue(item, "fee")}</p></TableCell>
            <TableCell><p>{getKeyValue(item, "username")}</p></TableCell>
            <TableCell><p>{getKeyValue(item, "password")}</p></TableCell>
            <TableCell size="auto"><p className="text-white bg-green-600 w-fit px-2 py-1 rounded-lg">{getKeyValue(item, "status")}</p></TableCell>
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
};
