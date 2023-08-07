import React from 'react'
import {Tabs, Tab, Card, Modal, Button, CardBody, Table} from "@nextui-org/react";
import { TableData } from '@/components/tableData';
const Home = () => {
  return (
    <Tabs fullWidth color='primary'size='lg' variant='underlined' >
      <Tab key="Tab1" title="University" className=''>
        <Card>
          <CardBody>
            <TableData/>
          </CardBody>
        </Card>
      </Tab>
      <Tab key="Tab2" title="Test">
        <Card shadow>
          <CardBody>
          <TableData/>
          </CardBody>
        </Card>
      </Tab>
    </Tabs>
  )
}

export default Home