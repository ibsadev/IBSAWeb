import React, {useState} from 'react'
import styled from "styled-components";
import {Formik, Form, Field} from "formik"
import axios from "axios"

function Update() {
    const [pastEventsData, setPastEventsData] = useState([]);
    const [upcomingEventsData, setUpcomingEventsData] = useState([]);

    return (
        <Container>
            <h1 style={{textAlign: "center"}}>Welcome to the update page.</h1>
            <Formik
                initialValues={{
                    passcode: "",
                }}
                validate={values => {
                    const errors = {};
                    if (!values.passcode) { errors.passcode = "Please enter passcode" }
                    return errors;
                }}
                onSubmit={async (data, {setSubmitting}) => {
                    axios.post("http://localhost:8000/api/update/", {passcode: data.passcode})
                        .then((res) => {
                            setPastEventsData(res.data.filter(item => item.type === "Past Events"));
                            setUpcomingEventsData(res.data.filter(item => item.type === "Upcoming Events"))
                        })
                        .catch((err) => alert(err))
                }}
            >
                <Form>
                    <Input type="text" name="passcode" placeholder="Please enter credentials to update events"/>
                    <Button type="submit">submit</Button>
                </Form>
            </Formik>

            {
                pastEventsData.length > 0 && 
                pastEventsData.map((pastEvent, index) => {
                    if (pastEvent.success) {
                        return (
                            <div key={index} class="alert alert-success" role="alert">
                                <b>Successfully {pastEvent.action}</b> event titled "{pastEvent.eventName}"
                            </div>
                        )
                    } else {
                        return (
                            <div key={index} class="alert alert-danger" role="alert">
                                <b>Error to {pastEvent.action}</b> event titled "{pastEvent.eventName}"
                            </div>
                        )
                    }
                })
            }
            {
                upcomingEventsData.length > 0 && 
                upcomingEventsData.map((upcomingEvent, index) => {
                    if (upcomingEvent.success) {
                        return (
                            <div key={index} class="alert alert-success" role="alert">
                                <b>Successfully {upcomingEvent.action}</b> event titled "{upcomingEvent.eventName}"
                            </div>
                        )
                    } else {
                        return (
                            <div key={index} class="alert alert-danger" role="alert">
                                <b>Error to {upcomingEvent.action}</b> event titled "{upcomingEvent.eventName}"
                            </div>
                        )
                    }
                })
            }
        </Container>
    )
}

const Container = styled.div`
    width: 50%;
    margin: auto;
    min-height: calc(100vh - 232px - 144px);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

const Input = styled(Field)`
    width: 500px !important;
    text-align: center;
`

const Button = styled.button`
    display: block;
    margin: 1em auto;
`

export default Update
