import React, { useState } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";


function Home() {
  const [agentView, setAgentView] = useState()
  const [param, setParam] = useState('')
  const [newData, setNewData] = useState('')
  const [keys, setKeys] = useState(null)
  const data = {
    "agents": [
      "agent-5",
      "agent-3",
      "agent-4",
      "agent-1",
      "agent-2"
    ]
  }

  const updateData = (newInfo, field, agentView) => {
    const newAgentView = { ...agentView }
    newAgentView.data[field] = newInfo
    setAgentView(newAgentView)
  }

  const agents = {
    "agents": {
      "agent-1": {
        "status": "success",
        "data": {
          "started": 1607085234314904,
          "load": 0.009999999776482582,
          "pid": 1,
          "mem": 7925760,
          "os": "Linux",
          "version": "5.1.6201",
          "systeminfo": "OS: Linux, Hostname: agent-1, Release: 5.9.11-1-default, Version: #1 SMP Wed Nov 25 05:49:27 UTC 2020 (91426ef), Arch: x86_64, 8 CPU(s), 31.2Gb memory",
          "hostname": "agent-1",
          "servertime": 1607088935658667,
          "modules": {},
          "labels": {
            "dplstate": "new",
            "container_id": "91331611a670fcaad03473bc1f8c546f5ee5c18cbecefed0b2406ee3f3c7eca3",
            "container_ip": "172.21.0.2"
          }
        }
      }
    }
  }

  return (
    <Row style={{ margin: '30px' }}>
      <h1 style={{ textAlign: 'center' }}>Interview Demo</h1>
      <h4>Click on agent to view data. (Data only exists on agent-1)</h4>
      <Col size={12} style={{ margin: '30px' }} >

        {data["agents"].map((agent, i) => <p onClick={(e) => {
          if (agents["agents"][agent]) {
            const keys = Object.keys(agents["agents"][agent].data)
            setAgentView(agents["agents"][agent])
            setKeys(keys)
            setParam(keys[0])
          } else {
            setAgentView('')
            setKeys(null)
          }


        }} key={i}><Button>{agent}</Button></p>)}
        <div ><>{agentView && JSON.stringify(agentView)}</></div>
        {keys ? <div style={{ margin: '30px', width: '20vw' }}>
          <h5 style={{ textAlign: 'center' }}>  Update Data </h5>

          <h5> Select data key</h5>
          <Form.Group
            className="mb-3"
          >
            <Form.Label>Data key</Form.Label>
            <Form.Select
              aria-label="data key"
              onChange={(e) => setParam(e.target.value)}
            >
              {

                keys.map((state, i) => <option key={i} value={state}>{state}</option>)
              }

            </Form.Select>
          </Form.Group>

          <h5>  Enter new value</h5>
          <Form onSubmit={(e) => {
            e.preventDefault()
            setNewData('')
            updateData(newData, param, agentView)
          }}>
            <Form.Control
              type="text"
              value={newData}
              placeholder="Enter New Data"
              onChange={(e) => {
                setNewData(e.target.value)
              }}
              required
            />


            <Button style={{ margin: '10px' }} type="submit" >
              'SUBMIT'
            </Button>
          </Form>

        </div> : 'click on agent-1'}

      </Col>

    </Row>

  )
}

export default Home